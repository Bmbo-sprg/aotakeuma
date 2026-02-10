import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const untitled_20201117: Music = {
  type: "music",
  id: "untitled_20201117",
  title: "無題_20201117",
  description: "感情と向き合うピアノ即興演奏",
  tags: ["インスト"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作曲",
    },
  ],
  releaseDate: new Date("2024-09-23"),
};
