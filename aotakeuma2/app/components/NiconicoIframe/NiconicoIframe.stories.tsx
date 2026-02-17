import type { Meta, StoryObj } from "@storybook/react-vite";

import { NiconicoIframe } from "./NiconicoIframe";

const meta: Meta<typeof NiconicoIframe> = {
  title: "NiconicoIframe",
  component: NiconicoIframe,
};

export default meta;
type Story = StoryObj<typeof NiconicoIframe>;

export const Default: Story = {
  args: {
    url: "https://www.nicovideo.jp/watch/sm9",
  },
};
