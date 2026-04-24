import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const haikei_anohi: Music = {
  type: "music",
  id: "haikei_anohi",
  title: "拝啓あの日未熟だった青くて痛い僕ら",
  description: `
ビジュアルノベル『ハルジオンは雨と咲く』のエンディング曲のひとつです。
スリーピースガールズバンドの気持ち
`,
  tags: ["『縋想』プロジェクト", "バンドサウンド"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲",
    },
    {
      ...getPerson("佐薙概念"),
      role: "作詞",
    },
    {
      name: "里緒",
      role: "ボーカル",
      socialLinks: [
        {
          platform: "website",
          url: "https://rio-oir0.jimdofree.com/",
        },
        {
          platform: "youtube",
          url: "https://youtube.com/channel/UCvZUHhI9dHoaN1hCUwNjNJA",
        },
        {
          platform: "twitter",
          url: "https://x.com/rio_oir0",
        },
      ],
    },
    {
      name: "双葉湊音",
      role: "ボーカル (『産声、滲んだきみの青』収録版)",
    },
    {
      ...getPerson("しもぞの"),
      role: "ギター",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        ...getPerson("犬吠埼いつき"),
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=p1Dpxa5R7x0",
  },
  lyrics: `
拝啓あの日未熟だった青くて痛い僕ら
ああ　ロックを通して本音を叫ぶよ

世界が何色だってそんなの関係ないって
私の目が変わらなきゃそれでいいさ

擦り切れたラブソング　興味のないトレンド
孤独と孤高は選べない　私にはこれがある

君を思い出すとまだ泣けちゃうんだ　でも
君を思い出して強くなれるよ　この傷が証に変わってく
転んで流れるのは音楽だけでいい

大抵音に乗らなきゃ青くて痛い歌詞だ
ああ　不協和音がまるで僕らだ

そろそろ卒業括弧付きのティーネイジャー
「青春」だってただの言葉だ

うざったいポップソング　追いつけないスピード
無線イヤホンは使わない　私にはこれだけだ

僕が泣いてると　いつも慰めてくれた
君が泣いてても　何も　できない　
この声が私に変わってく
想って痛いのは真夜中だけがいい

夕陽が差し込む教室でギターを弾いたこと
晴れ渡る屋上でイヤホンを分けたこと
君との日々は楽しいことばかりで
君を思い出すと…

君を思い出すとまだ泣けちゃうんだ　でも
君を思い出して強くなれるよ　この傷が証に変わってく

僕らまたここから歩き出す

拝啓あの日未熟だった青くて痛い僕ら
`,
};
