import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const twilight_tint: Music = {
  type: "music",
  id: "twilight_tint",
  title: "Twilight Tint",
  description: `
Hardcore を取り入れたポップス習作。
ボカコレ2024冬TOP100ランキング参加曲 でした。
`,
  tags: ["ボカコレ", "エレクトロニック", "アイドル"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "花隈千冬",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2024-02-23"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        ...getPerson("ぺんぎん"),
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=cmRmNE9y7GQ",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm43435043",
    bilibiliUrl: "https://www.bilibili.com/video/BV1Ky421B7cC",
  },
  lyrics: `
茜色に染まる空、ふわり風になった言葉
セカイにひとつだけの秘密、想いを乗せた泡が弾けた
もしも手が届いたなら、もしも願いが叶ったら、
いつもどおりの夕空も違った輝きを見せた

胸の鼓動　キミの声
偽りない気持ちを追い越して辿り着いた必然
秒針の進む音がした

Twilight 明日のその先のストーリーは
新しい白紙のページ、自分の足で描いてゆくんだ
Twilight 涙のあと、踏み出したステップは
夕空だけが知っている
もひとつの秘密、忘れないよきっと
潮風に消えた、それで良いんだ

葵色に変わる空、ふわり優しく包まれた
キミがくれた勇気に今、またひとつ救われたの

Twilight 永遠なんてはじめからなかった？
いつか消えゆくさだめなら、一度だけの青、この手で塗り替えて！
Twilight 涙のあと、踏み出したステップで
夜さえ輝いてみえた！
キミとの想い出、忘れないよきっと
言の葉が消える、それで良いんだ
`,
};
