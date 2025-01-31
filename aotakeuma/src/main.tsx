import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Root from './pages/Root';
import Discography from './pages/Discography';

const App = () => {
  return (
    <Router>
      <Navbar />
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
