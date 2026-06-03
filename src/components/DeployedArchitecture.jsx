import './DeployedArchitecture.css';
import { useState, useEffect, useMemo } from 'react';
import { useReveal } from '../hooks/useReveal';
import { PROJECTS as FALLBACK } from '../data';
import ProjectCard from './ProjectItem';

const API_URL = import.meta.env.VITE_API_URL || '';
const FILTERS = ['ALL', 'WEB', 'APP'];

function safeParse(v, fallback) {
  try { return JSON.parse(v); } catch { return fallback; }
}

function mapProject(p) {
  return {
    id: p.id,
    type: p.type || 'web',
    name: p.title,
    subtitle: p.subtitle || '',
    description: p.description,
    tags: safeParse(p.tech_stack, []),
    live: p.live_url || null,
    repo: p.github_url || null,
    img: p.image || null,
    languages: safeParse(p.languages, []),
    stats: safeParse(p.stats, []),
  };
}

export default function DeployedArchitecture() {
  const [filter, setFilter] = useState('ALL');
  const [projects, setProjects] = useState(null);
  const ref = useReveal();

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => setProjects(data.length ? data.map(mapProject) : FALLBACK))
      .catch(() => setProjects(FALLBACK));
  }, []);

  const list = projects ?? [];
  const webProjects = useMemo(() => list.filter(p => p.type === 'web'), [list]);
  const appProjects = useMemo(() => list.filter(p => p.type === 'app'), [list]);

  const filteredCount = filter === 'ALL'
    ? list.length
    : filter === 'WEB' ? webProjects.length : appProjects.length;

  return (
    <section id="projects" className="projects-section reveal-block" ref={ref}>

      <div className="projects-header">
        <span className="projects-num">03 · 04</span>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-header-line" />
      </div>

      <div className="proj-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`proj-filter-btn${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
        <span className="proj-filter-count">
          {projects === null ? '…' : `${filteredCount} project${filteredCount !== 1 ? 's' : ''}`}
        </span>
      </div>

      {projects === null ? (
        <div className="proj-loading">Loading projects…</div>
      ) : filter === 'ALL' ? (
        <div className="proj-all-view">
          {webProjects.length > 0 && (
            <div className="proj-type-section">
              <div className="proj-type-label">
                <span className="ptl-dot" />
                <span>Web · Systems</span>
              </div>
              <div className="proj-grid proj-grid--web">
                {webProjects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} featured={i === 0} />
                ))}
              </div>
            </div>
          )}
          {appProjects.length > 0 && (
            <div className="proj-type-section">
              <div className="proj-type-label">
                <span className="ptl-dot" />
                <span>Applications</span>
              </div>
              <div className="proj-grid proj-grid--app">
                {appProjects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={`proj-grid proj-grid--${filter.toLowerCase()}`}>
          {(filter === 'WEB' ? webProjects : appProjects).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} featured={filter === 'WEB' && i === 0} />
          ))}
        </div>
      )}

    </section>
  );
}
