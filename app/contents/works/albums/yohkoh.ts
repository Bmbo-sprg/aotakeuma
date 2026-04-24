import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { yusetsu } from "../musics/yusetsu";
import { hoga } from "../musics/hoga";
import { kaika } from "../musics/kaika";
import { neuron } from "../musics/neuron";

export const yohkoh: Album = {
  type: "album",
  id: "yohkoh",
  titlePrefix: "竹馬あお EP",
  title: "陽光",
  description: "春、新生活、群像、光のロックEP",
  tags: ["バンドサウンド"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "制作、マスタリング",
    },
  ],
  releaseDate: new Date("2026-03-29"),
  links: [
    // TODO: booth を作る
  ],
  jacketImageUrl: "/images/jackets/yohkoh.png",
  tracks: [yusetsu, hoga, kaika, neuron],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=xxxxxxxxxxx", // TODO
    niconicoUrl: "https://www.nicovideo.jp/watch/smxxxxxxxx", // TODO
    bilibiliUrl: "https://www.bilibili.com/video/xxxxxxxxx", // TODO
  },
};
