import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const nyanverse: Music = {
  type: "music",
  id: "nyanverse",
  title: "にゃんばーす！",
  description: `
Never end!!
宮舞モカと Drum n Bass
`,
  tags: ["エレクトロニック"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "宮舞モカ",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-09-14"),
  lyrics: `
めくるめく光と影とDnB
Protostar、産まれたばかりだね
名前のない音楽が今夜
鳴り響いてんだ

ひとりといっぴき、寂しくないよ
Vibe on our beats、同期してるんだから
フロア、ここは醒める夢なのか？
今さらdon’t matter

ねえ、ワトソン！
大丈夫、踊るよ
未来光円錐の果てまで、いけるよ

Never end!!
永遠はいつも今日から繋がる
ポラリス、溢れる光が導く
大切はきっと明日も輝くさ
Our universe!!

眩しすぎたsupernovaの波動も
秘めたるasteroidの機運も
名前のない周波数がいつも
鳴り響いてんだ

ひとりといっぴき、寂しくないよ
So lit our beats、君がそう望むなら
フロア、このざわめきは恋なのか？
今さらdon’t matter

ねえ、ワトソン！
大丈夫、踊るよ
心躍るほう、急行が待ってるよ

Never end…

Never end!!
永遠はいつも今日から繋がる
ポラリス、溢れる光が導く
大切はきっと明日も輝くさ
Our universe, universe!!
`,
};
