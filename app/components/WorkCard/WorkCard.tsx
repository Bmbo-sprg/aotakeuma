import { Link } from "react-router";
import type { Album, Game, Music, Work } from "~/types";
import { works } from "../../contents/works";
import { albums } from "../../contents/works/albums";
import { daysUntil, toLocaleDateString } from "../../utils/formats";
import {
  pickPastelBorderClass,
  resolveMusicImage,
} from "../../utils/musicImage";
import { getWorkPath } from "../../utils/paths";
import { TagList } from "../TagList/TagList";
import { ThumbnailImage } from "../ThumbnailImage/ThumbnailImage";

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
  const image =
    work.type === "album" || work.type === "game"
      ? { url: (work as Album | Game).jacketImageUrl, source: "own" as const }
      : work.type === "music"
        ? resolveMusicImage(work as Music, albums)
        : null;
  const isBorrowedImage = image?.source === "album";

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
      <Wrapper
        {...wrapperProps}
        className="flex h-full flex-row-reverse items-start gap-3 sm:flex-col sm:items-stretch sm:gap-0"
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-slate-100 sm:-mx-4 sm:-mt-4 sm:mb-2 sm:h-auto sm:w-auto sm:aspect-video sm:rounded-t-lg sm:rounded-b-none">
          <ThumbnailImage
            src={image?.url ?? null}
            alt={`${work.title}のジャケット画像`}
          />
          {isBorrowedImage ? (
            <div
              className={[
                "pointer-events-none absolute inset-1 rounded-sm border-4",
                pickPastelBorderClass(work.id),
              ].join(" ")}
            />
          ) : null}
          {isFutureWork ? (
            <span className="absolute top-1 left-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow-sm sm:top-2 sm:left-2">
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
