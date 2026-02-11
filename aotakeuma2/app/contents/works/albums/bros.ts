import type { Album } from "~/types";
import { getPerson } from "../../persons";
import { sayounara_ryuseigun } from "../musics/sayounara_ryuseigun";

export const bros: Album = {
  type: "album",
  id: "bros",
  titlePrefix: "Kyoto University VOCALOID Compilation 2",
  title: "Bros.",
  description:
    "サークル、回生、音楽ジャンルの垣根を超えた、気鋭京大生ボカロPによるコンピレーションアルバム",
  tags: ["コンピ参加作品"],
  team: "京大ボカロコンピ",
  credits: [
    {
      ...getPerson("柚雪ふゆね"),
      role: "イラスト",
      comment: `
前回のボカロコンピに引き続きジャケットのイラストを描かせていただきました、柚雪ふゆねです。涼しげなイラストを描いています。
多くの方に興味を持っていただけるよう、今回は京都大学のコンピであるということを強調したデザインにしてみました。
収録されている曲もいいものばかりなので是非手に取ってもらえると嬉しいです。
`,
    },
    {
      ...getPerson("にとろ"),
      role: "楽曲制作 (Tr.1)",
      comment: `
にとろ (吉田音楽製作所 所属)
変な曲を作っています！変な曲たのしい！
`,
    },
    {
      ...getPerson("右角"),
      role: "楽曲制作 (Tr.1)",
      comment: `
右角(吉田音楽製作所 所属)
変拍子なのに聴きやすくてすごい にとろが
`,
    },
    {
      ...getPerson("さめこうもり"),
      role: "楽曲制作 (Tr.2)",
      comment: `
風邪をひいて喉がめちゃくちゃ痛くなった時に歌詞を書きました。買ってね！！！！！！！
`,
    },
    {
      ...getPerson("ゆうよ"),
      role: "楽曲制作 (Tr.3)",
      comment: `
工学部理工化学科化学プロセス工学コースの3回生、吉田音楽製作所所属です。
今回は、"京大"ボカロコンピということで自分のように、「"学校"が好きじゃなかった人たちにとっての逃げ場所」をテーマに曲を書きました。皆さんそれぞれの学校に関する記憶に思いを馳せながら聴いて頂ければと思います。
`,
    },
    {
      ...getPerson("名乃ぱんち"),
      role: "楽曲制作 (Tr.4)",
      comment: `
なのぱんち　です。2024年の4月に京都に来た一回生です。サークルは吉田音楽製作所（総合作曲サークル）に所属しています。よろしくお願いします。
急な個人的な話なのですが、先日京都から大阪(梅田)までの46kmを徒歩で移動しました。その日は深夜0時に京都駅を発ってから、13時間かけて梅田駅まで歩いたのですが、道中に高槻のあたりで見た朝日の美しさは言葉にするのが難しいほどのものでした。まだ薄暗い4時頃、知らない駅前で偶然の出会いをしてほっこりしたり、二度と通らないであろう町を歩いたり、これ以上話すと長くなるので簡潔に言うのですが、要するに最高でした。（暑すぎて次の日体調を崩したのは最悪だった）
というわけで、その日は最高の朝を迎えられました。そして、半ば適当な結論にはなるのですが、みなさんもいろいろやってみて良い朝を迎えてみてはいかがでしょうか。最高なので。
長々と書きましたが、そんなことを思って曲を書きました。
`,
    },
    {
      ...getPerson("Klayn"),
      role: "楽曲制作 (Tr.5, Tr.6)",
      comment: `
4年前の京大ボカロコンピ『Mirror Stand』から引き続きお誘い頂き、参加させてもらいました。Klaynです。
大学生生活やリスナーとしての生活を背景にして、沢山のリスペクト込めた作品です。うち一曲は大学での1番の親友であるとばかりくんとの合作になります。2曲とも是非ゆったりとお楽しみください。
`,
    },
    {
      ...getPerson("とばかり"),
      role: "楽曲制作 (Tr.6)",
      comment: `
ご無沙汰しております。京大ボカロ研究会所属のとばかりと申します。今回は私の親友であるKlaynと合作をしました。
前回京大ボカロコンピに参加させていただいたのが4年前。あれから変わったことや変わらなかったことを一緒に振り返ったり、あるいはこれからどんな未来が待っているかを想像したり。そんなことを二人で話し合いながら作った曲です。よろしくお願いします。
`,
    },
    {
      ...getPerson("作田恒星"),
      role: "楽曲制作 (Tr.7)",
      comment: `
作田恒星といいます．ふだんはシンセサイザーをいっぱい使って曲を作ろうとしています．今回はお祭り騒ぎみたいな楽しい曲を目指しました．よろしくお願いいたします．
`,
    },
    {
      ...getPerson("Σ"),
      role: "楽曲制作 (Tr.8)",
      comment: `
ジャンルにとらわれない音楽を．
音を重ねて曲を成すの意から，総和演算子：Σです．

普段はYoutubeやniconico動画にオリジナル曲をupしています．
是非，そちらも訪ねてみてください．
`,
    },
    {
      ...getPerson("あんこぱわー"),
      role: "楽曲制作 (Tr.9)",
      comment: `
京大ボカロ研究会2回生のあんこぱわーと申します！サークルではたきぎという名義で活動しております
京大ボカロ研究会のメインの活動はリスナー同士の交流なのですが、今回は一人の創作者・ボカロPとしてこのコンピに参加させていただきました！主催の竹馬さんに感謝！
VOCALOIDというものは他のジャンルと違い、ジャンル横断的というのはよく言われるところですが、京大ボカロコンピ2に収録される『リリィ』もジャンル横断的でダンサブルな曲となっています。我ながらボカロっぽい曲になったな〜と思います。僕が思う一番かわいいVOCALOIDのお二人に別の切り口から歌って貰っています。
ここからは宣伝です！
京大ボカロ研究会は11月20-23日に行われる京大の学祭、“11月祭”にブースを出展する予定です！ボカロ試験・ボカロDJ・会誌の頒布を行う予定です。京大ボカロコンピも取り扱う予定ですので是非お越しください〜！
`,
    },
    {
      ...getPerson("すずきみなも"),
      role: "楽曲制作 (Tr.10)",
      comment: `
吉田音楽製作所のすずきみなもです。

いぇーい
`,
    },
    {
      ...getPerson("いひぇ"),
      role: "楽曲制作 (Tr.11)",
      comment: `
京都大学軽音楽部所属のいひぇです。
普段はドラマーとして活動することが主でボカロとは少し縁遠い生活でしたが、今回お誘い頂いてこの素敵な企画に参加しております！
スーパーハイレベルな京大生ボカロPの方々に囲まれ慄きながら制作したのは、京大軽音らしいマスロックスタイルの楽曲です（the cabsをちょっと意識してます）。こういうバンドサウンドな一曲もアルバムに彩りを加えられると思い、自分のできることを精一杯やってみました。おふざけ要素もたくさん入れたのでぜひ楽しんでくださいね。
ともあれ自身の音楽的価値観に大きな刺激を受けられる素晴らしい機会でした。関係者の方々には本当に感謝です！！ギター弾けるようになりたい！！！
`,
    },
    {
      ...getPerson("やや"),
      role: "楽曲制作 (Tr.12)",
      comment: `
前回の京大ボカロコンピを企画しました、ややと申します。
京大ボカロコンピ第二弾が制作され、非常に感慨深いです。
私は今年度で卒業しますが、今後も色々な形でこの文化が続いていってほしいです。
`,
    },
    {
      ...getPerson("Sohbana"),
      role: "楽曲制作 (Tr.13)",
      comment: `
しくじりOBのSohbanaです。
皆さんはこうなってはいけません。
でも本当にどうにもならなくなったら、お待ちしています。
`,
    },
    {
      ...getPerson("Nui"),
      role: "楽曲制作 (Tr.14)",
      comment: `
自分の好きなものを詰め込みました。ふとした時に思い出して貰えると嬉しいです。

MIRINNというユニットでもなずしろさんに歌ってもらっているので、そちらも宜しければ聞いてください。
`,
    },
    {
      ...getPerson("竹馬あお"),
      role: "企画、楽曲制作 (Tr.15)、マスタリング",
      comment: `
『京大ボカロコンピ2』主宰の竹馬あおです。
京大では情報学科の4回生で、音声合成の研究をしています。吉田音楽製作所、C.2.B project、京大ボカロ研究会、Comic Community運営などのサークルに所属しており、大学4年間で得られた身に余るほど多彩かつ多才な人脈をフルに駆使してこのコンピアルバムを企画しました。
2021年春、大学に合格し、受験で休止していた作曲活動にも復帰し、といかにも唯我独尊していた時期に、僕は先代『京大ボカロコンピ』に出会いました。これほど才能あふれるコンピが出るほどの大学での生活に、期待とそれ以上の不安を感じました。
大学の4年間で得た一番大切な武器は、音楽のセンスでもDTMの知見でも才能でもアイデンティティでもなく、人脈でした。眩しい才能の群れはまるで流星群のよう、僕はあなたたちに嫉妬し、羨望し、置いていかれたくないと焦り、そして僥倖にも交わることを得、僥倖にも一緒にこうして音楽をやることができました。
本当に感謝しかありません。
ちゃんと頑張って卒論出します。
`,
    },
  ],
  releaseDate: new Date("2024-10-27"),
  links: [
    {
      platform: "booth",
      url: "https://booth.pm/ja/items/6179765",
    },
    {
      platform: "bandcamp",
      url: "https://aotakeuma.bandcamp.com/album/kyoto-university-vocaloid-compilation-2-bros",
    },
  ],
  jacketImageUrl: "/images/jackets/bros.png",
  tracks: [
    {
      type: "music",
      id: "bros_1",
      title: "突風は不透明",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("にとろ"),
          role: "楽曲制作",
        },
        {
          ...getPerson("右角"),
          role: "楽曲制作",
        },
        {
          name: "シェリングフォード",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=G7wYaQNpVPY",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44677874",
      },
    },
    {
      type: "music",
      id: "bros_2",
      title: "普通感冒",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("さめこうもり"),
          role: "楽曲制作",
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      links: [
        {
          platform: "spotify",
          url: "https://open.spotify.com/intl-ja/album/4buqxvGUam6qWmWNEiUYV4",
        },
        {
          platform: "apple_music",
          url: "https://music.apple.com/jp/album/please-stand-behind-the-yellow-line-ep/1777361046",
        },
        {
          platform: "youtube_music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_mZ87PT8m0pcYFItLinh6S8a-CjW8oDyUo",
        },
      ],
    },
    {
      type: "music",
      id: "bros_3",
      title: "レフュージ・フォー・リフューザル",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("ゆうよ"),
          role: "楽曲制作",
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
        {
          name: "花隈千冬",
          role: "ポエトリーリーディング",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_4",
      title: "朝の作り方　その１",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("名乃ぱんち"),
          role: "楽曲制作",
        },
        {
          name: "星界",
          role: "ボーカル",
        },
        {
          name: "初音ミク",
          role: "コーラス",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_5",
      title: "夜行梅花",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("Klayn"),
          role: "楽曲制作",
        },
        {
          name: "GUMI",
          role: "ボーカル",
        },
        {
          name: "v flower",
          role: "ボーカル",
        },
        {
          name: "kokone",
          role: "ボーカル",
        },
        {
          name: "鏡音リン",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=UVohojsZ83E",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm43062618",
      },
    },
    {
      type: "music",
      id: "bros_6",
      title: "Final Answer",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("とばかり"),
          role: "楽曲制作",
        },
        {
          ...getPerson("Klayn"),
          role: "楽曲制作",
        },
        {
          name: "可不",
          role: "ボーカル",
        },
        {
          name: "羽累",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        niconicoUrl: "https://www.nicovideo.jp/watch/sm45925839",
      },
    },
    {
      type: "music",
      id: "bros_7",
      title: "震え星",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("作田恒星"),
          role: "楽曲制作",
        },
        {
          name: "鏡音リン",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=kIVlN3hNrFQ",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44574321",
      },
    },
    {
      type: "music",
      id: "bros_8",
      title: "#039393",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("Σ"),
          role: "楽曲制作",
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
        {
          name: "v flower",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_9",
      title: "リリィ",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("あんこぱわー"),
          role: "楽曲制作",
        },
        {
          name: "カゼヒキV",
          role: "ボーカル",
        },
        {
          name: "v flower",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44681955",
        youtubeUrl: "https://www.youtube.com/watch?v=BexniG5_Jc0",
      },
    },
    {
      type: "music",
      id: "bros_10",
      title: "喝采",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("すずきみなも"),
          role: "楽曲制作",
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=YZ6johrv2iQ",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm43988991",
      },
    },
    {
      type: "music",
      id: "bros_11",
      title: "ただよう",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("いひぇ"),
          role: "楽曲制作",
        },
        {
          name: "知声",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
    },
    {
      type: "music",
      id: "bros_12",
      title: "水彩",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("やや"),
          role: "楽曲制作",
        },
        {
          name: "可不",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=MfYk8bwm3Z4",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm41196646",
      },
    },
    {
      type: "music",
      id: "bros_13",
      title: "灰冠り",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("Sohbana"),
          role: "楽曲制作",
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      links: [
        {
          platform: "spotify",
          url: "https://open.spotify.com/intl-ja/album/50QZ6fh8TxDuGJ57MXakMc",
        },
        {
          platform: "apple_music",
          url: "https://music.apple.com/jp/album/epic-justismo/1810139553",
        },
        {
          platform: "youtube_music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_mZloq-F2tMXVoUwyn40dZEfIo5Uf6l808",
        },
      ],
      video: {
        credits: [],
        youtubeUrl: "https://www.youtube.com/watch?v=V1Kofl9jazU",
        niconicoUrl: "https://www.nicovideo.jp/watch/sm44750078",
      },
    },
    {
      type: "music",
      id: "bros_14",
      title: "星を詠む、果ての水平線",
      description: "",
      tags: [],
      credits: [
        {
          ...getPerson("Nui"),
          role: "楽曲制作",
        },
        {
          name: "初音ミク",
          role: "ボーカル",
        },
      ],
      releaseDate: new Date("2024-10-27"),
      links: [
        {
          platform: "spotify",
          url: "https://open.spotify.com/intl-ja/album/2nYXqdY6GQfQKsQWxnLt0p",
        },
        {
          platform: "apple_music",
          url: "https://music.apple.com/jp/album/%E3%82%B9%E3%83%86%E3%83%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88/1773261438",
        },
        {
          platform: "youtube_music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_mpRt3JpLL3nDw-jHjN7UjziOHHN5m7Y-I",
        },
      ],
    },
    sayounara_ryuseigun,
  ],
  video: {
    credits: [
      {
        ...getPerson("竹馬あお"),
        role: "映像制作",
      },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=Mj0Fx-Q_pgM",
    niconicoUrl: "https://www.nicovideo.jp/watch/sm44202977",
    bilibiliUrl: "https://www.bilibili.com/video/BV1642SYhEFT",
  },
};
