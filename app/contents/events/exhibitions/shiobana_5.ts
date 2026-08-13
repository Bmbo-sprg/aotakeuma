import { aonote } from "../../works/albums/aonote";
import { yohkoh } from "../../works/albums/yohkoh";
import type { Exhibition } from "~/types";

export const shiobana_5: Exhibition = {
  type: "exhibition",
  id: "shiobana_5",
  title: "第五回小樽潮風高校文化祭「しおばな祭」",
  description: "小樽組の「卒業」をテーマとしたEPを制作中です。",
  tags: [],
  date: new Date("2026-11-01"),
  location: "大田区産業プラザPiO 小展示ホール 配置未定",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/2038080821152866355",
    },
  ],
  catalog: [yohkoh, aonote],
};
