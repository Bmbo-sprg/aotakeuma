import type { Exhibition } from "~/types";
import { haruame } from "../../works/games/haruame";
import { teenage } from "../../works/albums/teenage";
import { tsuisou } from "../../works/albums/tsuisou";

export const c102: Exhibition = {
  type: "exhibition",
  id: "c102",
  title: "コミックマーケット102",
  description: `
『縋想』プロジェクトで出展しました。
ビジュアルノベル『ハルジオンは雨と咲く』の体験版を頒布しました。
`,
  tags: ["『縋想』プロジェクト"],
  date: new Date("2023-08-13"),
  location: "東京ビッグサイト 西2ホール い-39a",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/tsuisouproject/status/1690521546132279296",
    },
  ],
  catalog: [haruame, tsuisou, teenage],
};
