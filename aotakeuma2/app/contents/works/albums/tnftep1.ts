import type { Album } from "~/types";
import { lemonade_palette } from "../musics/lemonade_palette";
import { himawari_ascension } from "../musics/himawari_ascension";
import { kiro } from "../musics/kiro";
import { aoiro_ni_inoriwo } from "../musics/aoiro_ni_inoriwo";

export const tnftep1: Album = {
  type: "album",
  id: "tnftep1",
  titlePrefix: "竹馬あお EP",
  title: "ふたつの夏日に餞を",
  description: "双葉湊音×紡乃世詞音のひと夏を描いた小品集",
  tags: ["夏"],
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
    {
      name: "ねこねこ",
      role: "イラスト",
    },
    {
      name: "ぺんぎん",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2025-02-01"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/6573328",
    },
  ],
  jacketImageUrl: "/images/jackets/tnftep1.png",
  tracks: [lemonade_palette, himawari_ascension, kiro, aoiro_ni_inoriwo],
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=DbrYdcOpuQo",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm44599383",
    bilibiliUrl: "https://www.bilibili.com/video/BV158FXePEZ9",
  },
};
