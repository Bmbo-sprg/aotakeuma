import type { Route } from "./+types/music";
import { musics } from "../../contents/works/musics";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Music" }];
}

export function loader({ params }: Route.LoaderArgs) {
  const music = musics.find((item) => item.id === params.workId);
  if (!music) {
    throw new Response("Not Found", { status: 404 });
  }
  return { music };
}

export default function MusicRoute({ loaderData }: Route.ComponentProps) {
  const { music } = loaderData;
  return (
    <main>
      <h1>{music.title}</h1>
      <div>{music.description}</div>
      <div>tags: {music.tags.join(", ")}</div>
      <div>release: {music.releaseDate.toLocaleDateString("ja-JP")}</div>
      {music.links ? (
        <div>
          links:
          <ul>
            {music.links.map((link) => (
              <li key={`${link.platform}-${link.url}`}>
                <a href={link.url}>{link.platform}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {music.video ? (
        <div>
          video:
          <ul>
            {music.video.youtubeUrl ? (
              <li>
                <a href={music.video.youtubeUrl}>youtube</a>
              </li>
            ) : null}
            {music.video.niconicoUrl ? (
              <li>
                <a href={music.video.niconicoUrl}>niconico</a>
              </li>
            ) : null}
            {music.video.bilibiliUrl ? (
              <li>
                <a href={music.video.bilibiliUrl}>bilibili</a>
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}
      <section>
        <h2>Credits</h2>
        <ul>
          {music.credits.map((credit) => (
            <li key={`${credit.name}-${credit.role}`}>
              {credit.name} / {credit.role}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
