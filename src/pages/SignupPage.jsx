import AuthForm from '../components/AuthForm.jsx';

export default function SignupPage() {
  return (
    <div className="auth-page section-pad grey-bg">
      <div className="container" style={{ maxWidth: '480px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p className="eyebrow subtle">Get Started</p>
          <h1>Join Rehear</h1>
          <p>Create an account to level up your hearing.</p>
        </div>
        <AuthForm initialTab="signup" />
      </div>
    </div>
  );
}
