type EventDescriptionSectionProps = {
  description: string;
};

export const EventDescriptionSection = ({
  description,
}: EventDescriptionSectionProps) => {
  return (
    <section>
      <p className="text-slate-700 whitespace-pre-line">{description.trim()}</p>
    </section>
  );
};
