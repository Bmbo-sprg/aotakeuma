import type { Album } from "~/types";
import { haruame_ost_xfd } from "../videos/haruame_ost_xfd";

export const haruame_ost: Album = {
  type: "album",
  id: "haruame_ost",
  title: "ハルジオンは雨と咲く -Original Soundtrack-",
  description:
    "創作プロジェクト「縋想」によるテキストADV『ハルジオンは雨と咲く』のオリジナルサウンドトラック",
  tags: [], // TODO
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
  video: haruame_ost_xfd,
};
