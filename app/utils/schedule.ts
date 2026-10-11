import type { Event, Work } from "~/types";
import { daysUntil } from "./formats";

export type ScheduleItem =
  | { kind: "work"; date: Date; item: Work }
  | { kind: "event"; date: Date; item: Event };

// 未来（当日含む）の Work と Event を日付の昇順でまとめる
export const buildFutureSchedule = (
  works: Work[],
  events: Event[],
  now: Date
): ScheduleItem[] => {
  const futureWorks: ScheduleItem[] = works
    .filter((work) => daysUntil(work.releaseDate, now) >= 0)
    .map((item) => ({ kind: "work", date: item.releaseDate, item }));
  const futureEvents: ScheduleItem[] = events
    .filter((event) => daysUntil(event.date, now) >= 0)
    .map((item) => ({ kind: "event", date: item.date, item }));

  return [...futureWorks, ...futureEvents].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
};
