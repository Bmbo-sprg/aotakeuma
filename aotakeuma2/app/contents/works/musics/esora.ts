import type { Music } from "~/types";

export const esora: Music = {
  type: "music",
  id: "esora",
  title: "絵空とうたかた",
  description: `
夏と君と夢うつつの曲。Future Bass 的要素を取り入れたポップスです。
大阪大学感傷マゾ研究会『青春ヘラver.7「VTuber新時代」』の特装版CD『Virtual Mirage Seaside Girl』に書き下ろした楽曲です。
ボカコレ2023夏TOP100ランキング参加曲 でした。
`,
  tags: ["夏", "提供作品", "エレクトロニック", "ボカコレ"],
  credits: [
    {
      name: "竹馬あお",
      role: "作詞、作曲、編曲",
    },
    {
      name: "双葉湊音",
      role: "ボーカル",
    },
    {
      name: "osakana",
      role: "ボーカル (『Virtual Mirage Seaside Girl』収録版)",
    },
  ],
  releaseDate: new Date("2023-08-05"),
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
    youtubeUrl: "https://www.youtube.com/watch?v=IIlERNH3FbI",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm42577771",
    bilibiliUrl: "https://www.bilibili.com/video/BV1Hh4y1w7Fa",
  },
  lyrics: `
涼風の凪いだ　誰そ彼の刹那
絵に描いたような　淡く儚い空だ
波間に浮かべた　うたかたの音が
不意に囁いた
「ずっと続けばいいのにな」

君が消えるなら　明日が消えるなら
この記憶ごと消してしまえ、戻らないように
夏が終わるなら　夢が醒めるなら
この想いだけ心に秘めて...

八月、揺らいだ、蝉時雨の残響が
移ろう地平の彼方に迷い込んだ
八月、揺らめく、絵空事だとしても
永遠を願った二文字は言えないまま

君が消えるなら　明日が消えるなら
この命ごと消してしまえ、悔やまないように
夏が終わるなら　夢が醒めるなら
この想いだけ心に秘めて...

「きえゆくさだめのわたしを、
どうか、
ゆめがさめても、ずっと、
わすれないでいてね」
`,
};
