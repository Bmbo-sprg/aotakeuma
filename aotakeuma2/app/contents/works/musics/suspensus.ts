import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const suspensus: Music = {
  type: "music",
  id: "suspensus",
  title: "Suspensus",
  description: `
所属していたサークル『ニコニコ系総合創作サークル C.2.B project』によるコンピレーションアルバム『C.2.B Compilation 7 -室戸みあのために-』に書き下ろした楽曲です。
篝火さんとの合作です。音ゲー的な要素を取り込んだ歌モノです。
`,
  tags: ["エレクトロニック", "コンピ参加作品"],
  team: "篝火 vs 竹馬あお",
  credits: [
    {
      ...getPerson("篝火"),
      role: "作詞、作曲、編曲",
    },
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲",
    },
    {
      name: "室戸みあ",
      role: "ボーカル",
      socialLinks: [
        {
          platform: "website",
          url: "https://c2bproject.web.fc2.com/muroto-mia.html",
        },
      ],
    },
  ],
  releaseDate: new Date("2024-11-20"),
  links: [
    {
      platform: "niconico", // XFD
      url: "https://www.nicovideo.jp/watch/sm44317904",
    },
  ],
  lyrics: ``, // TODO
};
