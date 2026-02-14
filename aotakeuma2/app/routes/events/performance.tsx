import type { Route } from "./+types/performance";
import { performances } from "../../contents/events/performances";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Performance" }];
}

export function loader({ params }: Route.LoaderArgs) {
  const event = performances.find((item) => item.id === params.eventId);
  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }
  return { event };
}

export default function PerformanceRoute({ loaderData }: Route.ComponentProps) {
  const { event } = loaderData;
  return (
    <main>
      <h1>{event.title}</h1>
      <div>{event.description}</div>
      <div>tags: {event.tags.join(", ")}</div>
      <div>date: {event.date.toLocaleDateString("ja-JP")}</div>
      <div>location: {event.location}</div>
      {event.links ? (
        <div>
          links:
          <ul>
            {event.links.map((link) => (
              <li key={`${link.platform}-${link.url}`}>
                <a href={link.url}>{link.platform}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </main>
  );
}
