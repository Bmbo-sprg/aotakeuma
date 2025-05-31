import bg from "../assets/img/kisetsu/banner-bg.jpg";
import jacket from "../assets/img/kisetsu/jacket.png";
import iconTakeuma from "../assets/img/icon/logo_with_bg.png";

import niconico from "../assets/img/icon/niconico.png";
import youtube from "../assets/img/icon/youtube.png";
import x from "../assets/img/icon/x.png";
import soundcloud from "../assets/img/icon/soundcloud.png";
import pixiv from "../assets/img/icon/pixiv.png";
import styled from "styled-components";
import React from "react";

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
  background-image: url(${bg});
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
      あの夏、<ResponsiveBr />僕は海辺の町で、<ResponsiveBr />宝石のような日々を過ごした。
      <br />
      原作小説: ぺんぎん, 佐薙概念『季節は死んだりしないから』(2024/05/03 発行)
    </CenterText>
  )
}

const Download = () => {
  return (
    <>
      <Header>Download</Header>
      <CenterText>
        <a href="https://www.dropbox.com/scl/fi/uxbbjakwzw1o4jiya4uft/.zip?rlkey=x5v2fiznp1162oavcfeicspta&st=mrcf0846&dl=0">ダウンロードページ (Dropbox)</a>
        <br />
        上記のリンクにアクセスし，<ResponsiveBr />
        ダウンロードカードに記載されている<ResponsiveBr />
        パスワードを入力してください。
      </CenterText>
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
      <CenterText>双葉湊音, 紡乃世詞音</CenterText>
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
            <TrackTitle>季節は死んだりしないから</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音</TrackFeat>
          </li>
          <li>
            <TrackTitle>灯</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音, 紡乃世詞音, 夏色花梨, 小春六花, 花隈千冬</TrackFeat>
          </li>
          <li>
            <TrackTitle>季節は死んだりしないから (Instrumental)</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
          </li>
          <li>
            <TrackTitle>灯 (Instrumental)</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
          </li>
        </TracksList>
      </TracksContainer>
    </>
  );
};

const Price = () => {
  return (
    <>
      <Header>Buy</Header>
      <CenterText>
        頒布価格: 500円
        <br />
        「ふたばすてっぷ2」 (2025/06/01) にて頒布
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
  background-image: url(${bg});
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
        <Tracks />
        <Price />
      </Main>
    </Page>
  )
};

export default App;
