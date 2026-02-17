import type { Exhibition, OtherWork } from "~/types";
import { haruame } from "../../works/games/haruame";
import { haruame_ost } from "../../works/albums/haruame_ost";

const haruame_book: OtherWork = {
  type: "other",
  id: "haruame_book",
  title: "ハルジオンは雨と咲く メモリアルブック",
  description:
    "ビジュアルノベル『ハルジオンは雨と咲く』のメモリアルブックです。",
  tags: ["『縋想』プロジェクト"],
  team: "『縋想』プロジェクト",
  credits: [],
  releaseDate: new Date("2024-08-12"),
};

export const c104: Exhibition = {
  type: "exhibition",
  id: "c104",
  title: "コミックマーケット104",
  description: `
『縋想』プロジェクトで出展しました。
ビジュアルノベル『ハルジオンは雨と咲く』のメモリアルブックと、
新作『Near-Death-Expedition』のフリーペーパーを頒布しました。
`,
  tags: ["『縋想』プロジェクト"],
  date: new Date("2024-08-12"),
  location: "東京ビッグサイト 西2ホール く-10b",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/tsuisouproject/status/1822798820478177679",
    },
  ],
  catalog: [haruame_book, haruame, haruame_ost],
};
