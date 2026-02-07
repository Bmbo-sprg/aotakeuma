import type { Music } from "~/types";

export const snfe_inst: Music = {
  type: "music",
  id: "snfe_inst",
  title: "SummerNotFoundException",
  description: `
アルバム『SummerNotFoundException』のコンセプトのルーツとなったインスト曲です。
消える夏とセカイ系概念
`,
  tags: ["インスト", "エレクトロニック", "夏"],
  credits: [
    {
      name: "竹馬あお",
      role: "作曲、編曲",
    },
    {
      name: "可不",
      role: "台詞",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
      {
        name: "ぺんぎん",
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=2dxF-ooVJvk",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm43695600",
    bilibiliUrl: "https://www.bilibili.com/video/BV17C411H7aE",
  },
  lyrics: `
もう、これで、最後だね

さようなら
`,
};
