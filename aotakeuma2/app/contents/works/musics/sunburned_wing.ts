import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const sunburned_wing: Music = {
  type: "music",
  id: "sunburned_wing",
  title: "Sunburned Wing",
  description: `
『学園アイドルマスター』のキャラクター・月村手毬へのファンメイドソングです。
手毬にはこういう純なロックを歌ってほしい！って思って作ったら翌月に『一体いつから』がリリースされていた
`,
  tags: ["アイドル", "バンドサウンド", "合作参加作品"],
  team: "スタジオ加速",
  credits: [
    {
      name: "Okgw",
      role: "作詞",
    },
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲",
    },
    {
      name: "宮舞モカ",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-12-31"),
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
    youtubeUrl: "https://www.youtube.com/watch?v=0ThvdrqXDc8",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45757350",
    bilibiliUrl: "https://www.bilibili.com/video/BV1jgBTBVEDZ",
  },
  lyrics: `
いつか夢見た　星に伸ばす指先
あの日願った「一番」
目指す高みに至るために
妥協はしないと決めたんだ

涙だってきっと煌めく
弱い自分も受け入れていけるなら

独りぼっちの世界だって歌える
あなたがいなくたってきっと踊れる
ほら見てたでしょう？　わたしだけのステージ
震える爪先で駆け出す
取り繕った翼で飛び立つ
息切れ、でも迷わないから
光がなくとも止まらずに進めるの

きみと夢見た　星に伸ばす指先
あの日誓った「一番」
きみと離れて進むならば
後ろは見ないと決めたんだ

雨が降って道が濡れても
駆け抜けた日がその先を照らすから

独りぼっちの世界だって歌える
あなたがいなくたってきっと踊れる
ほら見てたでしょう？　わたしだけのステージ
震える爪先で駆け出す
取り繕った翼で飛び立つ
息切れ、でも迷わないから
光がなくとも止まらずに進めるの

空眺め手を伸ばす日々
あの景色をきみとまた見れるなら
同じ高さで立てるなら

響き合う夢もっともっと歌うよ
あなたが居ればきっとずっと踊れる
ほら見せてやろう　わたしたちのステージ
弾んだ爪先で駆け出す
重ねた影を背にして飛び立つ
息切れ、でもきみがいるから
光の先へと止まらずに
越えて行ける
`,
};
