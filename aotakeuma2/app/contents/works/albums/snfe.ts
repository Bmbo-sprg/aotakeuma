import type { Album } from "~/types";
import { snfe_xfd } from "../videos/snfe_xfd";

export const snfe: Album = {
  type: "album",
  id: "snfe",
  titlePrefix: "竹馬あお 2nd Album",
  title: "SummerNotFoundException",
  description: "夏/虚構/青春/少女/消失を描いた合成音声アルバム",
  tags: [], // TODO
  credits: [
    {
      name: "竹馬あお",
      role: "制作、マスタリング",
    },
    {
      name: "ぺんぎん",
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2024-04-28"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/5697516",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/album/03nJDCpm14cqwI1mJwUjaq",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/summernotfoundexception/1863608931",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_l5UEjTpblxeLMUlGm3CRKlL0n-cm8QMcc",
    },
    {
      platform: "linkcore",
      url: "https://linkco.re/dReUq97q",
    },
  ],
  jacketImageUrl: "/images/jackets/snfe.png",
  tracks: [], // TODO
  video: snfe_xfd,
};
