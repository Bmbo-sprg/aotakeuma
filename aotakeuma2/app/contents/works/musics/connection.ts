import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const connection: Music = {
  type: "music",
  id: "connection",
  title: "こねくしょん!!!",
  description: `
あいまいなメモリの海に沈み消えてしまった。Kawaii Future Bass です。
第16回プロセカNEXT応募楽曲 でした。
`,
  tags: ["アイドル", "エレクトロニック"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "鏡音リン",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2023-05-29"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        name: "shamo",
        role: "イラスト",
        socialLinks: [
          {
            platform: "pixiv",
            url: "https://www.pixiv.net/users/68225513",
          },
          {
            platform: "twitter",
            url: "https://x.com/_shamo3",
          },
        ],
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=rQfi5QS8u68",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm42281943",
    bilibiliUrl: "https://www.bilibili.com/video/BV1jV4y1z7zg",
  },
  lyrics: `
こねくしょん!　ここから抜け出してどこへもいけるよ
準備はいい?
こねくしょん!!　ぼくの手を握っていまから飛び出そう
こねくしょん!!!　とびっきりのSEQ=0(シークレット)ぽわぽわ浮かべて
お届け!
これくしょん!!!!　セカイのナゾナゾとヨゾラのキラキラ

とけちゃいそうな日々もキミといられたらもっと、
躍りだした!

キミにおくるささやき
繋ぎたいゼロとイチ
あふれたビートほつれて
ココロはオーバーフロー!
キミに奏でるドレミ
聴こえないフリしないで
眠れない夜越えて
書き込みたい 甘い想い出

こねくしょん!　2番でひと休み、まだまだいけるよ
準備はいい?
こねくしょん!!　ぼくの手を握っていまから、443番まで飛ぶよ～～～～～～!
こねくしょん!!!　キミとぼくのSTEPでぱたぱた歩いて逃げ出そう!
これくしょん!!!!　セカイのナゾナゾとヨゾラのキラキラ

とけちゃいそうなアイスもキミのセリフもきっといつか、あーあ。
あいまいなメモリの海に沈み消えてしまった、
なんて、イヤだ!

キミにおくるささやき
繋ぎたいゼロとイチ
あふれた想いうけとめて
ココロはオーバーフロー!
キミに伝えるDon't play me
聴こえないフリしないで
五次元を越えて
書き込みtime 甘い想い出
`,
};
