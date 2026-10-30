import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { sukuenakatta } from "../musics/sukuenakatta";
import { kokonisaku } from "../musics/kokonisaku";
import { soji } from "../musics/soji";
import { akari2 } from "../musics/akari2";

export const graduation: Album = {
  type: "album",
  id: "graduation",
  titlePrefix: "竹馬あお EP",
  title: "卒業証書",
  description: `
ご卒業おめでとうございます
小樽組の〈卒業〉をテーマとした4曲を収録した二つ折りのカード。
`,
  tags: ["バンドサウンド"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "制作、マスタリング",
    },
    {
      ...getPerson("ぺんぎん"),
      role: "イラスト",
    },
    {
      name: "のいしゅ",
      role: "写真提供",
      socialLinks: [
        {
          platform: "twitter",
          url: "https://x.com/noish_GV",
        },
      ],
    },
  ],
  releaseDate: new Date("2026-11-01"),
  links: [
    // TODO: booth を作る
  ],
  jacketImageUrl: "/images/jackets/graduation.png",
  tracks: [sukuenakatta, kokonisaku, soji, akari2],
  downloadEnabled: true,
  // TODO: 動画アップする
};
