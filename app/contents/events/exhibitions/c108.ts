import { binarography } from "../../works/albums/binarography";
import { syngularity } from "../../works/albums/syngularity";
import type { Exhibition } from "~/types";

export const c108: Exhibition = {
  type: "exhibition",
  id: "c108",
  title: "コミックマーケット108",
  description: `
サークル「スタジオ加速」として出展します。
新譜として、学園アイドルマスターの〈まだ無い〉ユニットたちのファンメイド楽曲アルバム『Binarography.』を頒布します。
旧譜『SyngUlarity!!!』もあります
`,
  tags: ["アイドル"],
  date: new Date("2026-08-16"),
  location: "東京ビッグサイト 東3ホール ヨ-17a",
  links: [],
  catalog: [binarography, syngularity],
};
