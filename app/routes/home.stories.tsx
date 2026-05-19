import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeView } from "./home";

const meta: Meta<typeof HomeView> = {
  title: "Routes/Home",
  component: HomeView,
};

export default meta;
type Story = StoryObj<typeof HomeView>;

export const Default: Story = {
  args: {
    seed: 42,
    now: new Date("2025-05-20T12:00:00+09:00"),
    lastCommitAt: "2025-05-20T00:00:00Z",
  },
};

export const NoLastCommit: Story = {
  args: {
    seed: 42,
    now: new Date("2025-05-20T12:00:00+09:00"),
    lastCommitAt: null,
  },
};
