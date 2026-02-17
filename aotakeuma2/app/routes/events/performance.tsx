import type { Performance } from "~/types";
import type { Route } from "./+types/performance";
import { performances } from "../../contents/events/performances";
import { EventHeadSection } from "../../components/EventHeadSection/EventHeadSection";
import { EventDescriptionSection } from "../../components/EventDescriptionSection/EventDescriptionSection";
import { buildOGMeta, getEventPath } from "../../utils/paths";

export function meta({ loaderData }: Route.MetaArgs) {
  return buildOGMeta({
    title: [loaderData.event.title, "DJ／ライブ"],
    description: loaderData.event.description,
    path: getEventPath(loaderData.event),
  });
}

export function loader({ params }: Route.LoaderArgs) {
  const event = performances.find((item) => item.id === params.eventId);
  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }
  return { event };
}

export function PerformanceView({ event }: { event: Performance }) {
  return (
    <main className="space-y-8 p-6">
      <EventHeadSection prefix="DJ／ライブ" event={event} />
      <EventDescriptionSection description={event.description} />
    </main>
  );
}

export default function PerformanceRoute({ loaderData }: Route.ComponentProps) {
  return <PerformanceView event={loaderData.event} />;
}
