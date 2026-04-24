import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { akari } from "../musics/akari";
import { jumping_into_orbit } from "../musics/jumping_into_orbit";
import { lemonade_palette } from "../musics/lemonade_palette";
import { himawari_ascension } from "../musics/himawari_ascension";
import { nyanverse } from "../musics/nyanverse";
import { kisetsu_song } from "../musics/kisetsu_song";
import { kiro } from "../musics/kiro";
import { aoiro_ni_inoriwo } from "../musics/aoiro_ni_inoriwo";
import { afterburn } from "../musics/afterburn";
import { soji } from "../musics/soji";

export const aonote: Album = {
  type: "album",
  id: "aonote",
  titlePrefix: "竹馬あお 4th Album",
  title: "あおいろがぼくたちの音",
  description: "青を探す旅路と、出会いと別れと再会とを描く合成音声アルバム",
  tags: [],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "制作、マスタリング",
    },
    {
      name: "がまうお",
      role: "イラスト",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/124308052",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/@Gama_ou",
        },
        {
          platform: "bilibili",
          url: "https://space.bilibili.com/3546918361762451",
        },
        {
          platform: "pixiv",
          url: "https://www.pixiv.net/users/94165420",
        },
        {
          platform: "twitter",
          url: "https://x.com/Gama_ou",
        },
      ],
    },
  ],
  releaseDate: new Date("2025-10-26"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/7608562",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/album/6b5ygymeSX4fPkBAeAmWH1",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/our-azure-notes/1860759504",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_l0GxUnEkxKeQDBNt0QMqBqPYQoCVuPR8o",
    },
  ],
  jacketImageUrl: "/images/jackets/aonote.png",
  tracks: [
    akari,
    jumping_into_orbit,
    lemonade_palette,
    himawari_ascension,
    nyanverse,
    kisetsu_song,
    kiro,
    aoiro_ni_inoriwo,
    afterburn,
    soji,
  ],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=_QUxRgi_We0",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45525121",
    bilibiliUrl: "https://www.bilibili.com/video/BV1JiWkzwEn1",
  },
};
