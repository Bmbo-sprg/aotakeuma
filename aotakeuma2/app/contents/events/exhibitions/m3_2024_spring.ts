import type { Exhibition } from "~/types";
import { haruame_ost } from "../../works/albums/haruame_ost";
import { snfe } from "../../works/albums/snfe";
import { teenage } from "../../works/albums/teenage";
import { tsuisou } from "../../works/albums/tsuisou";
import { haruame } from "../../works/games/haruame";

export const m3_2024_spring: Exhibition = {
  type: "exhibition",
  id: "m3_2024_spring",
  title: "M3-2024春",
  description: "竹馬あお 2nd Album『SummerNotFoundException』を頒布しました。",
  tags: [],
  date: new Date("2024-04-28"),
  location: "東京流通センター 第一展示場 I-11a",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1784387350631763977",
    },
  ],
  catalog: [snfe, haruame_ost, haruame, teenage, tsuisou],
};
