import type { Route } from "./+types/otherWork";
import { works } from "../../contents/works";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Other Work" }];
}

export function loader({ params }: Route.LoaderArgs) {
  const work = works.find((item) => item.id === params.workId);
  if (!work) {
    throw new Response("Not Found", { status: 404 });
  }
  if (work.type !== "other") {
    throw new Response("Not Found", { status: 404 });
  }
  return { work };
}

export default function OtherWorkRoute({ loaderData }: Route.ComponentProps) {
  const { work } = loaderData;
  return (
    <main>
      <h1>{work.title}</h1>
      <div>{work.description}</div>
      <div>tags: {work.tags.join(", ")}</div>
      <div>release: {work.releaseDate.toLocaleDateString("ja-JP")}</div>
      {work.links ? (
        <div>
          links:
          <ul>
            {work.links.map((link) => (
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
          {work.credits.map((credit) => (
            <li key={`${credit.name}-${credit.role}`}>
              {credit.name} / {credit.role}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
