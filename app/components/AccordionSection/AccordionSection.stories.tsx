import type { Meta, StoryObj } from "@storybook/react-vite";

import { AccordionSection } from "./AccordionSection";

const meta: Meta<typeof AccordionSection> = {
  title: "AccordionSection",
  component: AccordionSection,
};

export default meta;
type Story = StoryObj<typeof AccordionSection>;

export const Default: Story = {
  args: {
    title: "詳細",
    children: `
trim() を使ってるせいでめちゃくちゃ左に潰された 佛祖保佑永无BUG だよ
                  _oo0oo_
                 o8888888o
                 88" . "88
                 (| -_- |)
                 0\  =  /0
               ___/'---'\___
             .' \\|     |// '.
            / \\|||  :  |||// \
           / _||||| -:- |||||- \
          |   | \\\  -  /// |   |
          | \_|  ''\---/''  |_/ |
          \  .-\__  '-'  ___/-. /
        ___'. .'  /--.--\  '. .'___
     ."" '<  '.___\_<|>_/___.' >' "".
    | | :  '- \'.;'\ _ /';.'/ - ' : | |
    \  \ '_.   \_ __\ /__ _/   .-' /  /
====='-.____'.___ \_____/___.-'___.-'=====
                  '=---='
`,
  },
};
