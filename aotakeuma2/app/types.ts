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
  platform: /*
    公式サイト
    ある場合は最優先で貼る */
    | "website"
    /* 音楽配信系
    TuneCore を使った場合: 以下の4件を全て含める
    それ以外の場合: あるものだけ含める */
    | "spotify"
    | "apple_music"
    | "youtube_music"
    | "linkcore"
    /* 音楽販売系 */
    | "bandcamp"
    | "booth"
    /* 動画系 */
    | "niconico"
    | "youtube"
    | "bilibili"
    /* ゲーム系 */
    | "steam"
    /* イラスト系 */
    | "pixiv"
    | "skeb"
    | "fanbox"
    /* 文字書き系
    マジで佐薙概念にしか使ってないけど拡張予定 */
    | "note"
    /* イベント系 */
    | "twipla"
    | "twinvite"
    | "mixcloud"
    /* SNS系
    脱Xの思想に基づき、必要最低限に留めたい */
    | "twitter";
  url: string;
};

export type Tag = (typeof tags)[number];
