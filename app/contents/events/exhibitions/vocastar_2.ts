import { digimoca } from "../../works/albums/digimoca";
import { kisetsu } from "../../works/albums/kisetsu";
import { snfe } from "../../works/albums/snfe";
import { tnftep1 } from "../../works/albums/tnftep1";
import { ubugoe } from "../../works/albums/ubugoe";
import { esora_key } from "../../works/esora_key";
import type { Exhibition } from "~/types";

export const vocastar_2: Exhibition = {
  type: "exhibition",
  id: "vocastar_2",
  title: "超VOCASTAR2",
  description: `
韓国にて開催された即売会「超VOCASTAR2」に参加しました。
日本の即売会と異なる雰囲気を体験できてめっちゃ楽しかったです。
`,
  tags: [],
  date: new Date("2025-10-03"),
  location: "KINTEX Voc 105",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1973929267106099418",
    },
  ],
  catalog: [digimoca, kisetsu, tnftep1, ubugoe, snfe, esora_key],
};
