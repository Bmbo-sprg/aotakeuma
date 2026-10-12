import type { Meta, StoryObj } from "@storybook/react-vite";

import { ThumbnailImage } from "./ThumbnailImage";

const meta: Meta<typeof ThumbnailImage> = {
  title: "ThumbnailImage",
  component: ThumbnailImage,
  decorators: [
    (Story) => (
      <div style={{ width: 320, height: 180 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThumbnailImage>;

export const Square: Story = {
  args: {
    src: "https://placehold.jp/600x600.png?text=Square",
    alt: "サンプル画像",
  },
};

export const NoImage: Story = {
  args: {
    src: null,
    alt: "画像なし",
  },
};
