import type { Context } from "hono";

export const uploadContent = async (c: Context<{ Bindings: Env }>) => {
  const body = await c.req.parseBody();
  const file = body["file"];

  if (!file || typeof file === "string") {
    return c.json({ error: "ファイルが見つかりません" }, 400);
  }

  const key =
    typeof body["key"] === "string" && body["key"] ? body["key"] : file.name;

  await c.env.aotakeuma_contents.put(key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type || "application/octet-stream" },
  });

  return c.json({ key, size: file.size });
};
