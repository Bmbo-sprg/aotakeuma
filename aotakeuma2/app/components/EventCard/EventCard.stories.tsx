import type { Meta, StoryObj } from "@storybook/react-vite";

import { performances } from "../../contents/events/performances";
import { exhibitions } from "../../contents/events/exhibitions";
import { EventCard } from "./EventCard";

const meta: Meta<typeof EventCard> = {
  title: "EventCard",
  component: EventCard,
};

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Performance: Story = {
  args: {
    event: performances[0],
  },
};

export const Exhibition: Story = {
  args: {
    event: exhibitions[0],
  },
};

export const Unlinkable: Story = {
  args: {
    event: {
      id: "mock_unlinkable_event",
      type: "other",
      title: "リンク先のないイベント",
      description: "講演とか？",
      tags: ["エレクトロニック"],
      date: new Date("2026-02-06"),
      location: "ボンビラス星",
    },
  },
};
