import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const kaika: Music = {
  type: "music",
  id: "kaika",
  title: "開花、ただ祈ること",
  description: `
少し明るい春の曲。2026年は唯世かのんの年。
あなたと音楽と、世界に偏在しますように。
`,
  tags: ["バンドサウンド"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "唯世かのん",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2026-03-29"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        name: "ジンベイ　(C)Yuise Kanon Project",
        role: "唯世かのん公式立ち絵素材",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=kMFaR2EBA3U",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm46293807",
    bilibiliUrl: "https://www.bilibili.com/video/BV1uk576BELC",
  },
  lyrics: `
足元ばかり見ない、顔を上げたら
晴れわたる空すら羨んでしまった歪みが透過する、開花する、ほら
閉じ籠ったじぶんから一歩踏み出して
この世界を愛してみようと思った祈りが花咲かせた、花咲かせた

小さな箱のなかから生まれた大きな機運、動き出す契機は
棚の中に仕舞ってるだけじゃつまらない！
取り出して、憧れて、踏み出して、唯ひとつの音が響いた

いくつもの朝が巡って　夢が褪せるほど巡って
ぼくのことを忘れてしまってもいいから
ぼくがここにいた証だけただ祈っている
いつまでも陽光が差して　朝になるたびに満たして
百年後も八千年後も変わらない音楽で、
ただ花が咲くのを祈っている

足元ばかり見ない、顔を上げたら
うごめく街、誰の目にも留まらない歪みを大事にして、大事にして、ほら
イヤホンを外して、耳をすませば
この世界を愛してみようと思ったきっかけが転がってた、ロックが転がってた

いくつもの春が巡って　夢が褪せるほど巡って
ぼくのことを忘れてしまってもいいから
ぼくがここにいた証だけただ祈っている
いつまでも陽光が差して　新しいきみを満たして
百年後も八千年後も変わらない音楽で、
あるいは変わりつづけた音楽で、
ただ花が咲くのを祈っている`,
};
