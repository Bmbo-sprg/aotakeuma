import type { Exhibition } from "~/types";
import type { Route } from "./+types/exhibition";
import { exhibitions } from "../../contents/events/exhibitions";
import { EventHeadSection } from "../../components/EventHeadSection/EventHeadSection";
import { EventDescriptionSection } from "../../components/EventDescriptionSection/EventDescriptionSection";
import { WorkCard } from "../../components/WorkCard/WorkCard";
import { buildOGMeta, getEventPath } from "../../utils/paths";

export function meta({ loaderData }: Route.MetaArgs) {
  return buildOGMeta({
    title: [loaderData.event.title, "即売会"],
    description: loaderData.event.description,
    path: getEventPath(loaderData.event),
  });
}

export function loader({ params }: Route.LoaderArgs) {
  const event = exhibitions.find((item) => item.id === params.eventId);
  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }
  return { event };
}

export function ExhibitionView({ event }: { event: Exhibition }) {
  return (
    <main className="space-y-8 p-6">
      <EventHeadSection prefix="即売会" event={event} />
      <EventDescriptionSection description={event.description} />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">頒布物</h2>
        <ul className="grid gap-4">
          {event.catalog.map((work) => (
            <li key={work.id}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default function ExhibitionRoute({ loaderData }: Route.ComponentProps) {
  return <ExhibitionView event={loaderData.event} />;
}
