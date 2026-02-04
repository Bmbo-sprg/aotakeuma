import type { Album } from "~/types";
import { tabun } from "../musics/tabun";
import { aq } from "../musics/aq";
import { nichijo_wo_hashire } from "../musics/nichijo_wo_hashire";
import { late_november } from "../musics/late_november";
import { kaigansen } from "../musics/kaigansen";
import { natsuno_owari } from "../musics/natsuno_owari";
import { itomagoi } from "../musics/itomagoi";
import { movere_vivere } from "../musics/movere_vivere";

export const teenage: Album = {
  type: "album",
  id: "teenage",
  titlePrefix: "閔仲 1st Album",
  title: "高校生",
  description: "高校時代のすべてを言語化した音たちを集めました",
  tags: [], // TODO
  credits: [
    {
      name: "閔仲 (later 竹馬あお)",
      role: "制作、マスタリング",
    },
  ],
  releaseDate: new Date("2020-06-05"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/3907336",
    },
  ],
  jacketImageUrl: "/images/jackets/teenage.png",
  tracks: [
    tabun,
    aq,
    nichijo_wo_hashire,
    late_november,
    kaigansen,
    natsuno_owari,
    itomagoi,
    movere_vivere,
  ],
  video: {
    credits: [
      {
        name: "閔仲 (later 竹馬あお)",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=X5--ExfudsU",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm36979880",
    bilibiliUrl: "https://www.bilibili.com/video/BV1SC4y1h7Ph",
  },
};
