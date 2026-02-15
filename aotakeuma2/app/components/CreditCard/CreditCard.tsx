import type { Credit } from "~/types";
import { SocialLinkList } from "../SocialLinkList/SocialLinkList";

type CreditCardProps = {
  credit: Credit;
  className?: string;
};

export const CreditCard = ({ credit, className }: CreditCardProps) => {
  return (
    <div
      className={["group card relative", className].filter(Boolean).join(" ")}
    >
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold text-slate-900">{credit.name}</p>
        {credit.socialLinks && credit.socialLinks.length > 0 ? (
          <SocialLinkList links={credit.socialLinks} />
        ) : null}
      </div>
      <p className="text-xs text-slate-500">{credit.role}</p>
      {credit.comment ? (
        <div
          className={[
            "pointer-events-none absolute left-3 right-3 z-10",
            "glass-card text-sm text-slate-700 whitespace-pre-line",
            "opacity-0 translate-y-1",
            "transition-all duration-150",
            "group-hover:opacity-100 group-hover:translate-y-0",
          ].join(" ")}
        >
          {credit.comment}
        </div>
      ) : null}
    </div>
  );
};
