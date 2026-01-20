import type { Album } from "~/types";
import { teenage_xfd } from "../videos/teenage_xfd";

export const teenage: Album = {
  type: "album",
  id: "teenage",
  titlePrefix: "閔仲 1st Album",
  title: "高校生",
  description: "高校時代のすべてを言語化した音たちを集めました",
  tags: [], // TODO
  credits: [
    {
      name: "閔仲",
      role: "制作、マスタリング",
    },
  ],
  releaseDate: new Date("2020-06-05"),
  links: [
    {
      platform: "booth",
      url: "https://aotakeuma.booth.pm/items/3907336",
    },
  ],
  jacketImageUrl: "/images/jackets/teenage.png",
  tracks: [], // TODO
  video: teenage_xfd,
};
