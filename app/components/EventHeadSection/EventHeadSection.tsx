import type { Event } from "~/types";
import { toLocaleDateString } from "../../utils/formats";
import { TagList } from "../TagList/TagList";
import { SocialLinkList } from "../SocialLinkList/SocialLinkList";

type EventHeadSectionProps = {
  event: Event;
};

export const EventHeadSection = ({ event }: EventHeadSectionProps) => {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">{event.title}</h1>
        <TagList tags={event.tags} />
      </div>
      <div className="flex flex-wrap items-center text-sm font-medium text-slate-500 gap-2">
        <span>{toLocaleDateString(event.date)}</span>
        <span>{event.location}</span>
        {event.links ? <SocialLinkList links={event.links} /> : null}
      </div>
    </section>
  );
};
