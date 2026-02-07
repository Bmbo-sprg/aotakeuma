import type { Music } from "~/types";

export const afterburn: Music = {
  type: "music",
  id: "afterburn",
  title: "Afterburn",
  description: `
次の夜にまた！
`,
  tags: ["エレクトロニック"],
  credits: [
    {
      name: "竹馬あお",
      role: "作詞、作曲、編曲",
    },
    {
      name: "宮舞モカ",
      role: "ボーカル",
    },
  ],
  releaseDate: new Date("2025-09-14"),
  lyrics: `
あなたが　渡した　きらめき　水平線に　浮かぶ
ふたたび　日は昇る　朝に　言葉を　奪われる

燃えつく　底をつく　祈りは　届いたのだろうか？
このまま　ふたりで　沈む　デブリとなって　終わる

誰か　つないで　つないで。
次の　夜に　また　逢いたい！

終わらない　夜など　ないよね
またいつか　逢おう
ふたたび　日は昇る　朝に　きらめき　奪われる

それでも　輝く　星空　私だけいない　絵空
待ってて、待ってて　私　すぐそこに行くから
`,
};
