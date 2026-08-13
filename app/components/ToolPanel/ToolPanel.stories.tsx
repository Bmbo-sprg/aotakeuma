import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { ColorField } from "../ColorField/ColorField";
import { SliderField } from "../SliderField/SliderField";
import { ToolPanel } from "./ToolPanel";

const meta: Meta<typeof ToolPanel> = {
  title: "ToolPanel",
  component: ToolPanel,
};

export default meta;
type Story = StoryObj<typeof ToolPanel>;

export const Default: Story = {
  render: () => {
    const [count, setCount] = useState(50);
    const [color, setColor] = useState("#ffeb3b");

    return (
      <div className="relative h-96 bg-slate-800">
        <ToolPanel title="ノード接続パラメーター">
          <SliderField
            label="ノード数"
            value={count}
            onChange={setCount}
            min={10}
            max={200}
          />
          <ColorField
            label="ノード・線の色"
            value={color}
            onChange={setColor}
          />
        </ToolPanel>
      </div>
    );
  },
};
