import { Link } from "react-router";
import type { Event } from "~/types";
import { events } from "../../contents/events";
import { toLocaleDateString } from "../../utils/formats";
import { getEventPath } from "../../utils/paths";
import { TagList } from "../TagList/TagList";

const eventTypeLabel: Record<Event["type"], string> = {
  performance: "DJ／ライブ",
  exhibition: "即売会",
  other: "その他イベント",
};

type EventCardProps = {
  event: Event;
  className?: string;
};

export const EventCard = ({ event, className }: EventCardProps) => {
  const isLinkable = events.some((item) => item.id === event.id);
  const Wrapper = isLinkable ? Link : "div";
  const wrapperProps = isLinkable ? { to: getEventPath(event) } : { to: "" };

  return (
    <div
      className={["group card", isLinkable && "interactive", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Wrapper {...wrapperProps}>
        <div className="overflow-hidden space-y-1">
          <p className="text-xs font-medium text-slate-500 -mb-1">
            {eventTypeLabel[event.type]}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0">
            <p className="text-lg font-semibold text-slate-900 truncate whitespace-pre-line break-all line-clamp-1">
              {event.title}
            </p>
            <TagList tags={event.tags} className="gap-y-1" />
          </div>
          <p className="text-sm text-slate-700 truncate whitespace-pre-line break-all line-clamp-1">
            {event.description.trim()}
          </p>
          <p className="flex flex-nowrap items-center text-xs text-slate-500 gap-2">
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
