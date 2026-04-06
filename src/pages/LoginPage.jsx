import AuthForm from '../components/AuthForm.jsx';

export default function LoginPage() {
  return (
    <div className="auth-page section-pad grey-bg">
      <div className="container" style={{ maxWidth: '480px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p className="eyebrow subtle">Welcome Back</p>
          <h1>Login to Rehear</h1>
          <p>Access your auditory support tools.</p>
        </div>
        <AuthForm initialTab="login" />
      </div>
    </div>
  );
}
