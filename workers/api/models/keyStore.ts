import type { DownloadKeyRecord, KeyUsageLog } from "../types";
import { formatDownloadKey, normalizeDownloadKey } from "./downloadKey";

const MAX_USAGE_LOGS = 200;
const KV_KEY_PREFIX = "downloadKey:";

const toKvKey = (downloadKey: string): string =>
  `${KV_KEY_PREFIX}${downloadKey}`;

export const listDownloadKeyNames = async (
  kv: KVNamespace
): Promise<string[]> => {
  const list = await kv.list({ prefix: KV_KEY_PREFIX });
  return list.keys.map(({ name }) => name.replace(KV_KEY_PREFIX, ""));
};

export const getDownloadKeyRecord = async (
  kv: KVNamespace,
  key: string
): Promise<DownloadKeyRecord | null> => {
  const normalized = normalizeDownloadKey(key);
  const candidates = [
    key,
    key.toUpperCase(),
    normalized,
    formatDownloadKey(normalized),
  ].filter((c, i, arr) => c.length > 0 && arr.indexOf(c) === i);

  for (const candidate of candidates) {
    const raw = await kv.get(toKvKey(candidate));
    if (raw) {
      return JSON.parse(raw) as DownloadKeyRecord;
    }
  }
  return null;
};

export const putDownloadKeyRecord = async (
  kv: KVNamespace,
  key: string,
  value: DownloadKeyRecord
): Promise<void> => {
  const normalized = normalizeDownloadKey(key);
  await kv.put(toKvKey(normalized), JSON.stringify(value));
};

export const appendUsageLog = async (
  kv: KVNamespace,
  key: string,
  record: DownloadKeyRecord,
  log: KeyUsageLog
): Promise<void> => {
  const logs = [...record.usageLogs, log];
  if (logs.length > MAX_USAGE_LOGS) {
    logs.splice(0, logs.length - MAX_USAGE_LOGS);
  }
  record.usageLogs = logs;
  await putDownloadKeyRecord(kv, key, record);
};
