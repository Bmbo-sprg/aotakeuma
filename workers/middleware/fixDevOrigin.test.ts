import { describe, expect, it } from "vitest";
import { fixDevOrigin } from "./fixDevOrigin";

const post = (url: string, origin?: string) =>
  new Request(url, {
    method: "POST",
    headers: origin ? { origin } : {},
  });

describe("fixDevOrigin", () => {
  it("host もプロトコルも異なる Origin を request.url の origin に揃える", () => {
    const req = fixDevOrigin(
      post("https://aotakeuma.com/admin/keys/new.data", "http://localhost:5173")
    );
    expect(req.headers.get("origin")).toBe("https://aotakeuma.com");
  });

  it("host が同じでプロトコルだけ異なる場合も揃える", () => {
    const req = fixDevOrigin(
      post("https://localhost:8787/x.data", "http://localhost:8787")
    );
    expect(req.headers.get("origin")).toBe("https://localhost:8787");
  });

  it("一致している Origin や Origin なしはそのまま返す", () => {
    const same = post("http://localhost:8787/x", "http://localhost:8787");
    expect(fixDevOrigin(same)).toBe(same);
    const none = post("http://localhost:8787/x");
    expect(fixDevOrigin(none)).toBe(none);
  });
});
