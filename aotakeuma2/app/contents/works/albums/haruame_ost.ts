import type { Album } from "~/types";

export const haruame_ost: Album = {
  type: "album",
  id: "haruame_ost",
  title: "ハルジオンは雨と咲く -Original Soundtrack-",
  description:
    "ビジュアルノベル『ハルジオンは雨と咲く』のオリジナルサウンドトラック",
  tags: [], // TODO
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
  releaseDate: new Date("2024-04-28"),
  links: [
    {
      platform: "booth",
      url: "https://tsuisouproject.booth.pm/items/5697864",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/album/6HAO3WAYWWVheLXBcGAKOZ",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/reminiscence-in-the-rain-original-soundtrack/1755104535",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_mP5-JJ1fZicijUC4qBvRGUQZgNryNimQk",
    },
    {
      platform: "linkcore",
      url: "https://linkco.re/zH2FRqQe",
    },
  ],
  jacketImageUrl: "/images/jackets/haruame_ost.png",
  tracks: [], // TODO
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=Jpet7-awLuU",
  },
};
