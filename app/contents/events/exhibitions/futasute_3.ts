import { aonote } from "../../works/albums/aonote";
import { yohkoh } from "../../works/albums/yohkoh";
import { esora_key } from "../../works/esora_key";
import type { Exhibition } from "~/types";

export const futasute_3: Exhibition = {
  type: "exhibition",
  id: "futasute_3",
  title: "ふたばすてっぷ3",
  description: "EP『陽光』を頒布しました。",
  tags: [],
  date: new Date("2026-03-29"),
  location: "東京たま未来メッセ 展示室 せ-24",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/2038080821152866355",
    },
  ],
  catalog: [yohkoh, aonote, esora_key],
};
