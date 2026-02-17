import type { OtherWork } from "~/types";
import { getPerson } from "../persons";

export const esora_key: OtherWork = {
  type: "other",
  id: "esora_key",
  title: "『絵空とうたかた』双葉湊音おでかけアクキー",
  description: "楽曲『絵空とうたかた』のグッズです",
  tags: [],
  credits: [
    {
      ...getPerson("ぺんぎん"),
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2024-11-20"),
};
