import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Event } from "~/types";
import { OtherEventView } from "./otherEvent";

const meta: Meta<typeof OtherEventView> = {
  title: "Routes/Events/OtherEvent",
  component: OtherEventView,
};

export default meta;
type Story = StoryObj<typeof OtherEventView>;

const mockEvent: Event = {
  type: "other",
  id: "mock_other_event",
  title:
    "即売会でもDJでもライブでもないその他イベントをやったことがないので一旦モックでーす",
  description: "お\n".repeat(10),
  tags: ["アイドル", "アイドル", "アイドル"],
  date: new Date("2026-02-06"),
  location: "ボンビラス星",
  links: [{ platform: "website", url: "https://example.com" }],
};

export const Default: Story = {
  args: {
    event: mockEvent,
  },
};
