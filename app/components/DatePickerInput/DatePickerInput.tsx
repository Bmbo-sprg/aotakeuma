import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { ja } from "react-day-picker/locale";
import { applyMask, DATE_RE, formatDate, parseDate } from "./dateUtils";

type DatePickerInputProps = {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const DatePickerInput = ({
  value = "",
  onChange,
  placeholder = "yyyy-mm-dd",
  className,
}: DatePickerInputProps) => {
  const [open, setOpen] = useState(false);
  const [prevValue, setPrevValue] = useState(value);
  const [inputValue, setInputValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  if (value !== prevValue) {
    setPrevValue(value);
    setInputValue(value);
  }

  // 外側クリックで閉じる
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = applyMask(e.target.value);
    setInputValue(masked);
    if (DATE_RE.test(masked)) {
      onChange(masked);
    } else if (masked === "") {
      onChange("");
    }
  };

  const handleDaySelect = (day: Date | undefined) => {
    if (!day) return;
    const formatted = formatDate(day);
    setInputValue(formatted);
    onChange(formatted);
    setOpen(false);
  };

  const selected = parseDate(inputValue);
  const month = selected ?? new Date();

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        inputMode="numeric"
        value={inputValue}
        placeholder={placeholder}
        className={[
          "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm",
          "transition-colors duration-150 focus:border-slate-400 focus:outline-none",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        onChange={handleInputChange}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
      />
      <div
        className={[
          "absolute left-0 top-full z-50 mt-1 rounded-md border border-slate-200 bg-white p-3 shadow-lg",
          "transition-opacity duration-150",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <DayPicker
          mode="single"
          selected={selected}
          defaultMonth={month}
          onSelect={handleDaySelect}
          locale={ja}
          classNames={{
            root: "text-sm text-slate-700",
            month_caption:
              "flex items-center mb-3 px-1 font-semibold text-slate-900",
            nav: "flex items-center justify-between mb-3",
            button_previous:
              "rounded p-1 transition-colors duration-150 hover:bg-slate-100",
            button_next:
              "rounded p-1 transition-colors duration-150 hover:bg-slate-100",
            chevron: "fill-slate-500 w-4 h-4",
            month_grid: "w-full border-collapse",
            weekdays: "",
            weekday: "w-9 pb-2 text-center text-xs font-medium text-slate-400",
            week: "",
            day: "p-0 text-center",
            day_button:
              "w-9 h-9 rounded-full transition-colors duration-150 hover:bg-slate-100",
            selected:
              "[&>button]:bg-primary [&>button]:text-white [&>button]:hover:bg-primary",
            today: "[&>button]:font-bold [&>button]:text-primary",
            outside: "[&>button]:text-slate-300",
            disabled: "[&>button]:text-slate-300 [&>button]:cursor-not-allowed",
          }}
        />
      </div>
    </div>
  );
};
