import type { Game } from "~/types";

export const harca: Game = {
  type: "game",
  id: "harca",
  title: "HARCA",
  description: `
HARCAは、自作の楽曲と譜面をアップロードし、またアップロードされた作品を遊ぶことができる、リズムゲームプラットフォームです。
開発・サウンド・譜面制作などを担当しています。
`,
  tags: [],
  team: "HARCA project",
  credits: [],
  releaseDate: new Date("2025-01-24"),
  links: [
    {
      platform: "website",
      url: "https://harca.jp",
    },
    {
      platform: "steam",
      url: "https://store.steampowered.com/app/3328530/HARCA/",
    },
  ],
  jacketImageUrl: "/images/jackets/harca.png",
};
