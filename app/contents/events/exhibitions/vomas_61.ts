import { aonote } from "../../works/albums/aonote";
import { digimoca } from "../../works/albums/digimoca";
import { kisetsu } from "../../works/albums/kisetsu";
import { snfe } from "../../works/albums/snfe";
import { tnftep1 } from "../../works/albums/tnftep1";
import { ubugoe } from "../../works/albums/ubugoe";
import { esora_key } from "../../works/esora_key";
import type { Exhibition } from "~/types";

export const vomas_61: Exhibition = {
  type: "exhibition",
  id: "vomas_61",
  title: "THE VOC@LOiD M@STER 61",
  description: "初めてヌヌぬい（非売品！！！）を連れていきました",
  tags: [],
  date: new Date("2025-11-29"),
  location: "東京流通センター 第一展示場 G12",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1994590309104455990",
    },
  ],
  catalog: [aonote, digimoca, kisetsu, tnftep1, ubugoe, snfe, esora_key],
};
