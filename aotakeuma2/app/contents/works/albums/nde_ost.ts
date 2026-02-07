import type { Album } from "~/types";
import { nde_insts } from "../musics/nde_insts";

export const nde_ost: Album = {
  type: "album",
  id: "nde_ost",
  title: "Near-Death-Expedition Soundtrack",
  description:
    "ビジュアルノベル『Near-Death-Expedition』のオリジナルサウンドトラック",
  tags: ["エレクトロニック", "『縋想』プロジェクト"],
  team: "『縋想』プロジェクト",
  credits: [
    {
      name: "竹馬あお",
      role: "作曲、編曲、マスタリング",
    },
    {
      name: "佐薙概念",
      role: "作詞",
    },
    {
      name: "犬吠埼いつき",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2025-02-21"),
  links: [
    {
      platform: "steam",
      url: "https://store.steampowered.com/app/3420240/NearDeathExpedition_Soundtrack/?l=japanese",
    },
  ],
  jacketImageUrl: "/images/jackets/nde_ost.png",
  tracks: [...nde_insts],
};
