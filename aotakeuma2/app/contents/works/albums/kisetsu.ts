import type { Album } from "~/types";
import { kisetsu_xfd } from "../videos/kisetsu_xfd";

export const kisetsu: Album = {
  type: "album",
  id: "kisetsu",
  titlePrefix: "竹馬あお EP",
  title: "季節は死んだりしないから",
  description: `
あの夏、僕は海辺の町で、宝石のような日々を過ごした。
原作小説: ぺんぎん, 佐薙概念『季節は死んだりしないから』(2024/05/03 発行)`,
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
  ],
  releaseDate: new Date("2025-06-01"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/7468520",
    },
  ],
  jacketImageUrl: "/images/jackets/kisetsu.png",
  tracks: [], // TODO
  video: kisetsu_xfd,
};
