import './SystemSpecs.css';
import { PROFILE, QUICK_FACTS as QF_DATA, HOBBIES as HOB_DATA } from '../data';
import Timeline from './Timeline';
import { useReveal } from '../hooks/useReveal';
import { IconGitHub, IconEmail } from './icons';

// ── Quick fact items ──────────────────────────────────────────────────────────
const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const GradIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const AgeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const YearIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const QUICK_FACTS = QF_DATA.map((d, i) => ({ ...d, Icon: [PinIcon, GradIcon, AgeIcon, YearIcon][i] }));

// ── Hobby icons ───────────────────────────────────────────────────────────────
const TravelIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9 5.8 7.2C4.8 6.9 4 7.6 4 8.5c0 .5.3.9.7 1.1L8 11v2l-2 2H4l-1 1 1.5 1.5 1.5 1.5L7 18h2l2-2h2l1.3 3.3c.2.4.6.7 1.1.7.9 0 1.6-.8 1.4-1.8z"/>
  </svg>
);
const FoodIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const TechIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const HOBBIES = HOB_DATA.map((d, i) => ({ ...d, Icon: [TravelIcon, FoodIcon, TechIcon][i] }));

// ── Component ─────────────────────────────────────────────────────────────────
export default function SystemSpecs() {
  const ref = useReveal();

  return (
    <section id="about" className="about-section reveal-block" ref={ref}>

      {/* ── Section header ── */}
      <div className="about-header">
        <span className="about-num">01 · 02</span>
        <h2 className="about-title">About Me</h2>
        <div className="about-header-line" />
      </div>

      {/* ── Top row: bio + facts ── */}
      <div className="about-top">

        {/* Bio card */}
        <div className="about-bio-card">
          <span className="abc-tag">Profile</span>
          <p className="abc-text write-target">{PROFILE.summary}</p>
          <div className="abc-footer">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="abc-link">
              <IconGitHub />
              GitHub
            </a>
            <a href={`mailto:${PROFILE.email}`} className="abc-link">
              <IconEmail />
              Email
            </a>
          </div>
        </div>

        {/* Quick facts card */}
        <div className="about-facts-card">
          <div className="afc-header">
            <span className="afc-title">Quick Facts</span>
          </div>
          <div className="afc-list">
            {QUICK_FACTS.map(({ label, value, Icon }) => (
              <div key={label} className="afc-item">
                <span className="afc-icon"><Icon /></span>
                <div className="afc-content">
                  <span className="afc-label">{label}</span>
                  <span className="afc-value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Hobbies strip ── */}
      <div className="about-hobbies">
        {HOBBIES.map(({ Icon, title, desc }) => (
          <div key={title} className="ahc-item">
            <div className="ahc-icon"><Icon /></div>
            <div className="ahc-body">
              <span className="ahc-title">{title}</span>
              <span className="ahc-desc">{desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Timeline ── */}
      <Timeline />

    </section>
  );
}
