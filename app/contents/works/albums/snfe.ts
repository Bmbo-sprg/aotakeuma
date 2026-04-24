import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { twilight_tint } from "../musics/twilight_tint";
import { connection } from "../musics/connection";
import { created } from "../musics/created";
import { svm } from "../musics/svm";
import { asatte } from "../musics/asatte";
import { kaigansen } from "../musics/kaigansen";
import { natsuno_owari } from "../musics/natsuno_owari";
import { lemonade_palette } from "../musics/lemonade_palette";
import { esora } from "../musics/esora";
import { snfe_inst } from "../musics/snfe_inst";

export const snfe: Album = {
  type: "album",
  id: "snfe",
  titlePrefix: "竹馬あお 2nd Album",
  title: "SummerNotFoundException",
  description: "夏/虚構/青春/少女/消失を描いた合成音声アルバム",
  tags: ["夏"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "制作、マスタリング",
    },
    {
      ...getPerson("ぺんぎん"),
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/5697516",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/album/03nJDCpm14cqwI1mJwUjaq",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/summernotfoundexception/1863608931",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_l5UEjTpblxeLMUlGm3CRKlL0n-cm8QMcc",
    },
    {
      platform: "linkcore",
      url: "https://linkco.re/dReUq97q",
    },
  ],
  jacketImageUrl: "/images/jackets/snfe.png",
  tracks: [
    twilight_tint,
    connection,
    created,
    svm,
    asatte,
    kaigansen,
    natsuno_owari,
    lemonade_palette,
    esora,
    snfe_inst,
  ],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=IYl1EnV9x7g",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm43685823",
    bilibiliUrl: "https://www.bilibili.com/video/BV17C411H7aE",
  },
};
