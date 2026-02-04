import type { Music } from "~/types";

export const last_citadel: Music = {
  type: "music",
  id: "last_citadel",
  title: "Last Citadel",
  description: `
リズムゲーム『HARCA』に書き下ろした楽曲です。Hardcore です。
`,
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "作曲、編曲",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  links: [
    {
      platform: "soundcloud",
      url: "https://soundcloud.com/aotakeuma/last-citadel",
    },
    {
      platform: "bandcamp",
      url: "https://harca.bandcamp.com/track/last-citadel",
    },
  ],
};
