import type { Meta, StoryObj } from "@storybook/react-vite";

import { CopyField } from "./CopyField";

const meta: Meta<typeof CopyField> = {
  title: "CopyField",
  component: CopyField,
};

export default meta;
type Story = StoryObj<typeof CopyField>;

export const Default: Story = {
  args: {
    label: "Email",
    value: "example@example.com",
  },
};

export const LongValue: Story = {
  args: {
    label: "Email",
    value: `ex${"a".repeat(1000)}mple@example.com`,
  },
};
