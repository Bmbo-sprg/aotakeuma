import jacket from "../assets/img/ubugoe/jacket.png";
import iconTakeuma from "../assets/img/icon/logo_with_bg.png";
import iconKompeki from "../assets/img/ubugoe/icon-kompeki.jpg";

import niconico from "../assets/img/icon/niconico.png";
import youtube from "../assets/img/icon/youtube.png";
import x from "../assets/img/icon/x.png";
import soundcloud from "../assets/img/icon/soundcloud.png";
import pixiv from "../assets/img/icon/pixiv.png";
import styled from "styled-components";
import React, { useState } from "react";
import "swiper/css";

const VALID_CODES = [
  "202f34tt", "2o2f34tt", "2O2f34tt",
];

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
      滲んでゆく記憶を<ResponsiveBr />記録 (おんがく) で<ResponsiveBr />繋ぎとめる、<ResponsiveBr />抒情的ボカロック<ResponsiveBr />アルバム
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
            href="https://drive.google.com/file/d/1tpLO0ITuvI_pVCXoRrkf1XYG7fmMhy1-/view?usp=sharing"
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
      <Header>Vocals</Header>
      <CenterText>初音ミク, 小春六花, 双葉湊音, 紲星あかり, 花隈千冬</CenterText>
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
          "name": "こんぺき",
          "icon": iconKompeki,
          "x": "https://x.com/wetcolor3",
          "pixiv": "https://pixiv.net/users/6766340",
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
            <TrackTitle>無題_20201117</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
          </li>
          <li>
            <TrackTitle>ささやきさえ</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 初音ミク</TrackFeat>
          </li>
          <li>
            <TrackTitle>青の隣に</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 小春六花</TrackFeat>
          </li>
          <li>
            <TrackTitle>拝啓あの日未熟だった青くて痛い僕ら</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音; Lyrics: 佐薙概念; Guitar: しもぞの</TrackFeat>
          </li>
          <li>
            <TrackTitle>フェイルド・バイオミメティクス</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 初音ミク</TrackFeat>
          </li>
          <li>
            <TrackTitle>未定義</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 紲星あかり</TrackFeat>
          </li>
          <li>
            <TrackTitle>スターダスト・リブート</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 初音ミク</TrackFeat>
          </li>
          <li>
            <TrackTitle>さよならの数だけ</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 花隈千冬; Lyrics: 佐薙概念</TrackFeat>
          </li>
          <li>
            <TrackTitle>産声</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 花隈千冬</TrackFeat>
          </li>
        </TracksList>
      </TracksContainer>
    </>
  );
};

const Lyrics = () => {
  return (
    <>
      <Header>Lyrics</Header>
      <CenterText>
        <a href="https://aotakeuma.notion.site/e5af20d43b634b8d8b79e55b6287aa30">歌詞ページ</a>
      </CenterText>
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
        「VOCALOID STREET 09」 (2025/09/23) にて初頒布
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
