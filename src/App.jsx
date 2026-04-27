import { useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const navigate = useNavigate();

  const handleOpenAuth = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header onOpenAuth={handleOpenAuth} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
