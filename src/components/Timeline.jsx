import './Timeline.css';
import { TIMELINE } from '../data';

const TYPE_LABEL = { edu: 'Education', project: 'Project', work: 'Work' };

export default function Timeline() {
  return (
    <div className="timeline-wrap">
      <div className="timeline-header">
        <span className="timeline-eyebrow">Journey</span>
        <div className="timeline-header-line" />
      </div>

      <div className="timeline-track">
        <div className="timeline-spine" aria-hidden="true" />

        {TIMELINE.map((entry, i) => (
          <div
            key={i}
            className={`tl-entry tl-entry--${entry.type}`}
            style={{ '--entry-i': i }}
          >
            <div className="tl-connector" aria-hidden="true">
              <div className="tl-dot" />
            </div>
            <div className="tl-card">
              <div className="tl-card-top">
                <span className="tl-year">{entry.year}</span>
                <span className={`tl-type-pill tl-type-pill--${entry.type}`}>
                  {TYPE_LABEL[entry.type] ?? entry.type}
                </span>
              </div>
              <p className="tl-title">{entry.title}</p>
              <p className="tl-place">{entry.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
