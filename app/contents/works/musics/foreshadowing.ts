import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const foreshadowing: Music = {
  type: "music",
  id: "foreshadowing",
  title: "Foreshadowing",
  description: `
『学園アイドルマスター』の賀陽燐羽・花海咲季へのファンメイドユニットソングです。
K-POP的Electro・Hyperpopを目指しました
`,
  tags: ["アイドル", "エレクトロニック", "合作参加作品"],
  team: "スタジオ加速",
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作曲、編曲",
    },
    {
      name: "Okgw",
      role: "作詞",
    },
    {
      name: "夢ノ結唱 ROSE",
      role: "ボーカル",
    },
    {
      name: "夢ノ結唱 HALO",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2026-08-08"),
  jacketImageUrl: "/images/jackets/foreshadowing.png",
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
      {
        ...getPerson("kiki"),
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=1VRLZ7Nf018",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm46641640",
    bilibiliUrl: "https://www.bilibili.com/video/BV1byuu6iEzK",
  },
  lyrics: `
駆け出す夢の軌道 my way, my way
振り切る影の鼓動 I know, I know
綺麗な憧れは　置いて行くの全て right now!
吹き抜けてく風 Foreshadow

鏡に映る貴方の瞳
釘付けになるわ hunt you down
腑抜けた make up, yeah
伸ばした腕を照らす輝き
もう離さないよ
今だけの私になるから

Burn it, burn it, now!
Burn it, burn it, now!
煌めいた星を隠して

Break it, break it now!
Break it, break it now!
瞬いた涙の痕から

生まれた羽広げ
行け

Is that the best you've got?

彼方に夢の軌道 no way, no way
這い寄る影の鼓動 why not, why not!
「あの日の憧れは　まだ遠いよ今は」
Says who?
燃え尽きてく空 Foreshadow

Is that the best you've got?

駆け出す夢の軌道 my way, my way
振り切る影の鼓動 I know, I know
綺麗な憧れは　置いて行くの全て right now!
吹き抜けてく風 Foreshadow

スクリーンに映る貴方の笑顔
見とれてしまうわ hunt you down
やめなよ hold back, yeah
滲むアイシャドウ　拭う指先
覚えていてね
胸張れる私になるから

Burn it, burn it, now!
Burn it, burn it, now!
煌めいた星を隠して

Break it, break it now!
Break it, break it now!
瞬いた涙の痕から

焦がれたその先へ
行け

Is that the best you've got?

彼方に夢の軌道 no way, no way
這い寄る影の鼓動 why not, why not!
「あの日の憧れは　まだ遠いよ今は」
Says who?
燃え尽きてく空 Foreshadow

Is that the best you've got?

駆け出す夢の軌道 my way, my way
振り切る影の鼓動 I know, I know
綺麗な憧れは　置いて行くの全て right now!
吹き抜けてく風 Foreshadow
`,
};
