import { Link } from 'react-router-dom';
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

        {/* Early Access CTA — no login form */}
        <section className="cta-section section-pad" id="early-access">
          <div className="container cta-inner">
            <p className="eyebrow subtle">Get early access to assistive technology for APD</p>
            <h2>Help students with APD access spoken instruction more clearly.</h2>
            <p className="section-text">
              If spoken instructions are difficult to process or easy to miss, Rehear provides assistive support that helps students capture, understand, and revisit classroom directions. Join early access to explore a better accessibility tool for spoken instruction.
            </p>
            <div className="hero-actions" style={{ marginTop: '2rem', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">
                Request Early Access
              </Link>
            </div>
            <p className="disclaimer-text">
              Rehear is an assistive learning and accessibility tool designed to improve access to spoken instruction for students with auditory processing disorder (APD) and related auditory processing challenges.
            </p>
            <p className="disclaimer-text">
              It does not diagnose, treat, or replace professional medical, educational, or audiological assessment in any way. Seek your audiologist and treating doctor for clarity about Auditory Processing Disorder if you think it might affect you or someone you know.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
