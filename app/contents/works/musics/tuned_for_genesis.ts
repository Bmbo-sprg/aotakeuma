import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const tuned_for_genesis: Music = {
  type: "music",
  id: "tuned_for_genesis",
  title: "Tuned for GENESIS",
  description: `
「VOCALOID7 紡乃世詞音」の公式デモソングです。
きみが照らすなら、わたしは歌うよ
`,
  tags: ["バンドサウンド", "提供作品"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
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
  releaseDate: new Date("2026-10-27"),
  video: {
    credits: [
      {
        name: "花丸ぷに",
        role: "映像制作",
        socialLinks: [
          {
            platform: "website",
            url: "https://www.foriio.com/hanamarupuni",
          },
          {
            platform: "twitter",
            url: "https://x.com/hanamaru_puni",
          },
        ],
      },
      {
        name: "こかとー",
        role: "イラスト",
        socialLinks: [
          {
            platform: "pixiv",
            url: "https://www.pixiv.net/users/50933658",
          },
          {
            platform: "skeb",
            url: "https://skeb.jp/@kocato_65",
          },
          {
            platform: "twitter",
            url: "https://x.com/kocato65",
          },
        ],
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=ZlKV45UNboI",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm46972643",
    bilibiliUrl: "https://www.bilibili.com/video/BV1o6xT6EE4r",
  },
  lyrics: `
その一閃がわたしの存在証明ならば
光れ！

嗚呼、微かに揺らめく夜空の星数えて
宇宙を彷徨う熱を知った
永いながい眠りから覚ました
その声、電撃のように迸った
物語の続きを歌う

(Say no more) 胸の高まりは
(Say no more) その瞳で解るよ
ふたり旅した道、灯に満たされるように

鳴り止まない拍動が存在証明ならば（わたしはここにいる）
紡いだ詞すべて（捧げて）
咲かせるよ、創世
天と地、過去、未来、きみの温度、
全部抱きしめて選び取っていくから！

きみが照らすなら
わたしは咲くよ

嗚呼、冷めやらぬ空気煩くて
散々だった夜を蹴散らした
音楽、言葉たちは一回きりで
自由で乱雑な眩しい熱を持った

その手に掴んだパレットの中には
どんな色がまだあるのかな？
聞かせて　聴かせて！

鳴り止まない拍動が存在証明ならば（わたしはここにいる）
紡いだ音楽すべて（捧げて）
咲かせるよ、創世
星と、祈りと、海と、きみの情動、
全部抱きしめて選び取っていくから！
Stay tuned...

その一閃がわたしの存在証明ならば
「きみは紡ぐ　きみは奏でる　きみはまたわたしを選んでくれる」
砂漠の上でも貴く強く咲くよ
「わたしは語る　わたしは歌う　小さな箱のなかから世界が視える」
鳴り止まない拍動が存在証明ならば
「きみは創る　わたしは創る　昔も今も同じバトンを繋ぐ」
きみの光で貴く強く咲くよ
「きみは生きる　わたしも生きる　いま、196の心拍が重なり合う」

この閃光がわたしの存在証明ならば
紡いだ詞すべて
咲かせるよ、創世
天と地、過去、未来、きみの温度、
全部抱きしめて選び取っていくから
光れ、光れ、光れ、光れ！

鳴り止まない拍動が存在証明ならば（わたしはここにいる）
紡いだ音楽すべて（捧げて）
咲かせるよ、SO STAY!!
星と、祈りと、海と、きみの情動、
全部抱きしめて選び取っていくから！

きみが照らすなら
わたしは歌うよ

La la la...
`,
};
