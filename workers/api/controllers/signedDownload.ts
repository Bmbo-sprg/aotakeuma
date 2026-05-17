import type { Context } from "hono";
import type { ErrorResponse, SignedDownloadFailureReason } from "../types";
import { normalizeDownloadKey } from "../models/downloadKey";
import { getDownloadKeyRecord, appendUsageLog } from "../models/keyStore";
import { getContent } from "../models/contentStore";
import { verifySignedDownloadUrl } from "../models/signedUrl";

const error = (
  c: Context<{ Bindings: Env }>,
  reason: SignedDownloadFailureReason,
  message: string,
  status: 400 | 403 | 404
) => c.json<ErrorResponse>({ ok: false, reason, message }, status);

export const signedDownload = async (c: Context<{ Bindings: Env }>) => {
  const now = new Date();
  const { productId, key, exp, sig } = c.req.query();

  if (!productId || !key || !exp || !sig) {
    return error(
      c,
      "BAD_REQUEST",
      "署名付きURLのパラメータが不足しています。",
      400
    );
  }

  const normalizedKey = normalizeDownloadKey(key);
  if (normalizedKey.length !== 8) {
    return error(c, "BAD_REQUEST", "キーの形式が不正です。", 400);
  }

  const verified = await verifySignedDownloadUrl({
    secret: c.env.SIGNED_URL_SECRET,
    productId,
    key,
    normalizedKey,
    exp: Number(exp),
    sig,
    now,
  });

  if (!verified) {
    return error(c, "INVALID_SIGNATURE", "署名が無効または期限切れです。", 403);
  }

  const record = await getDownloadKeyRecord(
    c.env.aotakeuma_keys,
    normalizedKey
  );
  if (!record) {
    return error(c, "KEY_NOT_FOUND", "ダウンロードキーが見つかりません。", 404);
  }

  const object = await getContent(c.env.aotakeuma_contents, productId);
  if (!object) {
    return error(c, "FILE_NOT_FOUND", "ファイルが見つかりません。", 404);
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("content-type", headers.get("content-type") ?? "application/zip");
  headers.set("content-disposition", `attachment; filename="${productId}.zip"`);

  record.useCount += 1;
  await appendUsageLog(c.env.aotakeuma_keys, normalizedKey, record, {
    timestamp: now.toISOString(),
    ipAddress: c.req.header("CF-Connecting-IP") ?? null,
    userAgent: c.req.header("User-Agent") ?? null,
    success: true,
  });

  return new Response(object.body, { status: 200, headers });
};
