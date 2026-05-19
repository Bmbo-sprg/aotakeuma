import { describe, expect, it } from "vitest";
import { Random } from "./random";

describe("Random", () => {
  it("同じシードは同じ乱数列を生成する", () => {
    const r1 = new Random(42);
    const r2 = new Random(42);
    expect(r1.next()).toBe(r2.next());
    expect(r1.next()).toBe(r2.next());
    expect(r1.next()).toBe(r2.next());
  });

  it("異なるシードは異なる乱数列を生成する", () => {
    const r1 = new Random(1);
    const r2 = new Random(2);
    expect(r1.next()).not.toBe(r2.next());
  });

  it("nextInt は min 以上 max 以下の整数を返す", () => {
    const r = new Random(123);
    for (let i = 0; i < 100; i++) {
      const val = r.nextInt(0, 9);
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThanOrEqual(9);
    }
  });

  it("nextInt(n, n) は常に n を返す", () => {
    const r = new Random(999);
    for (let i = 0; i < 10; i++) {
      expect(r.nextInt(5, 5)).toBe(5);
    }
  });
});
