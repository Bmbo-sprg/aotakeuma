import type { Album } from "~/types";

export const aonote: Album = {
  type: "album",
  id: "aonote",
  titlePrefix: "竹馬あお 4th Album",
  title: "あおいろがぼくたちの音",
  description: "青を探す旅路と、出会いと別れと再会とを描く合成音声アルバム",
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
    {
      name: "がまうお",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2025-10-26"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/7608562",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/album/6b5ygymeSX4fPkBAeAmWH1",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/our-azure-notes/1860759504",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_l0GxUnEkxKeQDBNt0QMqBqPYQoCVuPR8o",
    },
    {
      platform: "recochoku",
      url: "https://recochoku.jp/album/A2005952564",
    },
  ],
  jacketImageUrl: "/images/jackets/aonote.png",
  tracks: [], // TODO
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=_QUxRgi_We0",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45525121",
    bilibiliUrl: "https://www.bilibili.com/video/BV1JiWkzwEn1",
  },
};
