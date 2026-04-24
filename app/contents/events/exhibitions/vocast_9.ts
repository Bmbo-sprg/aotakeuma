import { esora_key } from "../../works/esora_key";
import { haruame_ost } from "../../works/albums/haruame_ost";
import { snfe } from "../../works/albums/snfe";
import { teenage } from "../../works/albums/teenage";
import { ubugoe } from "../../works/albums/ubugoe";
import type { Exhibition } from "~/types";

export const vocast_9: Exhibition = {
  type: "exhibition",
  id: "vocast_9",
  title: "VOCALOID STREET 09",
  description: "竹馬あお 3rd Album『産声、滲んだきみの青』を頒布しました。",
  tags: [],
  date: new Date("2024-09-23"),
  location: "京都市勧業館みやこめっせ カ-9",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1838045424357408833",
    },
  ],
  catalog: [ubugoe, snfe, esora_key, haruame_ost, teenage],
};
