import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { BadgeButtonList } from "./BadgeButtonList";

const meta: Meta<typeof BadgeButtonList> = {
  title: "BadgeButtonList",
  component: BadgeButtonList,
};

export default meta;
type Story = StoryObj<typeof BadgeButtonList>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <BadgeButtonList
        value={value}
        onChange={setValue}
        options={[
          { value: "", label: "すべて" },
          { value: "exhibition", label: "即売会" },
          { value: "performance", label: "DJ／ライブ" },
        ]}
      />
    );
  },
};
