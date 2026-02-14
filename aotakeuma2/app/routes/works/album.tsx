import type { Route } from "./+types/album";
import { Link } from "react-router";
import { albums } from "../../contents/works/albums";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Album" }];
}

export function loader({ params }: Route.LoaderArgs) {
  const album = albums.find((item) => item.id === params.workId);
  if (!album) {
    throw new Response("Not Found", { status: 404 });
  }
  return { album };
}

export default function AlbumRoute({ loaderData }: Route.ComponentProps) {
  const { album } = loaderData;
  return (
    <main>
      <h1>
        {album.titlePrefix ? `${album.titlePrefix} ` : ""}
        {album.title}
      </h1>
      <div>{album.description}</div>
      <div>tags: {album.tags.join(", ")}</div>
      <div>release: {album.releaseDate.toLocaleDateString("ja-JP")}</div>
      {album.links ? (
        <div>
          links:
          <ul>
            {album.links.map((link) => (
              <li key={`${link.platform}-${link.url}`}>
                <a href={link.url}>{link.platform}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <section>
        <h2>Credits</h2>
        <ul>
          {album.credits.map((credit) => (
            <li key={`${credit.name}-${credit.role}`}>
              {credit.name} / {credit.role}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Tracks</h2>
        <ul>
          {album.tracks.map((track) => (
            <li key={track.id}>
              <Link to={`/works/musics/${track.id}`}>{track.title}</Link>
              <div>{track.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
