import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeSection } from "./HomeSection";

const meta: Meta<typeof HomeSection> = {
  title: "HomeSection",
  component: HomeSection,
};

export default meta;
type Story = StoryObj<typeof HomeSection>;

const sampleItems = [
  { key: "1", node: <div className="card">サンプル項目 1</div> },
  { key: "2", node: <div className="card">サンプル項目 2</div> },
];

export const WithRandomLink: Story = {
  args: {
    title: "最近の作品",
    countText: "アルバム x14 ／ 楽曲 x100 ／ ゲーム x3",
    viewAllHref: "/works",
    randomHref: "/works/musics/sample",
    items: sampleItems,
  },
};

export const WithoutRandomLink: Story = {
  args: {
    title: "今後の予定",
    viewAllHref: "/schedule",
    items: sampleItems,
  },
};

export const Empty: Story = {
  args: {
    title: "今後の予定",
    viewAllHref: "/schedule",
    items: [],
  },
};
