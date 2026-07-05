import { aonote } from "../../works/albums/aonote";
import { yohkoh } from "../../works/albums/yohkoh";
import { esora_key } from "../../works/esora_key";
import type { Exhibition } from "~/types";

export const kowane_6: Exhibition = {
  type: "exhibition",
  id: "kowane_6",
  title: "声音の宴 6次会",
  description: "充電中...",
  tags: [],
  date: new Date("2026-05-24"),
  location: "大田区産業プラザ PiO F-01",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/2058372864051761591",
    },
  ],
  catalog: [yohkoh, aonote, esora_key],
};
