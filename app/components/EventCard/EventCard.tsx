import { Link } from "react-router";
import type { Album, Event, Game, Music } from "~/types";
import { events } from "../../contents/events";
import { daysUntil, toLocaleDateString } from "../../utils/formats";
import { getEventPath } from "../../utils/paths";
import { TagList } from "../TagList/TagList";

const eventTypeLabel: Record<Event["type"], string> = {
  performance: "DJ／ライブ",
  exhibition: "即売会",
  other: "その他イベント",
};

// 即売会のみ、頒布物（自作のジャケット画像）をカードの画像として流用できる
// （フライヤー画像は権利の都合上、取り込まない方針。CLAUDE.md参照）
const getExhibitionImageUrl = (event: Event) => {
  if (event.type !== "exhibition") return null;
  const workWithJacket = event.catalog.find(
    (work) =>
      ["album", "game"].includes(work.type) || (work as Music).jacketImageUrl
  );
  return workWithJacket
    ? (workWithJacket as Album | Game | Music).jacketImageUrl
    : null;
};

type EventCardProps = {
  event: Event;
  now: Date;
  showTags?: boolean;
  className?: string;
};

export const EventCard = ({
  event,
  now,
  showTags = true,
  className,
}: EventCardProps) => {
  const isLinkable = events.some((item) => item.id === event.id);
  const Wrapper = isLinkable ? Link : "div";
  const wrapperProps = isLinkable ? { to: getEventPath(event) } : { to: "" };
  const imageUrl = getExhibitionImageUrl(event);

  const remainingDays = daysUntil(event.date, now);
  const isFutureEvent = remainingDays >= 0;
  const remainingDaysText =
    remainingDays === 0 ? "本日！" : `${remainingDays}日後`;

  return (
    <div
      className={[
        "group card flex h-full flex-col",
        isLinkable && "interactive",
        isFutureEvent && "bg-secondary/20",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Wrapper {...wrapperProps} className="flex h-full flex-col">
        <div className="relative -mx-4 -mt-4 mb-2 flex aspect-video items-center justify-center overflow-hidden rounded-t-lg bg-slate-100">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-secondary/10 p-3 text-center">
              <p className="text-[11px] font-semibold text-slate-500">
                {eventTypeLabel[event.type]}
              </p>
              <p className="text-xs font-semibold text-slate-700">
                {toLocaleDateString(event.date)}
              </p>
            </div>
          )}
          {isFutureEvent ? (
            <span className="absolute top-2 left-2 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow-sm">
              {remainingDaysText}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-1 overflow-hidden">
          <p className="text-[11px] font-medium text-slate-500">
            {eventTypeLabel[event.type]}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0">
            <p className="text-sm font-semibold text-slate-900 truncate whitespace-pre-line break-all line-clamp-1">
              {event.title}
            </p>
          </div>
          {showTags ? <TagList tags={event.tags} className="gap-1" /> : null}
          <p className="text-xs text-slate-700 line-clamp-2">
            {event.description.trim()}
          </p>
          <p className="mt-auto flex flex-nowrap items-center gap-2 text-[11px] text-slate-500">
            <span>{toLocaleDateString(event.date)}</span>
            <span className="truncate whitespace-pre-line break-all line-clamp-1">
              {event.location}
            </span>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
