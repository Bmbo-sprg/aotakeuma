import { describe, expect, it } from "vitest";
import { hexToRgb, toLocaleDateString, toLocaleString } from "./formats";

describe("hexToRgb", () => {
  it("# 付きの hex を rgb に変換する", () => {
    expect(hexToRgb("#ffeb3b")).toEqual({ r: 255, g: 235, b: 59 });
  });

  it("# なしの hex にも対応する", () => {
    expect(hexToRgb("0a1128")).toEqual({ r: 10, g: 17, b: 40 });
  });

  it("不正な文字列は白 (255,255,255) を返す", () => {
    expect(hexToRgb("not-a-color")).toEqual({ r: 255, g: 255, b: 255 });
  });
});

describe("toLocaleDateString", () => {
  it("年・月・日を含む文字列を返す", () => {
    const result = toLocaleDateString(new Date("2025-03-15T00:00:00+09:00"));
    expect(result).toMatch(/2025/);
    expect(result).toMatch(/3/);
    expect(result).toMatch(/15/);
  });
});

describe("toLocaleString", () => {
  it("年・月・日・時・分を含む文字列を返す", () => {
    const result = toLocaleString(new Date("2025-03-15T12:30:00+09:00"));
    expect(result).toMatch(/2025/);
    expect(result).toMatch(/3/);
    expect(result).toMatch(/15/);
    expect(result).toMatch(/12/);
    expect(result).toMatch(/30/);
  });
});
