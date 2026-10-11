import { describe, expect, it } from "vitest";
import {
  daysUntil,
  hexToRgb,
  toLocaleDateString,
  toLocaleString,
} from "./formats";

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

describe("daysUntil", () => {
  it("JST の日付単位で同じ日なら 0 を返す", () => {
    const date = new Date("2026-04-26T00:00:00+09:00"); // JST 4/26 0:00
    const now = new Date("2026-04-26T23:00:00+09:00"); // JST 4/26 23:00
    expect(daysUntil(date, now)).toBe(0);
  });

  it("date を UTC 時刻なしで作っても JST 扱いで同じ日なら 0 を返す", () => {
    // new Date("2026-04-26") は UTC 0:00 = JST 9:00 扱い
    const date = new Date("2026-04-26");
    const now = new Date("2026-04-26T23:00:00+09:00");
    expect(daysUntil(date, now)).toBe(0);
  });

  it("1 日後なら 1 を返す", () => {
    const date = new Date("2026-04-27T00:00:00+09:00");
    const now = new Date("2026-04-26T23:00:00+09:00");
    expect(daysUntil(date, now)).toBe(1);
  });

  it("1 日前なら -1 を返す", () => {
    const date = new Date("2026-04-25T00:00:00+09:00");
    const now = new Date("2026-04-26T00:00:00+09:00");
    expect(daysUntil(date, now)).toBe(-1);
  });

  it("複数日先でも正しく計算する", () => {
    const date = new Date("2026-05-10T00:00:00+09:00");
    const now = new Date("2026-04-26T00:00:00+09:00");
    expect(daysUntil(date, now)).toBe(14);
  });

  it("年をまたいでも正しく計算する", () => {
    const date = new Date("2027-01-02T00:00:00+09:00");
    const now = new Date("2026-12-31T00:00:00+09:00");
    expect(daysUntil(date, now)).toBe(2);
  });
});
