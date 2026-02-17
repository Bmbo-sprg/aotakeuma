type BadgeOption = {
  value: string;
  label: string;
};

type BadgeButtonListProps = {
  options: BadgeOption[];
  value?: string;
  onChange: (nextValue: string) => void;
  className?: string;
};

export const BadgeButtonList = ({
  options,
  value,
  onChange,
  className,
}: BadgeButtonListProps) => {
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            className={[
              "rounded-full border px-3 py-1 text-xs font-medium",
              "transition-colors duration-150",
              value === option.value
                ? "border-slate-300 bg-primary text-white"
                : "border-slate-300 bg-white text-slate-600 hover:bg-slate-100",
            ].join(" ")}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
