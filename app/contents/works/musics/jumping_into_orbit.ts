import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const jumping_into_orbit: Music = {
  type: "music",
  id: "jumping_into_orbit",
  title: "Jumping into Orbit",
  description: `
Be the star!
宮舞モカと House
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
Monochromeの世界追い越して
Spotlightときめく方がmy way
Noisyな御託かき消して今夜はHi-Fi
言葉は要らない

Slap it down　うなってんだ
私はいつでも今日もTake 1
高まる拍動は誰にも負けない
Sync it up　君には私がいるからSo, be the star!
ついてこれるよね？連れていくから

永遠なんてきれいごとでも、いま限りは願って――
Don’t stop the music
Just dance the night away

快晴の夜空へ　I say, don’t hesitate
手を握ればもう怖くないよ
数千光年　Every step you’ve made
輝くんだ！私たちのMilky way

Go higher, jump higher, be the star!

Redshiftする世界追い越して
Spotlightときめく方がyour way
Signalは遠く途絶えた今夜はNo Wi-Fi
ふたりだけで〈Sync/Sink〉

Yeh, hold me tight　台本にない
激情、強い酒飲んだみたい？
高まる拍動は中性子のロンドさ
Catch the light　君には私がいるからSo, be the star!
ついてこれるよね？連れていくから

褪せることない記憶に祈る、ずっとこんな風に――
Don’t stop the music
Just dance all night along…

快晴のsolarへ　I say, don’t hesitate
手を握ればもう怖くないよ
数千光年　Step by step進め
輝くんだ！私たちのMilky way

Go higher, jump higher, be the star!
`,
};
