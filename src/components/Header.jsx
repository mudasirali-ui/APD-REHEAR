import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import logo from '../assets/APD_LOGO-.png';

const NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ onOpenAuth }) {
  const { user, logout, ready } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth > 920) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/');
  };

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.split('#')[1];
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Rehear home" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Rehear" className="nav-logo" />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV.map(({ href, label }) => (
            <Link key={href} to={href} onClick={() => handleNavClick(href)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          {ready && user ? (
            <>
              <span className="user-chip nav-cta" title={user.email}>
                {(user.name || user.email).split(' ')[0]}
              </span>
              <button
                type="button"
                className="btn btn-outline nav-cta"
                onClick={handleLogout}
              >
                Log out
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/login" className="btn btn-ghost nav-cta" style={{ border: 'none' }}>
                Login
              </Link>
              <button
                type="button"
                className="btn btn-primary nav-cta"
                onClick={onOpenAuth}
              >
                Book a Demo
              </button>
            </div>
          )}
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav-inner" aria-label="Mobile">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </Link>
          ))}
          {ready && user ? (
            <>
              <p className="mobile-user">{user.name}</p>
              <button
                type="button"
                className="btn btn-outline full mobile-auth"
                onClick={handleLogout}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline full mobile-auth"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <button
                type="button"
                className="btn btn-primary full mobile-auth"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenAuth();
                }}
              >
                Book a Demo
              </button>
            </>
          )}
        </nav>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="mobile-overlay"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
