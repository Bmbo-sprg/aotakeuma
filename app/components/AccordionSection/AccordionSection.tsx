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
        className="flex w-full items-center gap-2 text-left interactive hover:opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={[
            "h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300",
            open ? "rotate-90" : "rotate-0",
          ].join(" ")}
          aria-hidden
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
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
