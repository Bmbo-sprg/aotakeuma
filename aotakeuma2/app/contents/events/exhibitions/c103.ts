import type { Exhibition } from "~/types";
import { haruame } from "../../works/games/haruame";
import { tsuisou } from "../../works/albums/tsuisou";

export const c103: Exhibition = {
  type: "exhibition",
  id: "c103",
  title: "コミックマーケット103",
  description: `
『縋想』プロジェクトで出展しました。
ビジュアルノベル『ハルジオンは雨と咲く』を頒布しました。
`,
  tags: ["『縋想』プロジェクト"],
  date: new Date("2023-12-31"),
  location: "東京ビッグサイト 東2ホール R-13b",
  catalog: [haruame, tsuisou],
};
