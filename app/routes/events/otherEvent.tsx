import type { Event } from "~/types";
import type { Route } from "./+types/otherEvent";
import { events } from "../../contents/events";
import { EventHeadSection } from "../../components/EventHeadSection/EventHeadSection";
import { EventDescriptionSection } from "../../components/EventDescriptionSection/EventDescriptionSection";
import { buildOGMeta, getEventPath } from "../../utils/paths";

export function meta({ loaderData }: Route.MetaArgs) {
  return buildOGMeta({
    title: [loaderData.event.title, "その他イベント"],
    description: loaderData.event.description,
    path: getEventPath(loaderData.event),
  });
}

export function loader({ params }: Route.LoaderArgs) {
  const event = events.find((item) => item.id === params.eventId);
  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }
  return { event };
}

export function OtherEventView({ event }: { event: Event }) {
  return (
    <main className="space-y-8 p-6">
      <EventHeadSection prefix="その他イベント" event={event} />
      <EventDescriptionSection description={event.description} />
    </main>
  );
}

export default function OtherEventRoute({ loaderData }: Route.ComponentProps) {
  return <OtherEventView event={loaderData.event} />;
}
