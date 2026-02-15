type BannerProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Banner = ({ src, alt, className }: BannerProps) => {
  return (
    <section
      className={[
        "relative h-56 w-full overflow-hidden drop-shadow-md sm:h-72",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm opacity-80"
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="h-full w-auto object-contain drop-shadow-2xl border-primary-50"
        />
      </div>
    </section>
  );
};
