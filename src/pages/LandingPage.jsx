import Hero from '../components/Hero.jsx';
import SectionWaveDivider from '../components/graphics/SectionWaveDivider.jsx';
import Features from '../components/Features.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import ProblemSection from '../components/ProblemSection.jsx';
import FaqSection from '../components/FaqSection.jsx';

export default function LandingPage() {
  return (
    <>
      <main id="main">
        <Hero />
        <SectionWaveDivider />
        <ProblemSection />
        <Features />
        <HowItWorks />
        <FaqSection />
      </main>
    </>
  );
}
