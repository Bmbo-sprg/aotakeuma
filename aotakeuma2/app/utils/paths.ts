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

export const getWorkPath = (work: Work) =>
  `/works/${workTypePathMap[work.type]}/${work.id}`;

export const getEventPath = (event: Event) =>
  `/events/${eventTypePathMap[event.type]}/${event.id}`;
