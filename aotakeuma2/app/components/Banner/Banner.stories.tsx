import type { Meta, StoryObj } from "@storybook/react-vite";

import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Banner",
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    src: "https://placehold.jp/1200x400.png?text=Banner",
    alt: "サンプルバナー",
  },
};
