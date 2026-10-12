import { describe, expect, it } from "vitest";
import type { Album, Music, Performance, Work } from "~/types";
import {
  buildEventDiscoveryShareText,
  buildEventShareText,
  buildScheduleShareText,
  buildWorkDiscoveryShareText,
  buildWorkShareText,
} from "./shareText";
import type { ScheduleItem } from "./schedule";

const baseWork: Work = {
  type: "music",
  id: "kaika",
  title: "開花、ただ祈ること",
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date("2026-03-29"),
};

describe("buildWorkShareText", () => {
  it("タイトルと動画リンク、サイトURLを含む", () => {
    const music: Music = {
      ...baseWork,
      video: {
        credits: [],
        niconicoUrl: "https://www.nicovideo.jp/watch/sm46293807",
        youtubeUrl: "https://www.youtube.com/watch?v=kMFaR2EBA3U",
      },
    };
    const text = buildWorkShareText(music);
    expect(text).toContain("🎶 開花、ただ祈ること");
    expect(text).toContain(
      "ニコニコ: https://www.nicovideo.jp/watch/sm46293807"
    );
    expect(text).toContain(
      "YouTube: https://www.youtube.com/watch?v=kMFaR2EBA3U"
    );
    expect(text).toContain("Website: https://aotakeuma.com/works/musics/kaika");
  });

  it("「発見した」の案内文は含まない（UI側で付与するため）", () => {
    const music: Music = { ...baseWork };
    expect(buildWorkShareText(music)).not.toContain("発見した");
  });

  it("動画がなければ Website のみになる", () => {
    const music: Music = { ...baseWork };
    const text = buildWorkShareText(music);
    expect(text).not.toContain("ニコニコ");
    expect(text).not.toContain("YouTube");
    expect(text).toContain("Website:");
  });

  it("album の video も反映する", () => {
    const album: Album = {
      ...baseWork,
      type: "album",
      id: "test_album",
      jacketImageUrl: "/images/jackets/test_album.png",
      tracks: [],
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=abc",
      },
    };
    expect(buildWorkShareText(album)).toContain(
      "YouTube: https://www.youtube.com/watch?v=abc"
    );
  });
});

describe("buildWorkDiscoveryShareText", () => {
  it("「発見した」の案内文を先頭に付け、本文も含む", () => {
    const music: Music = { ...baseWork };
    const text = buildWorkDiscoveryShareText(music);
    expect(text).toContain("🎈 竹馬あお Website で音楽を発見した！");
    expect(text).toContain("🎶 開花、ただ祈ること");
  });
});

describe("buildEventShareText", () => {
  it("タイトルと Mixcloud リンク、サイトURLを含む", () => {
    const performance: Performance = {
      type: "performance",
      id: "dddd_2",
      title: "秘密結社D.D.D.D. 20260702",
      description: "",
      tags: [],
      date: new Date("2026-07-02"),
      location: "秋葉原 雷神 3F",
      mixcloudLink: {
        platform: "mixcloud",
        url: "https://www.mixcloud.com/aotakeuma/dddd2/",
      },
    };
    const text = buildEventShareText(performance);
    expect(text).toContain("🎶 秘密結社D.D.D.D. 20260702");
    expect(text).toContain(
      "Mixcloud: https://www.mixcloud.com/aotakeuma/dddd2/"
    );
    expect(text).toContain(
      "Website: https://aotakeuma.com/events/performances/dddd_2"
    );
  });
});

describe("buildEventDiscoveryShareText", () => {
  it("「発見した」の案内文を先頭に付ける", () => {
    const performance: Performance = {
      type: "performance",
      id: "dddd_2",
      title: "秘密結社D.D.D.D. 20260702",
      description: "",
      tags: [],
      date: new Date("2026-07-02"),
      location: "秋葉原 雷神 3F",
    };
    expect(buildEventDiscoveryShareText(performance)).toContain(
      "🎈 竹馬あお Website でイベントを発見した！"
    );
  });
});

describe("buildScheduleShareText", () => {
  it("ヘッダーと各予定の日付・場所を含む", () => {
    const schedule: ScheduleItem[] = [
      {
        kind: "event",
        date: new Date("2026-10-25"),
        item: {
          type: "exhibition",
          id: "m3",
          title: "M3-2026秋",
          description: "",
          tags: [],
          date: new Date("2026-10-25"),
          location: "東京流通センター",
          catalog: [],
        },
      },
    ];
    const text = buildScheduleShareText(schedule);
    expect(text).toContain("🎈 竹馬あお 今後の予定一覧");
    expect(text).toContain("M3-2026秋");
    expect(text).toContain("📍 東京流通センター");
  });

  it("work（releaseDate のみ）には 📍 を付けない", () => {
    const schedule: ScheduleItem[] = [
      { kind: "work", date: new Date("2026-10-25"), item: baseWork },
    ];
    expect(buildScheduleShareText(schedule)).not.toContain("📍");
  });
});
