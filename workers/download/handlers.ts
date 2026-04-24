import { createSignature, safeEquals } from "./signature";
import {
  appendUsageLog,
  getDownloadKeyRecord,
  normalizeDownloadKey,
} from "./store";
import type {
  DownloadEnv,
  ValidateResponse,
  ValidationFailureReason,
} from "./types";

const jsonResponse = (body: ValidateResponse, status = 200) => {
  return Response.json(body, { status });
};

const errorResponse = (
  reason: ValidationFailureReason,
  message: string,
  status: number
) => {
  return jsonResponse({ ok: false, reason, message }, status);
};

export const handleValidateKey = async (request: Request, env: Env) => {
  // phase 1: 共通の前処理
  const downloadEnv = env as DownloadEnv;
  const now = new Date();

  // phase 2: リクエストのバリデーション
  let json: { downloadKey?: unknown; productId?: unknown };
  try {
    json = (await request.json()) as {
      downloadKey?: unknown;
      productId?: unknown;
    };
  } catch {
    return errorResponse("BAD_REQUEST", "リクエスト形式が不正です。", 400);
  }
  const rawDownloadKey =
    typeof json.downloadKey === "string" ? json.downloadKey : "";
  const downloadKey = normalizeDownloadKey(rawDownloadKey);
  const productId = typeof json.productId === "string" ? json.productId : "";
  if (downloadKey.length !== 8 || !productId) {
    return errorResponse("BAD_REQUEST", "リクエスト形式が不正です。", 400);
  }
  // TODO: zod とかでバリデーションできる？

  // phase 3: ダウンロードキーのバリデーション
  const record = await getDownloadKeyRecord(downloadEnv, downloadKey);
  if (!record) {
    return errorResponse(
      "KEY_NOT_FOUND",
      "ダウンロードキーが見つかりません。",
      404
    );
  }

  if (
    record.productId !== productId ||
    !record.isActive ||
    now.getTime() > Date.parse(record.expiresAt) ||
    record.useCount >= record.maxUseCount
  ) {
    return errorResponse(
      "KEY_NOT_AVAILABLE",
      "このダウンロードキーは失効しているようです。",
      403
    );
  }

  // phase 4: ダウンロードURLの発行
  const expiresAtUnix = Math.floor(now.getTime() / 1000) + 300; // TTL: 300s
  const signature = await createSignature({
    secret: downloadEnv.SIGNED_URL_SECRET,
    payload: `${productId}:${downloadKey}:${expiresAtUnix}`,
  });

  const requestUrl = new URL(request.url);
  const downloadUrl = new URL("/api/download", requestUrl.origin);
  downloadUrl.searchParams.set("productId", productId);
  downloadUrl.searchParams.set("key", downloadKey);
  downloadUrl.searchParams.set("exp", String(expiresAtUnix));
  downloadUrl.searchParams.set("sig", signature);

  // phase 5: レスポンスを返す
  return jsonResponse({
    ok: true,
    key: downloadKey,
    productId: productId,
    downloadUrl: downloadUrl.toString(),
  });
};

export const handleSignedDownload = async (request: Request, env: Env) => {
  // phase 1: 共通の前処理
  const downloadEnv = env as DownloadEnv;
  const now = new Date();

  // phase 2: ダウンロードURLを分解して検証
  const url = new URL(request.url);
  const productId = url.searchParams.get("productId");
  const key = url.searchParams.get("key");
  const exp = url.searchParams.get("exp");
  const sig = url.searchParams.get("sig");

  if (!productId || !key || !exp || !sig) {
    return new Response("Missing signed URL parameters", { status: 400 });
  }

  const normalizedKey = normalizeDownloadKey(key);
  if (normalizedKey.length !== 8) {
    return new Response("Invalid key format", { status: 400 });
  }

  const expUnix = Number(exp);
  if (Math.floor(now.getTime() / 1000) > expUnix) {
    return new Response("Signed URL expired", { status: 403 });
  }

  const payloadCandidates = [`${productId}:${key}:${expUnix}`];
  if (normalizedKey !== key) {
    payloadCandidates.push(`${productId}:${normalizedKey}:${expUnix}`);
  }

  let hasValidSignature = false;
  for (const payload of payloadCandidates) {
    const expectedSig = await createSignature({
      secret: downloadEnv.SIGNED_URL_SECRET,
      payload,
    });
    if (safeEquals(expectedSig, sig)) {
      hasValidSignature = true;
      break;
    }
  }

  if (!hasValidSignature) {
    return new Response("Invalid signature", { status: 403 });
  }

  // phase 3: ダウンロードの試行
  const record = await getDownloadKeyRecord(downloadEnv, normalizedKey);
  if (!record) {
    return new Response("Key not found", { status: 404 });
  }

  const filename = `${productId}.zip`;
  const object = await downloadEnv.aotakeuma_contents.get(filename);
  if (!object?.body) {
    return new Response("File not found", { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("content-type", headers.get("content-type") || "application/zip");
  headers.set("content-disposition", `attachment; filename="${filename}"`);

  // phase 4: ダウンロード成功の記録とレスポンスの返却
  record.useCount += 1;
  await appendUsageLog(downloadEnv, normalizedKey, record, {
    timestamp: now.toISOString(),
    ipAddress: request.headers.get("CF-Connecting-IP"),
    userAgent: request.headers.get("User-Agent"),
    success: true,
  });

  return new Response(object.body, {
    status: 200,
    headers,
  });
};
