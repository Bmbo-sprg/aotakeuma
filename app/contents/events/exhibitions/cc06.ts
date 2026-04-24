import { lemonade_palette_stand } from "../../works/lemonade_palette_stand";
import { bros } from "../../works/albums/bros";
import { haruame_ost } from "../../works/albums/haruame_ost";
import { snfe } from "../../works/albums/snfe";
import { ubugoe } from "../../works/albums/ubugoe";
import { esora_key } from "../../works/esora_key";
import type { Exhibition, OtherWork } from "~/types";

const haruame_book: OtherWork = {
  type: "other",
  id: "haruame_book",
  title: "ハルジオンは雨と咲く メモリアルブック",
  description:
    "ビジュアルノベル『ハルジオンは雨と咲く』のメモリアルブックです。",
  tags: ["『縋想』プロジェクト"],
  team: "『縋想』プロジェクト",
  credits: [],
  releaseDate: new Date("2024-08-12"),
};

export const cc06: Exhibition = {
  type: "exhibition",
  id: "cc06",
  title: "Comic Community 06",
  description:
    "京都大学11月祭にて開催された即売会「Comic Community 06」に参加しました。",
  tags: [],
  date: new Date("2024-11-20"),
  location: "京都大学 総合研究9号館W301講義室",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/1858122302183125095",
    },
  ],
  catalog: [
    bros,
    ubugoe,
    snfe,
    esora_key,
    lemonade_palette_stand,
    haruame_ost,
    haruame_book,
  ],
};
