import type { Album } from "~/types";
import { jumping_into_orbit } from "../musics/jumping_into_orbit";
import { nyanverse } from "../musics/nyanverse";
import { afterburn } from "../musics/afterburn";

export const digimoca: Album = {
  type: "album",
  id: "digimoca",
  titlePrefix: "竹馬あお EP",
  title: "でぃじたる・もかちーの！",
  description: "ひとりといっぴき、宇宙を旅する　宮舞モカ×クラブミュージックEP",
  tags: ["エレクトロニック"],
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
    {
      name: "ぺんぎん",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2025-09-14"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/7468592",
    },
  ],
  jacketImageUrl: "/images/jackets/digimoca.png",
  tracks: [jumping_into_orbit, nyanverse, afterburn],
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=JZCEuH8j9Oc",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45443516",
    bilibiliUrl: "https://www.bilibili.com/video/BV1s6n8zFEwr",
  },
};
