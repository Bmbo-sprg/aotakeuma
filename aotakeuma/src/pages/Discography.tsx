import { useParams, Link } from "react-router-dom";

const Snfe = () => {
  return (
    <div>
      <h1>SummerNotFoundException</h1>
      <a href="https://aotakeuma.notion.site/SummerNotFoundException-9b89a2777e1c41ba992d2ece19604f2e">歌詞ページ</a>
    </div>
  )
};

const HaruameOst = () => {
  return (
    <div>
      <h1>ハルジオンは雨と咲く -Original Soundtrack-</h1>
      <a href="https://aotakeuma.notion.site/Original-Soundtrack-e0c470c71a8e4a4a9a1dcc5b561a09fc">歌詞ページ</a>
    </div>
  )
};

const Ubugoe = () => {
  return (
    <div>
      <h1>産声、滲んだきみの青</h1>
      <a href="https://aotakeuma.notion.site/e5af20d43b634b8d8b79e55b6287aa30">歌詞ページ</a>
    </div>
  )
};

const Tnftep1 = () => {
  return (
    <div>
      <h1>ふたつの夏日に餞を</h1>
      <a href="https://www.dropbox.com/scl/fi/uxbbjakwzw1o4jiya4uft/.zip?rlkey=x5v2fiznp1162oavcfeicspta&st=mrcf0846&dl=0">ダウンロードページ (Dropbox)</a>
    </div>
  )
};

const DiscographyList = () => {
  return (
    <div>
      <h1>Discography</h1>
      <ul>
        <li><Link to={'1'}>高校生</Link></li>
        <li><Link to={'2'}>縋想</Link></li>
        <li><Link to={'3'}>SummerNotFoundException</Link></li>
        <li><Link to={'4'}>ハルジオンは雨と咲く -Original Soundtrack-</Link></li>
        <li><Link to={'5'}>産声、滲んだきみの青</Link></li>
        <li><Link to={'6'}>ふたつの夏日に餞を</Link></li>
      </ul>
    </div>
  )
}

const Discography = () => {
  const { id } = useParams();
  switch (id) {
    case '1':
      return <div>高校生</div>;
    case '2':
      return <div>縋想</div>;
    case '3':
      return <Snfe />;
    case '4':
      return <HaruameOst />;
    case '5':
      return <Ubugoe />;
    case '6':
      return <Tnftep1 />;
    default:
      return <DiscographyList />;
  }
};

export default Discography;
