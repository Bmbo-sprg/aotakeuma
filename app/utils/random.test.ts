import { describe, expect, it } from "vitest";
import { Random, randomNormal } from "./random";

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

describe("randomNormal", () => {
  it("十分な標本数では平均・標準偏差が指定値に近づく", () => {
    const mean = 100;
    const stdDev = 15;
    const samples = Array.from({ length: 20000 }, () =>
      randomNormal(mean, stdDev)
    );
    const sampleMean = samples.reduce((a, b) => a + b, 0) / samples.length;
    const sampleVariance =
      samples.reduce((a, b) => a + (b - sampleMean) ** 2, 0) / samples.length;
    const sampleStdDev = Math.sqrt(sampleVariance);

    expect(sampleMean).toBeGreaterThan(mean - 1);
    expect(sampleMean).toBeLessThan(mean + 1);
    expect(sampleStdDev).toBeGreaterThan(stdDev - 1);
    expect(sampleStdDev).toBeLessThan(stdDev + 1);
  });

  it("stdDev が 0 なら常に mean を返す", () => {
    expect(randomNormal(42, 0)).toBe(42);
  });
});
