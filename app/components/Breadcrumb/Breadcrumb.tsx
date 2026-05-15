import { Link } from "react-router";

type BreadcrumbProps = {
  parentLabel: string;
  parentHref: string;
  currentLabel: string;
};

export const Breadcrumb = ({
  parentLabel,
  parentHref,
  currentLabel,
}: BreadcrumbProps) => {
  return (
    <nav aria-label="パンくずリスト">
      <ol className="flex items-center gap-1.5 text-sm text-slate-500 flex-wrap">
        <li>
          <Link
            to={parentHref}
            className="flex items-center gap-1 text-slate-600 underline underline-offset-2 hover:text-slate-900 transition-colors"
          >
            <span aria-hidden="true">←</span>
            {parentLabel}
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li className="truncate" aria-current="page">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
};
