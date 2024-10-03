import './App.css';

export const App = () => {
  return (
    <>
      <div id="splash">
          <div id="splash_logo">
              <svg id="mask" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="559.3" height="337.2" viewBox="0 0 559.3 337.2" xmlSpace="preserve"> {/* style="enable-background:new 0 0 559.3 337.2;" */}
                  <image xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/img/icon/logo_handwrite.svg" width="559.3" height="337.2" mask="url(#clipmask)"></image>
                  <mask id="clipmask" maskUnits="objectBoundingBox">
                      <path className="st0" d="M339.3,0c0,0-5.6,1.6-23.3,12C298.2,22.4,5.1,317.6,1.5,329.8c-3.6,12.2-0.9,7.3,9.8,0
                    c10.6-7.3,211.3-110,324.6-136.6s-40-116.6,46.7-136.6s217.8-75.9,156.7-23.3s-47.9,33.1-60,41.3c-12.1,8.2-82.5,118.8-89.6,137.1
                    c-7.1,18.3-0.2,14,5.4,5.9c5.5-8.2,137.5-47,164.2-49"/>
                  </mask>
              </svg>
          </div>
      </div>

      <div className="container">
          <h1>竹馬あお OFFICIAL SITE</h1>
          <h2>Still work in progress...</h2>
          <p>
              ご不便おかけして申し訳ございません。<br />
              各種SNSへのリンクは <a href="https://linktr.ee/aotakeuma">linktr.ee/aotakeuma</a> をご利用ください。
          </p>
          <p>「SummerNotFoundException」の歌詞ページは <a href="https://aotakeuma.notion.site/SummerNotFoundException-9b89a2777e1c41ba992d2ece19604f2e">こちら (Notion)</a></p>
          <p>「ハルジオンは雨と咲く -Original Soundtrack-」の歌詞ページは <a href="https://aotakeuma.notion.site/Original-Soundtrack-e0c470c71a8e4a4a9a1dcc5b561a09fc">こちら (Notion)</a></p>
          <p>「産声、滲んだきみの青」の歌詞ページは <a href="https://aotakeuma.notion.site/e5af20d43b634b8d8b79e55b6287aa30">こちら (Notion)</a></p>
      </div>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"></script>
      <script src="js/logo_handwrite.js"></script>
    </>
  )
}

export default App
