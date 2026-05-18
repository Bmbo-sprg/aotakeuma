// 視認性のために紛らわしい文字（0, O, 1, I, L）を除外した31文字
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
const KEY_BODY_LENGTH = 8;
const KEY_GROUP_LENGTH = 4;

export const generateDownloadKey = (): string => {
  let key = "";
  for (let i = 0; i < KEY_BODY_LENGTH; i++) {
    key += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return key;
};

export const normalizeDownloadKey = (value: string): string => {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, KEY_BODY_LENGTH);
};

export const formatDownloadKey = (normalized: string): string => {
  if (normalized.length <= KEY_GROUP_LENGTH) {
    return normalized;
  }
  return `${normalized.slice(0, KEY_GROUP_LENGTH)}-${normalized.slice(KEY_GROUP_LENGTH)}`;
};
