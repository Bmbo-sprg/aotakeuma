import { esora_key } from "../../works/esora_key";
import { bros } from "../../works/albums/bros";
import { snfe } from "../../works/albums/snfe";
import { tnftep1 } from "../../works/albums/tnftep1";
import { ubugoe } from "../../works/albums/ubugoe";
import { lemonade_palette_stand } from "../../works/lemonade_palette_stand";
import type { Exhibition } from "~/types";

export const kowane_4: Exhibition = {
  type: "exhibition",
  id: "kowane_4",
  title: "声音の宴 4次会",
  description: "EP『ふたつの夏日に餞を』を頒布しました。",
  tags: [],
  date: new Date("2025-02-01"),
  location: "大田区産業プラザ PiO F-28",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1885536238842908742",
    },
  ],
  catalog: [tnftep1, ubugoe, snfe, bros, lemonade_palette_stand, esora_key],
};
