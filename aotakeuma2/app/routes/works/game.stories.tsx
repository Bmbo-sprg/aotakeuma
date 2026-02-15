import type { Meta, StoryObj } from "@storybook/react-vite";

import { games } from "../../contents/works/games";
import { GameView } from "./game";

const meta: Meta<typeof GameView> = {
  title: "Routes/Works/Game",
  component: GameView,
};

export default meta;
type Story = StoryObj<typeof GameView>;

export const Default: Story = {
  args: {
    game: games[0],
  },
};
