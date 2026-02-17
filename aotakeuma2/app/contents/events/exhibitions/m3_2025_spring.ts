import { snfe } from "../../works/albums/snfe";
import { tnftep1 } from "../../works/albums/tnftep1";
import { ubugoe } from "../../works/albums/ubugoe";
import { esora_key } from "../../works/esora_key";
import { lemonade_palette_stand } from "../../works/lemonade_palette_stand";
import type { Exhibition } from "~/types";

export const m3_2025_spring: Exhibition = {
  type: "exhibition",
  id: "m3_2025_spring",
  title: "M3-2025春",
  description: "社会人になって初めてのM3でした。新譜を落としました。",
  tags: [],
  date: new Date("2025-04-27"),
  location: "東京流通センター 第二展示場2F シ-19b",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1916319812495806802",
    },
  ],
  catalog: [tnftep1, ubugoe, snfe, lemonade_palette_stand, esora_key],
};
