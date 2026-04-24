import { describe, expect, it } from "vitest";
import { createSignature, safeEquals } from "./signature";

describe("signature", () => {
  it("creates deterministic signature for same input", async () => {
    const one = await createSignature({ secret: "secret", payload: "payload" });
    const two = await createSignature({ secret: "secret", payload: "payload" });

    expect(one).toBe(two);
  });

  it("creates different signatures for different payloads", async () => {
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

  it("returns URL-safe base64 string", async () => {
    const sig = await createSignature({ secret: "secret", payload: "payload" });
    expect(sig).toMatch(/^[A-Za-z0-9_-]+$/);
  });

  it("safeEquals compares correctly", () => {
    expect(safeEquals("abc", "abc")).toBe(true);
    expect(safeEquals("abc", "abd")).toBe(false);
    expect(safeEquals("abc", "ab")).toBe(false);
  });
});
