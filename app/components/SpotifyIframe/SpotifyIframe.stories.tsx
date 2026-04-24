import type { Meta, StoryObj } from "@storybook/react-vite";

import { SpotifyIframe } from "./SpotifyIframe";

const meta: Meta<typeof SpotifyIframe> = {
  title: "SpotifyIframe",
  component: SpotifyIframe,
};

export default meta;
type Story = StoryObj<typeof SpotifyIframe>;

export const Album: Story = {
  args: {
    url: "https://open.spotify.com/intl-ja/album/6b5ygymeSX4fPkBAeAmWH1",
  },
};

export const Track: Story = {
  args: {
    url: "https://open.spotify.com/intl-ja/track/3NxpP8mmL61xF1QyUhCACA",
  },
};

export const Invalid: Story = {
  args: {
    url: "https://example.com",
  },
};
