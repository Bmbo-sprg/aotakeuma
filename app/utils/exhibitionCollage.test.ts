import { describe, expect, it } from "vitest";
import type { Album, OtherWork, Work } from "~/types";
import { buildCollageLayout } from "./exhibitionCollage";

const album = (id: string): Album => ({
  type: "album",
  id,
  title: id,
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date("2026-01-01"),
  jacketImageUrl: `/images/jackets/${id}.png`,
  tracks: [],
});

const otherWork = (id: string): OtherWork => ({
  type: "other",
  id,
  title: id,
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date("2026-01-01"),
});

describe("buildCollageLayout", () => {
  it("画像が0件なら空配列を返す", () => {
    expect(buildCollageLayout([otherWork("a")])).toEqual([]);
  });

  it("画像が1件なら full 配置1件を返す", () => {
    expect(buildCollageLayout([album("a")])).toEqual([
      { url: "/images/jackets/a.png", position: "full", fit: "contain" },
    ]);
  });

  it("画像が2件なら top-left と bottom-right を返す", () => {
    expect(
      buildCollageLayout([album("a"), album("b")]).map((i) => i.position)
    ).toEqual(["top-left", "bottom-right"]);
  });

  it("画像が3件なら top-left, top-right, bottom-left を返す", () => {
    expect(
      buildCollageLayout([album("a"), album("b"), album("c")]).map(
        (i) => i.position
      )
    ).toEqual(["top-left", "top-right", "bottom-left"]);
  });

  it("画像が4件なら2x2フルグリッドを返す", () => {
    expect(
      buildCollageLayout([album("a"), album("b"), album("c"), album("d")]).map(
        (i) => i.position
      )
    ).toEqual(["top-left", "top-right", "bottom-left", "bottom-right"]);
  });

  it("画像が5件以上なら先頭4件に絞る", () => {
    const works: Work[] = [
      album("a"),
      album("b"),
      album("c"),
      album("d"),
      album("e"),
    ];
    expect(buildCollageLayout(works)).toHaveLength(4);
  });

  it("ジャケットのない Work は無視する", () => {
    const works: Work[] = [otherWork("a"), album("b")];
    expect(buildCollageLayout(works)).toEqual([
      { url: "/images/jackets/b.png", position: "full", fit: "contain" },
    ]);
  });
});
