import type { Album } from "~/types";
import { syngularity_xfd } from "../videos/syngularity_xfd";

export const syngularity: Album = {
  type: "album",
  id: "syngularity",
  titlePrefix: "SyngUp! ファンメイドアルバム",
  title: "SyngUlarity!!!",
  description:
    "『学園アイドルマスター』のユニット・SyngUp!へのファンメイドアルバム",
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "企画、作詞、作曲、編曲、マスタリング",
    },
    {
      name: "Okgw",
      role: "企画、作詞",
    },
    {
      name: "とだな",
      role: "企画、作詞、小説",
    },
    {
      name: "kiki",
      role: "企画、イラスト、デザイン",
    },
  ],
  releaseDate: new Date("2025-12-31"),
  links: [],
  jacketImageUrl: "/images/jackets/syngularity.png",
  tracks: [], // TODO
  video: syngularity_xfd,
};
