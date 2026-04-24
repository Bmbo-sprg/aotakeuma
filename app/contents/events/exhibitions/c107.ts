import { syngularity } from "../../works/albums/syngularity";
import type { Exhibition } from "~/types";

export const c107: Exhibition = {
  type: "exhibition",
  id: "c107",
  title: "コミックマーケット107",
  description: `
サークル「スタジオ加速」として出展しました。
学園アイドルマスターへのファンメイドアルバム『SyngUlarity!!!』を頒布しました。
`,
  tags: ["アイドル"],
  date: new Date("2025-12-31"),
  location: "東京ビッグサイト 東6ホール ク-11b",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/2006160946398474502",
    },
  ],
  catalog: [syngularity],
};
