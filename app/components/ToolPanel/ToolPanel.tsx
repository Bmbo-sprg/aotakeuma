import { useState } from "react";

type ToolPanelProps = {
  title: string;
  children: React.ReactNode;
};

export const ToolPanel = ({ title, children }: ToolPanelProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="glass-card absolute top-4 left-4 z-10 max-h-[90vh] w-72 overflow-y-auto">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {title}
        <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="mt-3 space-y-4">{children}</div>}
    </div>
  );
};
