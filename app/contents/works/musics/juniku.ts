import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const juniku: Music = {
  type: "music",
  id: "juniku",
  title: "受肉 (wip)",
  description: `
(work in progress)
天馬手毬と祈りとピアノバラード
無色透名祭3 参加曲でした。
`,
  tags: ["バラード"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "天馬手毬",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-11-21"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    niconicoUrl: "https://www.nicovideo.jp/watch/so45521025",
  },
  lyrics: `
私の旅はここで終わり　手を差し伸べる者はいなくて
季節は進んでいく　何も知らぬ顔で朝が来る

誰かを愛せる人生だった　誰かを救える人生だった
自分のことだけは好きになれない　鏡を恐れるように生きる

産まれもった間違いが　あなたを傷つけないように
しゃらくさいこの祈りが　詞を薄めないように
ありきたり　それでいいと思えるような音と欠伸とせいかつ

朝焼けの光　罪を洗い流して今日もそれなりに祈ろうと思えるよ
私の旅はここで終わったよね？
愛おしかったものひとつだけ抱いて　新しい芽が開くその日を願おう
`,
};
