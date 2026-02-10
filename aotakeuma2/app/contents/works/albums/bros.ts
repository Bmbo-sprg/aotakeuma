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
      name: "にとろ",
      role: "楽曲制作 (Tr.1)",
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
      role: "楽曲制作 (Tr.1)",
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
      name: "さめこうもり",
      role: "楽曲制作 (Tr.2)",
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
      name: "ゆうよ",
      role: "楽曲制作 (Tr.3)",
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
      name: "名乃ぱんち",
      role: "楽曲制作 (Tr.4)",
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
      name: "Klayn",
      role: "楽曲制作 (Tr.5, Tr.6)",
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
      name: "とばかり",
      role: "楽曲制作 (Tr.6)",
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
      name: "作田恒星",
      role: "楽曲制作 (Tr.7)",
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
          platform: "twitter",
          url: "https://x.com/sakuta_kousei",
        },
      ],
    },
    {
      name: "Σ",
      role: "楽曲制作 (Tr.8)",
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
      name: "あんこぱわー",
      role: "楽曲制作 (Tr.9)",
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
      name: "すずきみなも",
      role: "楽曲制作 (Tr.10)",
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
      name: "いひぇ",
      role: "楽曲制作 (Tr.11)",
      socialLinks: [
        {
          platform: "twitter",
          url: "https://x.com/ihixe_ihixe",
        },
      ],
    },
    {
      name: "やや",
      role: "楽曲制作 (Tr.12)",
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
      name: "Sohbana",
      role: "楽曲制作 (Tr.13)",
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
          platform: "twitter",
          url: "https://x.com/Sohbanasick",
        },
      ],
    },
    {
      ...getPerson("Nui"),
      role: "楽曲制作 (Tr.14)",
    },
    {
      ...getPerson("竹馬あお"),
      role: "企画、楽曲制作 (Tr.15)、マスタリング",
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
  tracks: [sayounara_ryuseigun],
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

// TODO: コメントを入れる
