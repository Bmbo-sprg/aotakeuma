import { describe, expect, it } from "vitest";
import {
  buildOGMeta,
  getEventPath,
  getWorkPath,
  normalizeLegacyId,
  SITE_URL,
} from "./paths";
import type { Event, Work } from "~/types";

const albumWork: Work = {
  type: "album",
  id: "test_album",
  title: "テストアルバム",
  titlePrefix: "",
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date("2025-01-01"),
  links: [],
  jacketImageUrl: "",
  tracks: [],
};

const performanceEvent: Event = {
  type: "performance",
  id: "test_perf",
  title: "テストイベント",
  tags: [],
  date: new Date("2025-01-01"),
  links: [],
};

describe("normalizeLegacyId", () => {
  it("ハイフンをアンダースコアに変換する", () => {
    expect(normalizeLegacyId("foo-bar-baz")).toBe("foo_bar_baz");
  });

  it("ハイフンがない場合はそのまま返す", () => {
    expect(normalizeLegacyId("foobar")).toBe("foobar");
  });
});

describe("getWorkPath", () => {
  it("album の正しいパスを返す", () => {
    expect(getWorkPath(albumWork)).toBe("/works/albums/test_album");
  });

  it("music の正しいパスを返す", () => {
    const work: Work = { ...albumWork, type: "music", id: "test_music" };
    expect(getWorkPath(work)).toBe("/works/musics/test_music");
  });

  it("game の正しいパスを返す", () => {
    const work: Work = {
      ...albumWork,
      type: "game",
      id: "test_game",
      tracks: undefined,
    };
    expect(getWorkPath(work)).toBe("/works/games/test_game");
  });

  it("other の正しいパスを返す", () => {
    const work: Work = {
      ...albumWork,
      type: "other",
      id: "test_other",
      tracks: undefined,
    };
    expect(getWorkPath(work)).toBe("/works/others/test_other");
  });
});

describe("getEventPath", () => {
  it("performance の正しいパスを返す", () => {
    expect(getEventPath(performanceEvent)).toBe(
      "/events/performances/test_perf"
    );
  });

  it("exhibition の正しいパスを返す", () => {
    const event: Event = {
      ...performanceEvent,
      type: "exhibition",
      id: "test_exh",
    };
    expect(getEventPath(event)).toBe("/events/exhibitions/test_exh");
  });
});

describe("buildOGMeta", () => {
  it("title なしの場合は「竹馬あお」のみになる", () => {
    const meta = buildOGMeta({ path: "/" });
    const titleEntry = meta.find((m) => "title" in m);
    expect(titleEntry).toEqual({ title: "竹馬あお" });
  });

  it("title を指定すると「タイトル - 竹馬あお」になる", () => {
    const meta = buildOGMeta({ path: "/works", title: ["作品"] });
    const titleEntry = meta.find((m) => "title" in m);
    expect(titleEntry).toEqual({ title: "作品 - 竹馬あお" });
  });

  it("og:url が SITE_URL + path になる", () => {
    const meta = buildOGMeta({ path: "/works" });
    const ogUrl = meta.find((m) => "property" in m && m.property === "og:url");
    expect(ogUrl).toMatchObject({ content: `${SITE_URL}/works` });
  });
});
