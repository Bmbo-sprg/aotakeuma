import { describe, expect, it } from "vitest";
import {
  buildSignedDownloadUrl,
  createSignature,
  safeEquals,
  verifySignedDownloadUrl,
} from "./signedUrl";

describe("createSignature", () => {
  it("同じ入力には同じ署名を返す", async () => {
    const one = await createSignature({ secret: "secret", payload: "payload" });
    const two = await createSignature({ secret: "secret", payload: "payload" });
    expect(one).toBe(two);
  });

  it("異なるペイロードには異なる署名を返す", async () => {
    const one = await createSignature({
      secret: "secret",
      payload: "payload-1",
    });
    const two = await createSignature({
      secret: "secret",
      payload: "payload-2",
    });
    expect(one).not.toBe(two);
  });

  it("URL-safe base64 文字列を返す", async () => {
    const sig = await createSignature({ secret: "secret", payload: "payload" });
    expect(sig).toMatch(/^[A-Za-z0-9_-]+$/);
  });
});

describe("safeEquals", () => {
  it("同じ文字列を正しく比較する", () => {
    expect(safeEquals("abc", "abc")).toBe(true);
    expect(safeEquals("abc", "abd")).toBe(false);
    expect(safeEquals("abc", "ab")).toBe(false);
  });
});

describe("buildSignedDownloadUrl", () => {
  it("署名付き URL を生成する", async () => {
    const now = new Date("2026-01-01T00:00:00Z");
    const url = await buildSignedDownloadUrl({
      secret: "secret",
      origin: "https://example.com",
      productId: "yohkoh",
      downloadKey: "ABCD1234",
      now,
    });
    expect(url.pathname).toBe("/api/download");
    expect(url.searchParams.get("productId")).toBe("yohkoh");
    expect(url.searchParams.get("key")).toBe("ABCD1234");
    expect(url.searchParams.get("exp")).toBeDefined();
    expect(url.searchParams.get("sig")).toBeDefined();
  });
});

describe("verifySignedDownloadUrl", () => {
  it("正しい署名を検証できる", async () => {
    const now = new Date("2026-01-01T00:00:00Z");
    const secret = "secret";
    const productId = "yohkoh";
    const key = "ABCD1234";
    const exp = Math.floor(now.getTime() / 1000) + 300;
    const sig = await createSignature({
      secret,
      payload: `${productId}:${key}:${exp}`,
    });

    const result = await verifySignedDownloadUrl({
      secret,
      productId,
      key,
      normalizedKey: key,
      exp,
      sig,
      now,
    });
    expect(result).toBe(true);
  });

  it("期限切れは false を返す", async () => {
    const now = new Date("2026-01-01T00:05:01Z");
    const exp =
      Math.floor(new Date("2026-01-01T00:00:00Z").getTime() / 1000) + 300;
    const result = await verifySignedDownloadUrl({
      secret: "secret",
      productId: "yohkoh",
      key: "ABCD1234",
      normalizedKey: "ABCD1234",
      exp,
      sig: "dummy",
      now,
    });
    expect(result).toBe(false);
  });

  it("不正な署名は false を返す", async () => {
    const now = new Date("2026-01-01T00:00:00Z");
    const exp = Math.floor(now.getTime() / 1000) + 300;
    const result = await verifySignedDownloadUrl({
      secret: "secret",
      productId: "yohkoh",
      key: "ABCD1234",
      normalizedKey: "ABCD1234",
      exp,
      sig: "invalidsig",
      now,
    });
    expect(result).toBe(false);
  });
});
