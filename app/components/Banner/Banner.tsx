import { useState } from "react";

type BannerProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Banner = ({ src, alt, className }: BannerProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc("/images/aotakeuma_ogp.png");
  };

  return (
    <section
      className={[
        "relative h-90 w-full overflow-hidden drop-shadow-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm opacity-80"
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className="h-full w-auto object-contain drop-shadow-2xl border-primary-50"
        />
      </div>
    </section>
  );
};
