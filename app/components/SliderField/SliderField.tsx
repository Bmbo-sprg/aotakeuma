type SliderFieldProps = {
  label: string;
  value: number;
  onChange: (nextValue: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
};

export const SliderField = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
}: SliderFieldProps) => {
  return (
    <div className="space-y-1">
      <label className="flex items-center justify-between text-xs font-medium text-slate-600">
        <span>{label}</span>
        <span className="font-semibold text-primary">
          {value}
          {unit}
        </span>
      </label>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
    </div>
  );
};
