import type { Meta, StoryObj } from "@storybook/react-vite";

import { tags } from "../../contents/tags";
import { TagList } from "./TagList";

const meta: Meta<typeof TagList> = {
  title: "TagList",
  component: TagList,
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: [...tags],
  },
};
