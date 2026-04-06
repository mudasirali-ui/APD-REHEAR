import { useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

export default function App() {
  const navigate = useNavigate();

  const handleOpenAuth = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header onOpenAuth={handleOpenAuth} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </>
  );
}
