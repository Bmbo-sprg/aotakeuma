import { Link } from "react-router";

type BackButtonProps = {
  label: string;
  href: string;
};

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Link
      to={href}
      className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm bg-white/80 hover:bg-slate-50 transition-colors"
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
};
