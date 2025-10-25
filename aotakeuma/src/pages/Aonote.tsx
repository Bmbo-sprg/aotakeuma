import jacket from "../assets/img/aonote/jacket.png";
import iconTakeuma from "../assets/img/icon/logo_with_bg.png";
import iconGamauo from "../assets/img/aonote/icon-gamauo.jpg";

import niconico from "../assets/img/icon/niconico.png";
import youtube from "../assets/img/icon/youtube.png";
import x from "../assets/img/icon/x.png";
import soundcloud from "../assets/img/icon/soundcloud.png";
import pixiv from "../assets/img/icon/pixiv.png";
import styled from "styled-components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Header = styled.h1`
  text-align: center;
  font-family: "Jost", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 2rem;
  color: #115394;
  text-decoration: underline dotted 2px;
  text-underline-offset: 0.2em;
`;

const CenterText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 1.0rem;
  line-height: 2;
`;

const HintText = styled(CenterText)`
  font-size: 0.8rem;
  line-height: 1;
  margin-top: 10px;
`;

const ResponsiveBr = styled.br`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));
`;

const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d0eef7;
  background-size: cover;
  background-position: middle;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  position: relative;
  z-index: 1;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <ResponsiveImage
        src={jacket}
        alt={"Album jacket"}
      />
    </BannerContainer>
  );
};

const Introduction = () => {
  return (
    <CenterText>
      青を探す旅路と、<ResponsiveBr />出会いと別れと<ResponsiveBr />再会とを描く<ResponsiveBr />合成音声アルバム
    </CenterText>
  )
}

interface MemberProps {
  member: {
    name: string;
    comment?: string;
    icon: string;
    niconico?: string;
    youtube?: string;
    x?: string;
    soundcloud?: string;
    pixiv?: string;
  },
  onHover?: () => void;
  onLeave?: () => void;
  interactive?: boolean;
};

const MemberContainer = styled.div<{interactive?: boolean}>`
  border-radius: 1rem;
  background-color: #dae2eb;
  display: flex;
  width: 230px;
  height: 90px;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  &:hover {
    -webkit-transform: scale(${({ interactive }) => interactive ? 1.1 : 1});
    transform: scale(${({ interactive }) => interactive ? 1.1 : 1});
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
`;

const Icon = styled.img`
  border-radius: 1rem;
  width: 50px;
  height: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;

const NameLink = styled.div`

`;

const Name = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface LinkIconProps {
  src: string;
  href: string;
};

const LinkIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkIcon: React.FC<LinkIconProps> = ( {src, href} ) => {
  return (
    <a href={href}>
      <img src={src} height={"15px"} />
    </a>
  )
}

const Member: React.FC<MemberProps> = ( { member, onHover, onLeave, interactive } ) => {
  return (
    <MemberContainer interactive={interactive} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Icon src={member.icon} alt={member.name} />
      <NameLink>
        <Name>{member.name}</Name>
        <LinkIcons>
          {member.niconico && <LinkIcon src={niconico} href={member.niconico}/>}
          {member.youtube && <LinkIcon src={youtube} href={member.youtube} />}
          {member.x && <LinkIcon src={x} href={member.x} />}
          {member.soundcloud && <LinkIcon src={soundcloud} href={member.soundcloud} />}
          {member.pixiv && <LinkIcon src={pixiv} href={member.pixiv} />}
        </LinkIcons>
      </NameLink>
    </MemberContainer>
  )
}

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Vocal = () => {
  return (
    <>
      <Header>Vocals</Header>
      <CenterText>双葉湊音, 紡乃世詞音, 宮舞モカ, 夏色花梨, 小春六花, 花隈千冬</CenterText>
    </>
  )
}

const Music = () => {
  return (
    <>
      <Header>Music</Header>
      <MembersContainer>
        <Member member={{
          "name": "竹馬あお",
          "icon": iconTakeuma,
          "niconico": "https://www.nicovideo.jp/user/72888400",
          "youtube": "https://www.youtube.com/@aotakeuma",
          "x": "https://x.com/aotakeuma",
          "soundcloud": "https://soundcloud.com/aotakeuma",
        }} />
      </MembersContainer>
    </>
  )
}

const Artwork = () => {
  return (
    <>
      <Header>Artwork</Header>
      <MembersContainer>
        <Member member={{
          "name": "がまうお",
          "icon": iconGamauo,
          "x": "https://x.com/Gama_ou",
          "pixiv": "https://www.pixiv.net/users/94165420",
          "niconico": "https://www.nicovideo.jp/user/124308052",
          "youtube": "https://www.youtube.com/@Gama_ou",
        }} />
      </MembersContainer>
    </>
  )
}

const TracksContainer = styled.div`
  overflow: auto;
`;

const TracksList = styled.ol`
  margin-left: auto;
  margin-right: auto;
  min-width: 400px;
  width: fit-content;
  line-height: 2;
`;

const TrackTitle = styled.span`
  font-size: 1.2rem;
  margin-left: 5px;
`;

const TrackArtist = styled.span`
  font-size: 1rem;
  margin-left: 10px;

  &:before {
    content: " - ";
  }
`;

const TrackFeat = styled.span`
  font-size: 0.8rem;
  margin-left: 10px;
`;

const Tracks = () => {
  return (
    <>
      <Header>Tracks</Header>
      <TracksContainer>
        <TracksList>
          <li>
            <TrackTitle>灯</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音, 紡乃世詞音, 夏色花梨, 小春六花, 花隈千冬</TrackFeat>
          </li>
          <li>
            <TrackTitle>Jumping into Orbit</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 宮舞モカ</TrackFeat>
          </li>
          <li>
            <TrackTitle>Lemonade/Palette</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音, 紡乃世詞音; Guitar: しもぞの; Bass: Nui</TrackFeat>
          </li>
          <li>
            <TrackTitle>Himawari/Ascension</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音, 紡乃世詞音</TrackFeat>
          </li>
          <li>
            <TrackTitle>にゃんばーす！</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 宮舞モカ</TrackFeat>
          </li>
          <li>
            <TrackTitle>季節は死んだりしないから</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音; Special Thanks to: ぺんぎん, 佐薙概念</TrackFeat>
          </li>
          <li>
            <TrackTitle>帰路</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音, 紡乃世詞音</TrackFeat>
          </li>
          <li>
            <TrackTitle>青色に祈りを</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音</TrackFeat>
          </li>
          <li>
            <TrackTitle>Afterburn</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 宮舞モカ</TrackFeat>
          </li>
          <li>
            <TrackTitle>送辞</TrackTitle>
            <TrackArtist>竹馬あお & klkkl</TrackArtist>
            <TrackFeat>feat. 花隈千冬</TrackFeat>
          </li>
        </TracksList>
      </TracksContainer>
    </>
  );
};

const SwiperContainer = styled.div`
  height: 60vh;
  overflow: auto;
`;

const LyricTitle = styled(CenterText)`
  margin-top: -10px;
`;

const LyricContainer = styled.div`
  white-space: pre-wrap;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;

const Lyrics = () => {
  return (
    <>
      <Header>Lyrics</Header>
      <HintText>←スワイプしてください→</HintText>
      <SwiperContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
        >
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>灯</TrackTitle><ResponsiveBr />
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 双葉湊音, 紡乃世詞音, 夏色花梨, 小春六花, 花隈千冬</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
響く音、ぼくら照らす灯りが
いつか、世界じゅうを満たせるように

「青春」って大げさな名前もいらない日々
艱難辛苦の道 音を鳴らしたら全部全部ＯＫ！
「友情」だけでいい、ファンシーな奇跡なんて
いらない！どんな壁も音を鳴らしたら全部全部４０４！

「アルペジオ弾けないけどどうしよう…」
「青春パワーコード弾きでＧＯ！！」
いつもより賑やかな放課後

「なんかマイクが入らない…」
「ここを抜いてみたら…ギャーーー！！」
５人で出す音も悪くないね

破天荒でハチャメチャな歩幅が
偶然じゃないレゾナンスを奏でて

響く音、ぼくら照らす灯りが
いつか、世界じゅうを満たせるように
「頑張ろう！」って月並みの言葉でもじゅうぶん！
１、２、３で駆け出すココロが１００点だね！！

光るキズナ、ぼくたちの灯りで
いつか、世界が満たされるように
「精一杯！」が「かわいい」ねってみんな分かってんじゃん！
セカイを繋げるおまじない

響く音、ぼくら照らす灯りが
いつか、世界じゅうを満たせるように
湊音詞音花梨六花千冬でどんでん返しの日常を
いつかキミもこっち側においでよ！
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>Jumping into Orbit</TrackTitle><ResponsiveBr />
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 宮舞モカ</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
Monochromeの世界追い越して
Spotlightときめく方がmy way
Noisyな御託かき消して今夜はHi-Fi
言葉は要らない

Slap it down　うなってんだ
私はいつでも今日もTake 1
高まる拍動は誰にも負けない
Sync it up　君には私がいるからSo, be the star!
ついてこれるよね？連れていくから

永遠なんてきれいごとでも、いま限りは願って――
Don’t stop the music
Just dance the night away

快晴の夜空へ　I say, don’t hesitate
手を握ればもう怖くないよ
数千光年　Every step you’ve made
輝くんだ！私たちのMilky way

Go higher, jump higher, be the star!

Redshiftする世界追い越して
Spotlightときめく方がyour way
Signalは遠く途絶えた今夜はNo Wi-Fi
ふたりだけで〈Sync/Sink〉

Yeh, hold me tight　台本にない
激情、強い酒飲んだみたい？
高まる拍動は中性子のロンドさ
Catch the light　君には私がいるからSo, be the star!
ついてこれるよね？連れていくから

褪せることない記憶に祈る、ずっとこんな風に――
Don’t stop the music
Just dance all night along…

快晴のsolarへ　I say, don’t hesitate
手を握ればもう怖くないよ
数千光年　Step by step進め
輝くんだ！私たちのMilky way

Go higher, jump higher, be the star!
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>Lemonade/Palette</TrackTitle>
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 双葉湊音, 紡乃世詞音; Guitar: しもぞの; Bass: Nui</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
きみと紡いだ詞の葉、儚く消えても――
（わたしは、ここにいるよ、ずっと）

ラムネ瓶の中に澄んだ世界
甘酸っぱい回想、鳴らすビー玉
パレットに溢れる夏の色彩
あの日の記憶、君の笑顔で満ちた

駆け抜けた坂道、取り替えっこしたヘアピン
膝に猫を乗せてした他愛ないおはなし
永遠なんてない、そんなこと分かってるけど

きみと紡いだ詞の葉、儚く消えても
夏空の向こうでずっと待ってるよ
きみと奏でた詞の葉、青色の片隅で花のように
音と／蕾を咲かせて

音が／ひざしに咲って
交わった運命を忘れてやらないよ

ラムネ瓶の中に澄んだ世界
きっと僕らの全部が詰まってるんだね
パレットに溢れる夏でさえも
きっと僕たちの全てを描ききれない

昼下がり、バス停、分け合ったイヤホン
青春特急は僕らをどこに連れて行くの
永遠なんてない、そんなこと分かってたんだ

きみと紡いだ詞の葉、儚く消えても
思い出は誰にも壊せないから！
きみと奏でた詞の葉、キャンバスいっぱいの想い伝えるよ
音と／五次元を越えて
音が／ふたりで笑って
交わった運命を忘れてやらないよ
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>Himawari/Ascension</TrackTitle>
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 双葉湊音, 紡乃世詞音</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
時が止まって、絞り出す言葉も
この気持ちも愛しさもぜんぶ、捧げたい、伝えたい
たとえ大人になっても、記憶の奥底で眠ったままの
ひそかに輝くそこに、きみはいる

（わたしは、ここにいるよ、ずっと）
（わたしは、ここにいるよ、ずっと）
（一緒の帰り道、きれいな夕空）
（二人のないしょ、交わした約束）
（離ればなれが運命だとしても）
（きみといた時間が心を灯して）
晴れ空に手が届くよ

いつかは終わる夏の日の果てと
どこまでも続く空に餞を
曖昧な彼方、地平線の先
奏でてゆく、響きわたる、詞の葉よほつれないで

いつかは終わる青色の日々と
褪せることのないふたつの想い出
このひまわり畑でまた逢おうね

季節がまた巡って、路傍に咲いた花と
海の景色と少し欠けた暮らしのこと、きみに話したいな

いつかまた来る夏の日は遠く
ふたりを繋げる星空に愛を
ひまわりの咲う地平線の先
奏でてゆく、響きわたる、詞の葉よ僕らを結んで

いつかまた来る輝いた日々と
鮮やかなままのふたつの想い出
このひまわり畑でーー

いつかは終わる
（一緒の帰り道、きれいな夕空、二人のないしょ、交わした約束）
いつかまた来る
（駆け抜けた坂道、取り替えっこしたヘアピン、昼下がり、バス停、二人の時間すべて）
どこまでも続く

いつかは終わる夏の日の果てと
またいつか逢えるきみに餞を
曖昧な彼方、地平線の先
奏でてゆく、響きわたる、詞の葉を忘れないで

いつかは終わる青色の日々も
ふたつの記憶が褪せることはない！
このひまわり畑でまた逢おうね

どこまでも続くーー
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>にゃんばーす！</TrackTitle><ResponsiveBr />
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 宮舞モカ</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
めくるめく光と影とDnB
Protostar、産まれたばかりだね
名前のない音楽が今夜
鳴り響いてんだ

ひとりといっぴき、寂しくないよ
Vibe on our beats、同期してるんだから
フロア、ここは醒める夢なのか？
今さらdon’t matter

ねえ、ワトソン！
大丈夫、踊るよ
未来光円錐の果てまで、いけるよ

Never end!!
永遠はいつも今日から繋がる
ポラリス、溢れる光が導く
大切はきっと明日も輝くさ
Our universe!!

眩しすぎたsupernovaの波動も
秘めたるasteroidの機運も
名前のない周波数がいつも
鳴り響いてんだ

ひとりといっぴき、寂しくないよ
So lit our beats、君がそう望むなら
フロア、このざわめきは恋なのか？
今さらdon’t matter

ねえ、ワトソン！
大丈夫、踊るよ
心躍るほう、急行が待ってるよ

Never end…

Never end!!
永遠はいつも今日から繋がる
ポラリス、溢れる光が導く
大切はきっと明日も輝くさ
Our universe, universe!!
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>季節は死んだりしないから</TrackTitle><ResponsiveBr />
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 双葉湊音</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
埃被った人生、何かを忘れたような人生
屈託なく青い快晴に気付けば置いていかれた
ここはいつも退屈で、このままじゃダメだって知ってて
記憶の断片があの夏にぼくを誘（いざな）った

列車は次の駅へ――
手紙を片手に、揺られる各停……

宝石のよう、輝いた日々はぼくらを載せて
どこに行くの？透過して、溶かして、漂って
季節はずっと、ぼくを待ってる
夏は死んだりしないから
ここから踏み出して、終演（おわ）らせようか

心鎖した少年、鍵を開けたぼくの幽霊
屈託なく澄んだ笑顔に気付けば見惚れていた
きみと一緒ならオーライ、凡庸な星空も色付いて
言葉にできない輝きがぼくだけを吸い込んだ

季節は餞別も告げずに――
幸せはいつも、噛み締める前に消えた。消えた。

「夏の終わりは、君に似ている。」

宝石のよう、輝いた日々はぼくを遺して
どこに行くの？透過して、透過して、
溶かして、溶かして、溶かして、ずっとへばりついた
季節はずっと、ぼくを待ってる
夏は死んだりしないから
ここから踏み出して、終演（おわ）らせるんだ

（埃被った人生も、またいつかあの夏のように
フィクションなんかじゃなくて、確かにここに在った証明を
埃被った人生も、忘れられない夏のように
フィクションなんかじゃなくて、確かにここに在った証明を）
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>帰路</TrackTitle>
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 双葉湊音, 紡乃世詞音</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
ねえ、茜色の、空、僕たちを、包んで、
家路、上り坂を、蹴って、ずっとこのまま、でいい

ねえ、ことね、本当の、言葉、ってどこにあると思う？
心の、底、ちょっぴり違わず伝えるような
そう、みなと、本当は、どこにもない、って思うよ。
だから、心が、きみの鼓動が、ひとつしかないんだ

「ずっと続けばいいな」さえも舌足らずで
「またいつか」よりもさ、涙が追い越してく

今日が、終われば、すべて解けてしまうような、
呪いと、おまじないたちよ、
電車が、発ったら、二度と戻らない、妄想、
離れる、セカイがここから離れる。

ねえ、みなと、歌う幸せ、教えてくれてありがとう。
心の、ここ、少し痛くならなくなったね
そう、ことね、歌うことは、青春、なのかな。
言葉、よりも、僕の心臓に、近いような

「ずっと続けばいいな」さえも舌足らずで、
「離れないで」なんてさ、正しくないって、正しくないって、判ってるよ

今日が、終われば、すべて溶けてしまうような、
心と、記憶の結晶、
駅を、去っても、また逢えるよね、きっと、
繋がる、セカイを通して繋がる。

家路に、つけば、きみと、いっしょに、
ラムネ、ビー玉を、鳴らして、遊んで、
あの日の、僕らの、ふたつの、心臓がまた、
銘々の記憶で鳴り響いていた。
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>青色に祈りを</TrackTitle>
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 双葉湊音</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
ぼくたちは、青色に囚われている。
かつて光ってみえたビー玉のような、憧れ、夢、青春、
アイデンティティの在り処を覓めて、泣いた終わらない夜、
この手でつかもうとしてみた、愛のかたち、曖昧だとしても。

ぼくたちは、青色に囚われている。
でもいつかは大人になって、憧れは想い出となる。
叶わなかったあれこれを下駄箱に仕舞って、走り出したら、
気付けば、靴ももうぼろぼろだ。

ぼくたちは、青色に囚われている。
うごメモに描いた物語、放課後のスマブラ、
アメーバピグ、プール、席替えであの子のとなり、
back numberの歌詞をステメにしてるアイツ。

ぼくたちは、青色に囚われている。
返ってこないものをねだって、ねだって、
死ねずに続いてしまった白い生活、
それでも、人生は続いていく。

濁りきって見えない青色のかげ、逆さまに落ちてゆく夢の残像、
後ろ向きに生きてればたどり着ける終点たちを探してさ、つまづいてどこにも行けない。

青色がぼくの音だ。青色に祈りを捧げて、
ひとりよがり、ふたりすがり、
淡々と続いてくよ。

きみだけがぼくの青だ。きみがいないこの音楽を奏でて、
ひとりよがり、かさねがさね、
それなりに続いてくよ。
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>Afterburn</TrackTitle><ResponsiveBr />
              <TrackArtist>竹馬あお</TrackArtist>
              <TrackFeat>feat. 宮舞モカ</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
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
`}
            </LyricContainer>
          </SwiperSlide>
          <SwiperSlide>
            <LyricTitle>
              <TrackTitle>送辞</TrackTitle>
              <TrackArtist>竹馬あお & klkkl</TrackArtist>
              <TrackFeat>feat. 花隈千冬</TrackFeat>
            </LyricTitle>
            <LyricContainer>
              {`
（学校に向かう朝が次第に温暖となり、東風が春の陽気を運んでくる時季となりました。
この良き日に、□□期生の皆さんは、□□□□高校を卒業され、更なる高みを目指してゆかれます。
本日は、ご卒業おめでとうございます。在校生一同、心よりお祝い申し上げます。）

儀式／誰がためでもなく吹く桜／
四分間／毎年のように代わり映えない言葉／
憧れ／ついに「ひとり」となってしまうあなた／
部室に残ったムスクの香り／落書きと傘の忘れ物／
青春／最後のアトリウムで号んだ／
わたしはそれを歌にしたんだ／物語の続きって歌った／
／山はいつも広くて大きかった／
いつも見えるのは背中だった／わたしだけの特等席から

言祝ぎは冬の火光に代えて
餞は夏の静寂で紡いだ
今更こんな綺麗事なんて残酷すぎるよ！
群像はあなたの声に霞んで
記憶ごとその薫りに埋もれていく
春のいない／春が咲く／春が来る。

（さて、わたしたち□□□□□□□が、いよいよ先輩方から襷を受け取り、最高学年になろうとしています。
□□□□□□□□、そして四月に入学する□□□□□と共に、積極的に□□□□の文化を継ぎ、そして築き、さらにしたたかに、そしてしなやかになっていきたいと思います。）

我儘／わたしはきっとまだ幼かった／
心に根を張った花の名前は／最後まで知らなかった

あなたの全部をわたしで満たして
わたしはそれ「ひとつ」だけで良いのに
今更こんな旅立ちなんて残酷すぎるよ！
約束は季節を変え木霊して
記憶ごとその薫りに埋もれていく
春のいない／春が咲く／春が来る。

（卒業生の皆さんの、これからのさらなるご活躍をお祈り申し上げて、在校生代表の送辞といたします。）
`}
            </LyricContainer>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </>
  )
}

const Price = () => {
  return (
    <>
      <Header>Buy</Header>
      <CenterText>
        頒布価格: 1,000円
        <br />
        「M3-2025秋」 (2025/10/26) にて初頒布
      </CenterText>
    </>
  )
}

const Main = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -21px;
  padding: 20px;
  width: 70%;
  max-width: 1150px;
  background-color: #b8cce0;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
`;

const Page = styled.div`
  background-color: #d0eef7;
  background-size: cover;
  background-position: middle;
`;

const App = () => {
  return (
    <Page>
      <Banner />
      <Main>
        <Introduction />
        <Vocal />
        <Music />
        <Artwork />
        <Tracks />
        <Lyrics />
        <Price />
      </Main>
    </Page>
  )
};

export default App;
