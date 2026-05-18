import type { Context } from "hono";
import {
  generateDownloadKey,
  normalizeDownloadKey,
} from "../../models/downloadKey";
import {
  getDownloadKeyRecord,
  putDownloadKeyRecord,
  listDownloadKeyNames,
} from "../../models/keyStore";
import type { DownloadKeyRecord } from "../../types";

export const listKeys = async (c: Context<{ Bindings: Env }>) => {
  const names = await listDownloadKeyNames(c.env.aotakeuma_keys);
  const entries = await Promise.all(
    names.map(async (key) => {
      const record = await getDownloadKeyRecord(c.env.aotakeuma_keys, key);
      return record ? { key, record } : null;
    })
  );
  return c.json(entries.filter(Boolean));
};

export const getKey = async (c: Context<{ Bindings: Env }>) => {
  const key = normalizeDownloadKey(c.req.param("key"));
  const record = await getDownloadKeyRecord(c.env.aotakeuma_keys, key);
  if (!record) return c.json({ error: "Not Found" }, 404);
  return c.json({ key, record });
};

export const createKeys = async (c: Context<{ Bindings: Env }>) => {
  const { count, productId, expiresAt, maxUseCount } = await c.req.json<{
    count: number;
    productId: string;
    expiresAt: string;
    maxUseCount: number;
  }>();

  const created: string[] = [];
  for (let i = 0; i < count; i++) {
    const key = generateDownloadKey();
    const record: DownloadKeyRecord = {
      productId,
      isActive: true,
      expiresAt,
      maxUseCount,
      useCount: 0,
      usageLogs: [],
    };
    await putDownloadKeyRecord(c.env.aotakeuma_keys, key, record);
    created.push(key);
  }
  return c.json({ created });
};

export const updateKey = async (c: Context<{ Bindings: Env }>) => {
  const key = normalizeDownloadKey(c.req.param("key"));
  const record = await getDownloadKeyRecord(c.env.aotakeuma_keys, key);
  if (!record) return c.json({ error: "Not Found" }, 404);

  const patch =
    await c.req.json<
      Partial<Pick<DownloadKeyRecord, "isActive" | "maxUseCount" | "expiresAt">>
    >();
  const updated = { ...record, ...patch };
  await putDownloadKeyRecord(c.env.aotakeuma_keys, key, updated);
  return c.json({ key, record: updated });
};
