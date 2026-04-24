import type { Meta, StoryObj } from "@storybook/react-vite";

import { tags } from "../../contents/tags";
import { TagItem } from "./TagItem";

const meta: Meta<typeof TagItem> = {
  title: "TagItem",
  component: TagItem,
};

export default meta;
type Story = StoryObj<typeof TagItem>;

export const Default: Story = {
  args: {
    tag: tags[0],
  },
};
