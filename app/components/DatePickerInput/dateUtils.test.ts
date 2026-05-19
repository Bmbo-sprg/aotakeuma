import { describe, expect, it } from "vitest";
import { applyMask, formatDate, parseDate } from "./dateUtils";

describe("parseDate", () => {
  it("有効な日付文字列をパースする", () => {
    const d = parseDate("2025-03-15");
    expect(d).toBeInstanceOf(Date);
    expect(d?.getFullYear()).toBe(2025);
    expect(d?.getMonth()).toBe(2); // 0-indexed
    expect(d?.getDate()).toBe(15);
  });

  it("形式が不正な文字列は undefined を返す", () => {
    expect(parseDate("2025/03/15")).toBeUndefined();
    expect(parseDate("20250315")).toBeUndefined();
    expect(parseDate("")).toBeUndefined();
    expect(parseDate("abc")).toBeUndefined();
  });

  it("存在しない日付は undefined を返す", () => {
    expect(parseDate("2025-13-01")).toBeUndefined();
    expect(parseDate("2025-00-01")).toBeUndefined();
  });
});

describe("formatDate", () => {
  it("Date を yyyy-mm-dd 形式にフォーマットする", () => {
    expect(formatDate(new Date("2025-03-05"))).toBe("2025-03-05");
    expect(formatDate(new Date("2025-12-31"))).toBe("2025-12-31");
    expect(formatDate(new Date("2025-01-01"))).toBe("2025-01-01");
  });

  it("月・日が1桁のときゼロパディングされる", () => {
    expect(formatDate(new Date("2025-03-05"))).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe("applyMask", () => {
  it("4桁以下はそのまま返す", () => {
    expect(applyMask("2025")).toBe("2025");
    expect(applyMask("202")).toBe("202");
  });

  it("5〜6桁は yyyy-mm 形式にする", () => {
    expect(applyMask("202503")).toBe("2025-03");
    expect(applyMask("20253")).toBe("2025-3");
  });

  it("7〜8桁は yyyy-mm-dd 形式にする", () => {
    expect(applyMask("20250315")).toBe("2025-03-15");
    expect(applyMask("2025031")).toBe("2025-03-1");
  });

  it("数字以外の文字を除去する", () => {
    expect(applyMask("2025/03/15")).toBe("2025-03-15");
    expect(applyMask("2025-03-15")).toBe("2025-03-15");
  });

  it("8桁を超える入力は切り捨てる", () => {
    expect(applyMask("202503150000")).toBe("2025-03-15");
  });
});
