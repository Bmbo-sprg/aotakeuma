import type { Meta, StoryObj } from "@storybook/react-vite";

import { exhibitions } from "../../contents/events/exhibitions";
import { ExhibitionView } from "./exhibition";

const meta: Meta<typeof ExhibitionView> = {
  title: "Routes/Events/Exhibition",
  component: ExhibitionView,
};

export default meta;
type Story = StoryObj<typeof ExhibitionView>;

export const Default: Story = {
  args: {
    event: exhibitions[0],
  },
};
