import type { Meta, StoryObj } from "@storybook/react-vite";

import { WorkCard } from "./WorkCard";
import { albums } from "../../contents/works/albums";
import { musics } from "../../contents/works/musics";
import { games } from "../../contents/works/games";

const meta: Meta<typeof WorkCard> = {
  title: "WorkCard",
  component: WorkCard,
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

export const Album: Story = {
  args: {
    work: albums[0],
  },
};

export const Music: Story = {
  args: {
    work: musics[0],
  },
};

export const Game: Story = {
  args: {
    work: games[0],
  },
};

export const Unlinkable: Story = {
  args: {
    work: {
      id: "mock_unlinkable_work",
      type: "other",
      title: "リンク先のない作品",
      description: "絵空アクキーとかね",
      tags: ["アイドル"],
      releaseDate: new Date("2026-02-06"),
      credits: [],
    },
  },
};
