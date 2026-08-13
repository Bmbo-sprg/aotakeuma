import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const koi_kotoba: Music = {
  type: "music",
  id: "koi_kotoba",
  title: "恋詞フロート",
  description: `
『学園アイドルマスター』の秦谷美鈴・藤田ことねへのファンメイドユニットソングです。
和風 Hi-tech / Future Bass などの要素を取り入れました
`,
  tags: ["アイドル", "エレクトロニック"],
  team: "スタジオ加速",
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "彩澄りりせ",
      role: "ボーカル",
    },
    {
      name: "彩澄しゅお",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2026-08-10"),
  jacketImageUrl: "/images/jackets/koi_kotoba.png",
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        ...getPerson("kiki"),
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=y1DNKr5htQo",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm46650571",
    bilibiliUrl: "https://www.bilibili.com/video/BV1kCud6XEN5",
  },
  lyrics: `
恋もたけなわ
詞もあだばな

経・緯、織り逢わせる　ちぐはぐ、また縺れる
ぬくもり、触れてみてもうわの空で
声音に心宿りける　気色はあからみつつ
目を逸らしても、隠しきれない空模様

裾曳く夜毎にちらつくあなたの香を
こころ動く　なぜだか　絆されてる！

一鈴の花と舞う　貴く美しく
揺れる琴の調べ　月夜をも乱す
護りたい誰かの盈ちたる笑顔　同じくしても
傍にいるまばゆきあなたが
妬くもあろう
目が離せぬほど

今・昔、夢と現　うたかた、身を任せる
いたづらにその頬をつついてみる
平然、なづまぬふりして　気色はあからみつつ
目を逸らしても、隠しきれない空模様

紛らす夜毎にちらつくあなたの顔
狂おしいほど（ゆめゆめ）
絆されてみだれて
嗚呼！

離れないで

恋はたけなわ
詞はあだばな

相見れば闇夜、すこしとよみて
ふたつの音が
応えあう　溺れる
わたしの...

一鈴の花と舞う　貴く美しく
揺れる琴の調べ　月夜をも乱す
誰がためにわづらふ　盈ちたる想ひ　同じくしても
傍にいるまばゆきあなたが
妬ましきほど
`,
};
