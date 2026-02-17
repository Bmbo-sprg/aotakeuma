import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const stelia: Music = {
  type: "music",
  id: "stelia",
  title: "StelIa",
  description: `
リズムゲーム『HARCA』への書き下ろし楽曲をお手伝いしました。
しろんさんとの合作です。ピアノの気持ち良い Artcore
`,
  tags: ["提供作品", "エレクトロニック", "合作参加作品"],
  team: "しろん vs 竹馬あお",
  credits: [
    {
      name: "しろん",
      role: "作曲、編曲",
      socialLinks: [
        {
          platform: "twitter",
          url: "https://x.com/Eatandvomit989",
        },
      ],
    },
    {
      ...getPerson("竹馬あお"),
      role: "ちょっと手伝った",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  links: [
    {
      platform: "youtube", // XFD
      url: "https://www.youtube.com/watch?v=CnytPD2wIpI",
    },
  ],
};
