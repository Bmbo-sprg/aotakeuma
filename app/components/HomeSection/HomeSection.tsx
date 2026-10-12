import type { ReactNode } from "react";
import { Link } from "react-router";

type HomeSectionProps = {
  title: string;
  countText?: string;
  viewAllHref: string;
  randomHref?: string;
  items: { key: string; node: ReactNode }[];
  emptyText?: string;
};

export const HomeSection = ({
  title,
  countText,
  viewAllHref,
  randomHref,
  items,
  emptyText = "現在予定はありません",
}: HomeSectionProps) => {
  return (
    <section className="flex w-full flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <div className="flex items-center gap-4">
          {randomHref ? (
            <Link
              to={randomHref}
              className="text-sm font-semibold text-slate-600"
            >
              大将のおまかせ
            </Link>
          ) : null}
          <Link
            to={viewAllHref}
            className="text-sm font-semibold text-slate-600"
          >
            もっと見る
          </Link>
        </div>
      </div>
      {countText ? (
        <p className="truncate text-xs text-slate-700">{countText}</p>
      ) : null}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map(({ key, node }) => (
            <div key={key} className="h-full">
              {node}
            </div>
          ))}
        </div>
      ) : (
        <p className="card text-sm text-slate-700">{emptyText}</p>
      )}
    </section>
  );
};
