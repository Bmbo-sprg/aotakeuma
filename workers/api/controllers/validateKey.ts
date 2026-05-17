import type { Context } from "hono";
import type { ValidateKeyFailureReason, ValidateKeyResponse } from "../types";
import { normalizeDownloadKey } from "../models/downloadKey";
import { getDownloadKeyRecord, appendUsageLog } from "../models/keyStore";
import { buildSignedDownloadUrl } from "../models/signedUrl";

const error = (
  c: Context<{ Bindings: Env }>,
  reason: ValidateKeyFailureReason,
  message: string,
  status: 400 | 403 | 404
) => c.json<ValidateKeyResponse>({ ok: false, reason, message }, status);

export const validateKey = async (c: Context<{ Bindings: Env }>) => {
  const now = new Date();

  let body: { downloadKey?: unknown; productId?: unknown };
  try {
    body = await c.req.json();
  } catch {
    return error(c, "BAD_REQUEST", "リクエスト形式が不正です。", 400);
  }

  const rawKey = typeof body.downloadKey === "string" ? body.downloadKey : "";
  const downloadKey = normalizeDownloadKey(rawKey);
  const productId = typeof body.productId === "string" ? body.productId : "";
  if (downloadKey.length !== 8 || !productId) {
    return error(c, "BAD_REQUEST", "リクエスト形式が不正です。", 400);
  }

  const record = await getDownloadKeyRecord(c.env.aotakeuma_keys, downloadKey);
  if (!record) {
    return error(c, "KEY_NOT_FOUND", "ダウンロードキーが見つかりません。", 404);
  }

  if (
    record.productId !== productId ||
    !record.isActive ||
    now.getTime() > Date.parse(record.expiresAt) ||
    record.useCount >= record.maxUseCount
  ) {
    return error(
      c,
      "KEY_NOT_AVAILABLE",
      "このダウンロードキーは失効しているようです。",
      403
    );
  }

  const downloadUrl = await buildSignedDownloadUrl({
    secret: c.env.SIGNED_URL_SECRET,
    origin: new URL(c.req.url).origin,
    productId,
    downloadKey,
    now,
  });

  await appendUsageLog(c.env.aotakeuma_keys, downloadKey, record, {
    timestamp: now.toISOString(),
    ipAddress: c.req.header("CF-Connecting-IP") ?? null,
    userAgent: c.req.header("User-Agent") ?? null,
    success: true,
  });

  return c.json<ValidateKeyResponse>({
    ok: true,
    key: downloadKey,
    productId,
    downloadUrl: downloadUrl.toString(),
  });
};
