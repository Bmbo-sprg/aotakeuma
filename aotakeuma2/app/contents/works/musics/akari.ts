import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const akari: Music = {
  type: "music",
  id: "akari",
  title: "灯",
  description: `
不思議な力で小樽潮高に闖入した湊音・詞音。花梨・六花・千冬とどんな日常を奏でるのか......！！？
キラハピ2025 参加曲でした。コンファメ進行の沁みる王道アイドルソング
`,
  tags: ["アイドル", "キラハピ"],
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
  releaseDate: new Date("2025-06-01"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        name: "戌田ハチ",
        role: "イラスト (立ち絵をお借りしました)",
        socialLinks: [
          {
            platform: "niconico",
            url: "https://www.nicovideo.jp/user/25175805",
          },
          {
            platform: "pixiv",
            url: "https://www.pixiv.net/users/4173422",
          },
          {
            platform: "skeb",
            url: "https://skeb.jp/@inuhati783",
          },
          {
            platform: "twitter",
            url: "https://x.com/inuhati783",
          },
        ],
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=i1hReuCCw_8",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45059082",
    bilibiliUrl: "https://www.bilibili.com/video/BV1PdTYzzEXQ",
  },
  lyrics: `
響く音、ぼくら照らす灯りが
いつか、世界じゅうを満たせるように

「青春」って大げさな名前もいらない日々
艱難辛苦の道　音を鳴らしたら全部全部ＯＫ！
「友情」だけでいい、ファンシーな奇跡なんて
いらない！どんな壁も音を鳴らしたら全部全部４０４！

「アルペジオ弾けないけどどうしよう…」
「青春パワーコード弾きでＧＯ！！」
いつもより賑やかな放課後　

「なんかマイクが入らない…」
「ここを抜いてみたら…ギャーーー！！」
５人で出す音も悪くないね

破天荒でハチャメチャな歩幅が
偶然じゃないレゾナンスを奏でて

響く音、ぼくら照らす灯りが
いつか、世界じゅうを満たせるように
「頑張ろう！」って月並みの言葉でもじゅうぶん！
１、２、３で駆け出すココロが１００点だね！！

光るキズナ、ぼくたちの灯りで
いつか、世界が満たされるように
「精一杯！」が「かわいい」ねってみんな分かってんじゃん！
セカイを繋げるおまじない

響く音、ぼくら照らす灯りが
いつか、世界じゅうを満たせるように
湊音詞音花梨六花千冬でどんでん返しの日常を
いつかキミもこっち側においでよ！
`,
};
