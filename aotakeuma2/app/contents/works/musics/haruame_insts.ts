import type { Music } from "~/types";

const haruame_bgms: Music[] = (
  [
    {
      id: "haruame_inst_1",
      title: "袖笠",
      description: "神楽鈴の音とともに物語のはじまりを飾るタイトル画面BGM",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_2",
      title: "五月晴",
      description: "日常BGM。大学でのシーンで多用",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_3",
      title: "ペトリコール",
      description: "日常BGM。ゆったり",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_4",
      title: "初めてのこと",
      description: "日常BGM。結夏との関係が進展する感じ",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_5",
      title: "青くて美しい日",
      description: "日常BGM。カフェみたいな雰囲気",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_6",
      title: "クリスマス・マーケット",
      description: "日常BGM。クリスマスの雰囲気",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_7",
      title: "アフターダーク",
      description: "日常BGM。夜の雰囲気と停滞感",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_8",
      title: "言えなかった想い",
      description: "シリアスシーンBGM。物語後半の不穏な感じ",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_9",
      title: "記憶と走馬灯",
      description: "シリアスシーンBGM。思考と推理と回想",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_10",
      title: "海の見える町",
      description: "和風なBGM。謎に包まれた田舎の港町",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_11",
      title: "追憶の中に",
      description: "スチルシーンBGM。親密さと感傷",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_12",
      title: "人魚の血",
      description: "シリアスシーンBGM。ゆっくりと真実に迫る",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_13",
      title: "Erigeron",
      description: "シリアスシーンBGM。混乱と絶望",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_14",
      title: "Halcyon",
      description: "スチルシーンBGM。美しさ",
      tags: ["インスト"],
    },
    {
      id: "haruame_inst_15",
      title: "やがて雪へと",
      description: "シリアスシーンBGM。終盤の静けさと真実",
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
  releaseDate: new Date("2024-04-28"),
}));

const haruame_pianos: Music[] = (
  [
    {
      id: "hakumeikousen_piano",
      title: "薄命光線 - Piano ver.",
      description: "エンディング曲『薄命光線』のピアノアレンジ",
      tags: ["インスト"],
    },
    {
      id: "haikei_anohi_piano",
      title: "拝啓あの日未熟だった青くて痛い僕ら - Piano ver.",
      description:
        "エンディング曲『拝啓あの日未熟だった青くて痛い僕ら』のピアノアレンジ",
      tags: ["インスト"],
    },
    {
      id: "sayokazu_piano",
      title: "さよならの数だけ - Piano ver.",
      description: "エンディング曲『さよならの数だけ』のピアノアレンジ",
      tags: ["インスト"],
    },
    {
      id: "reminiscence_in_the_rain_piano",
      title: "Reminiscence in the Rain - Piano ver.",
      description: "エンディング曲『Reminiscence in the Rain』のピアノアレンジ",
      tags: ["インスト"],
    },
  ] satisfies Omit<Music, "type" | "credits" | "releaseDate">[]
).map((music) => ({
  ...music,
  type: "music",
  credits: [
    {
      name: "竹馬あお",
      role: "作曲",
    },
    {
      name: "nion",
      role: "ピアノ (アレンジ、演奏)",
    },
  ],
  releaseDate: new Date("2024-04-28"),
}));

export const haruame_insts: Music[] = [...haruame_bgms, ...haruame_pianos];
