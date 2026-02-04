import type { Music } from "~/types";

export const reminiscence_in_the_rain: Music = {
  type: "music",
  id: "reminiscence_in_the_rain",
  title: "Reminiscence in the Rain",
  description: `
ビジュアルノベル『ハルジオンは雨と咲く』のエンディング曲のひとつです。
ゆっくりで切ない電子音楽
`,
  tags: [], // TODO
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
      name: "yin",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2024-04-28"),
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
    youtubeUrl: "https://www.youtube.com/watch?v=TwQELgEDvZs",
  },
  lyrics: `
愛することも愛されることも　不器用でとてもできなくて
どこにも行けないとしても　あなたがいればそれでよかったのに

君が海はいつも凪いでいた
溺れてばかりの人生で　足が着くことが怖かった

一度全部壊しちゃって　他愛のない話をしようね
さよならだけの人生に　心臓があることの証明
来世でもまた会えたら　あの歌をまた歌おうね

傷つくことも傷つけることも　私には荷が重すぎて
どこかに行くとしても　あなたがいなきゃ意味なんてないのに

君が空はこんなにも重かった
想い出は風になって　これからの日々を撫でていく

いつかきっと忘れちゃって　二度目の初めましてを言おうね
雨に咲いた花の言葉が　あの逃避行のドラマだ
終点で待ち合わせして　手を繋いで走ろうね

縋って、壊して、私の目を見て
傷つくことも　愛することも
いずれはすべてが想い出だから

一度全部壊しちゃって　他愛のない話をしようね
さよならだけの人生に　心臓があることの証明
来世でもまた会えたら　あの歌をまた歌おうね
`,
};
