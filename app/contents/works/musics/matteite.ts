import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const matteite: Music = {
  type: "music",
  id: "matteite",
  title: "待っていて、タイムカプセル",
  description: `
「60分調声大会」によるコンピレーションアルバム『T1me 60es On』に書き下ろした楽曲です。
音楽について問うバラード曲
`,
  tags: ["バラード", "バンドサウンド", "コンピ参加作品"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "夢ノ結唱 POPY",
      role: "ボーカル",
    },
    {
      name: "OИE",
      role: "ボーカル",
    },
    {
      name: "セブヶ崎詠人",
      role: "調声",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/31483136",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/@SevgasakiEight",
        },
        {
          platform: "twitter",
          url: "https://x.com/SevgasakiEight",
        },
      ],
    },
    {
      name: "光",
      role: "調声",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/48871660",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/@hikaru_so",
        },
        {
          platform: "twitter",
          url: "https://x.com/hikaru_so_",
        },
      ],
    },
  ],
  releaseDate: new Date("2026-07-25"),
  links: [],
  video: {
    credits: [],
    niconicoUrl: "https://www.nicovideo.jp/watch/sm46508904",
  },
  lyrics: `
過去となっていく、澄みきった朝焼け
帰れない所にまた帰ってきた
鈍行はトンネルへ、わたしを置いてって、走ってく

未来に埋め込んだ、あの日の、波打った
記憶の残滓が、ほら、また突き刺さる
もうそぐわない伸びきった背丈
一歩ずつ辿り着ける距離、わたしは

忘れないでいて良かった？忘れていたほうが良かったのかな？
あの日の約束、大きくなったろうその手のひら
進めなくて、進めなくて、啜り泣きながら生まれた
鼓動が、振動が、「音楽」なんだろうか？
振り向いていても良かった？振り向くことすらダメだったかな？
あの日の約束、青春の証というのやら
進めなくて、進めなくて、塞いだ眩しい光の
差す先は、差す先は

過去となっていく、澄みきった朝焼け
どうしようもないまままた目を覚ました
駆ける季節は、わたしを待っていてくれるかな
未来に託した、
明日に託した、
音楽に託した、
あなたに託した、
`,
};
