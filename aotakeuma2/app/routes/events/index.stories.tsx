import type { Meta, StoryObj } from "@storybook/react-vite";

import { EventsView } from "./index";

const meta: Meta<typeof EventsView> = {
  title: "Routes/Events/EventsView",
  component: EventsView,
};

export default meta;
type Story = StoryObj<typeof EventsView>;

export const Default: Story = {
  args: {
    filters: {
      query: "",
      type: "",
      tag: "",
      from: "",
      to: "",
      sort: "new",
    },
  },
};
