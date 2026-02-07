import type { Music } from "~/types";

export const tsuisou_insts: Music[] = (
  [
    {
      id: "tsuisou_inst_1",
      title: "やがて点滅する信号機、綻びる少女の幻想",
      description: "Artcore 習作",
      tags: ["インスト", "エレクトロニック"],
    },
    {
      id: "tsuisou_inst_2",
      title: "オートセグメンタル・ディフュージョン",
      description: "interlude",
      tags: ["インスト"],
    },
    {
      id: "tsuisou_inst_3",
      title: "La Fille aux Cheveux Noirs",
      description: "ピアノ即興演奏の習作",
      tags: ["インスト"],
    },
  ] satisfies Omit<Music, "type" | "credits" | "releaseDate">[]
).map((music) => ({
  ...music,
  type: "music",
  credits: [
    {
      name: "竹馬あお",
      role: "作曲、編曲",
    },
  ],
  releaseDate: new Date("2022-01-30"),
}));
