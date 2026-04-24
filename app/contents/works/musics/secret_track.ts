import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const secret_track: Music = {
  type: "music",
  id: "secret_track",
  title: "Secret Track",
  description: `
創りつづけるんだ
VocaDuo2025 参加曲です。
`,
  tags: ["合作参加作品", "バンドサウンド"],
  team: "アオノスタシス",
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲、ミックス",
    },
    {
      name: "らいあん",
      role: "ボーカル",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/28902468",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/channel/UCD26ojPaxUPmdgC6T4B7t_g",
        },
        {
          platform: "twitter",
          url: "https://x.com/Ryan5_Im",
        },
      ],
    },
    {
      name: "霧崎 叶葉",
      role: "ボーカル",
      socialLinks: [
        {
          platform: "youtube",
          url: "https://www.youtube.com/@kanaha.K_2170",
        },
        {
          platform: "twitter",
          url: "https://x.com/Kanaha_2170",
        },
      ],
    },
    {
      name: "いちき",
      role: "ベース",
      socialLinks: [
        {
          platform: "youtube",
          url: "https://www.youtube.com/@ichikey_bass",
        },
        {
          platform: "twitter",
          url: "https://x.com/Ichi_keybass",
        },
      ],
    },
    {
      name: "小春六花",
      role: "ボーカル (VocaDuo2025vv版)",
    },
    {
      name: "宮舞モカ",
      role: "ボーカル (VocaDuo2025vv版)",
    },
    {
      name: "VOICEVOX 冥鳴ひまり",
      role: "ポエトリーリーディング (VocaDuo2025vv版)",
    },
  ],
  releaseDate: new Date("2025-07-07"),
  video: {
    credits: [
      {
        name: "いからげ",
        role: "映像制作",
        socialLinks: [
          {
            platform: "website",
            url: "https://ikarage.com/",
          },
          {
            platform: "niconico",
            url: "https://www.nicovideo.jp/user/57321650",
          },
          {
            platform: "youtube",
            url: "http://www.youtube.com/@ika_rage",
          },
          {
            platform: "twitter",
            url: "https://x.com/ika_rage",
          },
        ],
      },
      {
        name: "Unio",
        role: "イラスト",
        socialLinks: [
          {
            platform: "youtube",
            url: "https://www.youtube.com/@UniGohan",
          },
          {
            platform: "twitter",
            url: "https://x.com/waai_zako",
          },
        ],
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=GQfVSEropNg",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45161482",
  },
  lyrics: `
わたしだけのSecret Track、埃被った情景をなぞる拙い音たちよ
ひとりだけのSecret Baseから、マーシャル歪ませてさ、奏でて。

夏休み、28度の冷房が効いた白い部屋、
レンダリングが終わるのを待っていた。
ベランダを開ければ現実が押し寄せるの、
怖くて、またひとり、秘密基地に逃げ込んだ。

「特別な何か」だなんてさクラシカルすぎた矜持を
神話とただ飲み込めなくて強く押し込む再生ボタン

連なる、繋がる、
初めての音が力になって、
重ねる、重なる――
届かなくても

銘々の鼓動、がなる僕らのSecret Track
失くしてたものたちで紡ぐメロディも輝く
小さな宇宙、夏を塗り替えるエンタルピー
描くフレームたちが誰かに観られるなら

創りつづけるんだ
歌いつづけるんだ
描きつづけるんだ
綴りつづけるんだ

わたしだけのSecret Trackからきみに届ける、情景と心の鼓動と音たちを
ひとりだけのSecret Baseから、
この一歩踏み出して
不安を笑い飛ばして
「もうひとりじゃないから」

わたしたちの／僕たちのSecret Track
失くしてたものたちで紡ぐメロディが輝く
小さな宇宙、夏を塗り替えるエンタルピー
描くフレームたちが誰かに届いたから！

創りつづけるんだ
歌いつづけるんだ
描きつづけるんだ
綴りつづけるんだ
創りつづけるんだ
歌いつづけるんだ
描きつづけるんだ
綴りつづけるんだ
`,
};
