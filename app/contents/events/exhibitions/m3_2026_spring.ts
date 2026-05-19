import { aonote } from "../../works/albums/aonote";
import { syngularity } from "../../works/albums/syngularity";
import { yohkoh } from "../../works/albums/yohkoh";
import { esora_key } from "../../works/esora_key";
import type { Exhibition } from "~/types";

export const m3_2026_spring: Exhibition = {
  type: "exhibition",
  id: "m3_2026_spring",
  title: "M3-2026春",
  description: "恒例のM3。旧譜をいくつか！",
  tags: [],
  date: new Date("2026-04-26"),
  location: "東京流通センター 第2展示場1F え-32b",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/2048212022169670044",
    },
  ],
  catalog: [yohkoh, syngularity, aonote, esora_key],
};
