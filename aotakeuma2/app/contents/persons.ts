import type { Person } from "~/types";

export const persons: Person[] = [
  {
    name: "竹馬あお",
    socialLinks: [
      {
        platform: "niconico",
        url: "https://www.nicovideo.jp/user/72888400",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/@aotakeuma",
      },
      {
        platform: "twitter",
        url: "https://x.com/aotakeuma",
      },
    ],
  },
  {
    name: "閔仲 (later 竹馬あお)",
    socialLinks: [
      {
        platform: "niconico",
        url: "https://www.nicovideo.jp/user/72888400",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/@aotakeuma",
      },
      {
        platform: "twitter",
        url: "https://x.com/aotakeuma",
      },
    ],
  },
  {
    name: "佐薙概念",
    socialLinks: [
      {
        platform: "note",
        url: "https://note.com/hummm09",
      },
      {
        platform: "twitter",
        url: "https://x.com/pessimstkohan",
      },
    ],
  },
  {
    name: "犬吠埼いつき",
    socialLinks: [
      {
        platform: "pixiv",
        url: "https://www.pixiv.net/users/42653439",
      },
      {
        platform: "twitter",
        url: "https://x.com/N_ekobouzaki",
      },
    ],
  },
  {
    name: "ぺんぎん",
    socialLinks: [
      {
        platform: "pixiv",
        url: "https://www.pixiv.net/users/22887343",
      },
      {
        platform: "twitter",
        url: "https://x.com/dx19291005",
      },
    ],
  },
  {
    name: "ねこねこ",
    socialLinks: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/@nekohoshi_neko",
      },
      {
        platform: "pixiv",
        url: "https://www.pixiv.net/users/71433655",
      },
      {
        platform: "twitter",
        url: "https://x.com/nekohoshi_neko",
      },
    ],
  },
  {
    name: "しもぞの",
    socialLinks: [
      {
        platform: "twitter",
        url: "https://x.com/fortissimo_zono",
      },
    ],
  },
  {
    name: "Nui",
    socialLinks: [
      {
        platform: "niconico",
        url: "https://www.nicovideo.jp/user/124598965",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/@nui6690",
      },
      {
        platform: "twitter",
        url: "https://x.com/CreateiNui",
      },
    ],
  },
  {
    name: "えもこ",
    socialLinks: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/@emococh",
      },
      {
        platform: "twitter",
        url: "https://x.com/emoco_asmr",
      },
    ],
  },
  {
    name: "kiki",
    socialLinks: [
      {
        platform: "pixiv",
        url: "https://www.pixiv.net/users/36148342",
      },
      {
        platform: "twitter",
        url: "https://x.com/kiki_3288",
      },
    ],
  },
  {
    name: "yin",
    socialLinks: [
      {
        platform: "youtube",
        url: "https://youtube.com/@yin__raindoll",
      },
      {
        platform: "twitter",
        url: "https://x.com/yin__raindoll",
      },
    ],
  },
  {
    name: "れり",
    socialLinks: [
      {
        platform: "youtube",
        url: "https://youtube.com/@cross_leli",
      },
      {
        platform: "twitter",
        url: "https://x.com/cross_leli",
      },
    ],
  },
  {
    name: "こんぺき",
    socialLinks: [
      {
        platform: "pixiv",
        url: "https://www.pixiv.net/users/6766340",
      },
      {
        platform: "twitter",
        url: "https://x.com/wetcolor3",
      },
    ],
  },
  {
    name: "ひとひら",
    socialLinks: [
      {
        platform: "twitter",
        url: "https://x.com/hitohira_1hira",
      },
    ],
  },
] as const;

export const personsByName = Object.fromEntries(
  persons.map((person) => [person.name, person])
) as Record<string, Person>;

export const getPerson = (name: string): Person => {
  const person = personsByName[name];
  if (!person) {
    return { name };
  }
  return person;
};
