import { aonote } from "../../works/albums/aonote";
import { syngularity } from "../../works/albums/syngularity";
import { yohkoh } from "../../works/albums/yohkoh";
import { esora_key } from "../../works/esora_key";
import type { Exhibition } from "~/types";

export const kowane_6: Exhibition = {
  type: "exhibition",
  id: "kowane_6",
  title: "声音の宴 6次会",
  description: "めちゃめちゃ元気だったら新譜を持っていきたい！！！！！！！",
  tags: [],
  date: new Date("2026-05-24"),
  location: "大田区産業プラザ PiO F-01",
  links: [],
  catalog: [yohkoh, syngularity, aonote, esora_key],
};
