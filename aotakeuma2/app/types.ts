export type Work = {
  type: "album" | "music" | "game" | "other";
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  team?: string; // サークル名など。なければ自名義
  credits: Person[];
  releaseDate: Date;
  links?: SocialLink[];
};

export type Album = Work & {
  type: "album";
  titlePrefix?: string;
  jacketImageUrl: string;
  tracks: Music[];
  video?: Video;
};

export type Music = Work & {
  type: "music";
    video?: Video;
};

export type Video = {
  credits: Person[];
    youtubeUrl?: string;
  niconicoUrl?: string;
  bilibiliUrl?: string;
};

export type Game = Work & {
  type: "game";
};

export type OtherWork = Work & {
  type: "other";
};

export type Event = {
  type: "performance" | "exhibition" | "other";
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  date: string;
  location: string;
  links?: SocialLink[];
};

export type Person = {
  name: string;
  role: string;
  socialLinks?: SocialLink[];
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type Tag = {
  id: string;
  name: string;
};
