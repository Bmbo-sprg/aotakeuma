import type { Meta, StoryObj } from "@storybook/react-vite";

import { musics } from "../../contents/works/musics";
import { TrackList } from "./TrackList";

const meta: Meta<typeof TrackList> = {
  title: "TrackList",
  component: TrackList,
};

export default meta;
type Story = StoryObj<typeof TrackList>;

export const Default: Story = {
  args: {
    tracks: musics,
  },
};

export const NotLinkable: Story = {
  args: {
    tracks: Array.from({ length: 10 }).map((_, index) => ({
      ...musics[index % musics.length],
      id: `dummy-${index}`,
      title: `楽曲タイトル ${index + 1}`,
    })),
  },
};
