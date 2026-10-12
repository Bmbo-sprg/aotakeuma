import type { Album, Music } from "~/types";

export type MusicImage = {
  url: string;
  source: "own" | "album" | "youtube";
};

const extractYoutubeVideoId = (url: string) => {
  const watchMatch = /[?&]v=([^&]+)/.exec(url);
  if (watchMatch) return watchMatch[1];
  const shortMatch = /youtu\.be\/([^?&]+)/.exec(url);
  return shortMatch ? shortMatch[1] : null;
};

// music 自身にジャケットがなければ、収録アルバムのジャケット → YouTube の
// サムネイルの順にフォールバックする
export const resolveMusicImage = (
  music: Music,
  albums: Album[]
): MusicImage | null => {
  if (music.jacketImageUrl) {
    return { url: music.jacketImageUrl, source: "own" };
  }

  const albumWithTrack = albums.find((album) =>
    album.tracks.some((track) => track.id === music.id)
  );
  if (albumWithTrack) {
    return { url: albumWithTrack.jacketImageUrl, source: "album" };
  }

  const youtubeUrl = music.video?.youtubeUrl;
  const videoId = youtubeUrl ? extractYoutubeVideoId(youtubeUrl) : null;
  if (videoId) {
    return {
      url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      source: "youtube",
    };
  }

  return null;
};

// 収録アルバムのジャケットを流用する場合、アルバム本体のカードと見分けが
// つくよう、淡い色の枠線を付ける（色は id から決定論的に選ぶ。SSR で
// サーバーとクライアントの表示がずれないようにするため）
const PASTEL_BORDER_CLASSES = [
  "border-rose-200",
  "border-amber-200",
  "border-lime-200",
  "border-teal-200",
  "border-sky-200",
  "border-violet-200",
];

export const pickPastelBorderClass = (id: string) => {
  const hash = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return PASTEL_BORDER_CLASSES[hash % PASTEL_BORDER_CLASSES.length];
};
