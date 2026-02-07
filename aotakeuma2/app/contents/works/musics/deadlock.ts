import type { Music } from "~/types";

export const deadlock: Music = {
  type: "music",
  id: "deadlock",
  title: "青春デッドロック",
  description: `
高二病で退廃的なオルタナティブロック。
ドビュッシー『亜麻色の髪の乙女』を引用しています。
`,
  tags: ["『縋想』プロジェクト", "バンドサウンド"],
  credits: [
    {
      name: "竹馬あお",
      role: "作曲、編曲",
    },
    {
      name: "佐薙概念",
      role: "作詞",
    },
    {
      name: "可不",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2021-10-26"),
  video: {
    credits: [
      {
        name: "竹馬あお",
        role: "映像制作",
      },
      {
        name: "犬吠埼いつき",
        role: "イラスト",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=6zzAXVwY5qA",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm39536660",
    bilibiliUrl: "https://www.bilibili.com/video/BV1KR4y1n7uY",
  },
  lyrics: `
生きる目的なんか　有ってもどうせ嫌になる
人生が暇つぶしなんて　嘘だ、暇で死にたくなるかよ

感情が乾ききった　まあ、在ってもどうせ辛くなる
人生は不可逆だって　痛いほどもう傷いていた

満たさぬ心　響かぬ音楽
ライブハウスの喧騒、反吐が出た

嘘だ　詭弁だ　偽りだ
絵画、小説、音楽、全て
糞だ　欺瞞だ　ゴミクズだ
金も心もギターも全て
信じた僕が馬鹿だった

人を好きになんかならない　どうせ嫌われる
この音楽が全てなんて　僕だ、僕こそキミしかなかった

染まる教室　メロウなピアノ
おかしかったのは僕だけ、涙も出ない

＊＊＊
幸せだったんだ、キミのピアノに救われていた。
不幸を知った、キミの、幸福のせいだ。
＊＊＊

信じた僕が馬鹿だった

無駄だ　無意味だ　最低だ
この歌詞も曲も演奏も
痛い　捨てたい　救われたい
一ミリ残さず吹き飛ばしてくれ

過去だ　記憶だ　想い出だ
僕には、これらだけ。そうだろ。

愛した僕が馬鹿だった
`,
};
