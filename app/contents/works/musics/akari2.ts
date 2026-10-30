import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const akari2: Music = {
  type: "music",
  id: "akari2",
  title: "灯 (校歌斉唱 ver.)",
  description: `
既リリース『灯』 (https://aotakeuma.com/akari) を、小樽潮風高校校歌という設定でリメイクしました。
`,
  tags: ["バラード"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "夏色花梨",
      role: "ボーカル",
    },
    {
      name: "小春六花",
      role: "ボーカル",
    },
    {
      name: "花隈千冬",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2026-11-01"),
  lyrics: `
仰げば銀河の距離近し
歩めば運河、汽笛響く
祝津の巌、臨む灯台
我らを見守る
青春・友情・艱難を共に

出会いも別れも必然で
だからこそ今が（この瞬間が）
輝く、集める、共鳴する心から
光、生み出す

響く音、我ら照らす灯が
いつか世界中を満たせるように
潮風の揺り籠の中、山際咲かす息吹に
駆け出す心は満天星
光る絆、我らなりの灯が
小さく確かな祈りたるように
次世代へ、光繋ぐ、希望の標と
世界を照らせ風高生

光る絆、我らなりの灯が
小さく確かな祈りたるように
次世代へ、光繋ぐ、希望の標と
世界を照らせ風高生

世界を咲かせ風高生
`,
};
