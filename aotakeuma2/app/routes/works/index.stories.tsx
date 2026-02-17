import type { Meta, StoryObj } from "@storybook/react-vite";

import { WorksView } from "./index";

const meta: Meta<typeof WorksView> = {
  title: "Routes/Works/WorksView",
  component: WorksView,
};

export default meta;
type Story = StoryObj<typeof WorksView>;

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
