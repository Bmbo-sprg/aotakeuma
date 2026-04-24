import type { Meta, StoryObj } from "@storybook/react-vite";

import { persons } from "../../contents/persons";
import { CreditCardList } from "./CreditCardList";

const meta: Meta<typeof CreditCardList> = {
  title: "CreditCardList",
  component: CreditCardList,
};

export default meta;
type Story = StoryObj<typeof CreditCardList>;

export const Default: Story = {
  args: {
    credits: Array.from({ length: 10 }, () => ({
      ...persons[0],
      role: "作曲、編曲、マスタリング",
      comment: "hi",
    })),
  },
};
