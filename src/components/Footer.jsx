import './Footer.css';
import { NAV_ITEMS, PROFILE } from '../data';
import { IconEmail, IconGitHub } from './icons';
import { useReveal } from '../hooks/useReveal';

const IconArrowUp = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>
);

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const ref = useReveal();

  return (
    <footer className="footer reveal-block" ref={ref}>
      <span className="footer-ghost" aria-hidden="true">GARCIA</span>

      <div className="footer-main">

        {/* Left — Brand */}
        <div className="footer-brand">
          <div className="footer-name">
            <span>ADRIAN S.</span>
            <span>GARCIA</span>
          </div>
          <p className="footer-role">Full-Stack Developer · Samar, PH</p>
          <div className="footer-avail-pill">
            <span className="footer-avail-dot" />
            Available for Opportunities
          </div>
        </div>

        {/* Center — Navigation */}
        <div className="footer-nav-col">
          <p className="footer-col-eyebrow">Navigate</p>
          <nav className="footer-nav-list">
            {NAV_ITEMS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="footer-nav-link">{label}</a>
            ))}
          </nav>
        </div>

        {/* Right — Contact + Back to Top */}
        <div className="footer-contact-col">
          <p className="footer-col-eyebrow">Get in Touch</p>
          <div className="footer-contact-links">
            <a href={`mailto:${PROFILE.email}`} className="footer-contact-link">
              <IconEmail size={13} />
              {PROFILE.email}
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
              <IconGitHub size={13} />
              github.com/CodeForChange853
            </a>
          </div>
          <button className="footer-back-top" onClick={scrollTop} aria-label="Back to top">
            <IconArrowUp />
            Back to Top
          </button>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} Adrian S. Garcia · All rights reserved
        </span>
        <span className="footer-built">Built with React + Vite</span>
      </div>
    </footer>
  );
}
