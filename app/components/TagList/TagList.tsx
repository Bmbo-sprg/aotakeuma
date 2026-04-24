import type { Tag } from "~/types";
import { TagItem } from "../TagItem/TagItem";

type TagListProps = {
  tags: Tag[];
  className?: string;
};

export const TagList = ({ tags, className }: TagListProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div
      className={["flex flex-wrap gap-2", className].filter(Boolean).join(" ")}
    >
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} />
      ))}
    </div>
  );
};
