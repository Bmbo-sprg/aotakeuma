import { Link } from "react-router";
import type { Album, Game, Music, Work } from "~/types";
import { works } from "../../contents/works";
import { daysUntil, toLocaleDateString } from "../../utils/formats";
import { getWorkPath } from "../../utils/paths";
import { TagList } from "../TagList/TagList";

const workTypeLabel: Record<Work["type"], string> = {
  album: "アルバム",
  music: "音楽",
  game: "ゲーム",
  other: "その他作品",
};

type WorkCardProps = {
  work: Work;
  now: Date;
  showTags?: boolean;
  className?: string;
};

export const WorkCard = ({
  work,
  now,
  showTags = true,
  className,
}: WorkCardProps) => {
  const isLinkable = works.some((item) => item.id === work.id);
  const Wrapper = isLinkable ? Link : "div";
  const wrapperProps = isLinkable ? { to: getWorkPath(work) } : { to: "" };
  const jacketImageUrl =
    ["album", "game"].includes(work.type) || (work as Music).jacketImageUrl
      ? (work as Album | Game | Music).jacketImageUrl
      : null;

  const remainingDays = daysUntil(work.releaseDate, now);
  const isFutureWork = remainingDays >= 0;
  const remainingDaysText =
    remainingDays === 0 ? "本日！" : `${remainingDays}日後`;

  return (
    <div
      className={[
        "group card flex h-full flex-col",
        isLinkable && "interactive",
        isFutureWork && "bg-secondary/20",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Wrapper {...wrapperProps} className="flex h-full flex-col">
        <div className="relative -mx-4 -mt-4 mb-2 flex aspect-video items-center justify-center overflow-hidden rounded-t-lg bg-slate-100">
          {jacketImageUrl ? (
            <img
              src={jacketImageUrl}
              alt={`${work.title}のジャケット画像`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-primary/10 p-3 text-center">
              <p className="text-[11px] font-semibold text-slate-500">
                {workTypeLabel[work.type]}
              </p>
              <p className="text-xs font-semibold text-slate-700">
                {toLocaleDateString(work.releaseDate)}
              </p>
            </div>
          )}
          {isFutureWork ? (
            <span className="absolute top-2 left-2 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow-sm">
              {remainingDaysText}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-1 overflow-hidden">
          <p className="text-[11px] font-medium text-slate-500">
            {workTypeLabel[work.type]}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0">
            <p className="text-sm font-semibold text-slate-900 truncate whitespace-pre-line break-all line-clamp-1">
              {work.title}
            </p>
          </div>
          {showTags ? <TagList tags={work.tags} className="gap-1" /> : null}
          <p className="text-xs text-slate-700 line-clamp-2">
            {work.description.trim()}
          </p>
          <p className="mt-auto text-[11px] text-slate-500">
            {toLocaleDateString(work.releaseDate)}
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
