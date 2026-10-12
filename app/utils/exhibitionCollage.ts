import type { Album, Game, Music, Work } from "~/types";
import { albums } from "../contents/works/albums";
import { resolveMusicImage } from "./musicImage";

export type CollagePosition =
  "full" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type CollageItem = {
  url: string;
  position: CollagePosition;
  // YouTube のサムネイルは上下に黒帯を含むため、object-cover でトリミング
  // する必要がある（ThumbnailImage 参照）
  fit: "contain" | "cover";
};

const POSITIONS_BY_COUNT: Record<number, CollagePosition[]> = {
  1: ["full"],
  2: ["top-left", "bottom-right"],
  3: ["top-left", "top-right", "bottom-left"],
  4: ["top-left", "top-right", "bottom-left", "bottom-right"],
};

const getWorkImage = (
  work: Work
): { url: string; fit: "contain" | "cover" } | null => {
  if (work.type === "album" || work.type === "game") {
    return { url: (work as Album | Game).jacketImageUrl, fit: "contain" };
  }
  if (work.type === "music") {
    const image = resolveMusicImage(work as Music, albums);
    if (!image) return null;
    return {
      url: image.url,
      fit: image.source === "youtube" ? "cover" : "contain",
    };
  }
  return null;
};

// 即売会の頒布物一覧から、画像のある先頭4件までをコラージュ配置する
export const buildCollageLayout = (catalog: Work[]): CollageItem[] => {
  const images = catalog
    .map(getWorkImage)
    .filter((image): image is NonNullable<typeof image> => image !== null)
    .slice(0, 4);

  const positions = POSITIONS_BY_COUNT[images.length] ?? [];
  return images.map((image, index) => ({
    url: image.url,
    fit: image.fit,
    position: positions[index],
  }));
};
