import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { DownloadSection } from "./DownloadSection";
import type { ValidateApiResponse } from "./DownloadSection";

const meta: Meta<typeof DownloadSection> = {
  title: "DownloadSection",
  component: DownloadSection,
  args: {
    validateKey: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof DownloadSection>;

export const Default: Story = {
  args: {
    productId: "sample_album",
  },
};

export const Verified: Story = {
  args: {
    productId: "sample_album",
    validateKey: fn(
      async (): Promise<ValidateApiResponse> => ({
        ok: true,
        key: "ABCD-1234",
        productId: "sample_album",
        downloadUrl: "https://example.com/download",
      })
    ),
  },
};

export const Invalid: Story = {
  args: {
    productId: "sample_album",
    validateKey: fn(
      async (): Promise<ValidateApiResponse> => ({
        ok: false,
        reason: "not_found",
        message: "このコードは存在しません。",
      })
    ),
  },
};
