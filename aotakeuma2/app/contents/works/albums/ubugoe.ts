import type { Album } from "~/types";
import { ubugoe_xfd } from "../videos/ubugoe_xfd";

export const ubugoe: Album = {
  type: "album",
  id: "ubugoe",
  titlePrefix: "竹馬あお 3rd Album",
  title: "産声、滲んだきみの青",
  description:
    "滲んでゆく記憶を記録 (おんがく) で繋ぎとめる、抒情的ボカロックアルバム",
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
    {
      name: "こんぺき",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2024-09-23"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/6129666",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/album/75BvTIX3UpSNe5alNQmcpA",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/first-cry-your-blurring-blue/1863646009",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_lc7I6Z-l2GHvMHWn7td3BEn9CEFOV55xc",
    },
    {
      platform: "linkcore",
      url: "https://linkco.re/b09S57Vu",
    },
  ],
  jacketImageUrl: "/images/jackets/ubugoe.png",
  tracks: [], // TODO
  video: ubugoe_xfd,
};
