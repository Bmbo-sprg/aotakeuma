type ToggleOption = {
  value: string;
  label: string;
};

type ToggleProps = {
  left: ToggleOption;
  right: ToggleOption;
  value?: string;
  onChange: (nextValue: string) => void;
  className?: string;
};

export const Toggle = ({
  left,
  right,
  value,
  onChange,
  className,
}: ToggleProps) => {
  return (
    <div
      className={[
        "inline-flex rounded-full border border-slate-300 bg-white/80 p-1 shadow-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {[left, right].map((option) => (
        <button
          key={option.value}
          className={[
            "rounded-full px-3 py-1 text-xs font-medium",
            "transition-colors duration-150",
            value === option.value
              ? "bg-primary text-white"
              : "text-slate-600 hover:bg-slate-100",
          ].join(" ")}
          type="button"
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
