import type { Meta, StoryObj } from "@storybook/react-vite";

import { persons } from "../../contents/persons";
import { CreditCard } from "./CreditCard";

const meta: Meta<typeof CreditCard> = {
  title: "CreditCard",
  component: CreditCard,
};

export default meta;
type Story = StoryObj<typeof CreditCard>;

export const Default: Story = {
  args: {
    credit: {
      ...persons[0],
      role: "作曲、編曲、マスタリング",
      comment: "hi",
    },
  },
};

export const LongComment: Story = {
  args: {
    credit: {
      ...persons[0],
      role: "作曲、編曲、マスタリング",
      comment: `
『京大ボカロコンピ2』主宰の竹馬あおです。
京大では情報学科の4回生で、音声合成の研究をしています。吉田音楽製作所、C.2.B project、京大ボカロ研究会、Comic Community運営などのサークルに所属しており、大学4年間で得られた身に余るほど多彩かつ多才な人脈をフルに駆使してこのコンピアルバムを企画しました。
2021年春、大学に合格し、受験で休止していた作曲活動にも復帰し、といかにも唯我独尊していた時期に、僕は先代『京大ボカロコンピ』に出会いました。これほど才能あふれるコンピが出るほどの大学での生活に、期待とそれ以上の不安を感じました。
大学の4年間で得た一番大切な武器は、音楽のセンスでもDTMの知見でも才能でもアイデンティティでもなく、人脈でした。眩しい才能の群れはまるで流星群のよう、僕はあなたたちに嫉妬し、羨望し、置いていかれたくないと焦り、そして僥倖にも交わることを得、僥倖にも一緒にこうして音楽をやることができました。
本当に感謝しかありません。
ちゃんと頑張って卒論出します。
`,
    },
  },
};

export const WithoutComment: Story = {
  args: {
    credit: {
      ...persons[0],
      role: "作詞",
    },
  },
};
