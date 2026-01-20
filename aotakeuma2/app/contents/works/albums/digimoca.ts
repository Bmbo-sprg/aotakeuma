import type { Album } from "~/types";
import { digimoca_xfd } from "../videos/digimoca_xfd";

export const digimoca: Album = {
  type: "album",
  id: "digimoca",
  titlePrefix: "竹馬あお EP",
  title: "でぃじたる・もかちーの！",
  description: "ひとりといっぴき、宇宙を旅する　宮舞モカ×クラブミュージックEP",
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
    {
      name: "ぺんぎん",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2025-09-14"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/7468592",
    },
  ],
  jacketImageUrl: "/images/jackets/digimoca.png",
  tracks: [], // TODO
  video: digimoca_xfd,
};
