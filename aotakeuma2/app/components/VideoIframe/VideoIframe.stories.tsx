import type { Meta, StoryObj } from "@storybook/react-vite";

import { lemonade_palette } from "../../contents/works/musics/lemonade_palette";
import { VideoIframe } from "./VideoIframe";

const meta: Meta<typeof VideoIframe> = {
  title: "VideoIframe",
  component: VideoIframe,
};

export default meta;
type Story = StoryObj<typeof VideoIframe>;

export const Default: Story = {
  args: {
    video: lemonade_palette.video,
  },
};
