import { describe, expect, it } from "vitest";
import { countWeightedLength } from "./tweetLength";

describe("countWeightedLength", () => {
  it("半角英数字は1文字1として数える", () => {
    expect(countWeightedLength("hello")).toBe(5);
  });

  it("日本語は1文字2として数える", () => {
    expect(countWeightedLength("あいう")).toBe(6);
  });

  it("URL は長さに関わらず23として数える", () => {
    expect(countWeightedLength("https://aotakeuma.com/kaika")).toBe(23);
  });

  it("URL と日本語が混在していても正しく数える", () => {
    // "見て: " (3文字 x2 = 6) + URL (23)
    expect(countWeightedLength("見て: https://aotakeuma.com/kaika")).toBe(
      6 + 23
    );
  });

  it("複数の URL をそれぞれ23として数える", () => {
    expect(
      countWeightedLength("https://a.example.com https://b.example.com")
    ).toBe(23 + 1 + 23);
  });
});
