import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("works", "routes/works/layout.tsx", [
    index("routes/works/index.tsx"), // /works
    route("albums/:workId", "routes/works/album.tsx"), // /works/albums/:workId
    route("musics/:workId", "routes/works/music.tsx"), // /works/musics/:workId
    route("games/:workId", "routes/works/game.tsx"), // /works/games/:workId
    route("others/:workId", "routes/works/otherWork.tsx"), // /works/others/:workId
  ]),

  route("events", "routes/events/layout.tsx", [
    index("routes/events/index.tsx"), // /events
    route("performances/:eventId", "routes/events/performance.tsx"), // /events/performances/:eventId
    route("exhibitions/:eventId", "routes/events/exhibition.tsx"), // /events/exhibitions/:eventId
    route("others/:eventId", "routes/events/otherEvent.tsx"), // /events/others/:eventId
  ]),

  route("contact", "routes/contact.tsx"), // /contact

  route(":legacyId", "routes/legacy.tsx"),
] satisfies RouteConfig;
