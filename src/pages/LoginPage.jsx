import { useState } from 'react';
import { login } from '../api/api';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await login(formData);

      if (result.access_token) {
        // ✅ Save token to localStorage
        localStorage.setItem('token', result.access_token);
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        setError(result.detail || 'Login failed. Check your credentials.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page section-pad grey-bg">
      <div className="container" style={{ maxWidth: '480px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p className="eyebrow subtle">Welcome Back</p>
          <h1>Log In to Rehear</h1>
          <p>Access your auditory support tools.</p>
        </div>

        <div className="auth-card">
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              disabled={loading}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              disabled={loading}
            />

            <button type="submit" className="btn btn-primary full" disabled={loading} style={{ marginTop: '0.5rem' }}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            {error && (
              <p className="form-message err" role="status" style={{ marginTop: '1rem', color: 'var(--err)', background: '#fee2e2', padding: '0.75rem', borderRadius: '8px' }}>
                ❌ {error}
              </p>
            )}

            <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem' }}>
              Don't have an account? <Link to="/signup" style={{ color: 'var(--sky-600)', fontWeight: '600' }}>Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
