import { describe, expect, it } from "vitest";
import { DownloadKey } from "./DownloadKey";

describe("DownloadKey", () => {
  it("normalizes case and strips non-alphanumerics", () => {
    const key = DownloadKey.from("ab-cd 12$34ZZ");
    expect(key.toString()).toBe("ABCD-1234");
  });

  it("formats with hyphen after 4 chars", () => {
    expect(DownloadKey.from("abcd").toString()).toBe("ABCD");
    expect(DownloadKey.from("abcdef").toString()).toBe("ABCD-EF");
  });

  it("trims to max 8 key chars", () => {
    expect(DownloadKey.from("abcd1234zzzz").toString()).toBe("ABCD-1234");
  });

  it("detects complete key only for 8 chars", () => {
    expect(DownloadKey.from("abcd123").isComplete()).toBe(false);
    expect(DownloadKey.from("abcd1234").isComplete()).toBe(true);
  });
});
