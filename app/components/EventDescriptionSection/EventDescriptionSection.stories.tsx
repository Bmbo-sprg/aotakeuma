import type { Meta, StoryObj } from "@storybook/react-vite";

import { events } from "../../contents/events";
import { EventDescriptionSection } from "./EventDescriptionSection";

const meta: Meta<typeof EventDescriptionSection> = {
  title: "EventDescriptionSection",
  component: EventDescriptionSection,
};

export default meta;
type Story = StoryObj<typeof EventDescriptionSection>;

export const Default: Story = {
  args: {
    description: events[0].description,
  },
};
