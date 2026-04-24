import { kisetsu } from "../../works/albums/kisetsu";
import { tnftep1 } from "../../works/albums/tnftep1";
import { ubugoe } from "../../works/albums/ubugoe";
import { esora_key } from "../../works/esora_key";
import { lemonade_palette_stand } from "../../works/lemonade_palette_stand";
import type { Exhibition } from "~/types";

export const futasute_2: Exhibition = {
  type: "exhibition",
  id: "futasute_2",
  title: "ふたばすてっぷ2",
  description: "EP『季節は死んだりしないから』を頒布しました。",
  tags: [],
  date: new Date("2025-06-01"),
  location: "川崎市産業振興会館 A-17",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1929013476803973449",
    },
  ],
  catalog: [kisetsu, tnftep1, ubugoe, lemonade_palette_stand, esora_key],
};
