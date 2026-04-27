import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/APD_LOGO-.png';

const NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ onOpenAuth }) {
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
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn btn-primary nav-cta"
              onClick={onOpenAuth}
            >
              Book a Demo
            </button>
          </div>
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
          <>
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
