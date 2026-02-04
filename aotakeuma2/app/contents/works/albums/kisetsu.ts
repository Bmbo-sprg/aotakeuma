import type { Album } from "~/types";
import { kisetsu_song } from "../musics/kisetsu_song";
import { akari } from "../musics/akari";

export const kisetsu: Album = {
  type: "album",
  id: "kisetsu",
  titlePrefix: "竹馬あお EP",
  title: "季節は死んだりしないから",
  description: `
あの夏、僕は海辺の町で、宝石のような日々を過ごした。
`,
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
  ],
  releaseDate: new Date("2025-06-01"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/7468520",
    },
  ],
  jacketImageUrl: "/images/jackets/kisetsu.png",
  tracks: [kisetsu_song, akari],
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=8bM90SuUvtQ",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45072233",
    bilibiliUrl: "https://www.bilibili.com/video/BV1FNTezYEYJ",
  },
};
