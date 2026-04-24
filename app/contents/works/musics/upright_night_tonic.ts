import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const upright_night_tonic: Music = {
  type: "music",
  id: "upright_night_tonic",
  title: "アップライト・ナイト・トニック",
  description: `
吉田音楽製作所 合作コンピ2024参加曲です。
作詞、調声、概念作り、映像ディレクションで参加しました。
終電後の二軒目、京都木屋町の深夜喫茶で恋バナをするオトナの小樽組のJazzyな楽曲です。
`,
  tags: ["合作参加作品"],
  credits: [
    {
      ...getPerson("ひとひら"),
      role: "作曲、ドラム、ギター",
    },
    {
      name: "兎角菫",
      role: "編曲、ベース、ブラス",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://www.nicovideo.jp/user/131974773",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/@TokakuSumire",
        },
        {
          platform: "twitter",
          url: "https://x.com/TokakuSumire",
        },
      ],
    },
    {
      name: "Ririwo",
      role: "ストリングス",
      socialLinks: [
        {
          platform: "niconico",
          url: "https://nicovideo.jp/user/138826386",
        },
        {
          platform: "twitter",
          url: "https://x.com/rrw_musica",
        },
        {
          platform: "bilibili",
          url: "https://space.bilibili.com/3546554535250694",
        },
      ],
    },
    {
      ...getPerson("竹馬あお"),
      role: "作詞、ピアノ、調声、ミックス",
    },
  ],
  team: "ひとRi馬兎る",
  releaseDate: new Date("2024-10-27"),
  links: [
    {
      platform: "spotify",
      url: "https://open.spotify.com/intl-ja/track/4Ai3yXTOwaSW9rl1N9Cagh",
    },
    {
      platform: "apple_music",
      url: "https://music.apple.com/jp/album/upright-night-tonic-feat-%E5%B0%8F%E6%98%A5%E5%85%AD%E8%8A%B1-%E5%A4%8F%E8%89%B2%E8%8A%B1%E6%A2%A8-%E8%8A%B1%E9%9A%88%E5%8D%83%E5%86%AC-single/1860511338",
    },
    {
      platform: "youtube_music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_kzgMEpofMI_8Bxyi3TENzx8lC2t2xaPJ4",
    },
  ],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        name: "たぬざか",
        role: "イラスト",
        socialLinks: [
          {
            platform: "niconico",
            url: "https://www.nicovideo.jp/user/124788874",
          },
          {
            platform: "youtube",
            url: "https://www.youtube.com/@tanuzaka",
          },
          {
            platform: "pixiv",
            url: "https://www.pixiv.net/users/103912433",
          },
          {
            platform: "skeb",
            url: "https://skeb.jp/@tanuzaka",
          },
          {
            platform: "twitter",
            url: "https://x.com/tanuzaka",
          },
        ],
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=9TjOYGEW-ig",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm44511396",
    bilibiliUrl: "https://www.bilibili.com/video/BV1yLrjYwEUR",
  },
  lyrics: `
Upright、木屋町で漫ろ、つまらない閑静は甘美
Tonight、出町行き寝静むの、星みたいね、まだ話し足りない！連れてって
11th散りばめたスノースタイル、眠らない街は濁るほどいいわ
文学的なアンビエンス止まらない！二・三・四・五・始発まで

「気になる！」
Lime and Tonicで香りだつの、浮ついたハナシ誤魔化して

夜はこれから！深夜喫茶　微睡の街を歩けよ乙女
涼む高瀬川の畔でしゃべり明かそう、アップライトな25時

Upright、二軒目もゆったり、委ねたい夜は深海
Tonight、檸檬を仕掛けたように嘘みたいね、でもどうなのセンパイ！？
勿体ぶってる！気持ちはマティーニ、じれったい夜風はもう京極まで
享楽的なリュミエール消さないで！ラ・ソ・ファ・ミ、沈んでく
とりま正解は後にして～、昔のこと思い出せば饒舌が続く私たち

Lime and Tonicで香りだつの、今日は秒針の音も誤魔化して

夜はまだまだ！深夜喫茶　微睡の街を歩けよ乙女
丸竹夷を直情径行、ふわふわしよう、アップテンション・ほろ酔いモーダル

祇園四条は薄明、白川筋も人まばら、五条は眠らず運び綴る大動脈然と、
やうやう白くなりゆく山際とあたしの夢見心地と時計台の静かと、今

Lime and Tonicで香りだつの、赤らんだ頬を誤魔化して

夜はこれから！深夜喫茶　微睡の街を歩けよ乙女
涼む高瀬川の畔でしゃべり明かそう、アップライトな25時
夜はまだまだ！深夜喫茶　微睡の街を歩けよ乙女
丸竹夷に押御池！？ふらふらしよう、アップテンション・ほろ酔いナイトトニック
`,
};
