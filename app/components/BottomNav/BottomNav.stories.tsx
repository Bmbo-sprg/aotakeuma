import type { Meta, StoryObj } from "@storybook/react-vite";

import { BottomNav } from "./BottomNav";

const meta: Meta<typeof BottomNav> = {
  title: "BottomNav",
  component: BottomNav,
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

export const Default: Story = {};

export const WorksActive: Story = {
  args: {
    active: "works",
  },
};

export const EventsActive: Story = {
  args: {
    active: "events",
  },
};

export const ContactActive: Story = {
  args: {
    active: "contact",
  },
};
