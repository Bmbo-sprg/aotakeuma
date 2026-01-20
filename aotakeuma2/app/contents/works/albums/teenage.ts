import type { Album } from "~/types";

export const teenage: Album = {
  type: "album",
  id: "teenage",
  titlePrefix: "閔仲 1st Album",
  title: "高校生",
  description: "高校時代のすべてを言語化した音たちを集めました",
  tags: [], // TODO
  credits: [
    {
      name: "閔仲",
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
  tracks: [], // TODO
  video: {
    credits: [
      {
        name: "閔仲",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=X5--ExfudsU",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm36979880",
    bilibiliUrl: "https://www.bilibili.com/video/BV1SC4y1h7Ph",
  },
};

// TODO: こういう注意書きを作って、入れる
/*
※「閔仲」は竹馬あおの前名義です。
※2026年現在、再販の予定はありません。ご了承ください。
*/
