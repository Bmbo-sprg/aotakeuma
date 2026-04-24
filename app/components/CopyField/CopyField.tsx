import { useState } from "react";

type CopyFieldProps = {
  label: string;
  value: string;
};

export const CopyField = ({ label, value }: CopyFieldProps) => {
  const [buttonText, setButtonText] = useState("Copy");
  const handleCopy = async () => {
    await navigator?.clipboard?.writeText(value);
    setButtonText("Copied!");
    setTimeout(() => setButtonText("Copy"), 2000);
  };

  return (
    <div className="space-y-1">
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 overflow-hidden rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm font-medium text-slate-900">
          {value}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="min-w-24 rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 hover:opacity-50 transition-opacity duration-150"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
