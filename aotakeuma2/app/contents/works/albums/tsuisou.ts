import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { kowakami } from "../musics/kowakami";
import { tsuisou_insts } from "../musics/tsuisou_insts";
import { ramunate } from "../musics/ramunate";
import { deadlock } from "../musics/deadlock";
import { mataao } from "../musics/mataao";

export const tsuisou: Album = {
  type: "album",
  id: "tsuisou",
  titlePrefix: "縋想 1st Album",
  title: "縋想",
  description: `
創作プロジェクト『縋想』の一作目。
想い出の中の「キミ」に縋る、切実なオルタナティブ青春物語。`,
  tags: ["『縋想』プロジェクト"],
  team: "『縋想』プロジェクト",
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲、マスタリング、詩",
    },
    {
      ...getPerson("佐薙概念"),
      role: "小説、作詞",
    },
    {
      ...getPerson("犬吠埼いつき"),
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2022-01-30"),
  links: [
    {
      platform: "booth",
      url: "https://booth.pm/ja/items/4962354",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/album/1lwxXPpPOwByLVh6SfCcK3",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/%E7%B8%8B%E6%83%B3/1607724243",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_koKcxiRJy9kJWg_8GlGFWL9YJW-aM3tGs",
    },
    {
      platform: "linkcore",
      url: "https://linkco.re/a6386MnX",
    },
  ],
  jacketImageUrl: "/images/jackets/tsuisou.png",
  tracks: [
    kowakami,
    tsuisou_insts[0],
    ramunate,
    tsuisou_insts[1],
    deadlock,
    tsuisou_insts[2],
    mataao,
  ],
};
