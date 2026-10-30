import type { OtherWork } from "~/types";
import { getPerson } from "../persons";

export const graduation_seal: OtherWork = {
  type: "other",
  id: "graduation_seal",
  title:
    "小樽組が卒業式の日に同級生のあなたの卒業アルバムに書いてくれた寄せ書きシール",
  description: `花梨・六花・千冬のそれぞれの、「卒業式の日、同級生のあなたの卒業アルバムに書いてくれた寄せ書き」シールです。
アルバム『卒業証書』の文脈を補間します。
  `,
  tags: [],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "制作",
    },
  ],
  releaseDate: new Date("2026-11-01"),
};
