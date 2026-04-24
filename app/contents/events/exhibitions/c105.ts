import type { Exhibition, OtherWork } from "~/types";
import { nde } from "../../works/games/nde";

const nde_goods: OtherWork = {
  type: "other",
  id: "nde_goods",
  title: "Near-Death-Expedition グッズ",
  description: "ビジュアルノベル『Near-Death-Expedition』のグッズです。",
  tags: ["『縋想』プロジェクト"],
  team: "『縋想』プロジェクト",
  credits: [],
  releaseDate: new Date("2024-12-30"),
};

export const c105: Exhibition = {
  type: "exhibition",
  id: "c105",
  title: "コミックマーケット105",
  description: `
『縋想』プロジェクトで出展しました。
ビジュアルノベル『Near-Death-Expedition』を頒布しました。
なぜか壁サーで、うきうき
`,
  tags: ["『縋想』プロジェクト"],
  date: new Date("2024-12-30"),
  location: "東京ビッグサイト 西2ホール あ-36ab",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/tsuisouproject/status/1873534676415177003",
    },
  ],
  catalog: [nde, nde_goods],
};
