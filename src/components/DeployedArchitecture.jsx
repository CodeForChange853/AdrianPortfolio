import './DeployedArchitecture.css';
import { useState, useMemo } from 'react';
import { useReveal } from '../hooks/useReveal';
import { PROJECTS } from '../data';
import ProjectCard from './ProjectItem';

const FILTERS = ['ALL', 'WEB', 'APP'];

export default function DeployedArchitecture() {
  const [filter, setFilter] = useState('ALL');
  const ref = useReveal();

  const webProjects = useMemo(() => PROJECTS.filter(p => p.type === 'web'), []);
  const appProjects = useMemo(() => PROJECTS.filter(p => p.type === 'app'), []);

  const filteredCount = filter === 'ALL'
    ? PROJECTS.length
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
          {filteredCount} project{filteredCount !== 1 ? 's' : ''}
        </span>
      </div>

      {filter === 'ALL' ? (
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
