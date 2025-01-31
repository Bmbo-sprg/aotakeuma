import bg from "./assets/img/tnftep1/banner-bg.png";
import jacket from "./assets/img/tnftep1/jacket.png";
import niconico from "./assets/img/tnftep1/icons/niconico.png";
import youtube from "./assets/img/tnftep1/icons/youtube.png";
import x from "./assets/img/tnftep1/icons/x.png";
import soundcloud from "./assets/img/tnftep1/icons/soundcloud.png";
import pixiv from "./assets/img/tnftep1/icons/pixiv.png";
import fuyune from "./assets/img/tnftep1/icons/fuyune.jpg";
import booth from "./assets/img/tnftep1/icons/booth.svg";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = styled.h1`
  text-align: center;
  font-family: "Jost", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 3rem;
  color: #115394;
  text-decoration: underline dotted 2px;
  text-underline-offset: 0.2em;
`;

const CenterText = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 1.2rem;
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
      サークル、回生、音楽<ResponsiveBr />ジャンルの垣根を超えた、<br />
      気鋭京大生ボカロPによる<ResponsiveBr />コンピレーションアルバム<br />
      Kyoto University VOCALOID Compilation 2 「Bros.」
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

const MembersNote = styled.p`
  text-align: center;
  margin-top: -20px;

  @media (min-width: 600px) {
    display: none;
  }
`;

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const CommentContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 1rem;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  white-space: pre-wrap;
  width: 50%;
  min-width: 200px;
  font-size: clamp(12px, 1vw, 14px);
`;

const Members = () => {
  const [comment, setComment] = useState("");

  return (
    <>
      <Header>Composers</Header>
      <MembersNote>メンバーをタップするとコメントが下に表示されます</MembersNote>
      <MembersContainer>
        {members.map((member, index) => (
          <Member
            key={index}
            member={member}
            onHover={() => setComment(member.comment)}
            onLeave={() => setComment("")}
            interactive
          />
        ))}
      </MembersContainer>
      <CommentContainer>{comment}</CommentContainer>
    </>
  )
}

const Artwork = () => {
  return (
    <>
      <Header>Artwork</Header>
      <MembersContainer>
        <Member member={{
          "name": "柚雪ふゆね",
          "icon": fuyune,
          "x": "https://x.com/Snow53902",
          "pixiv": "https://www.pixiv.net/users/42157580",
        }} />
      </MembersContainer>
    </>
  )
}

const Organizer = () => {
  return (
    <>
      <Header>Organizer, Mastering</Header>
      <MembersContainer>
        <Member member={members[15]} />
      </MembersContainer>
    </>
  )
}

const XFDContainer = styled.div``;

const XFDIframe = styled.iframe`
  border-radius: 1rem;
  border-style: none;
  overflow: hidden;
`;

interface XFDProps {
  isPublished: boolean;
};

const XFD: React.FC<XFDProps> = ({ isPublished }) => {
  const [ref, { width }] = useMeasure();

  return (
    <>
      <Header>Crossfade</Header>
      <XFDContainer ref={ref}>
        {isPublished ? (
          <XFDIframe
            width={Math.floor(width || 200)}
            height={Math.floor((width || 200) * 9 / 16)}
            src="https://www.youtube.com/embed/Mj0Fx-Q_pgM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <CenterText>Coming soon...</CenterText>
        )}
      </XFDContainer>
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
    content: " / ";
  }
`;

const TrackFeat = styled.span`
  font-size: 0.8rem;
  margin-left: 10px;
`;

interface TracksProps {
  isXFDPublished: boolean;
};

const Tracks: React.FC<TracksProps> = ({ isXFDPublished }) => {
  return (
    <>
      <Header>Tracks</Header>
      {isXFDPublished ? (
        <TracksContainer>
          <TracksList>
            {lyrics.map((track, index) => (
              <li key={index}>
                <TrackTitle>{track.title}</TrackTitle><ResponsiveBr />
                <TrackArtist>{track.artist}</TrackArtist>
                <TrackFeat>{track.feat}</TrackFeat>
              </li>
            ))}
          </TracksList>
        </TracksContainer>
      ) : (
        <CenterText>
          全15曲<br />
          Coming soon...
        </CenterText>
      )}
    </>
  );
};

interface LyricsProps {
  isPublished: boolean;
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

const Lyrics: React.FC<LyricsProps> = ({ isPublished }) => {
  return (
    <>
      <Header>Lyrics</Header>
      {isPublished && <HintText>←スワイプしてください→</HintText>}
      {isPublished ? (
        <SwiperContainer>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
          >
            {lyrics.map((track, index) => (
              <SwiperSlide key={index}>
                <LyricTitle>
                  <TrackTitle>{track.title}</TrackTitle><ResponsiveBr />
                  <TrackArtist>{track.artist}</TrackArtist>
                  <TrackFeat>{track.feat}</TrackFeat>
                </LyricTitle>
                <LyricContainer>
                  {track.lyrics}
                </LyricContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      ) : (
        <CenterText>
          Coming soon...
        </CenterText>
      )}
    </>
  )
}

const BoothIcon = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 200px;
`;

interface PriceProps {
  isLyricsPublished: boolean;
  isBoothPublished: boolean;
};

const Price: React.FC<PriceProps> = ({ isLyricsPublished, isBoothPublished }) => {
  return (
    <>
      <Header>Buy</Header>
      <CenterText>頒布価格: 1,500円</CenterText>
      {isBoothPublished && <a href="https://aotakeuma.booth.pm/items/6179765">
        <BoothIcon src={booth} alt="Booth" />
      </a>}
      <HintText>(通販: +送料 210円)</HintText>
      {isLyricsPublished && <Link to="/download">
        <HintText>DLキーを持っている方はこちら</HintText>
      </Link>}
    </>
  )
}

interface ScheduleProps {
  isXFDPublished: boolean;
  isBoothPublished: boolean;
};

const Schedule: React.FC<ScheduleProps> = ({ isXFDPublished, isBoothPublished }) => {
  return (
    <>
      <Header>Schedule</Header>
      <CenterText>
        {!isXFDPublished && (
          <>
            2024.10.19 (Sat.) XFD公開<br />
          </>
        )}
        2024.10.27 (Sun.) <a href="https://www.m3net.jp/">M3-2024秋 第二展示場 お-25a</a>にて頒布<br />
        {!isBoothPublished && (
          <>
            2024.11.01 (Fri.) 通販開始<br />
          </>
        )}
        2024.11.20 (Wed.) ~ 2024.11.23 (Sat.) <a href="https://www.nf.la/">京都大学11月祭</a>内即売会「<a href="https://comicomm.netlify.app/">Comic Community 06</a>」にて頒布<br />
        2024.11.23 (Sat.) <a href="https://www.ketto.com/tvm/">THE VOC@LOiD M@STER 57 D-24</a>にて頒布
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
        <Members />
        <Artwork />
        <Organizer />
        <XFD />
        <Tracks />
        <Lyrics />
        <Price />
        <Schedule />
      </Main>
    </Page>
  )
};

export default App;
