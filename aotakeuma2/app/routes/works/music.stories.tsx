import type { Meta, StoryObj } from "@storybook/react-vite";

import { musics } from "../../contents/works/musics";
import { MusicView } from "./music";

const meta: Meta<typeof MusicView> = {
  title: "Routes/Works/Music",
  component: MusicView,
};

export default meta;
type Story = StoryObj<typeof MusicView>;

export const Default: Story = {
  args: {
    music: musics[0],
  },
};
