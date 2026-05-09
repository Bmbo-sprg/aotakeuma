import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { DatePickerInput } from "./DatePickerInput";

const meta: Meta<typeof DatePickerInput> = {
  title: "DatePickerInput",
  component: DatePickerInput,
};

export default meta;
type Story = StoryObj<typeof DatePickerInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-48">
        <DatePickerInput value={value} onChange={setValue} />
        <p className="mt-2 text-xs text-slate-500">
          値: {value || "（未入力）"}
        </p>
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = useState("2025-03-01");

    return (
      <div className="w-48">
        <DatePickerInput value={value} onChange={setValue} />
        <p className="mt-2 text-xs text-slate-500">
          値: {value || "（未入力）"}
        </p>
      </div>
    );
  },
};
