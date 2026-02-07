import type { Music } from "~/types";

export const polaris_step: Music = {
  type: "music",
  id: "polaris_step",
  title: "Polaris Step",
  description: `
『学園アイドルマスター』のキャラクター・秦谷美鈴へのファンメイドソングです。
こういうふわふわゆったりな美鈴ソロ曲も増えてほしいという思いを込めて
`,
  tags: ["アイドル", "合作参加作品"],
  team: "スタジオ加速",
  credits: [
    {
      name: "とだな",
      role: "作詞",
    },
    {
      name: "竹馬あお",
      role: "作曲、編曲",
    },
    {
      name: "彩澄りりせ",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-12-31"),
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
      {
        name: "kiki",
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=fLzn9976Y48",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45760614",
    bilibiliUrl: "https://www.bilibili.com/video/BV1qyB5BAEam",
  },
  lyrics: `
願いをかけて　穏やかなポラリス
見上げた夜空に消えない道標
手を伸ばして……

頬に撫でた微熱だけが凪いだ夢を引き止めていたの
鼻に残る甘い香り深く吸って目を開いた

知らず知らずずれていた陽だまりに触れようと
伸ばしたつま先でリズムをとって踊ろ
On y va!

（アン・ドゥ・トロワ）
願いをかけて　穏やかなポラリス
手と手ぎゅっと繋いで暗い夜を導くの
無重力の光になって踊るワルツ
律動する愛に心が満たされるまで

薄紫の空に探した太陽
取り残された世界も
優しく包む歌を響かせたい

ふわりふわり星を渡って
たまにふうっとひと休み
空へ舞う歌が　何光年先から届くの

（いち・に・さん）
応えさせて　穏やかなポラリス
見つめ合った誓いは焼き付いて消えない
満月はパーライト　明りと踊るワルツ
深愛が心沈めるまで
まどろんでいて
`,
};
