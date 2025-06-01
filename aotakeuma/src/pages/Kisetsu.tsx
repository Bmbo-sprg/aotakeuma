import bg from "../assets/img/kisetsu/banner-bg.jpg";
import jacket from "../assets/img/kisetsu/jacket.png";
import iconTakeuma from "../assets/img/icon/logo_with_bg.png";

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
  "i7qg5hkp",
  "z8ut6bmk",
  "m9h5bket",
  "b3p79r8e",
  "e2wysgpt",
  "a62nuzj7",
  "s8jdcuzg",
  "v2e5mhxt",
  "k8inmas2",
  "x25pkjqn",
  "n5yqm7e4",
  "z6ce43ky",
  "m72decaq",
  "h4epgdyw",
  "m69fgcu7",
  "z2k5d64s",
  "x9aywp4d",
  "j28z6mgr",
  "a9pw5q84",
  "w4avdskp",
  "n3p4q8hx",
  "n84s2gcu",
  "b27y8i4e",
  "k9sz37nv",
  "z89ekv5g",
  "z8i4ugkd",
  "m65fvyzr",
  "q2bywzmk",
  "j7fwqgd2",
  "z43sbw6r",
  "a436pvrf",
  "c8jtz9bd",
  "y9rfpiqm",
  "u2m7afck",
  "v2ituzah",
  "n53hc6a8",
  "b93vszq8",
  "z6rk9wuj",
  "p9in5s8u",
  "c4whm8sd",
  "g4nzs8u3",
  "i7c2d6ng",
  "p4bxzavt",
  "k346fnvb",
  "a2mqwdxc",
  "f3r59yjk",
  "t82cnbra",
  "a42duvph",
  "k3wajet7",
  "i69m3tgv",
  "s873p9qw",
  "v5tk2czi",
  "t2vrhs4q",
  "g6z7pfbh",
  "k6erp9nq",
  "v4tmbkph",
  "j46r2a3u",
  "i4vwtjb8",
  "p2fcqb85",
  "h24xek9a",
  "e8bj75nz",
  "p6sih5q7",
  "y2bvptmu",
  "f8kbr7a2",
  "y5pgbxd2",
  "u2rxwb5k",
  "n8y3vj6c",
  "n2gzre5q",
  "k82iz3j5",
  "b5nhyz2t",
  "i7qzsc45",
  "r93g4wny",
  "y6rj385w",
  "w7acjpim",
  "r7g9f5dv",
  "g8sxqnkz",
  "f2ns4erx",
  "z3wj9vs4",
  "i2an7yxd",
  "w3yta5ph",
  "c4hzmjgx",
  "d937mj2g",
  "y3ptr5ed",
  "s9aqzihw",
  "g6z28nvd",
  "y9pvzsq8",
  "b3y4wgfp",
  "g76r9sec",
  "p8qvsjyg",
  "g4fym9aq",
  "f9en3ms4",
  "k3m5ts8f",
  "i26qu3yc",
  "h435qca2",
  "g4iqpjvb",
  "s48qmz7g",
  "g27aink9",
  "t8ys6pn4",
  "k6rh7zyw",
  "r2q9k7ga",
  "u2man9jd",
  "s7bq3njd",
  "z59ips7j",
  "b89xsirq",
  "y2px35w9",
  "i6qjpbv9",
  "e8ydxh4t",
  "m3ihgvue",
  "c8sg2axk",
  "i2xh3cp5",
  "m7q23evf",
  "q9pyvmhx",
  "y2k5wz7d",
  "f97k3vty",
  "a8kqftru",
  "f6jtqd7z",
  "r5djt4bm",
  "s75xjryw",
  "v5kjfsac",
  "d7bcg5mr",
  "c6g4qrik",
  "x3ransmp",
  "q6pascu9",
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
            href="https://drive.google.com/file/d/18z70wTGGGv43vuvHZmzi9mKX_H10TI9t/view?usp=drive_link"
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
      <CenterText>双葉湊音, 紡乃世詞音, 夏色花梨, 小春六花, 花隈千冬</CenterText>
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
        <Lyrics />
        <Price />
      </Main>
    </Page>
  )
};

export default App;
