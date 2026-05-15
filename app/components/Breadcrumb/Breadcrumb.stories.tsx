import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Breadcrumb",
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Works: Story = {
  args: {
    parentLabel: "作品一覧",
    parentHref: "/works",
    currentLabel: "夜光",
  },
};

export const Events: Story = {
  args: {
    parentLabel: "イベント一覧",
    parentHref: "/events",
    currentLabel: "M3-2025春",
  },
};
