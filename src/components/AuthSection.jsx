import { Link } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';

export default function AuthSection() {
  return (
    <section className="auth-section section-pad" id="auth">
      <div className="container auth-grid">
        <div className="auth-copy">
          <p className="eyebrow subtle">Get early access to assistive technology for APD</p>
          <h2>Help students with APD access spoken instruction more clearly.</h2>
          <p>
            If spoken instructions are difficult to process or easy to miss, Rehear provides assistive support that helps students capture, understand, and revisit classroom directions. Join early access to explore a better accessibility tool for spoken instruction.
          </p>
          <div className="hero-actions" style={{ marginTop: '2rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
            <Link to="/signup" className="btn btn-primary">
              Book a Demo
            </Link>
            <Link to="/signup" className="btn btn-secondary">
              Join the Pilot
            </Link>
          </div>
          <p className="small-note" style={{ fontStyle: 'italic' }}>
            Rehear is an assistive learning and accessibility tool designed to improve access to spoken instruction for students with auditory processing disorder (APD) and related auditory processing challenges.
            <br />
            <br />
            It does not diagnose, treat, or replace professional medical, educational, or audiological assessment in any way. Seek your audiologist and treating doctor for clarity about auditory processing disorder if you think it might affect you or someone you know.
          </p>
        </div>

        <AuthForm initialTab="signup" />
      </div>
    </section>
  );
}
