import { Link } from 'react-router-dom';
import HearingHeroVisual from './graphics/HearingHeroVisual.jsx';
import SoundJourneyGraphic from './graphics/SoundJourneyGraphic.jsx';

const STATS = [
  'Focus on key context instructions',
  'Break spoken information into smaller parts',
  'Replay directions anytime',
];

const SESSIONS = [
  'Extract key directions',
  'Clarify missed details',
  'Reduce cognitive load',
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">AI assistive technology for auditory processing disorder (APD)</p>
          <h1 id="hero-heading">
            Make spoken instructions easier to understand with assistive technology for  <span className="gradient-text">APD</span>
          </h1>
          <p className="hero-text">
            Rehear APD is an assistive technology tool that helps students and others with auditory processing disorder (APD) to capture, clarify, and replay spoken classroom instructions. It turns verbal teaching into clear, reviewable guidance so students can better understand how to get their work completed.
          </p>
          <div className="hero-actions">
            <Link to="/signup" className="btn btn-primary">
              Request Early Access
            </Link>
            <a href="#how-it-works" className="btn btn-secondary">
              See How It Works
            </a>
          </div>
          <p className="small-note" style={{ marginTop: '1rem', fontWeight: 500 }}>
            Built as assistive technology for students with auditory processing disorder (APD) and other auditory processing challenges.
          </p>
          <div className="hero-stats" role="list">
            {STATS.map((tag) => (
              <div key={tag} className="stat" role="listitem">
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual-column">
          <HearingHeroVisual />
          <aside
            className="hero-card hero-card--overlay"
            aria-label="Listening session"
          >
            <div className="hero-card-head">
              <h3>Extracted Instructions</h3>
              <span className="badge">Actionable</span>
            </div>
            <ul className="session-list">
              {SESSIONS.map((line) => (
                <li key={line}>
                  <span className="dot" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
            <Link to="/signup" className="btn btn-primary full">
              Start listening
            </Link>
          </aside>
        </div>
      </div>
      <div className="container hero-journey">
        <SoundJourneyGraphic />
      </div>
    </section>
  );
}
