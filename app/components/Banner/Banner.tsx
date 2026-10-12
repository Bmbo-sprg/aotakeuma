import { ThumbnailImage } from "../ThumbnailImage/ThumbnailImage";

type BannerProps = {
  src: string;
  alt: string;
  fit?: "contain" | "cover";
  className?: string;
};

export const Banner = ({ src, alt, fit, className }: BannerProps) => {
  return (
    <section
      className={["h-90 w-full drop-shadow-md", className]
        .filter(Boolean)
        .join(" ")}
    >
      <ThumbnailImage src={src} alt={alt} fit={fit} />
    </section>
  );
};
