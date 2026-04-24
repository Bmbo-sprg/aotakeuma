import type { SocialLink } from "~/types";
import { SocialLinkItem } from "../SocialLinkItem/SocialLinkItem";

type SocialLinkListProps = {
  links: SocialLink[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

export const SocialLinkList = ({
  links,
  size = "xs",
  className,
}: SocialLinkListProps) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <div
      className={["flex flex-wrap gap-2", className].filter(Boolean).join(" ")}
    >
      {links.map((link) => (
        <SocialLinkItem
          key={`${link.platform}-${link.url}`}
          link={link}
          size={size}
        />
      ))}
    </div>
  );
};
