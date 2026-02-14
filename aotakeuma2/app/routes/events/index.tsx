import type { Route } from "./+types/index";
import { Link } from "react-router";
import { events } from "../../contents/events";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Events" }];
}

export function loader(_: Route.LoaderArgs) {
  return { events };
}

export default function EventsIndex({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <h1>Events</h1>
      <ul>
        {loaderData.events.map((event) => {
          const href = `/events/${event.type}s/${event.id}`;
          return (
            <li key={event.id}>
              <Link to={href}>{event.title}</Link>
              <div>type: {event.type}</div>
              <div>{event.description}</div>
              <div>tags: {event.tags.join(", ")}</div>
              <div>date: {event.date.toLocaleDateString("ja-JP")}</div>
              <div>location: {event.location}</div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
