import type { Album, Game, Music, Work } from "~/types";
import { albums } from "../contents/works/albums";
import { resolveMusicImage } from "./musicImage";

export type CollagePosition =
  "full" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type CollageItem = {
  url: string;
  position: CollagePosition;
};

const POSITIONS_BY_COUNT: Record<number, CollagePosition[]> = {
  1: ["full"],
  2: ["top-left", "bottom-right"],
  3: ["top-left", "top-right", "bottom-left"],
  4: ["top-left", "top-right", "bottom-left", "bottom-right"],
};

const getWorkImageUrl = (work: Work): string | null => {
  if (work.type === "album" || work.type === "game") {
    return (work as Album | Game).jacketImageUrl;
  }
  if (work.type === "music") {
    return resolveMusicImage(work as Music, albums)?.url ?? null;
  }
  return null;
};

// 即売会の頒布物一覧から、画像のある先頭4件までをコラージュ配置する
export const buildCollageLayout = (catalog: Work[]): CollageItem[] => {
  const urls = catalog
    .map(getWorkImageUrl)
    .filter((url): url is string => url !== null)
    .slice(0, 4);

  const positions = POSITIONS_BY_COUNT[urls.length] ?? [];
  return urls.map((url, index) => ({ url, position: positions[index] }));
};
