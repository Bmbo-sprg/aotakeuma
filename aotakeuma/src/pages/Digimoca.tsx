import jacket from "../assets/img/digimoca/jacket.png";
import iconTakeuma from "../assets/img/icon/logo_with_bg.png";
import iconPenguin from "../assets/img/tnftep1/icon-penguin.png";

import niconico from "../assets/img/icon/niconico.png";
import youtube from "../assets/img/icon/youtube.png";
import x from "../assets/img/icon/x.png";
import soundcloud from "../assets/img/icon/soundcloud.png";
import pixiv from "../assets/img/icon/pixiv.png";
import styled from "styled-components";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const VALID_CODES = [
  "syn1gu2p",
]

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
      ひとりといっぴき、<ResponsiveBr />宇宙を旅する
      <br />
      宮舞モカ×<ResponsiveBr />クラブミュージックEP
    </CenterText>
  )
}

const Download = () => {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_CODES.includes(code.trim().toLowerCase())) {
      setIsValid(true);
      setError("");
    } else {
      setIsValid(false);
      setError("無効なコードです。");
    }
  };

  return (
    <>
      <Header>Download</Header>
      {isValid ? (
        <CenterText>
          <a
            href="https://drive.google.com/file/d/1vwhb4DVmvMcxB4rjEkfAwqRJXWTNStpi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            ダウンロードページ (Google Drive)
          </a>
        </CenterText>
      ) : (
        <form onSubmit={handleSubmit}>
          <CenterText>
            ダウンロードカードに記載されている8桁のコードを入力してください。
            <br />
            <input
              type="text"
              id="code"
              value={code}
              maxLength={8}
              onChange={(e) => setCode(e.target.value)}
              style={{ width: "200px", margin: "10px 0" }}
            />
            <br />
            <button type="submit">確認</button>
          </CenterText>
          {error && <CenterText style={{ color: "red" }}>{error}</CenterText>}
        </form>
      )}
    </>
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
      <Header>Vocal</Header>
      <CenterText>宮舞モカ</CenterText>
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
          "name": "ぺんぎん",
          "icon": iconPenguin,
          "x": "https://x.com/dx19291005",
          "pixiv": "https://pixiv.net/users/22887343",
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
            <TrackTitle>Jumping into Orbit</TrackTitle>
          </li>
          <li>
            <TrackTitle>にゃんばーす！</TrackTitle>
          </li>
          <li>
            <TrackTitle>Afterburn</TrackTitle>
          </li>
          <li>
            <TrackTitle>Jumping into Orbit (Instrumental)</TrackTitle>
          </li>
          <li>
            <TrackTitle>にゃんばーす！ (Instrumental)</TrackTitle>
          </li>
          <li>
            <TrackTitle>Afterburn (Instrumental)</TrackTitle>
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
        頒布価格: 500円
        <br />
        「声音の宴 5次会」 (2025/09/14) にて頒布
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
        <Download />
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
