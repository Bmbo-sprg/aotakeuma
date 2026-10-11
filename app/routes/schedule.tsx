import type { Route } from "./+types/schedule";
import { events } from "../contents/events";
import { works } from "../contents/works";
import { WorkCard } from "../components/WorkCard/WorkCard";
import { EventCard } from "../components/EventCard/EventCard";
import { BottomNav } from "../components/BottomNav/BottomNav";
import { buildFutureSchedule } from "../utils/schedule";
import { buildOGMeta } from "../utils/paths";

export function meta(_: Route.MetaArgs) {
  return buildOGMeta({
    title: ["今後の予定"],
    description: "竹馬あおの新譜・即売会・DJ出演などの今後の予定です",
    path: "/schedule",
  });
}

export function loader(_: Route.LoaderArgs) {
  return { now: new Date() };
}

export function ScheduleView({ now }: { now: Date }) {
  const schedule = buildFutureSchedule(works, events, now);

  return (
    <main className="space-y-8 p-6 pb-20 lg:mx-auto lg:max-w-6xl">
      <h1 className="text-2xl font-semibold text-slate-900">今後の予定</h1>

      {schedule.length > 0 ? (
        <ul className="grid gap-4">
          {schedule.map((scheduleItem) => (
            <li key={scheduleItem.item.id}>
              {scheduleItem.kind === "work" ? (
                <WorkCard work={scheduleItem.item} now={now} />
              ) : (
                <EventCard event={scheduleItem.item} now={now} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="card text-sm text-slate-700">現在予定はありません</p>
      )}
      <BottomNav active="schedule" />
    </main>
  );
}

export default function ScheduleRoute({ loaderData }: Route.ComponentProps) {
  return <ScheduleView now={loaderData.now} />;
}
