import { Link } from "react-router";
import type { SocialLink } from "~/types";

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
  linkcore: "LinkCore",
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
  twipla: "TwiPla",
  twinvite: "twinvite",
  mixcloud: "Mixcloud",
  twitter: "X",
};

const PLATFORM_COLORS: Record<SocialLink["platform"], string> = {
  website: "bg-primary text-white",
  spotify: "bg-green-100",
  apple_music: "bg-red-100",
  youtube_music: "bg-red-100",
  linkcore: "bg-gray-100",
  bandcamp: "bg-teal-100",
  booth: "bg-pink-100",
  niconico: "bg-gray-100",
  youtube: "bg-red-100",
  bilibili: "bg-pink-100",
  steam: "bg-indigo-100",
  pixiv: "bg-sky-100",
  skeb: "bg-emerald-100",
  fanbox: "bg-yellow-100",
  note: "bg-gray-100",
  twipla: "bg-blue-100",
  twinvite: "bg-blue-100",
  mixcloud: "bg-purple-100",
  twitter: "bg-blue-100",
};

const SIZE_CLASSES: Record<NonNullable<SocialLinkItemProps["size"]>, string> = {
  xs: "px-2 py-0.5 text-xs",
  sm: "px-2.5 py-1 text-sm",
  md: "px-3 py-1 text-sm",
  lg: "px-3.5 py-1.5 text-base",
  xl: "px-4 py-2 text-lg",
};

export const SocialLinkItem = ({
  link,
  size = "xs",
  className,
}: SocialLinkItemProps) => {
  const label = PLATFORM_NAMES[link.platform];

  return (
    <Link
      className={[
        "animate-subtle-in",
        "inline-flex items-center rounded-full border border-slate-300 font-medium text-slate-700",
        SIZE_CLASSES[size],
        PLATFORM_COLORS[link.platform],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      to={link.url}
      rel="noreferrer"
      target="_blank"
    >
      {label}
    </Link>
  );
};
