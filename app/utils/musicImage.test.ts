import { describe, expect, it } from "vitest";
import type { Album, Music } from "~/types";
import { resolveMusicImage } from "./musicImage";

const baseMusic: Music = {
  type: "music",
  id: "test_music",
  title: "テスト楽曲",
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date("2026-01-01"),
};

const albumWithTrack = (track: Music): Album => ({
  type: "album",
  id: "test_album",
  title: "テストアルバム",
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date("2026-01-01"),
  jacketImageUrl: "/images/jackets/test_album.png",
  tracks: [track],
});

describe("resolveMusicImage", () => {
  it("自前のジャケットがあればそれを使う", () => {
    const music: Music = {
      ...baseMusic,
      jacketImageUrl: "/images/jackets/test_music.png",
    };
    expect(resolveMusicImage(music, [albumWithTrack(music)])).toEqual({
      url: "/images/jackets/test_music.png",
      source: "own",
    });
  });

  it("自前のジャケットがなければ収録アルバムのジャケットを使う", () => {
    const music = { ...baseMusic };
    expect(resolveMusicImage(music, [albumWithTrack(music)])).toEqual({
      url: "/images/jackets/test_album.png",
      source: "album",
    });
  });

  it("収録アルバムもなければ YouTube のサムネイルを使う", () => {
    const music: Music = {
      ...baseMusic,
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=abc123XYZ_-",
      },
    };
    expect(resolveMusicImage(music, [])).toEqual({
      url: "https://img.youtube.com/vi/abc123XYZ_-/hqdefault.jpg",
      source: "youtube",
    });
  });

  it("youtu.be 形式の短縮URLにも対応する", () => {
    const music: Music = {
      ...baseMusic,
      video: {
        credits: [],
        youtubeUrl: "https://youtu.be/abc123XYZ_-",
      },
    };
    expect(resolveMusicImage(music, [])?.url).toBe(
      "https://img.youtube.com/vi/abc123XYZ_-/hqdefault.jpg"
    );
  });

  it("どれもなければ null を返す", () => {
    expect(resolveMusicImage(baseMusic, [])).toBeNull();
  });
});
