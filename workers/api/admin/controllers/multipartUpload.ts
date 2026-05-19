import type { Context } from "hono";

export const initiateUpload = async (c: Context<{ Bindings: Env }>) => {
  const { key } = await c.req.json<{ key: string }>();
  const upload = await c.env.aotakeuma_contents.createMultipartUpload(key);
  return c.json({ uploadId: upload.uploadId, key: upload.key });
};

export const uploadPart = async (c: Context<{ Bindings: Env }>) => {
  const key = c.req.query("key") ?? "";
  const uploadId = c.req.query("uploadId") ?? "";
  const partNumber = Number(c.req.query("partNumber"));
  const upload = c.env.aotakeuma_contents.resumeMultipartUpload(key, uploadId);
  const body = await c.req.arrayBuffer();
  const part = await upload.uploadPart(partNumber, body);
  return c.json({ partNumber: part.partNumber, etag: part.etag });
};

export const completeUpload = async (c: Context<{ Bindings: Env }>) => {
  const { key, uploadId, parts } = await c.req.json<{
    key: string;
    uploadId: string;
    parts: { partNumber: number; etag: string }[];
  }>();
  const upload = c.env.aotakeuma_contents.resumeMultipartUpload(key, uploadId);
  const object = await upload.complete(parts);
  return c.json({ key: object.key, size: object.size });
};

export const abortUpload = async (c: Context<{ Bindings: Env }>) => {
  const { key, uploadId } = await c.req.json<{
    key: string;
    uploadId: string;
  }>();
  const upload = c.env.aotakeuma_contents.resumeMultipartUpload(key, uploadId);
  await upload.abort();
  return c.json({ ok: true });
};
