import type { Route } from "./+types/game";
import { games } from "../../contents/works/games";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Game" }];
}

export function loader({ params }: Route.LoaderArgs) {
  const game = games.find((item) => item.id === params.workId);
  if (!game) {
    throw new Response("Not Found", { status: 404 });
  }
  return { game };
}

export default function GameRoute({ loaderData }: Route.ComponentProps) {
  const { game } = loaderData;
  return (
    <main>
      <h1>{game.title}</h1>
      <div>{game.description}</div>
      <div>tags: {game.tags.join(", ")}</div>
      <div>release: {game.releaseDate.toLocaleDateString("ja-JP")}</div>
      {game.links ? (
        <div>
          links:
          <ul>
            {game.links.map((link) => (
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
          {game.credits.map((credit) => (
            <li key={`${credit.name}-${credit.role}`}>
              {credit.name} / {credit.role}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
