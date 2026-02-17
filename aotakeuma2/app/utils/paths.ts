import type { Event, Work } from "~/types";

const workTypePathMap: Record<Work["type"], string> = {
  music: "musics",
  game: "games",
  album: "albums",
  other: "others",
};

const eventTypePathMap: Record<Event["type"], string> = {
  performance: "performances",
  exhibition: "exhibitions",
  other: "others",
};

export const normalizeLegacyId = (legacyId: string) =>
  legacyId.replace(/-/g, "_");

export const SITE_URL = "https://aotakeuma.com";

export const getWorkPath = (work: Work) =>
  `/works/${workTypePathMap[work.type]}/${work.id}`;

export const getEventPath = (event: Event) =>
  `/events/${eventTypePathMap[event.type]}/${event.id}`;

export const buildOGMeta = ({
  path,
  title = [],
  description = "",
  imagePath = "/images/aotakeuma_ogp.png",
}: {
  path: string;
  title?: string[];
  description?: string;
  imagePath?: string;
}) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = [...title, "竹馬あお"].filter(Boolean).join(" - ");
  const fullDescription = [
    description,
    "音楽と生きる ／ 合成音声オールジャンルポップス作編曲",
  ]
    .filter(Boolean)
    .join(" - ");
  const imageUrl = `${SITE_URL}${imagePath}`;

  return [
    { title: fullTitle },
    {
      name: "description",
      content: fullDescription,
    },
    {
      property: "og:title",
      content: fullTitle,
    },
    {
      property: "og:description",
      content: fullDescription,
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:image",
      content: imageUrl,
    },
    {
      name: "twitter:title",
      content: fullTitle,
    },
    {
      name: "twitter:description",
      content: fullDescription,
    },
    {
      name: "twitter:url",
      content: url,
    },
    {
      name: "twitter:image",
      content: imageUrl,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: url,
    },
  ];
};

export const buildCanonicalLink = (path: string) => ({
  rel: "canonical",
  href: `${SITE_URL}${path}`,
});
