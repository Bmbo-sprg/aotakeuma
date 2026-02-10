import type { Music } from "~/types";
import { getPerson } from "../../persons";

export const mayonaka: Music = {
  type: "music",
  id: "mayonaka",
  title: "真夜中の追想、朝露はその返歌。",
  description: `
音楽に、なりたい。
ボカコレ2025夏ex 参加曲です。
オルタナティブロック
`,
  tags: ["バンドサウンド", "ボカコレ"],
  credits: [
    {
      ...getPerson("竹馬あお"),
      role: "作詞、作曲、編曲",
    },
    {
      name: "花隈千冬",
      role: "ボーカル",
    },
    {
      name: "他 37 名",
      role: "シンガロング",
    },
  ],
  releaseDate: new Date("2025-08-23"),
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=43O3ktIwRjE",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm45324126",
    bilibiliUrl: "https://www.bilibili.com/video/BV1UAeazgEhW",
  },
  lyrics: `
あっ。
また。夜が明けた。
朝。零れ落ちる。
言葉。あなたはもう聴いたのかな。

拝啓。
昨日の僕たちへ。
散々な目に遭ったね。
それでも。あなたのせいだっけ。

鈍行、振り向かないで。
ボロボロの泣き顔、今更隠さないで！
この音楽は、時を越える。時を越えて、
あなたをまた、見附ける。

ねえ。
今。見附けたんだ。
歌えないときも。
そばにいてくれたあなたは。
ここ。

躓いても、止まらないで。
物語はあなたが書き果てるんだよね？
この音楽は、僕のじゃない。僕のじゃなくて、
すべてのヒトの祈り。

消えたい夜とも接続がりたい、
今度は僕があなたを生かすんだ！
朝露は涙より透明で、泣きつくした夜をちょっと暈すんだ。
闘うあなたと接続がりたい、
今度はちゃんと伝えられるから！
すべての言葉が言葉足らずだからこの音楽が、音楽があるんだ！

創れないぼくはすくわれた、
こんどはぼくがあなたをすくうんだ！
ひとりではなにもできないからせめて、おんがくが、おんがくが、
おんがくが、おんがくが、おんがくが、おんがくが、
ぼくらをあさへみちびいてくれるよな？
`,
};
