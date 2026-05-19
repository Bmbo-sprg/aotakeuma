import { describe, expect, it } from "vitest";
import { toLocaleDateString, toLocaleString } from "./formats";

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
