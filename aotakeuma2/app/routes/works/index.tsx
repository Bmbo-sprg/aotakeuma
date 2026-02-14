import type { Route } from "./+types/index";
import { Link } from "react-router";
import { works } from "../../contents/works";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Works" }];
}

export function loader(_: Route.LoaderArgs) {
  return { works };
}

export default function WorksIndex({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <h1>Works</h1>
      <ul>
        {loaderData.works.map((work) => {
          const href = `/works/${work.type}s/${work.id}`;
          return (
            <li key={work.id}>
              <Link to={href}>{work.title}</Link>
              <div>type: {work.type}</div>
              <div>{work.description}</div>
              <div>tags: {work.tags.join(", ")}</div>
              <div>release: {work.releaseDate.toLocaleDateString("ja-JP")}</div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
