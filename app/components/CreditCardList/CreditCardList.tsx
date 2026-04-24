import type { Credit } from "~/types";
import { CreditCard } from "../CreditCard/CreditCard";

type CreditCardListProps = {
  credits: Credit[];
};

export const CreditCardList = ({ credits }: CreditCardListProps) => {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {credits.map((credit) => (
        <CreditCard key={`${credit.name}-${credit.role}`} credit={credit} />
      ))}
    </div>
  );
};
