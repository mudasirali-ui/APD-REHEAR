import { useState, useEffect } from 'react';
import { isValidEmail } from '../utils/validation';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function AuthForm({ initialTab = 'login' }) {
  const { user, ready, login, signup, logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState(initialTab);
  const [loginMsg, setLoginMsg] = useState({ text: '', ok: true });
  const [signupMsg, setSignupMsg] = useState({ text: '', ok: true });
  const [loginPending, setLoginPending] = useState(false);
  const [signupPending, setSignupPending] = useState(false);

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!isValidEmail(email)) {
      setLoginMsg({ text: 'Please enter a valid email address.', ok: false });
      return;
    }
    if (password.length < 6) {
      setLoginMsg({
        text: 'Password must be at least 6 characters.',
        ok: false,
      });
      return;
    }

    setLoginMsg({ text: '', ok: true });
    setLoginPending(true);
    try {
      await login({ email, password });
      setLoginMsg({
        text: 'Login successful. Welcome back to Rehear!',
        ok: true,
      });
      form.reset();
      // Redirect after a short delay
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setLoginMsg({
        text: err.message || 'Login failed. Try again.',
        ok: false,
      });
    } finally {
      setLoginPending(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (name.length < 2) {
      setSignupMsg({ text: 'Please enter your full name.', ok: false });
      return;
    }
    if (!isValidEmail(email)) {
      setSignupMsg({ text: 'Please enter a valid email address.', ok: false });
      return;
    }
    if (password.length < 6) {
      setSignupMsg({
        text: 'Use at least 6 characters for password.',
        ok: false,
      });
      return;
    }

    setSignupMsg({ text: '', ok: true });
    setSignupPending(true);
    try {
      await signup({ name, email, password });
      setSignupMsg({
        text: 'Account created. You are signed in.',
        ok: true,
      });
      form.reset();
      // Redirect after a short delay
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setSignupMsg({
        text: err.message || 'Signup failed. Try again.',
        ok: false,
      });
    } finally {
      setSignupPending(false);
    }
  };

  if (!ready) {
    return (
      <div className="auth-card auth-loading">
        <p className="section-text">Checking your session…</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="auth-card auth-logged-in">
        <p className="logged-in-label">Signed in as</p>
        <p className="logged-in-name">{user.name}</p>
        <p className="small-note">{user.email}</p>
        <button
          type="button"
          className="btn btn-outline full"
          onClick={() => {
            logout();
            setLoginMsg({ text: '', ok: true });
            setSignupMsg({ text: '', ok: true });
          }}
          style={{ marginTop: '1rem' }}
        >
          Log out
        </button>
        <button
          type="button"
          className="btn btn-secondary full"
          onClick={() => navigate('/')}
          style={{ marginTop: '0.5rem' }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="auth-card">
      <div className="tabs" role="tablist" aria-label="Authentication">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'login'}
          className={`tab ${tab === 'login' ? 'active' : ''}`}
          onClick={() => setTab('login')}
        >
          Login
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'signup'}
          className={`tab ${tab === 'signup' ? 'active' : ''}`}
          onClick={() => setTab('signup')}
        >
          Signup
        </button>
      </div>

      {tab === 'login' && (
        <form
          className="auth-form"
          onSubmit={handleLogin}
          noValidate
          aria-label="Login"
        >
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            disabled={loginPending}
          />
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter password"
            required
            disabled={loginPending}
          />
          <button
            type="submit"
            className="btn btn-primary full"
            disabled={loginPending}
          >
            {loginPending ? 'Signing in…' : 'Login'}
          </button>
          <p
            className={`form-message ${loginMsg.ok ? 'ok' : 'err'}`}
            role="status"
          >
            {loginMsg.text}
          </p>
        </form>
      )}

      {tab === 'signup' && (
        <form
          className="auth-form"
          onSubmit={handleSignup}
          noValidate
          aria-label="Sign up"
        >
          <label htmlFor="signup-name">Full Name</label>
          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            disabled={signupPending}
          />
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            disabled={signupPending}
          />
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create password"
            required
            disabled={signupPending}
          />
          <button
            type="submit"
            className="btn btn-primary full"
            disabled={signupPending}
          >
            {signupPending ? 'Creating account…' : 'Create Account'}
          </button>
          <p
            className={`form-message ${signupMsg.ok ? 'ok' : 'err'}`}
            role="status"
          >
            {signupMsg.text}
          </p>
        </form>
      )}
    </div>
  );
}
