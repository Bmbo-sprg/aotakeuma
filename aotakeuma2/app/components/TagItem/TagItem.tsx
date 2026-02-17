import { Link } from "react-router";
import type { Tag } from "~/types";

type TagItemProps = {
  tag: Tag;
  className?: string;
};

const TAG_BG_CLASSES: Partial<Record<Tag, string>> = {
  インスト: "bg-slate-100",
  エレクトロニック: "bg-indigo-50",
  バンドサウンド: "bg-amber-50",
  バラード: "bg-rose-50",
  夏: "bg-emerald-50",
  アイドル: "bg-pink-50",
};

export const TagItem = ({ tag, className }: TagItemProps) => {
  return (
    <Link
      className={[
        "animate-subtle-in",
        "inline-flex items-center rounded-full border border-slate-300 px-2 py-0.5 text-xs font-medium text-slate-700",
        TAG_BG_CLASSES[tag] ?? "bg-slate-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      to={`/works?tag=${encodeURIComponent(tag)}`}
    >
      <span className="truncate">{tag}</span>
    </Link>
  );
};
