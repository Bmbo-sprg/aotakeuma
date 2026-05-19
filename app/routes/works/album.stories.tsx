import type { Meta, StoryObj } from "@storybook/react-vite";

import { albums } from "../../contents/works/albums";
import { AlbumView } from "./album";

const meta: Meta<typeof AlbumView> = {
  title: "Routes/Works/Album",
  component: AlbumView,
};

export default meta;
type Story = StoryObj<typeof AlbumView>;

// ubugoe は m3_2025_autumn (2025-10-26) に頒布されている
const ubugoe = albums.find((a) => a.id === "ubugoe")!;

export const Default: Story = {
  args: {
    album: albums[0],
    now: new Date(),
  },
};

// DownloadSection がタイトル直下に表示される（即売会から2日後）
export const DownloadTopRecentExhibition: Story = {
  name: "Download: 先頭（直近7日に即売会あり）",
  args: {
    album: ubugoe,
    now: new Date("2025-10-28"),
  },
};

// DownloadSection がページ末尾に表示される（即売会から7日超）
export const DownloadBottomOldExhibition: Story = {
  name: "Download: 末尾（直近7日に即売会なし）",
  args: {
    album: ubugoe,
    now: new Date("2026-05-20"),
  },
};
