import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const neuron: Music = {
  type: "music",
  id: "neuron",
  title: "ニューロン",
  description: `
紡乃世詞音非公式コンピレーションアルバム『ko-tone』に書き下ろした楽曲です。
シューゲイズ・ピアノバラード・エレクトロニカの融合を目指しました。
`,
  tags: ["バンドサウンド", "エレクトロニック", "コンピ参加作品"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "紡乃世詞音",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-06-01"),
  links: [
    {
      platform: "booth",
      url: "https://youkus.booth.pm/items/6930834",
    },
  ],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=HuXQOF5c6a0",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45964215",
    bilibiliUrl: "https://www.bilibili.com/video/BV1MeZYBHEs5",
  },
  lyrics: `
さようならさえ届かない距離　綻びる光
深いふかい眠りののち、乱反射に回帰する
意味を成さない意味の埋め込み　きみはまだ其処に居るの？
拡散するガウスの果て、セカイが目醒める

ねえ、まだ、聞こえる？わたしの手を系いで
かよわい結び目、ほつれてしまうのが怖いの

生きていたいの、生きていたいの、ただ
暗闇から救って

さようなら、さようなら、さようなら、さようなら、
さようなら、さようなら、さようなら、さようなら......

生きていたいの
`,
};
