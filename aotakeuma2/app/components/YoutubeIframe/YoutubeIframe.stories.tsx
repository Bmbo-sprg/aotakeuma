import type { Meta, StoryObj } from "@storybook/react-vite";

import { YoutubeIframe } from "./YoutubeIframe";

const meta: Meta<typeof YoutubeIframe> = {
  title: "YoutubeIframe",
  component: YoutubeIframe,
};

export default meta;
type Story = StoryObj<typeof YoutubeIframe>;

export const Default: Story = {
  args: {
    url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  },
};
