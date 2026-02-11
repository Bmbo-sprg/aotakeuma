import { esora_key } from "../../works/esora_key";
import { bros } from "../../works/albums/bros";
import { snfe } from "../../works/albums/snfe";
import { ubugoe } from "../../works/albums/ubugoe";
import { lemonade_palette_stand } from "../../works/lemonade_palette_stand";
import type { Exhibition } from "~/types";

export const vomas_57: Exhibition = {
  type: "exhibition",
  id: "vomas_57",
  title: "THE VOC@LOiD M@STER 57",
  description: "ボーマス初出展！",
  tags: [],
  date: new Date("2024-11-23"),
  location: "東京流通センター 第一展示場 D24",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1860175374166163614",
    },
  ],
  catalog: [bros, ubugoe, snfe, lemonade_palette_stand, esora_key],
};
