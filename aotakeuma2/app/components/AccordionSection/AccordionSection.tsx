import type { ReactNode } from "react";
import { useEffect, useId, useRef, useState } from "react";

type AccordionSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export const AccordionSection = ({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentId = useId();

  useEffect(() => {
    if (!contentRef.current) return;
    setContentHeight(contentRef.current.scrollHeight);
  }, [children]);

  return (
    <section className={"space-y-3"}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={contentId}
        className="flex w-full items-center justify-between gap-4 text-left interactive hover:opacity-70"
      >
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <span
          className={[
            "text-lg font-extrabold text-slate-900",
            "transition-transform duration-300",
            open ? "rotate-90" : "rotate-0",
          ].join(" ")}
          aria-hidden
        >
          ＞
        </span>
      </button>
      <div
        id={contentId}
        className={[
          "overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out",
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        ].join(" ")}
        style={{ maxHeight: open ? contentHeight : 0 }}
      >
        <div
          ref={contentRef}
          className={[
            "border-l border-slate-200 pl-4 text-slate-700 whitespace-pre-line leading-loose tracking-wide",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
