import type { Meta, StoryObj } from "@storybook/react-vite";

import { MixcloudIframe } from "./MixcloudIframe";

const meta: Meta<typeof MixcloudIframe> = {
  title: "MixcloudIframe",
  component: MixcloudIframe,
};

export default meta;
type Story = StoryObj<typeof MixcloudIframe>;

export const Default: Story = {
  args: {
    url: "https://www.mixcloud.com/%E7%AB%B9%E9%A6%AC%E3%81%82%E3%81%8A/%E4%BA%AC%E5%A4%A7%E3%83%9C%E3%82%AB%E3%83%ADdj-vol2-%E7%AB%B9%E9%A6%AC%E3%81%82%E3%81%8A-mix",
  },
};
