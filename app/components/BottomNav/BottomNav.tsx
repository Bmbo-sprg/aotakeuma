import { useState } from "react";
import { Link } from "react-router";

type BottomNavProps = {
  active?: "works" | "events" | "contact";
};

const linkBaseClass =
  "rounded-full border border-slate-300 h-8 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm";
const inactiveClass = "bg-white/80";
const topLinkClass = [linkBaseClass, inactiveClass].join(" ");
const activeClassMap: Record<
  NonNullable<BottomNavProps["active"]> | "none",
  string
> = {
  works: "bg-linear-to-t from-primary/50 to-white/80 to-30%",
  events: "bg-linear-to-t from-secondary/50 to-white/80 to-30%",
  contact: "bg-linear-to-t from-gray-300 to-white/80 to-30%",
  none: "",
};

const buildLinkClass = (
  active?: BottomNavProps["active"],
  key?: BottomNavProps["active"]
) =>
  [
    linkBaseClass,
    active === key ? activeClassMap[key ?? "none"] : inactiveClass,
  ]
    .filter(Boolean)
    .join(" ");

export const BottomNav = ({ active }: BottomNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed right-0 bottom-0 p-6 z-50">
      <div className="flex flex-col items-end gap-2 md:hidden">
        <div
          id="bottom-nav-menu"
          className={[
            "flex flex-col items-end gap-2 transition-opacity duration-150",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden={!isOpen}
        >
          <Link to="/" className={topLinkClass}>
            TOP
          </Link>
          <Link
            to="/works"
            className={buildLinkClass(active, "works")}
            aria-current={active === "works" ? "page" : undefined}
          >
            作品
          </Link>
          <Link
            to="/events"
            className={buildLinkClass(active, "events")}
            aria-current={active === "events" ? "page" : undefined}
          >
            イベント
          </Link>
          <Link
            to="/contact"
            className={buildLinkClass(active, "contact")}
            aria-current={active === "contact" ? "page" : undefined}
          >
            連絡先
          </Link>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-300 h-12 w-12 text-sm font-semibold text-slate-700 shadow-sm"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="bottom-nav-menu"
          aria-label="ナビゲーションを開く"
        >
          <img
            src="/images/aotakeuma_icon.png"
            alt=""
            className={[
              "h-full w-full rounded-full",
              isOpen ? "brightness-90 transition-all duration-150" : "",
            ].join(" ")}
          />
        </button>
      </div>
      <div className="hidden flex-wrap items-center gap-2 md:flex">
        <Link
          to="/works"
          className={buildLinkClass(active, "works")}
          aria-current={active === "works" ? "page" : undefined}
        >
          作品
        </Link>
        <Link
          to="/events"
          className={buildLinkClass(active, "events")}
          aria-current={active === "events" ? "page" : undefined}
        >
          イベント
        </Link>
        <Link
          to="/contact"
          className={buildLinkClass(active, "contact")}
          aria-current={active === "contact" ? "page" : undefined}
        >
          連絡先
        </Link>
        <Link to="/">
          <img
            src="/images/aotakeuma_icon.png"
            alt="竹馬あおのアイコン"
            className="rounded-full border border-slate-300 h-12 w-12 text-sm font-semibold text-slate-700 shadow-sm"
          />
        </Link>
      </div>
    </nav>
  );
};
