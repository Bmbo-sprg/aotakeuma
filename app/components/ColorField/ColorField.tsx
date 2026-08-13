type ColorFieldProps = {
  label: string;
  value: string;
  onChange: (nextValue: string) => void;
};

export const ColorField = ({ label, value, onChange }: ColorFieldProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-medium text-slate-600">
        {label}
      </label>
      <input
        type="color"
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-full cursor-pointer rounded-lg border border-slate-300 bg-white/80"
      />
    </div>
  );
};
