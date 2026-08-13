import { getPerson } from "../../persons";
import type { Album } from "~/types";
import { foreshadowing } from "../musics/foreshadowing";
import { koi_kotoba } from "../musics/koi_kotoba";
import { idol_do } from "../musics/idol_do";

export const binarography: Album = {
  type: "album",
  id: "binarography",
  titlePrefix: "初星学園ファンメイドユニットソングアルバム",
  title: "Binarography.",
  description: `
『学園アイドルマスター』の公式に〈まだ無い〉ユニットたちのファンメイド楽曲を集めたアルバム。
燐羽×咲季 / 美鈴×ことね / 手毬×千奈 で概念デュエット曲を制作しました。
`,
  tags: ["アイドル", "合作参加作品"],
  team: "スタジオ加速",
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "企画、作詞、作曲、編曲、マスタリング",
    },
    {
      name: "Okgw",
      role: "企画、作詞",
    },
    {
      name: "とだな",
      role: "企画、作詞、小説",
    },
    {
      ...getPerson("kiki"),
      role: "企画、イラスト、デザイン",
    },
  ],
  releaseDate: new Date("2026-08-16"),
  links: [], // TODO: 通頒を開ける
  jacketImageUrl: "/images/jackets/binarography.png",
  tracks: [foreshadowing, koi_kotoba, idol_do],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        ...getPerson("kiki"),
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=718Krr97S-k",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm46613804",
    bilibiliUrl: "https://www.bilibili.com/video/BV1qZGg64EcL",
  },
};
