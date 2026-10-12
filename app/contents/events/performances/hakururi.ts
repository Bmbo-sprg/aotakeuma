import type { Performance } from "~/types";

export const hakururi: Performance = {
  type: "performance",
  id: "hakururi",
  title: "DJイベント -はくるり誕生記念-",
  description:
    "所属の「声音文脈」のメンバー・はくるりくんのお誕生日を祝すイベントです",
  tags: [],
  date: new Date("2026-10-30"),
  location: "IV AKIHABARA",
  // TODO: detailLink が twipla でも twinvite でもないのでなんとかする
  twitterLink: {
    platform: "twitter",
    url: "https://x.com/hakururie/status/2106712921007133134",
  },
};
