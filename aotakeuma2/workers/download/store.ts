import type { DownloadEnv, DownloadKeyRecord, KeyUsageLog } from "./types";

const MAX_USAGE_LOGS = 200;
const DOWNLOAD_KEY_BODY_LENGTH = 8;
const DOWNLOAD_KEY_GROUP_LENGTH = 4;

export const normalizeDownloadKey = (value: string): string => {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, DOWNLOAD_KEY_BODY_LENGTH);
};

const formatNormalizedDownloadKey = (normalized: string): string => {
  if (normalized.length <= DOWNLOAD_KEY_GROUP_LENGTH) {
    return normalized;
  }

  return `${normalized.slice(0, DOWNLOAD_KEY_GROUP_LENGTH)}-${normalized.slice(
    DOWNLOAD_KEY_GROUP_LENGTH
  )}`;
};

const downloadKeyToKvKey = (downloadKey: string): string => {
  return `downloadKey:${downloadKey}`;
};

export const getDownloadKeyRecord = async (
  env: DownloadEnv,
  key: string
): Promise<DownloadKeyRecord | null> => {
  const normalizedKey = normalizeDownloadKey(key);
  const candidates = [
    key,
    key.toUpperCase(),
    normalizedKey,
    formatNormalizedDownloadKey(normalizedKey),
  ].filter((candidate, index, array) => {
    return candidate.length > 0 && array.indexOf(candidate) === index;
  });

  for (const candidate of candidates) {
    const rawRecord = await env.aotakeuma_keys.get(
      downloadKeyToKvKey(candidate)
    );
    if (rawRecord) {
      return JSON.parse(rawRecord) as DownloadKeyRecord;
    }
  }

  return null;
};

export const putDownloadKeyRecord = async (
  env: DownloadEnv,
  key: string,
  value: DownloadKeyRecord
) => {
  const normalizedKey = normalizeDownloadKey(key);
  await env.aotakeuma_keys.put(
    downloadKeyToKvKey(normalizedKey),
    JSON.stringify(value)
  );
};

export const appendUsageLog = async (
  env: DownloadEnv,
  key: string,
  record: DownloadKeyRecord,
  log: KeyUsageLog
) => {
  const usageLogs = [...record.usageLogs, log];
  if (usageLogs.length > MAX_USAGE_LOGS) {
    usageLogs.splice(0, usageLogs.length - MAX_USAGE_LOGS);
  }

  record.usageLogs = usageLogs;
  await putDownloadKeyRecord(env, key, record);
};
