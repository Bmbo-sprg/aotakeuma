import type { Meta, StoryObj } from "@storybook/react-vite";

import { events } from "../../contents/events";
import { EventHeadSection } from "./EventHeadSection";

const meta: Meta<typeof EventHeadSection> = {
  title: "EventHeadSection",
  component: EventHeadSection,
};

export default meta;
type Story = StoryObj<typeof EventHeadSection>;

export const Default: Story = {
  args: {
    event: events[0],
  },
};
