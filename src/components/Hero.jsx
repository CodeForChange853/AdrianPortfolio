import './Hero.css';
import GalaxyBackground from '../effects/GalaxyBackground';
import { useProjectCarousel } from '../hooks/useProjectCarousel';
import { useEngagement } from '../hooks/useEngagement';
import { PROFILE, PROFILE_IMG, PROJECTS, CODE_LABELS } from '../data';
import { IconArrowUpRight } from './icons';
// ── SVG Icons ────────────────────────────────────────────────────────────────
const IconHeart = ({ filled }) => (
  <svg width="15" height="15" viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconStar = ({ filled }) => (
  <svg width="13" height="13" viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconEye = () => (
  <svg width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconShare = () => (
  <svg width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export default function Hero() {
  const { index, project } = useProjectCarousel(2000);
  const { hearts, rating, views, liked, toggleHeart, rateProject, share } = useEngagement();

  return (
    <section id="home" className="hero-page">
      <div className="hero-layout">

        {/* ── LARGE CARD WRAPPER ── */}
        <div className="hero-card-wrapper">

          {/* Round logo chip — intersects the card top */}
          <div className="hero-logo-chip">
            <img src="/logo.svg" alt="Adrian S. Garcia" />
          </div>

          {/* Large glass-tinted card with contained galaxy */}
          <div className="hero-main-card">
            <GalaxyBackground contained />
            <div className="hero-card-tint" />

            {/* Left column: name + project carousel */}
            <div className="hero-card-left">
              <div className="hero-card-content">
                <div className="hero-eyebrow-row hero-enter" style={{ '--enter-delay': '0.1s' }}>
                  <span className="hero-eyebrow-tag">Portfolio</span>
                  <span className="hero-eyebrow-year">2025 · 2026</span>
                </div>
                <h1 className="hero-name hero-enter" style={{ '--enter-delay': '0.25s' }}>
                  <span>ADRIAN</span>
                  <span>GARCIA</span>
                </h1>
                <p className="hero-role hero-enter" style={{ '--enter-delay': '0.42s' }}>{PROFILE.title}</p>
                <p className="hero-loc hero-enter" style={{ '--enter-delay': '0.52s' }}>{PROFILE.location}</p>
              </div>

              {/* Project code carousel — premium card at bottom of left column */}
              <div className="hero-code-carousel hero-enter" style={{ '--enter-delay': '0.65s' }}>
                <div className="hcc-bg-letter" aria-hidden="true">{project.code}</div>
                <div key={project.id} className="hcc-content">
                  <div className="hcc-top">
                    <span className="hcc-badge">CODE {project.code}</span>
                    <span className="hcc-divider" aria-hidden="true" />
                    <span className="hcc-type">{CODE_LABELS[project.code]}</span>
                  </div>
                  <div className="hcc-center">
                    <span className="hcc-name">{project.name}</span>
                  </div>
                  <div className="hcc-bottom">
                    <div className="hcc-dots" aria-hidden="true">
                      {PROJECTS.map((p, i) => (
                        <span key={p.id} className={`hcc-dot${i === index ? ' active' : ''}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: profile image + engagement strip */}
            <div className="hero-card-right">
              <div className="hero-profile-img">
                <img src={PROFILE_IMG} alt={PROFILE.name.join(' ')} />
                <div className="hero-img-overlay" />
                <div className="hero-img-label">{PROFILE.name.join(' ')}</div>
              </div>
              <div className="hero-engagement">
                <button
                  className={`heng-btn${liked ? ' liked' : ''}`}
                  onClick={toggleHeart}
                  aria-label="Like this portfolio"
                >
                  <IconHeart filled={liked} />
                  <span>{hearts}</span>
                </button>
                <div className="heng-stars" role="group" aria-label="Rate this portfolio">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      className={`heng-star${n <= rating ? ' filled' : ''}`}
                      onClick={() => rateProject(n)}
                      aria-label={`${n} star${n !== 1 ? 's' : ''}`}
                    >
                      <IconStar filled={n <= rating} />
                    </button>
                  ))}
                </div>
                <div className="heng-views">
                  <IconEye />
                  <span>{views}</span>
                </div>
                <div className="heng-spacer" />
                <button className="heng-share" onClick={share} aria-label="Share this portfolio">
                  <IconShare />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── SEPARATE RIGHT CARDS ── */}
        <div className="hero-right-col">

          {/* Quote card — glass, depth, shadow */}
          <div className="hero-quote-card hero-enter" style={{ '--enter-delay': '0.3s' }}>
            <span className="hqc-mark" aria-hidden="true">"</span>
            <p className="hqc-text">{PROFILE.quote}</p>
            <div className="hqc-author">— {PROFILE.name.join(' ')}</div>
          </div>

          {/* AI animation card — loops smoothly, Ask Assistance on hover */}
          <div className="hero-preview-card hero-enter" style={{ '--enter-delay': '0.45s' }}>
            <div className="hlottie-wrap">
              <video
                src="/model_card.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="hlottie-cta">
                <a href="#contact" className="hlottie-cta-btn">
                  Ask Assistance <IconArrowUpRight />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
