import type { Meta, StoryObj } from "@storybook/react-vite";

import { BackButton } from "./BackButton";

const meta: Meta<typeof BackButton> = {
  title: "BackButton",
  component: BackButton,
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Works: Story = {
  args: {
    label: "作品一覧",
    href: "/works",
  },
};

export const Events: Story = {
  args: {
    label: "イベント一覧",
    href: "/events",
  },
};
