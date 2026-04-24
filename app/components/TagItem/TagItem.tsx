import { useNavigate } from "react-router";
import type { KeyboardEvent, MouseEvent } from "react";
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
  // WorkCard などの <a> タグ内で使用されることを想定しているため、useNavigate を使用して遷移する
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/works?tag=${encodeURIComponent(tag)}`);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleNavigate();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      handleNavigate();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      className={[
        "animate-subtle-in",
        "inline-flex items-center rounded-full border border-slate-300 px-2 py-0.5 text-xs font-medium text-slate-700",
        "hover:cursor-pointer hover:brightness-95 transition-all duration-150",
        TAG_BG_CLASSES[tag] ?? "bg-slate-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <span className="truncate">{tag}</span>
    </div>
  );
};
