import type { platforms } from "./contents/platforms";
import type { tags } from "./contents/tags";

export type Work = {
  type: "album" | "music" | "game" | "other";
  /* id の命名規則: ^[a-z0-9_]+$
  - 基本的に export するときの変数名と同じ
  - Work, Event の両方で一意になるようにする
  - works, events, contact などの予約語と被らない */
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  team?: string; // サークル名など。なければ自名義
  credits: Credit[];
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
  credits: Credit[];
  youtubeUrl?: string;
  niconicoUrl?: string;
  bilibiliUrl?: string;
};

export type Game = Work & {
  type: "game";
  jacketImageUrl: string;
};

export type OtherWork = Work & {
  type: "other";
};

export type Event = {
  type: "performance" | "exhibition" | "other";
  /* id の命名規則: ^[a-z0-9_]+$
  - 基本的に export するときの変数名と同じ
  - Work, Event の両方で一意になるようにする
  - works, events, contact などの予約語と被らない */
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  date: Date;
  location: string;
  links?: SocialLink[];
};

export type Performance = Event & {
  type: "performance";
};

export type Exhibition = Event & {
  type: "exhibition";
  catalog: Work[];
};

export type Credit = Person & {
  role: string;
  comment?: string;
};

export type Person = {
  name: string;
  socialLinks?: SocialLink[];
};

export type SocialLink = {
  platform: (typeof platforms)[number];
  url: string;
};

export type Tag = (typeof tags)[number];
