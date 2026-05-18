import { type RouteConfig, index, route } from "@react-router/dev/routes";

const adminRoutes =
  process.env.NODE_ENV === "development"
    ? [
        route("admin", "routes/admin/layout.tsx", [
          index("routes/admin/index.tsx"), // /admin
          route("keys", "routes/admin/keys/index.tsx"), // /admin/keys
          route("keys/new", "routes/admin/keys/new.tsx"), // /admin/keys/new
          route("keys/:key", "routes/admin/keys/$key.tsx"), // /admin/keys/:key
          route("analytics", "routes/admin/analytics.tsx"), // /admin/analytics
          route("upload", "routes/admin/upload.tsx"), // /admin/upload
          route("contents", "routes/admin/contents.tsx"), // /admin/contents (stub)
        ]),
      ]
    : [];

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

  ...adminRoutes,
] satisfies RouteConfig;
