import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SliderField } from "./SliderField";

const meta: Meta<typeof SliderField> = {
  title: "SliderField",
  component: SliderField,
};

export default meta;
type Story = StoryObj<typeof SliderField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(2);

    return (
      <SliderField
        label="幅 (Width)"
        value={value}
        onChange={setValue}
        min={0.5}
        max={5}
        step={0.1}
      />
    );
  },
};

export const WithUnit: Story = {
  render: () => {
    const [value, setValue] = useState(300);

    return (
      <SliderField
        label="最大接続距離"
        value={value}
        onChange={setValue}
        min={50}
        max={1000}
        unit="px"
      />
    );
  },
};
