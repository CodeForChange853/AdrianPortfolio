import { useState, useCallback, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { IconGitHub, IconExternal } from './icons';

export default function ProjectCard({ project, index, featured = false }) {
  const ref = useReveal(index * 80);
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(v => !v), []);
  const close  = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  const hasLinks = project.live || project.repo;

  return (
    <article className={`proj-card proj-card--${project.type}${featured ? ' proj-card--featured' : ''} reveal-block`} ref={ref} style={{ '--card-i': index }}>

      {/* ── Screenshot ── */}
      <div
        className={`pc-img-wrap${open ? ' pc-img-wrap--open' : ''}`}
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-label={`${open ? 'Close' : 'Preview'} ${project.name}`}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggle(); }}
      >
        <img
          src={project.img}
          alt={`${project.name} screenshot`}
          className="pc-img"
          draggable={false}
        />
        {!open && (
          <div className="pc-img-hint" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            PREVIEW
          </div>
        )}
        <div
          className={`pc-overlay${open ? ' pc-overlay--open' : ''}`}
          onClick={e => e.stopPropagation()}
        >
          <button className="pc-overlay-close" onClick={close} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {hasLinks ? (
            <div className="pc-overlay-btns">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="pc-obtn pc-obtn--live">
                  <IconExternal size={12} /> Visit Live
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="pc-obtn pc-obtn--repo">
                  <IconGitHub size={13} /> View Repo
                </a>
              )}
            </div>
          ) : (
            <p className="pc-overlay-none">No public links yet</p>
          )}
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="pc-body">

        {/* meta row: type badge + link icons */}
        <div className="pc-meta">
          <span className={`pc-type-badge pc-type-badge--${project.type}`}>
            {project.type === 'web' ? 'Web · System' : 'Application'}
          </span>
          <div className="pc-meta-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="pc-meta-link" title="View Live">
                <IconExternal />
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="pc-meta-link" title="View Repo">
                <IconGitHub size={13} />
              </a>
            )}
          </div>
        </div>

        <h3 className="pc-name">{project.name}</h3>
        {project.subtitle  && <p className="pc-subtitle">{project.subtitle}</p>}
        {project.description && <p className="pc-desc">{project.description}</p>}

        {/* Language bars */}
        {project.languages?.length > 0 && (
          <div className="pc-langs">
            {project.languages.map(({ name, pct }) => (
              <div key={name} className="pc-lang-row">
                <div className="pc-lang-meta">
                  <span className="pc-lang-name">{name}</span>
                  <span className="pc-lang-pct">{pct}%</span>
                </div>
                <div className="pc-lang-track">
                  <div className="pc-lang-fill" style={{ '--pct': `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="pc-tags">
            {project.tags.map(tag => (
              <span key={tag} className="pc-tag">{tag}</span>
            ))}
          </div>
        )}

        {/* Stats */}
        {project.stats?.length > 0 && (
          <div className="pc-stats">
            {project.stats.map(([num, label]) => (
              <div key={label} className="pc-stat">
                <span className="pc-stat-num">{num}</span>
                <span className="pc-stat-label">{label}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </article>
  );
}
