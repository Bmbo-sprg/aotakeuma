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

// music 自身にジャケットがなければ、YouTube のサムネイル → 収録アルバムの
// ジャケットの順にフォールバックする
export const resolveMusicImage = (
  music: Music,
  albums: Album[]
): MusicImage | null => {
  if (music.jacketImageUrl) {
    return { url: music.jacketImageUrl, source: "own" };
  }

  const youtubeUrl = music.video?.youtubeUrl;
  const videoId = youtubeUrl ? extractYoutubeVideoId(youtubeUrl) : null;
  if (videoId) {
    return {
      url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      source: "youtube",
    };
  }

  const albumWithTrack = albums.find((album) =>
    album.tracks.some((track) => track.id === music.id)
  );
  if (albumWithTrack) {
    return { url: albumWithTrack.jacketImageUrl, source: "album" };
  }

  return null;
};
