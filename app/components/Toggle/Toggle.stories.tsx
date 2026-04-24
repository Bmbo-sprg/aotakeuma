import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("new");

    return (
      <Toggle
        value={value}
        onChange={setValue}
        left={{ value: "new", label: "新しい順" }}
        right={{ value: "old", label: "古い順" }}
      />
    );
  },
};
