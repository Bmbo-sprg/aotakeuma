import type { tags } from "./contents/tags";

export type Work = {
  type: "album" | "music" | "game" | "other";
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  team?: string; // サークル名など。なければ自名義
  credits: PersonWithRole[];
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
  lyrics?: string;
};

export type Video = {
  credits: PersonWithRole[];
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

export type PersonWithRole = Person & {
  role: string;
};

export type Person = {
  name: string;
  socialLinks?: SocialLink[];
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type Tag = (typeof tags)[number];
