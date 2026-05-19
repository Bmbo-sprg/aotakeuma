import { describe, expect, it } from "vitest";
import { normalizeText } from "./searches";

describe("normalizeText", () => {
  it("小文字に変換する", () => {
    expect(normalizeText("Hello")).toBe("hello");
  });

  it("前後の空白を除去する", () => {
    expect(normalizeText("  hello  ")).toBe("hello");
  });

  it("空文字列はそのまま返す", () => {
    expect(normalizeText("")).toBe("");
  });
});
