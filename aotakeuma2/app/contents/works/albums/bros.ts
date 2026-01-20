import type { Album } from "~/types";
import { bros_xfd } from "../videos/bros_xfd";

export const bros: Album = {
  type: "album",
  id: "bros",
  titlePrefix: "Kyoto University VOCALOID Compilation 2",
  title: "Bros.",
  description:
    "サークル、回生、音楽ジャンルの垣根を超えた、気鋭京大生ボカロPによるコンピレーションアルバム",
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "企画、楽曲制作 (Tr.15)、マスタリング",
    },
    {
      name: "柚雪ふゆね",
      role: "イラスト",
    },
    {
      name: "にとろ",
      role: "楽曲制作 (Tr.1)",
    },
    {
      name: "右角",
      role: "楽曲制作 (Tr.1)",
    },
    {
      name: "さめこうもり",
      role: "楽曲制作 (Tr.2)",
    },
    {
      name: "ゆうよ",
      role: "楽曲制作 (Tr.3)",
    },
    {
      name: "名乃ぱんち",
      role: "楽曲制作 (Tr.4)",
    },
    {
      name: "Klayn",
      role: "楽曲制作 (Tr.5, Tr.6)",
    },
    {
      name: "とばかり",
      role: "楽曲制作 (Tr.6)",
    },
    {
      name: "作田恒星",
      role: "楽曲制作 (Tr.7)",
    },
    {
      name: "Σ",
      role: "楽曲制作 (Tr.8)",
    },
    {
      name: "あんこぱわー",
      role: "楽曲制作 (Tr.9)",
    },
    {
      name: "すずきみなも",
      role: "楽曲制作 (Tr.10)",
    },
    {
      name: "いひぇ",
      role: "楽曲制作 (Tr.11)",
    },
    {
      name: "やや",
      role: "楽曲制作 (Tr.12)",
    },
    {
      name: "Sohbana",
      role: "楽曲制作 (Tr.13)",
    },
    {
      name: "Nui",
      role: "楽曲制作 (Tr.14)",
    },
  ],
  releaseDate: new Date("2024-10-27"),
  links: [
    {
      platform: "booth",
      url: "https://booth.pm/ja/items/6179765",
    },
    {
      platform: "bandcamp",
      url: "https://aotakeuma.bandcamp.com/album/kyoto-university-vocaloid-compilation-2-bros",
    },
  ],
  jacketImageUrl: "/images/jackets/bros.png",
  tracks: [], // TODO
  video: bros_xfd,
};
