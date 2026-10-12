import { binarography } from "../../works/albums/binarography";
import { yohkoh } from "../../works/albums/yohkoh";
import type { Exhibition } from "~/types";

export const m3_2026_autumn: Exhibition = {
  type: "exhibition",
  id: "m3_2026_autumn",
  title: "M3-2026秋",
  description:
    "恒例のM3。『学園アイドルマスター』のファンメイドアルバム『Binarography.』と、オルタナティブロックEP『陽光』を頒布。",
  tags: [],
  date: new Date("2026-10-25"),
  location: "東京流通センター 第2展示場2F サ-17a",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/2109218421569470830",
    },
  ],
  catalog: [binarography, yohkoh],
};
