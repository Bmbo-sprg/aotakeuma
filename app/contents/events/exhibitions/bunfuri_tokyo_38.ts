import type { Exhibition } from "~/types";
import { haruame } from "../../works/games/haruame";
import { tsuisou } from "../../works/albums/tsuisou";
import { haruame_ost } from "../../works/albums/haruame_ost";

export const bunfuri_tokyo_38: Exhibition = {
  type: "exhibition",
  id: "bunfuri_tokyo_38",
  title: "文学フリマ東京38",
  description: `
『縋想』プロジェクトで出展しました。
ビジュアルノベル『ハルジオンは雨と咲く』の関連グッズを頒布しました。
`,
  tags: ["『縋想』プロジェクト"],
  date: new Date("2024-05-19"),
  location: "東京流通センター 第二展示場 き-45",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/tsuisouproject/status/1792017305758810164",
    },
  ],
  catalog: [haruame, haruame_ost, tsuisou],
};
