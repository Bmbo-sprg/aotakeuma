import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { sayounara_ryuseigun } from "../musics/sayounara_ryuseigun";
import { secret_track } from "../musics/secret_track";
import { neuron } from "../musics/neuron";
import { matteite } from "../musics/matteite";
import { mayonaka } from "../musics/mayonaka";
import { yusetsu } from "../musics/yusetsu";
import { hoga } from "../musics/hoga";
import { juniku } from "../musics/juniku";
import { kaika } from "../musics/kaika";
import { gunzohiroba } from "../musics/gunzohiroba";

export const inori: Album = {
  type: "album",
  id: "inori",
  titlePrefix: "竹馬あお 5th Album",
  title: "祈りの可聴域",
  description: `言葉の代わりに音楽で、僕らなりに、祈ろう
群像的合成音声オルタナティブロックアルバム
`,
  tags: ["バンドサウンド"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "制作、マスタリング",
    },
    {
      ...getPerson("ゆぐﾓ"),
      role: "イラスト",
    },
  ],
  releaseDate: new Date("2026-11-28"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm", // TODO
    },
    // TODO: spotify, apple_music, youtube_music
  ],
  jacketImageUrl: "/images/jackets/inori.png",
  tracks: [
    sayounara_ryuseigun,
    secret_track,
    neuron,
    matteite,
    mayonaka,
    yusetsu,
    juniku,
    hoga,
    gunzohiroba,
    kaika,
  ],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=h9LQkbFvlbI",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm47067765",
    bilibiliUrl: "https://www.bilibili.com/video/BV1BGyWztEYw",
  },
  downloadEnabled: true,
};
