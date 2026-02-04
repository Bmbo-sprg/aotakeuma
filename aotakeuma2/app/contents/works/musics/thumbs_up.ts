import type { Music } from "~/types";

export const thumbs_up: Music = {
  type: "music",
  id: "thumbs_up",
  title: "Thumbs Up!!!",
  description: `
YouTuber・れり様に書き下ろした楽曲です。
アイドルソング的な曲想を目指しました。
`,
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "作詞、作曲、編曲",
    },
    {
      name: "れり",
      role: "ボーカル",
    },
    {
      name: "竹馬工房 (竹馬あお、ふゆ、犬吠埼いつき、篝火、ぺんぎん) + 小樽潮風高校軽音部 (夏色花梨、小春六花、花隈千冬)",
      role: "コール",
    },
  ],
  releaseDate: new Date("2025-03-07"),
  video: {
    credits: [
      {
        name: "れり",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=720_jY5lKJM",
  },
  lyrics: `
雨上がり、ゆるり今日日始まれり
退屈そうなキミと抜け出したら海
セカイとわたし、救済うならどっち！？どっち！？
くるりらり Loading...みたいなドキドキ
ひまわり畑を背に揺れる白のクオリア、キミの虚構になって！
ね・ね・ねえ オタクも先生も生徒会長も（THUMBS UP!‼︎THUMBS UP!!!)
ひとりぼっち人（んちゅ）も省エネさんも佐世保くんも
（THUMBS UP!‼︎THUMBS UP‼︎!）
愛を叫んで、わたしのこと忘れないで（THUMBS UP‼︎!THUMBS UP !!!)
壊れた正解 曖昧なゼロとイチに消えても
「夏のせいだね〜！」
`,
};
