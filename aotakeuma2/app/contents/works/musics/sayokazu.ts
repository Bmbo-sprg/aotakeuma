import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const sayokazu: Music = {
  type: "music",
  id: "sayokazu",
  title: "さよならの数だけ",
  description: `
ビジュアルノベル『ハルジオンは雨と咲く』のエンディング曲のひとつです。
アコースティックでデカく切なく
`,
  tags: ["バラード", "『縋想』プロジェクト"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲",
    },
    {
      ...getPerson("佐薙概念"),
      role: "作詞",
    },
    {
      name: "深水さや",
      role: "ボーカル",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/120931042",
        },
        {
          platform: "youtube",
          url: "https://youtube.com/@sayausa222",
        },
        {
          platform: "twitter",
          url: "https://x.com/sayausa222",
        },
      ],
    },
    {
      name: "HATTY.G",
      role: "ミックス",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/122948139",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/channel/UChZovyW3a4Ko1MaOfBVjArQ",
        },
        {
          platform: "twitter",
          url: "https://x.com/Hatty_g_P",
        },
      ],
    },
    {
      name: "花隈千冬",
      role: "ボーカル (『産声、滲んだきみの青』収録版)",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        ...getPerson("犬吠埼いつき"),
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=zUa1sxgfnoY",
  },
  lyrics: `
私だけが幸せになれない　満たされちゃいけない
そんなこと、分かってるけれど
いつだって世界にひとりぼっち　この言葉に意味はあるの

別に愛なんていらないわ　君の隣で眠りたかっただけ
忘れようとするたび、強く思い描く
妄想で触れるあなたは、私の感触しかしないから

今も好きな人の
名前に鍵をかけて守る
君の鍵になれなかった
それだけなんだよ　ただそれだけだったんだよ

私だけが幸せにならない　心の穴、塞がんない
そんなこと、決めてみたけれど
持ってる想い出はこれっぽっち　透明なのに何も見えないの

やっぱ意味なんていらないわ
この気持ちの名前欲しかっただけ
眠ろうとして、また目が覚める
水死体と同じ発音、君の恋の宣言は

君が好きな曲の
コードを難なく押さえる
そんな私になれなかった
それだけなんだよ　ただそれだけだったんだよ

強く抱きしめていて
心からもう何も、漏れ出さないように
`,
};
