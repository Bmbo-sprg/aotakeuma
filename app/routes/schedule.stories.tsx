import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScheduleView } from "./schedule";

const meta: Meta<typeof ScheduleView> = {
  title: "Routes/Schedule",
  component: ScheduleView,
};

export default meta;
type Story = StoryObj<typeof ScheduleView>;

export const Default: Story = {
  args: {
    now: new Date(),
  },
};

export const Empty: Story = {
  args: {
    now: new Date("2002-09-04"),
  },
};
