import type { Route } from "./+types/otherEvent";
import { events } from "../../contents/events";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Event" }];
}

export function loader({ params }: Route.LoaderArgs) {
  const event = events.find((item) => item.id === params.eventId);
  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }
  if (event.type !== "other") {
    throw new Response("Not Found", { status: 404 });
  }
  return { event };
}

export default function OtherEventRoute({ loaderData }: Route.ComponentProps) {
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
