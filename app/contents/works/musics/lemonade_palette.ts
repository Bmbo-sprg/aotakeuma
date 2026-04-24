import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const lemonade_palette: Music = {
  type: "music",
  id: "lemonade_palette",
  title: "Lemonade/Palette",
  description: `
つのふた爽やか夏ロックです。
キラハピ2024 双葉湊音賞 をいただきました。ありがとうございます！
`,
  tags: ["キラハピ", "夏", "バンドサウンド"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "双葉湊音",
      role: "ボーカル",
    },
    {
      name: "紡乃世詞音",
      role: "ボーカル",
    },
    {
      ...getPerson("しもぞの"),
      role: "ギター",
    },
    {
      ...getPerson("Nui"),
      role: "ベース",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  video: {
    credits: [
      {
        name: "あるすーか",
        role: "映像制作",
        socialLinks: [
          {
            platform: "website",
            url: "https://alsuhker.tumblr.com/",
          },
          {
            platform: "pixiv",
            url: "https://www.pixiv.net/users/13201282",
          },
          {
            platform: "twitter",
            url: "http://x.com/alsuhker",
          },
        ],
      },
      {
        ...getPerson("ねこねこ"),
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=NJrryQ9PpgU",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm43878561",
    bilibiliUrl: "https://www.bilibili.com/video/BV1x7421d7PX",
  },
  lyrics: `
きみと紡いだ詞の葉、儚く消えても――
（わたしは、ここにいるよ、ずっと）

ラムネ瓶の中に澄んだ世界
甘酸っぱい回想、鳴らすビー玉
パレットに溢れる夏の色彩
あの日の記憶、君の笑顔で満ちた

駆け抜けた坂道、取り替えっこしたヘアピン
膝に猫を乗せてした他愛ないおはなし
永遠なんてない、そんなこと分かってるけど

きみと紡いだ詞の葉、儚く消えても
夏空の向こうでずっと待ってるよ
きみと奏でた詞の葉、青色の片隅で花のように
音と／蕾を咲かせて
音が／ひざしに咲って
交わった運命を忘れてやらないよ

ラムネ瓶の中に澄んだ世界
きっと僕らの全部が詰まってるんだね
パレットに溢れる夏でさえも
きっと僕たちの全てを描ききれない

昼下がり、バス停、分け合ったイヤホン
青春特急は僕らをどこに連れて行くの
永遠なんてない、そんなこと分かってたんだ

きみと紡いだ詞の葉、儚く消えても
思い出は誰にも壊せないから！
きみと奏でた詞の葉、キャンバスいっぱいの想い伝えるよ
音と／五次元を越えて
音が／ふたりで笑って
交わった運命を忘れてやらないよ
`,
};
