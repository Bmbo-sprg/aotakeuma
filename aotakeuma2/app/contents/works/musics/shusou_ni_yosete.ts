import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const shusou_ni_yosete: Music = {
  type: "music",
  id: "shusou_ni_yosete",
  title: "終奏に寄せて",
  description: `
吉田音楽製作所 合作コンピ2023参加曲です。
作曲で参加しました。
`,
  tags: ["合作参加作品", "バンドサウンド", "夏"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲",
    },
    {
      name: "楠 付点 四分休符",
      role: "作詞",
    },
    {
      name: "りせか",
      role: "編曲、ミックス",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/95695721",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/@nana_riika",
        },
        {
          platform: "bilibili",
          url: "https://space.bilibili.com/3493289651079317",
        },
        {
          platform: "twitter",
          url: "https://x.com/nana_riika",
        },
      ],
    },
    {
      name: "なあむ",
      role: "調声",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/33475469",
        },
        {
          platform: "twitter",
          url: "https://x.com/flumptic",
        },
      ],
    },
    {
      ...getPerson("しもぞの"),
      role: "ギター、ベース",
    },
  ],
  team: "サイダーエンダー",
  releaseDate: new Date("2023-10-22"),
  links: [
    {
      platform: "bandcamp",
      url: "https://kitchon.bandcamp.com/track/--265",
    },
  ],
  lyrics: `
陽炎揺れてかすんだ少年の日々
戻らないと知っても縋る僕らに
続くセカイの鼓動は無邪気に響いた
――「置いていかないで」

ねえ　神様、どうかこの唄が終わるまでに
青く光る夢から醒めるまでに
強くなれなかった僕らにやさしい嘘を

「終奏に寄せて」

滲みだす影見送って　「また明日」と手を振った
夕焼けた空が照らす　淡い今日が終わってゆく
夏枯れの青はいつも　僕らを待ってはくれない
閉じ込めたままの日々が　胸を刺す

色水に溶けていった少年の日々
僕だけが大切に仕舞ったストーリー
響くセカイの鼓動は無情に告げた
――「報われないね」

ああ　「しあわせ」なんて僕はきっといらないから
不器用なままでも唄い続けよう
強くなれなかった僕らが進めるように

鳴りやまないでよ

生温い風が撫でた火照る頬を弾ませながら
何でもない話ばかり言った　秘密の居場所
炎天下繋いだ手と手　笑い合って睨みつけた太陽
眩しくて目を逸らしたこと思い出した

気の抜けたラムネも　どうしてだろう
捨てられなくて　飲み干したんだ

夏が通り過ぎてゆく　抱えた思い連れ去ってしまいながら
夕立が洗い流す
ああ　ヒグラシが消えても　夕焼け影を伸ばしても
忘れてなんかやらない　僕らがいたあの夏の日

額縁に収めて飾った夏の日々
終わるからこそ美しい物語
告げるセカイの鼓動は今日も刻んだ
――僕らを載せて

さあ　花火が散るように音が鳴りやんでも
強くなれないままの僕らでも
青く光るこの夏空に手を伸ばそう

「終奏に寄せて」
`,
};
