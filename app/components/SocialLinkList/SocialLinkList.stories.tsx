import type { Meta, StoryObj } from "@storybook/react-vite";

import { platforms } from "../../contents/platforms";
import { SocialLinkList } from "./SocialLinkList";

const meta: Meta<typeof SocialLinkList> = {
  title: "SocialLinkList",
  component: SocialLinkList,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialLinkList>;

export const Default: Story = {
  args: {
    links: platforms.map((platform) => ({
      platform,
      url: `https://aotakeuma.com/`,
    })),
    size: "xs",
  },
};
