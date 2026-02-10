import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { sunburned_wing } from "../musics/sunburned_wing";
import { polaris_step } from "../musics/polaris_step";
import { zanei } from "../musics/zanei";
import { syngularity_song } from "../musics/syngularity_song";

export const syngularity: Album = {
  type: "album",
  id: "syngularity",
  titlePrefix: "SyngUp! ファンメイドアルバム",
  title: "SyngUlarity!!!",
  description:
    "『学園アイドルマスター』のユニット・SyngUp!へのファンメイドアルバム",
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
  releaseDate: new Date("2025-12-31"),
  links: [],
  jacketImageUrl: "/images/jackets/syngularity.png",
  tracks: [sunburned_wing, polaris_step, zanei, syngularity_song],
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
    youtubeUrl: "https://www.youtube.com/watch?v=u7sIGUoTTdE",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45771879",
    bilibiliUrl: "https://www.bilibili.com/video/BV1SMBkBhEwD",
  },
};
