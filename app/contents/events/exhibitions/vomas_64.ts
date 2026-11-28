import type { Exhibition } from "~/types";
import { inori } from "../../works/albums/inori";
import { graduation } from "../../works/albums/graduation";
import { graduation_seal } from "../../works/graduation_seal";
import { binarography } from "../../works/albums/binarography";
import { yohkoh } from "../../works/albums/yohkoh";
import { tnftep1 } from "../../works/albums/tnftep1";

export const vomas_64: Exhibition = {
  type: "exhibition",
  id: "vomas_64",
  title: "THE VOC@LOiD M@STER 64",
  description: "一年ぶりのボーマス。竹馬あお 5th Album を新譜として頒布します",
  tags: [],
  date: new Date("2026-11-28"),
  location: "東京流通センター 第一展示場 G27",
  links: [],
  catalog: [inori, graduation, graduation_seal, binarography, yohkoh, tnftep1],
};
