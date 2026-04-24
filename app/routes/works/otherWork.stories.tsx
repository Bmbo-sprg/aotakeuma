import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Work } from "~/types";
import { OtherWorkView } from "./otherWork";

const meta: Meta<typeof OtherWorkView> = {
  title: "Routes/Works/OtherWork",
  component: OtherWorkView,
};

export default meta;
type Story = StoryObj<typeof OtherWorkView>;

const mockWork: Work = {
  type: "other",
  id: "mock_other_work",
  title: "グッズとか？",
  description: "こゃーん",
  tags: ["インスト"],
  credits: [],
  releaseDate: new Date("2026-02-01"),
  links: [{ platform: "website", url: "https://example.com" }],
};

export const Default: Story = {
  args: {
    work: mockWork,
  },
};
