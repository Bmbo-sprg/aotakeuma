/**
 * Generate a random download key in format XXXX-XXXX
 * Excludes ambiguous characters: 0, O, 1, I, L
 */

// Available characters: A-Z (except O, I, L) + 0-9 (except 0, 1)
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ"; // 31 chars (18 letters + 13 digits)

export function generateRandomKey(): string {
  let key = "";
  for (let i = 0; i < 8; i++) {
    key += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return key;
}

export function formatKey(key: string): string {
  const body = key
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .substring(0, 8);
  if (body.length <= 4) {
    return body;
  }
  return `${body.substring(0, 4)}-${body.substring(4)}`;
}
