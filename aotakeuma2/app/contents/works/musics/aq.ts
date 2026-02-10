import { getPerson } from "../../persons";
import type { Music } from "~/types";

export const aq: Music = {
  type: "music",
  id: "aq",
  title: "(aq)",
  description: `
とけちゃってきみひとりにしないように
Kawaii Future Bass およびタイポグラフィアニメーションに初挑戦
`,
  tags: ["エレクトロニック"],
  credits: [
    {
      ...getPerson("閔仲 (later 竹馬あお)"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "初音ミク",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2020-04-22"),
  video: {
    credits: [
      {
        ...getPerson("閔仲 (later 竹馬あお)"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=pOVE0xBf2-s",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm36724852",
    bilibiliUrl: "https://www.bilibili.com/video/BV1XQ4y1K7qT",
  },
  lyrics: `
とける。
恋にとける。ようばいはきみ、
ようしつはぼく。みたされてく。
やさしいまじっく。ささやく言葉、
とけてくぼく。あまくひびく。

「いつも」がかわって、「はじめて」がふえて、
距離がおもったよりつかめなくて。
「ずっと」を願って、「ずっと」を嫌って、
変わりたくて変わりたくなくって。

とける。
恋にとける。蕾ふくらむ、
はるかぜふく。はるかへふく。
つたないぎみっく。つげる言葉、
とけてくぼく。少しすっぱく。

ひこうきぐもがわたあめに、
なってくのとるきみも、
きみをみつめるぼくも、
きれいなけしきみてるんだろうね。

もっと、
もっときみがくれたように、
ぼくもきみになにかあげなくちゃ。

とけてく。とうかしてく。
おもいとか。ねがいとか。
とかしすぎて溢れないように。
とけちゃってきみひとりにしないように。

とける。
恋にとけてく。でもふえてく、
想いはつのる。∞にさ。
なけなしりりっくで書ききれない、
あまくすっぱく。ひととせにささぐ。

BC、いま、(aq)
`,
};
