import { useParams, Link } from "react-router-dom";
import Tnftep1 from "./Tnftep1";
import Kisetsu from "./Kisetsu";
import Digimoca from "./Digimoca";
import Snfe from "./Snfe";
import Ubugoe from "./Ubugoe";
import Aonote from "./Aonote";

const HaruameOst = () => {
  return (
    <div>
      <h1>ハルジオンは雨と咲く -Original Soundtrack-</h1>
      <a href="https://aotakeuma.notion.site/Original-Soundtrack-e0c470c71a8e4a4a9a1dcc5b561a09fc">歌詞ページ</a>
    </div>
  )
};

const DiscographyList = () => {
  return (
    <div>
      <h1>Discography</h1>
      <ul>
        <li><Link to={'/discography/1'}>高校生</Link></li>
        <li><Link to={'/discography/2'}>縋想</Link></li>
        <li><Link to={'/discography/3'}>SummerNotFoundException</Link></li>
        <li><Link to={'/discography/4'}>ハルジオンは雨と咲く -Original Soundtrack-</Link></li>
        <li><Link to={'/discography/5'}>産声、滲んだきみの青</Link></li>
        <li><Link to={'/discography/6'}>ふたつの夏日に餞を</Link></li>
        <li><Link to={'/discography/7'}>季節は死んだりしないから</Link></li>
        <li><Link to={'/discography/8'}>でぃじたる・もかちーの！</Link></li>
        <li><Link to={'/discography/9'}>あおいろがぼくたちの音</Link></li>
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
    case '7':
      return <Kisetsu />;
    case '8':
      return <Digimoca />;
    case '9':
      return <Aonote />;
    default:
      return <DiscographyList />;
  }
};

export default Discography;
