import { Link } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';

export default function AuthSection() {
  return (
    <section className="auth-section section-pad" id="auth">
      <div className="container auth-grid">
        <div className="auth-copy">
          <p className="eyebrow subtle">Get Early Access</p>
          <h2>Help students rehear what matters.</h2>
          <p>
            If spoken instructions are easy to miss, Rehear helps make them easier to capture, understand, and revisit in any classroom.
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
            Rehear is a learning support tool designed to improve access to spoken instruction. It does not diagnose or treat APD and should not replace professional medical assessment.
          </p>
        </div>

        <AuthForm initialTab="signup" />
      </div>
    </section>
  );
}
