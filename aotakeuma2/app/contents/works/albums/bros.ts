import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { sayounara_ryuseigun } from "../musics/sayounara_ryuseigun";

export const bros: Album = {
  type: "album",
  id: "bros",
  titlePrefix: "Kyoto University VOCALOID Compilation 2",
  title: "Bros.",
  description:
    "サークル、回生、音楽ジャンルの垣根を超えた、気鋭京大生ボカロPによるコンピレーションアルバム",
  tags: ["コンピ参加作品"],
  team: "京大ボカロコンピ",
  credits: [
    {
      name: "柚雪ふゆね",
      role: "イラスト",
      socialLinks: [
        {
          platform: "pixiv",
          url: "https://www.pixiv.net/users/42157580",
        },
        {
          platform: "twitter",
          url: "https://x.com/Snow53902",
        },
      ],
    },
    {
      ...getPerson("竹馬あお"),
      role: "企画、マスタリング",
    },
  ],
  releaseDate: new Date("2024-10-27"),
  links: [
    {
      platform: "booth",
      url: "https://booth.pm/ja/items/6179765",
    },
    {
      platform: "bandcamp",
      url: "https://aotakeuma.bandcamp.com/album/kyoto-university-vocaloid-compilation-2-bros",
    },
  ],
  jacketImageUrl: "/images/jackets/bros.png",
  tracks: [
    {
      type: "music",
      id: "bros_1",
      title: "突風は不透明",
      description: "",
      tags: [],
      credits: [
        {
          name: "にとろ",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/90331625",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@NitoroTheDragon",
            },
            {
              platform: "twitter",
              url: "https://x.com/NitoroTheDragon",
            },
          ],
        },
        {
          name: "右角",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/130772409",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@romelu_ukaku",
            },
            {
              platform: "twitter",
              url: "https://x.com/Romelu_ukaku",
            },
          ],
        },
        {
          name: "シェリングフォード",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=G7wYaQNpVPY",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44677874",
      },
    },
    {
      type: "music",
      id: "bros_2",
      title: "普通感冒",
      description: "",
      tags: [],
      credits: [
        {
          name: "さめこうもり",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/56340192",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@%E3%81%95%E3%82%81%E3%81%93%E3%81%86%E3%82%82%E3%82%8A",
            },
            {
              platform: "twitter",
              url: "https://x.com/samekoumori",
            },
          ],
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      links: [
        {
          platform: "spotify",
          url: "https://open.spotify.com/intl-ja/album/4buqxvGUam6qWmWNEiUYV4",
        },
        {
          platform: "apple_music",
          url: "https://music.apple.com/jp/album/please-stand-behind-the-yellow-line-ep/1777361046",
        },
        {
          platform: "youtube_music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_mZ87PT8m0pcYFItLinh6S8a-CjW8oDyUo",
        },
      ],
    },
    {
      type: "music",
      id: "bros_3",
      title: "レフュージ・フォー・リフューザル",
      description: "",
      tags: [],
      credits: [
        {
          name: "ゆうよ",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/97494875",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@yuuyo8953",
            },
            {
              platform: "twitter",
              url: "https://x.com/koromobuton",
            },
          ],
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
        {
          name: "花隈千冬",
          role: "ポエトリーリーディング",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_4",
      title: "朝の作り方　その１",
      description: "",
      tags: [],
      credits: [
        {
          name: "名乃ぱんち",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/91446287",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@nanopunch",
            },
            {
              platform: "twitter",
              url: "https://x.com/1000pico_punch",
            },
          ],
        },
        {
          name: "星界",
          role: "ボーカル",
        },
        {
          name: "初音ミク",
          role: "コーラス",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_5",
      title: "夜行梅花",
      description: "",
      tags: [],
      credits: [
        {
          name: "Klayn",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/97017803",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@klayn1396",
            },
            {
              platform: "twitter",
              url: "https://x.com/LikeBirds_",
            },
          ],
        },
        {
          name: "GUMI",
          role: "ボーカル",
        },
        {
          name: "v flower",
          role: "ボーカル",
        },
        {
          name: "kokone",
          role: "ボーカル",
        },
        {
          name: "鏡音リン",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=UVohojsZ83E",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm43062618",
      },
    },
    {
      type: "music",
      id: "bros_6",
      title: "Final Answer",
      description: "",
      tags: [],
      credits: [
        {
          name: "とばかり",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/95445939",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@tobakari4365",
            },
            {
              platform: "twitter",
              url: "https://x.com/10_bakari",
            },
          ],
        },
        {
          name: "Klayn",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/97017803",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@klayn1396",
            },
            {
              platform: "twitter",
              url: "https://x.com/LikeBirds_",
            },
          ],
        },
        {
          name: "可不",
          role: "ボーカル",
        },
        {
          name: "羽累",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        niconicoUrl: "https://www.nicovideo.jp/watch/sm45925839",
      },
    },
    {
      type: "music",
      id: "bros_7",
      title: "震え星",
      description: "",
      tags: [],
      credits: [
        {
          name: "作田恒星",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/120046570",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@sakuta_kousei",
            },
            {
              platform: "bilibili",
              url: "https://space.bilibili.com/3546877588933197",
            },
            {
              platform: "twitter",
              url: "https://x.com/sakuta_kousei",
            },
          ],
        },
        {
          name: "鏡音リン",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=kIVlN3hNrFQ",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44574321",
      },
    },
    {
      type: "music",
      id: "bros_8",
      title: "#039393",
      description: "",
      tags: [],
      credits: [
        {
          name: "Σ",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/95132281",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@SummationSigma",
            },
            {
              platform: "twitter",
              url: "https://x.com/SIGMA_moxf6",
            },
          ],
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
        {
          name: "v flower",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_9",
      title: "リリィ",
      description: "",
      tags: [],
      credits: [
        {
          name: "あんこぱわー",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/116577013",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@%E3%81%82%E3%82%93%E3%81%93%E3%81%B1%E3%82%8F%E3%83%BC",
            },
            {
              platform: "twitter",
              url: "https://x.com/anko__power",
            },
          ],
        },
        {
          name: "カゼヒキV",
          role: "ボーカル",
        },
        {
          name: "v flower",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44681955",
        youtubeUrl: "https://www.youtube.com/watch?v=BexniG5_Jc0",
      },
    },
    {
      type: "music",
      id: "bros_10",
      title: "喝采",
      description: "",
      tags: [],
      credits: [
        {
          name: "すずきみなも",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/124943248",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@suzukiminamo",
            },
            {
              platform: "twitter",
              url: "https://x.com/mnm_1211_",
            },
          ],
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=YZ6johrv2iQ",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm43988991",
      },
    },
    {
      type: "music",
      id: "bros_11",
      title: "ただよう",
      description: "",
      tags: [],
      credits: [
        {
          name: "いひぇ",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "twitter",
              url: "https://x.com/ihixe_ihixe",
            },
          ],
        },
        {
          name: "知声",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_12",
      title: "水彩",
      description: "",
      tags: [],
      credits: [
        {
          name: "やや",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/78806456",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@y-1",
            },
            {
              platform: "twitter",
              url: "https://x.com/_yaya_st",
            },
          ],
        },
        {
          name: "可不",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=MfYk8bwm3Z4",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm41196646",
      },
    },
    {
      type: "music",
      id: "bros_13",
      title: "灰冠り",
      description: "",
      tags: [],
      credits: [
        {
          name: "Sohbana",
          role: "楽曲制作",
          socialLinks: [
            {
              platform: "niconico",
              url: "https://www.nicovideo.jp/user/75236176",
            },
            {
              platform: "youtube",
              url: "https://www.youtube.com/@Sohbanasick",
            },
            {
              platform: "bilibili",
              url: "https://space.bilibili.com/1946547293",
            },
            {
              platform: "twitter",
              url: "https://x.com/Sohbanasick",
            },
          ],
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      links: [
        {
          platform: "spotify",
          url: "https://open.spotify.com/intl-ja/album/50QZ6fh8TxDuGJ57MXakMc",
        },
        {
          platform: "apple_music",
          url: "https://music.apple.com/jp/album/epic-justismo/1810139553",
        },
        {
          platform: "youtube_music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_mZloq-F2tMXVoUwyn40dZEfIo5Uf6l808",
        },
      ],
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=V1Kofl9jazU",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44750078",
      },
    },
    {
      type: "music",
      id: "bros_14",
      title: "星を詠む、果ての水平線",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("Nui"),
          role: "楽曲制作",
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      links: [
        {
          platform: "spotify",
          url: "https://open.spotify.com/intl-ja/album/2nYXqdY6GQfQKsQWxnLt0p",
        },
        {
          platform: "apple_music",
          url: "https://music.apple.com/jp/album/%E3%82%B9%E3%83%86%E3%83%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88/1773261438",
        },
        {
          platform: "youtube_music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_mpRt3JpLL3nDw-jHjN7UjziOHHN5m7Y-I",
        },
      ],
    },
    sayounara_ryuseigun,
  ],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=Mj0Fx-Q_pgM",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm44202977",
    bilibiliUrl: "https://www.bilibili.com/video/BV1642SYhEFT",
  },
};
