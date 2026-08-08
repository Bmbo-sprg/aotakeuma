import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { ColorField } from "./ColorField";

const meta: Meta<typeof ColorField> = {
  title: "ColorField",
  component: ColorField,
};

export default meta;
type Story = StoryObj<typeof ColorField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("#ffeb3b");

    return (
      <ColorField
        label="カラーピッカーだよ"
        value={value}
        onChange={setValue}
      />
    );
  },
};
