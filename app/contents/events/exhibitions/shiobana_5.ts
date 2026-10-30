import { graduation } from "../../works/albums/graduation";
import { yohkoh } from "../..//works/albums/yohkoh";
import { graduation_seal } from "../../works/graduation_seal";
import { tnftep1 } from "../../works/albums/tnftep1";
import type { Exhibition } from "~/types";

export const shiobana_5: Exhibition = {
  type: "exhibition",
  id: "shiobana_5",
  title: "第五回小樽潮風高校文化祭「しおばな祭」",
  description:
    "小樽組の「卒業」をテーマとしたEP『卒業証書』を新譜として頒布します。",
  tags: [],
  date: new Date("2026-11-01"),
  location: "大田区産業プラザPiO 小展示ホール 3年B組",
  links: [
    {
      platform: "twitter",
      url: "https://x.com/aotakeuma/status/2038080821152866355",
    },
  ],
  catalog: [graduation, graduation_seal, yohkoh, tnftep1],
};
