import type { Exhibition } from "~/types";
import type { Route } from "./+types/exhibition";
import { exhibitions } from "../../contents/events/exhibitions";
import { BackButton } from "../../components/BackButton/BackButton";
import { EventHeadSection } from "../../components/EventHeadSection/EventHeadSection";
import { EventDescriptionSection } from "../../components/EventDescriptionSection/EventDescriptionSection";
import { ShareButton } from "../../components/ShareButton/ShareButton";
import { WorkCard } from "../../components/WorkCard/WorkCard";
import { buildOGMeta, getEventPath } from "../../utils/paths";
import { buildEventDiscoveryShareText } from "../../utils/shareText";

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
  return { event, now: new Date() };
}

export function ExhibitionView({
  event,
  now,
}: {
  event: Exhibition;
  now: Date;
}) {
  return (
    <main className="space-y-8 p-6">
      <BackButton label="即売会一覧へ" href="/events?type=exhibition" />
      <EventHeadSection event={event} />
      <EventDescriptionSection description={event.description} />
      <ShareButton text={buildEventDiscoveryShareText(event)} />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">頒布物</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {event.catalog.map((work) => (
            <li key={work.id}>
              <WorkCard work={work} now={now} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default function ExhibitionRoute({ loaderData }: Route.ComponentProps) {
  return <ExhibitionView event={loaderData.event} now={loaderData.now} />;
}
