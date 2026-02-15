import { Link } from "react-router";
import type { Work } from "~/types";
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

  return (
    <div
      className={["group card", isLinkable && "interactive", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Wrapper {...wrapperProps}>
        <div className="overflow-hidden space-y-1">
          <p className="text-xs font-medium text-slate-500 -mb-1">
            {workTypeLabel[work.type]}
          </p>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="text-lg font-semibold text-slate-900">{work.title}</p>
            <TagList tags={work.tags} />
          </div>
          <p className="text-sm text-slate-700 overflow-hidden text-ellipsis whitespace-pre-line line-clamp-1">
            {work.description.trim()}
          </p>
          <p className="text-xs text-slate-500">
            リリース日: {toLocaleDateString(work.releaseDate)}
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
