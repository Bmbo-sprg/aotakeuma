import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Root from './pages/Root';
import Discography from './pages/Discography';
import icon from './assets/img/icon/logo_with_bg.png';

const App = () => {
  return (
    <Router>
      <Helmet>
        <meta property="og:image" content={"https://aotakeuma.com" + icon} />
        <meta property="twitter:image" content={"https://aotakeuma.com" + icon} />
      </Helmet>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="snfe" element={<Navigate to="/discography/3" />} />
        <Route path="haruame-ost" element={<Navigate to="/discography/4" />} />
        <Route path="ubugoe" element={<Navigate to="/discography/5" />} />
        <Route path="tnftep1" element={<Navigate to="/discography/6" />} />
        <Route path="discography" element={<Discography />} />
        <Route path="discography/:id" element={<Discography />} />
        <Route path="*" element={<p>Oops...</p>} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
