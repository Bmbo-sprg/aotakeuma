import type { Meta, StoryObj } from "@storybook/react-vite";

import { albums } from "../../contents/works/albums";
import { AlbumView } from "./album";

const meta: Meta<typeof AlbumView> = {
  title: "Routes/Works/Album",
  component: AlbumView,
};

export default meta;
type Story = StoryObj<typeof AlbumView>;

export const Default: Story = {
  args: {
    album: albums[0],
  },
};
