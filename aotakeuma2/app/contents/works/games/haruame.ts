import type { Game } from "~/types";
import { getPerson } from "../../persons";

export const haruame: Game = {
  type: "game",
  id: "haruame",
  title: "ハルジオンは雨と咲く",
  description: `
『縋想』プロジェクトによるビジュアルノベル1作目。システム・サウンドを担当しました。

- ストーリー -

世界で一番、"感傷的"な新伝綺。

「ねぇ、二人で逃げちゃおうよ」
それが〈青井結夏〉の最後の言葉だった。
大学1年の冬。何の予兆もなく、彼女は消えた。
あれから2年、俺のもとに一本の電話が入った。

「失踪していた青井結夏さんが、見つかりました」

寒さで凍えていた時間が、再び動き出した。
やがて明かされる彼女の過去と、人魚の「町」。
因習と事件の中で渦巻く『追想』の意味。
──彼女の居場所は、ハルジオンの花だけが知っている。
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
  releaseDate: new Date("2023-12-31"),
  links: [
    {
      platform: "steam",
      url: "https://store.steampowered.com/app/2904470/_/?l=japanese",
    },
    {
      platform: "booth",
      url: "https://booth.pm/ja/items/5389377",
    },
  ],
};
