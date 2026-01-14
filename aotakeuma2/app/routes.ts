import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // 自己紹介、works 一覧 + see more リンク、events 一覧 + see more リンク、contact 概要 + see more リンク、posts (Twitter, note?)
  index("routes/home.tsx"),

  // route("works", "routes/works/layout.tsx", [
  //   // 検索バー、work type でフィルタリング、ソートなど
  //   index("routes/works/index.tsx"), // /works
  //   route("albums/:workId", "routes/works/album.tsx"), // /works/albums/:workId
  //   route("musics/:workId", "routes/works/music.tsx"), // /works/musics/:workId
  //   route("videos/:workId", "routes/works/video.tsx"), // /works/videos/:workId
  //   route("games/:workId", "routes/works/game.tsx"), // /works/games/:workId
  //   route("others/:workId", "routes/works/otherWork.tsx"), // /works/others/:workId
  // ]),

  // route("events", "routes/events/layout.tsx", [
  //   // 検索バー、event type でフィルタリング、ソートなど
  //   index("routes/events/index.tsx"), // /events
  //   route("performances/:eventId", "routes/events/performance.tsx"), // /events/performances/:eventId
  //   route("exhibitions/:eventId", "routes/events/exhibition.tsx"), // /events/exhibitions/:eventId
  //   route("others/:eventId", "routes/events/otherEvent.tsx"), // /events/others/:eventId
  // ]),

  // route("contact", "routes/contact.tsx"), // /contact

  // route("aonote", "routes/aliases/aonote.tsx"), // /aonote
  // route("digimoca", "routes/aliases/digimoca.tsx"), // /digimoca
  // route("haruame-ost", "routes/aliases/haruame-ost.tsx"), // /haruame-ost
  // // TODO: add more...
] satisfies RouteConfig;
