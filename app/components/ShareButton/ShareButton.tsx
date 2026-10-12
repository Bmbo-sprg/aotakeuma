type ShareButtonProps = {
  text: string;
  className?: string;
};

export const ShareButton = ({ text, className }: ShareButtonProps) => {
  const url = `https://x.com/intent/post?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex w-fit items-center gap-1 rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      Xに共有
    </a>
  );
};
