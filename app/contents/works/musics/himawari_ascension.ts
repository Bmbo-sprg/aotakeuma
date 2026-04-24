import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const himawari_ascension: Music = {
  type: "music",
  id: "himawari_ascension",
  title: "Himawari/Ascension",
  description: `
またいつか逢える、きみに餞を。
Hardcore 的つのふたポップス 2 作目。
`,
  tags: ["エレクトロニック"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "双葉湊音",
      role: "ボーカル",
    },
    {
      name: "紡乃世詞音",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-02-01"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        ...getPerson("ねこねこ"),
        role: "イラスト",
      },
      {
        name: "なずしろ",
        role: "写真提供",
        socialLinks: [
          {
            platform: "twitter",
            url: "https://x.com/nazushiro",
          },
        ],
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=yuOZ4Y7zmYQ",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm44623536",
    bilibiliUrl: "https://www.bilibili.com/video/BV12bN8ePEyu",
  },
  lyrics: `
時が止まって、絞り出す言葉も
この気持ちも愛しさもぜんぶ、捧げたい、伝えたい
たとえ大人になっても、記憶の奥底で眠ったままの
ひそかに輝くそこに、きみはいる

（わたしは、ここにいるよ、ずっと）
（わたしは、ここにいるよ、ずっと）
（一緒の帰り道、きれいな夕空）
（二人のないしょ、交わした約束）
（離ればなれが運命だとしても）
（きみといた時間が心を灯して）
晴れ空に手が届くよ

いつかは終わる夏の日の果てと
どこまでも続く空に餞を
曖昧な彼方、地平線の先
奏でてゆく、響きわたる、詞の葉よほつれないで

いつかは終わる青色の日々と
褪せることのないふたつの想い出
このひまわり畑でまた逢おうね

季節がまた巡って、路傍に咲いた花と
海の景色と少し欠けた暮らしのこと、きみに話したいな

いつかまた来る夏の日は遠く
ふたりを繋げる星空に愛を
ひまわりの咲う地平線の先
奏でてゆく、響きわたる、詞の葉よ僕らを結んで

いつかまた来る輝いた日々と
鮮やかなままのふたつの想い出
このひまわり畑でーー

いつかは終わる
（一緒の帰り道、きれいな夕空、二人のないしょ、交わした約束）
いつかまた来る
（駆け抜けた坂道、取り替えっこしたヘアピン、昼下がり、バス停、二人の時間すべて）
どこまでも続く

いつかは終わる夏の日の果てと
またいつか逢えるきみに餞を
曖昧な彼方、地平線の先
奏でてゆく、響きわたる、詞の葉を忘れないで

いつかは終わる青色の日々も
ふたつの記憶が褪せることはない！
このひまわり畑でまた逢おうね

どこまでも続くーー
`,
};
