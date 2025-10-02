import jacket from "../assets/img/snfe/jacket.png";
import iconTakeuma from "../assets/img/icon/logo_with_bg.png";
import iconPenguin from "../assets/img/tnftep1/icon-penguin.png";

import niconico from "../assets/img/icon/niconico.png";
import youtube from "../assets/img/icon/youtube.png";
import x from "../assets/img/icon/x.png";
import soundcloud from "../assets/img/icon/soundcloud.png";
import pixiv from "../assets/img/icon/pixiv.png";
import styled from "styled-components";
import React, { useState } from "react";
import "swiper/css";

const VALID_CODES = [
  "q4ww28y8",
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
      夏/虚構/青春/<ResponsiveBr />少女/消失を描いた<ResponsiveBr />合成音声アルバム
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
            href="https://drive.google.com/file/d/1dHMjS8Nmv1Ya3yqKSH0sZQWj911YcUVu/view?usp=sharing"
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
      <CenterText>花隈千冬, 鏡音リン, VOICEVOX 冥鳴ひまり, VOICEVOX ナースロボ＿タイプＴ, 初音ミク, 紲星あかり, 双葉湊音, 紡乃世詞音, 可不</CenterText>
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
            <TrackTitle>Twilight Tint</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 花隈千冬</TrackFeat>
          </li>
          <li>
            <TrackTitle>こねくしょん!!!</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 鏡音リン</TrackFeat>
          </li>
          <li>
            <TrackTitle>201_Created</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 花隈千冬, 冥鳴ひまり</TrackFeat>
          </li>
          <li>
            <TrackTitle>サマー・ヴァーチャル・マシン</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 初音ミク</TrackFeat>
          </li>
          <li>
            <TrackTitle>あさっての蒼穹まで</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 初音ミク</TrackFeat>
          </li>
          <li>
            <TrackTitle>夏の海岸線では聴こえない。</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 紲星あかり</TrackFeat>
          </li>
          <li>
            <TrackTitle>夏の終わり、物語の続き</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 紲星あかり</TrackFeat>
          </li>
          <li>
            <TrackTitle>Lemonade/Palette</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音, 紡乃世詞音; Bass: Nui; Guitar: しもぞの</TrackFeat>
          </li>
          <li>
            <TrackTitle>絵空とうたかた</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 双葉湊音</TrackFeat>
          </li>
          <li>
            <TrackTitle>SummerNotFoundException</TrackTitle>
            <TrackArtist>竹馬あお</TrackArtist>
            <TrackFeat>feat. 可不</TrackFeat>
          </li>
          <li>
            <TrackTitle>return;</TrackTitle>
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
        <a href="https://aotakeuma.notion.site/SummerNotFoundException-9b89a2777e1c41ba992d2ece19604f2e">歌詞ページ</a>
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
        「M3-2024春」 (2025/04/28) にて初頒布
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
