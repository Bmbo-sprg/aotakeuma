import type { Meta, StoryObj } from "@storybook/react-vite";

import { performances } from "../../contents/events/performances";
import { PerformanceView } from "./performance";

const meta: Meta<typeof PerformanceView> = {
  title: "Routes/Events/Performance",
  component: PerformanceView,
};

export default meta;
type Story = StoryObj<typeof PerformanceView>;

export const Default: Story = {
  args: {
    event: performances[0],
  },
};
