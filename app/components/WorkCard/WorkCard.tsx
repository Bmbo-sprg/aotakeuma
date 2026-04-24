import { Link } from "react-router";
import type { Album, Game, Work } from "~/types";
import { works } from "../../contents/works";
import { toLocaleDateString } from "../../utils/formats";
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
  className?: string;
};

export const WorkCard = ({ work, className }: WorkCardProps) => {
  const isLinkable = works.some((item) => item.id === work.id);
  const Wrapper = isLinkable ? Link : "div";
  const wrapperProps = isLinkable ? { to: getWorkPath(work) } : { to: "" };
  const hasJacket = ["album", "game"].includes(work.type);

  return (
    <div
      className={["group card", isLinkable && "interactive", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Wrapper
        {...wrapperProps}
        className="flex h-full items-start justify-between gap-8"
      >
        <div className="overflow-hidden space-y-1">
          <p className="text-xs font-medium text-slate-500 -mb-1">
            {workTypeLabel[work.type]}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0">
            <p className="text-lg font-semibold text-slate-900 truncate whitespace-pre-line break-all line-clamp-1">
              {work.title}
            </p>
            <TagList tags={work.tags} className="gap-y-1" />
          </div>
          <p className="text-sm text-slate-700 truncate whitespace-pre-line break-all line-clamp-1">
            {work.description.trim()}
          </p>
          <p className="text-xs text-slate-500 truncate line-clamp-1">
            {toLocaleDateString(work.releaseDate)}
          </p>
        </div>
        {hasJacket ? (
          <img
            src={(work as Album | Game).jacketImageUrl}
            alt={`${work.title}のジャケット画像`}
            className="h-40 w-40 object-cover -m-4 rounded-md drop-shadow-sm border border-slate-300"
          />
        ) : null}
      </Wrapper>
    </div>
  );
};
