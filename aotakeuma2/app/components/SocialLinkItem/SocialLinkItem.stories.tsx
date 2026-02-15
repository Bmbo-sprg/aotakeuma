import type { Meta, StoryObj } from "@storybook/react-vite";

import { SocialLinkItem } from "./SocialLinkItem";

const meta: Meta<typeof SocialLinkItem> = {
  title: "SocialLinkItem",
  component: SocialLinkItem,
};

export default meta;
type Story = StoryObj<typeof SocialLinkItem>;

export const Default: Story = {
  args: {
    link: {
      platform: "youtube",
      url: "https://www.youtube.com/",
    },
  },
};
