import { useParams, Link } from "react-router-dom";

const Snfe = () => {
  return (
    <div>
      <h1>SummerNotFoundException</h1>
    </div>
  )
};

const HaruameOst = () => {
  return (
    <div>
      <h1>ハルジオンは雨と咲く -Original Soundtrack-</h1>
    </div>
  )
};

const Ubugoe = () => {
  return (
    <div>
      <h1>産声、滲んだきみの青</h1>
    </div>
  )
};

const DiscographyList = () => {
  return (
    <div>
      <h1>Discography</h1>
      <ul>
        <li><Link to={'3'}>SummerNotFoundException</Link></li>
        <li><Link to={'4'}>ハルジオンは雨と咲く -Original Soundtrack-</Link></li>
        <li><Link to={'5'}>産声、滲んだきみの青</Link></li>
      </ul>
    </div>
  )
}

const Discography = () => {
  const { id } = useParams();
  switch (id) {
    case '3':
      return <Snfe />;
    case '4':
      return <HaruameOst />;
    case '5':
      return <Ubugoe />;
    default:
      return <DiscographyList />;
  }
};

export default Discography;
