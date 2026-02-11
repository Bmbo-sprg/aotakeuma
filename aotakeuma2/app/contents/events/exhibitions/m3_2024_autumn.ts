import { bros } from "../../works/albums/bros";
import { haruame_ost } from "../../works/albums/haruame_ost";
import { snfe } from "../../works/albums/snfe";
import { ubugoe } from "../../works/albums/ubugoe";
import type { Exhibition } from "~/types";

export const m3_2024_autumn: Exhibition = {
  type: "exhibition",
  id: "m3_2024_autumn",
  title: "M3-2024秋",
  description: "京大ボカロコンピ2 を頒布しました。",
  tags: [],
  date: new Date("2024-10-27"),
  location: "東京流通センター 第二展示場1F お-25a",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1850348154799174010",
    },
  ],
  catalog: [bros, ubugoe, snfe, haruame_ost],
};
