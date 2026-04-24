import { digimoca } from "../../works/albums/digimoca";
import { kisetsu } from "../../works/albums/kisetsu";
import { snfe } from "../../works/albums/snfe";
import { tnftep1 } from "../../works/albums/tnftep1";
import { ubugoe } from "../../works/albums/ubugoe";
import { lemonade_palette_stand } from "../../works/lemonade_palette_stand";
import type { Exhibition } from "~/types";

export const kowane_5: Exhibition = {
  type: "exhibition",
  id: "kowane_5",
  title: "声音の宴 5次会",
  description: "EP『でぃじたる・もかちーの！』を頒布しました。",
  tags: [],
  date: new Date("2025-09-14"),
  location: "けいはんなプラザ 1F-D07",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1967055560106537044",
    },
  ],
  catalog: [digimoca, kisetsu, tnftep1, ubugoe, snfe, lemonade_palette_stand],
};
