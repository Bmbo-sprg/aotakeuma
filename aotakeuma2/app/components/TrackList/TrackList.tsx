import { Link } from "react-router";
import type { Music } from "~/types";
import { works } from "../../contents/works";
import { getWorkPath } from "../../utils/paths";

type TrackListProps = {
  tracks: Music[];
};

export const TrackList = ({ tracks }: TrackListProps) => {
  return (
    <ul className="grid gap-2">
      {tracks.map((track, index) => {
        const credit =
          track.team ?? track.credits.map((credit) => credit.name).join(", ");
        const isLinkable = works.some((work) => work.id === track.id);
        const Wrapper = isLinkable ? Link : "div";
        const wrapperProps = isLinkable
          ? { to: getWorkPath(track) }
          : { to: "" };

        return (
          <li key={track.id}>
            <Wrapper
              {...wrapperProps}
              className={
                isLinkable
                  ? "group rounded-md transition-colors hover:bg-slate-50"
                  : ""
              }
            >
              <div className="flex items-start gap-3">
                <span className="w-6 py-1 text-right text-xs text-slate-400 tabular-nums">
                  {index + 1}.
                </span>
                <div>
                  <p
                    className={[
                      "text-base font-semibold text-slate-900",
                      isLinkable && "group-hover:underline",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {track.title}
                  </p>
                  <p className="text-xs text-slate-500">{credit}</p>
                </div>
              </div>
            </Wrapper>
          </li>
        );
      })}
    </ul>
  );
};
