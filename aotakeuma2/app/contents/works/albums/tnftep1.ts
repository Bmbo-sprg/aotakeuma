import type { Album } from "~/types";
import { tnftep1_xfd } from "../videos/tnftep1_xfd";

export const tnftep1: Album = {
  type: "album",
  id: "tnftep1",
  titlePrefix: "竹馬あお EP",
  title: "ふたつの夏日に餞を",
  description: "双葉湊音×紡乃世詞音のひと夏を描いた小品集",
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
    {
      name: "ねこねこ",
      role: "イラスト",
    },
    {
      name: "ぺんぎん",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2025-02-01"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/6573328",
    },
  ],
  jacketImageUrl: "/images/jackets/tnftep1.png",
  tracks: [], // TODO
  video: tnftep1_xfd,
};
