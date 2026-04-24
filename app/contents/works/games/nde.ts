import type { Game } from "~/types";
import { getPerson } from "../../persons";

export const nde: Game = {
  type: "game",
  id: "nde",
  title: "Near-Death-Expedition",
  description: `
『縋想』プロジェクトによるビジュアルノベル2作目。システム・サウンドを担当しました。

- ストーリー -

──ねぇ、こっちに来ない？　ここは寒くて、暗くて、ちょっぴり悲しいの。

新卒で入った会社を辞め、持て余した時間で動画サイトを閲覧していた主人公。
時刻は深夜2時。ふと目に入ったのは、サムネイルが真っ白の奇妙な配信。

「ねぇ、聞こえる？　私が、見える？」

閲覧数は1。自分以外には誰も見ていない配信で、まるで放送事故とでも言わんばかりの戸惑いを見せる、画面の向こうの〝誰か〟。
翌日、主人公のもとに一通のメッセージが届いていた。

「私と一緒に『終乃りんね』をプロデュースしてくれませんか？」

〝終末系VTuber〟を名乗る謎めいた少女と、終わりのない旅が始まる。
`,
  tags: ["『縋想』プロジェクト"],
  team: "『縋想』プロジェクト",
  credits: [
    {
      ...getPerson("佐薙概念"),
      role: "シナリオ、演出",
    },
    {
      ...getPerson("竹馬あお"),
      role: "システム、サウンド",
    },
    {
      ...getPerson("犬吠埼いつき"),
      role: "キャラクターデザイン、イラスト",
    },
  ],
  releaseDate: new Date("2024-12-30"),
  links: [
    {
      platform: "website",
      url: "https://near-death-expedition.tsuisouproject.com/",
    },
    {
      platform: "steam",
      url: "https://store.steampowered.com/app/3105150/NearDeathExpedition/?l=japanese",
    },
    {
      platform: "booth",
      url: "https://tsuisouproject.booth.pm/items/5952572",
    },
  ],
  jacketImageUrl: "/images/jackets/nde.png",
};
