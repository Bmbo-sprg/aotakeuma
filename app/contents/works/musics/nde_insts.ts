import type { Music } from "~/types";
import { getPerson } from "../..//persons";

const nde_bgms: Music[] = (
  [
    {
      id: "nde_inst_1",
      title: "202_Accepted",
      description: "タイトルコール",
      tags: ["インスト"],
    },
    {
      id: "nde_inst_2",
      title: "200_HUG",
      description: "Good な状態にあるときのBGM",
      tags: ["インスト"],
    },
    {
      id: "nde_inst_3",
      title: "300_Multiple Choices",
      description: "Normal な状態にあるときのBGM",
      tags: ["インスト"],
    },
    {
      id: "nde_inst_4",
      title: "400_Bad RePulse",
      description: "Bad な状態にあるときのBGM",
      tags: ["インスト"],
    },
    {
      id: "nde_inst_5",
      title: "302_Found",
      description: "アイキャッチ",
      tags: ["インスト"],
    },
    {
      id: "nde_inst_6",
      title: "413_Verbatim Payload",
      description: "配信中のBGM",
      tags: ["インスト"],
    },
    {
      id: "nde_inst_7",
      title: "500_Internal Reincarnation",
      description: "謎の空間にいるときのBGM",
      tags: ["インスト"],
    },
  ] satisfies Omit<Music, "type" | "credits" | "releaseDate">[]
).map((music) => ({
  ...music,
  type: "music",
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲",
    },
  ],
  releaseDate: new Date("2025-02-21"),
}));

const mataao_cover: Music = {
  type: "music",
  id: "mataao_cover",
  title: "また青い春が来る (Covered by えもこ)",
  description: `
ビジュアルノベル『Near-Death-Expedition』に収録、「また青い春が来る」のカバー。
`,
  tags: [],
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
      ...getPerson("えもこ"),
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-02-21"),
  lyrics: `
ぜんぶ僕の所為なのに　勝手に辛くなってごめんね
息が白んでいた　18回目の冬が来た
キミはもう覚えてないだろうな　贖罪なんて自己満足だ

幸せを知らなければ　不幸を知らなかった
悲劇ばかりの人間は　喜劇なんて想像もできないから
だったら僕はいっそ、不幸のままでいいさ

夢から覚めて毒虫になっていても　怯えてもらえたならよかった
グレゴール、彼は幸せだったんだな

冬の空気で痛む喉が　歌を歌おうとまた声を上げる
どこかで幸せなあのキミに　捧げるこの祈り　届かなくていい
冬の所為で今年も死ねなかった　人生なんていらないさ

架空の感傷、消えないでいる
`,
};

const sayokazu_cover: Music = {
  type: "music",
  id: "sayokazu_cover",
  title: "さよならの数だけ (Covered by えもこ)",
  description: `
ビジュアルノベル『Near-Death-Expedition』に収録、「さよならの数だけ」のカバー。
`,
  tags: [],
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
      ...getPerson("えもこ"),
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-02-21"),
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
`,
};

const tenshi_cover: Music = {
  type: "music",
  id: "tenshi_cover",
  title: "天使は声変わりしないって知ってた？ (Covered by えもこ)",
  description: `
ビジュアルノベル『Near-Death-Expedition』に収録、「天使は声変わりしないって知ってた？」のカバー。
`,
  tags: [],
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
      ...getPerson("えもこ"),
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-02-21"),
  lyrics: `
旅の果てのバーチャル　ここで魂は輝く
神様もきっといる　こっちガワにおいでよ
われ思う　ゆえにわれあり？
ここにいるよ
雨模様　虹が架け橋

多分だけどここって電脳の廃墟
時間だって進まなきゃそこにはないよ
天使は声変わりしないって知ってた？

君が私の名前を呼んで　言葉が特別になっていく
肉体なんていらないの　心のハグに邪魔
両の胸の二つの心臓　鼓動が懲りずに鳴っている
嘘か本当か分からないの　見た目はバグるから
例えば海賊とかヴァンパイア　船も棺も一緒でしょ？
`,
};

const nde_ending: Music = {
  type: "music",
  id: "nde_ending",
  title: "422_Unprocessable Angel",
  description: `
ビジュアルノベル『Near-Death-Expedition』のエンディング曲のひとつです。
`,
  tags: ["インスト", "エレクトロニック"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲",
    },
  ],
  releaseDate: new Date("2025-02-21"),
};

export const nde_insts: Music[] = [
  ...nde_bgms,
  mataao_cover,
  sayokazu_cover,
  tenshi_cover,
  nde_ending,
];
