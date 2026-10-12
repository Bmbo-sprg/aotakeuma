import { Link } from "react-router";
import type { Event } from "~/types";
import { events } from "../../contents/events";
import { daysUntil, toLocaleDateString } from "../../utils/formats";
import {
  buildCollageLayout,
  type CollagePosition,
} from "../../utils/exhibitionCollage";
import { getEventPath } from "../../utils/paths";
import { TagList } from "../TagList/TagList";
import { ThumbnailImage } from "../ThumbnailImage/ThumbnailImage";

const eventTypeLabel: Record<Event["type"], string> = {
  performance: "DJ／ライブ",
  exhibition: "即売会",
  other: "その他イベント",
};

const COLLAGE_POSITION_CLASSES: Record<CollagePosition, string> = {
  full: "col-span-2 row-span-2",
  "top-left": "col-start-1 row-start-1",
  "top-right": "col-start-2 row-start-1",
  "bottom-left": "col-start-1 row-start-2",
  "bottom-right": "col-start-2 row-start-2",
};

// 即売会のみ、頒布物（自作のジャケット画像）をカードの画像として流用できる
// （フライヤー画像は権利の都合上、取り込まない方針。CLAUDE.md参照）
const getExhibitionCollage = (event: Event) => {
  if (event.type !== "exhibition") return [];
  return buildCollageLayout(event.catalog);
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
  const collage = getExhibitionCollage(event);

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
      <Wrapper
        {...wrapperProps}
        className="flex h-full flex-row-reverse items-start gap-3 sm:flex-col sm:items-stretch sm:gap-0"
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-slate-100 sm:-mx-4 sm:-mt-4 sm:mb-2 sm:h-auto sm:w-auto sm:aspect-video sm:rounded-t-lg sm:rounded-b-none">
          {collage.length > 1 ? (
            <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-0.5">
              {collage.map((item) => (
                <img
                  key={item.url}
                  src={item.url}
                  alt=""
                  className={[
                    "h-full w-full object-cover",
                    COLLAGE_POSITION_CLASSES[item.position],
                  ].join(" ")}
                />
              ))}
            </div>
          ) : (
            <ThumbnailImage
              src={collage[0]?.url ?? null}
              alt=""
              fit={collage[0]?.fit}
            />
          )}
          {isFutureEvent ? (
            <span className="absolute top-1 left-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow-sm sm:top-2 sm:left-2">
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
