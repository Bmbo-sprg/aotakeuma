import { aonote } from "../../works/albums/aonote";
import { digimoca } from "../../works/albums/digimoca";
import { kisetsu } from "../../works/albums/kisetsu";
import { snfe } from "../../works/albums/snfe";
import { tnftep1 } from "../../works/albums/tnftep1";
import { ubugoe } from "../../works/albums/ubugoe";
import { esora_key } from "../../works/esora_key";
import type { Exhibition } from "~/types";

export const m3_2025_autumn: Exhibition = {
  type: "exhibition",
  id: "m3_2025_autumn",
  title: "M3-2025秋",
  description: "竹馬あお 4th Album『あおいろがぼくたちの音』を頒布しました。",
  tags: [],
  date: new Date("2025-10-26"),
  location: "東京流通センター 第二展示場2F ケ-07a",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1982256665052188970",
    },
  ],
  catalog: [aonote, digimoca, kisetsu, tnftep1, ubugoe, snfe, esora_key],
};
