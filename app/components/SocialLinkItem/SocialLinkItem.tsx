import { Link } from "react-router";
import type { SocialLink } from "~/types";
import { brandIcons } from "./brandIcons";

type SocialLinkItemProps = {
  link: SocialLink;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

const PLATFORM_NAMES: Record<SocialLink["platform"], string> = {
  website: "Website",
  spotify: "Spotify",
  apple_music: "Apple Music",
  youtube_music: "YouTube Music",
  bandcamp: "Bandcamp",
  booth: "BOOTH",
  niconico: "ニコニコ",
  youtube: "YouTube",
  bilibili: "BiliBili",
  steam: "Steam",
  pixiv: "pixiv",
  skeb: "Skeb",
  fanbox: "pixivFANBOX",
  note: "note",
  mixcloud: "Mixcloud",
  twitter: "X",
};

const ICON_BOX_CLASSES: Record<
  NonNullable<SocialLinkItemProps["size"]>,
  string
> = {
  xs: "h-6 w-6",
  sm: "h-7 w-7",
  md: "h-8 w-8",
  lg: "h-9 w-9",
  xl: "h-10 w-10",
};

const ICON_GLYPH_CLASSES: Record<
  NonNullable<SocialLinkItemProps["size"]>,
  string
> = {
  xs: "h-3 w-3",
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-4.5 w-4.5",
  xl: "h-5 w-5",
};

const TEXT_SIZE_CLASSES: Record<
  NonNullable<SocialLinkItemProps["size"]>,
  string
> = {
  xs: "px-2 py-0.5 text-xs",
  sm: "px-2.5 py-1 text-sm",
  md: "px-3 py-1 text-sm",
  lg: "px-3.5 py-1.5 text-base",
  xl: "px-4 py-2 text-lg",
};

const BASE_CLASSES =
  "animate-subtle-in inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 font-medium text-slate-700 hover:text-slate-900";

export const SocialLinkItem = ({
  link,
  size = "xs",
  className,
}: SocialLinkItemProps) => {
  const label = PLATFORM_NAMES[link.platform];
  // website は特定ブランドを持たないため、汎用のリンクアイコンを使う
  const icon =
    link.platform === "website"
      ? GENERIC_WEBSITE_ICON
      : brandIcons[link.platform];

  return (
    <Link
      className={[
        BASE_CLASSES,
        icon ? ICON_BOX_CLASSES[size] : TEXT_SIZE_CLASSES[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      to={link.url}
      rel="noreferrer"
      target="_blank"
      aria-label={label}
      title={label}
    >
      {icon ? (
        <svg
          viewBox={icon.viewBox}
          className={ICON_GLYPH_CLASSES[size]}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon.d} />
        </svg>
      ) : (
        label
      )}
    </Link>
  );
};

const GENERIC_WEBSITE_ICON = {
  viewBox: "0 0 24 24",
  d: "M12 2a10 10 0 100 20 10 10 0 000-20zm7.94 9h-3.03a16.9 16.9 0 00-1.18-5.52A8.03 8.03 0 0119.94 11zM12 4.07c.9 1.1 2.02 3.1 2.37 6.93H9.63c.35-3.83 1.47-5.83 2.37-6.93zM9.63 13h4.74c-.35 3.83-1.47 5.83-2.37 6.93-.9-1.1-2.02-3.1-2.37-6.93zM8.27 5.48A16.9 16.9 0 007.09 11H4.06a8.03 8.03 0 014.21-5.52zM4.06 13h3.03a16.9 16.9 0 001.18 5.52A8.03 8.03 0 014.06 13zm11.67 5.52A16.9 16.9 0 0016.91 13h3.03a8.03 8.03 0 01-4.21 5.52z",
};
