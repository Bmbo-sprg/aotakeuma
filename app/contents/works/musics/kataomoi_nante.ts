import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const kataomoi_nante: Music = {
  type: "music",
  id: "kataomoi_nante",
  title: "かたおもいなんてしてみたけど",
  description: "ふっと思い至って、ふわっと1時間少々で、ふらっとな1コーラス",
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
  releaseDate: new Date("2020-01-29"),
  video: {
    credits: [
      {
        ...getPerson("閔仲 (later 竹馬あお)"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=v5qQvrLbcOE",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm36293262",
    bilibiliUrl: "https://www.bilibili.com/video/BV1zE411W78B",
  },
  lyrics: `
たいせつにしようとおもうほど
すりおちてくのはどうしてだろ。
こいにこいをしたじかんなほど
はやくながれるのがかなしいな。
おとにすくわれたじぶんだけを
みすててじぶんおとしめるおと。
どうせらいげつもいきてくけど
すきをなくしたとていきてくの。

たいせつにしようとおもうほど
うまくならないのどうしてだろ。
おもいつたえたいとおもうほど
うまくはなせないのかなしいよ。
きみぼくをおいていかないでよ
おんがくきみだけがすがるもの。
どうせあすもそんざいするけど
すきのあいたこころには、
いばしょはないの。
`,
};
