const createSignature = async ({
  secret,
  payload,
}: {
  secret: string;
  payload: string;
}): Promise<string> => {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const digest = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const bytes = new Uint8Array(digest);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
};

const safeEquals = (left: string, right: string): boolean => {
  if (left.length !== right.length) return false;
  let result = 0;
  for (let i = 0; i < left.length; i += 1) {
    result |= left.charCodeAt(i) ^ right.charCodeAt(i);
  }
  return result === 0;
};

export const buildSignedDownloadUrl = async ({
  secret,
  origin,
  productId,
  downloadKey,
  now,
}: {
  secret: string;
  origin: string;
  productId: string;
  downloadKey: string;
  now: Date;
}): Promise<URL> => {
  const expiresAtUnix = Math.floor(now.getTime() / 1000) + 300; // TTL: 300s
  const signature = await createSignature({
    secret,
    payload: `${productId}:${downloadKey}:${expiresAtUnix}`,
  });

  const url = new URL("/api/download", origin);
  url.searchParams.set("productId", productId);
  url.searchParams.set("key", downloadKey);
  url.searchParams.set("exp", String(expiresAtUnix));
  url.searchParams.set("sig", signature);
  return url;
};

export const verifySignedDownloadUrl = async ({
  secret,
  productId,
  key,
  normalizedKey,
  exp,
  sig,
  now,
}: {
  secret: string;
  productId: string;
  key: string;
  normalizedKey: string;
  exp: number;
  sig: string;
  now: Date;
}): Promise<boolean> => {
  if (Math.floor(now.getTime() / 1000) > exp) return false;

  const payloadCandidates = [`${productId}:${key}:${exp}`];
  if (normalizedKey !== key) {
    payloadCandidates.push(`${productId}:${normalizedKey}:${exp}`);
  }

  for (const payload of payloadCandidates) {
    const expected = await createSignature({ secret, payload });
    if (safeEquals(expected, sig)) return true;
  }
  return false;
};

export { createSignature, safeEquals };
