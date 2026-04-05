import { useCallback } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SectionWaveDivider from './components/graphics/SectionWaveDivider.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import AuthSection from './components/AuthSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const openAuth = useCallback(() => {
    document.getElementById('auth')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header onOpenAuth={openAuth} />
      <main id="main">
        <Hero />
        <SectionWaveDivider />
        <ProblemSection />
        <Features />
        <HowItWorks />
        <FaqSection />
        <AuthSection />
      </main>
      <Footer />
    </>
  );
}
