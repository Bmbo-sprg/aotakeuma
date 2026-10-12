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
        "inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-primary/50 px-4 py-2 text-sm font-semibold text-slate-700",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      X に共有
    </a>
  );
};
