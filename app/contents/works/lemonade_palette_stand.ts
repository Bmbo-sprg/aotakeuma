import type { OtherWork } from "~/types";
import { getPerson } from "../persons";

export const lemonade_palette_stand: OtherWork = {
  type: "other",
  id: "lemonade_palette_stand",
  title: "『Lemonade/Palette』双葉湊音×紡乃世詞音アクリルジオラマ",
  description: "楽曲『Lemonade/Palette』のグッズです",
  tags: [],
  credits: [
    {
      ...getPerson("ねこねこ"),
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2024-11-20"),
};
