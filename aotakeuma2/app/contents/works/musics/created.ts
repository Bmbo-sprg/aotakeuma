import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const created: Music = {
  type: "music",
  id: "created",
  title: "201_Created",
  description: `
Sandbox的な夏だけで良い。
アコースティックとエレクトロニックを混ぜたアンビエントとポエトリー。
ぼかえり2024夏 参加曲でした。
`,
  tags: ["インスト", "エレクトロニック", "ボカコレ", "夏"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "花隈千冬",
      role: "ボーカル",
    },
    {
      name: "VOICEVOX 冥鳴ひまり",
      role: "ポエトリーリーディング",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=E-jT9ifou1w",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm43894765",
    bilibiliUrl: "https://www.bilibili.com/video/BV1NfaoekEwU",
  },
  lyrics: `
水底に沈む欠片達
名前も知らない大切な
未定義の穢れ無き祈りだけ
世界の始まりの産声

（世界創造に祈りを、生命と豊穣と我々の繁栄に最上級の感謝を
深い深い母なる海よ、その大きな躯体が人知を超える全ての知恵と記憶を納めるように
存在するもの、存在しうるもの、あなたの想像しうるものすべて、それらから命名/銘々/瞑々/冥鳴と謂う命名を剥奪せよ
あらゆる名付けの消えうせた暁に、言葉の要らない約束をあなたに捧げましょう）
`,
};
