import type { Meta, StoryObj } from "@storybook/react-vite";

import { ShareButton } from "./ShareButton";

const meta: Meta<typeof ShareButton> = {
  title: "ShareButton",
  component: ShareButton,
};

export default meta;
type Story = StoryObj<typeof ShareButton>;

export const Default: Story = {
  args: {
    text: "🎈 竹馬あお Website で音楽を発見した！\n\n🎶 開花、ただ祈ること\n\nWebsite: https://aotakeuma.com/works/musics/kaika",
  },
};
