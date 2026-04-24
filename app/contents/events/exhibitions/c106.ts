import type { Exhibition, OtherWork } from "~/types";
import { nde } from "../../works/games/nde";

const nde_book: OtherWork = {
  type: "other",
  id: "nde_book",
  title: "Near-Death-Expedition Archive",
  description:
    "ビジュアルノベル『Near-Death-Expedition』の公式設定資料集です。",
  tags: ["『縋想』プロジェクト"],
  team: "『縋想』プロジェクト",
  credits: [],
  releaseDate: new Date("2025-08-17"),
};

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

export const c106: Exhibition = {
  type: "exhibition",
  id: "c106",
  title: "コミックマーケット106",
  description: `
『縋想』プロジェクトで出展しました。
ビジュアルノベル『Near-Death-Expedition』の公式設定資料集を頒布しました。
`,
  tags: ["『縋想』プロジェクト"],
  date: new Date("2025-08-17"),
  location: "東京ビッグサイト 東7ホール V-25b",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/tsuisouproject/status/1956878593348473278",
    },
  ],
  catalog: [nde_book, nde, nde_goods],
};
