import './TechStack.css';
import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useScramble } from '../hooks/useScramble';
import { SKILLS, CORE_MASTERY } from '../data';

const TITLE = 'Tech Stack';

export default function TechStack() {
  const [revealed, setRevealed] = useState(false);
  const ref = useReveal(0, () => setRevealed(true));
  const titleRef = useScramble(TITLE, { duration: 520, start: revealed });

  return (
    <section id="skills" className="skills-section reveal-block" ref={ref}>

      <div className="skills-header">
        <span className="skills-num">02 · 03</span>
        <h2 className="skills-title" ref={titleRef}>{TITLE}</h2>
        <div className="skills-header-line" />
      </div>

      <div className="skills-body">

        {/* ── Core Mastery ── */}
        <div className="smc-card">
          <span className="smc-tag">Core Mastery</span>
          <div className="smc-bars">
            {CORE_MASTERY.map(({ name, pct }) => (
              <div key={name} className="smc-row">
                <div className="smc-label-row">
                  <span className="smc-name">{name}</span>
                  <span className="smc-pct">{pct}%</span>
                </div>
                <div className="smc-track">
                  <div className="smc-fill" style={{ '--pct': `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Full Stack ── */}
        <div className="ssc-card">
          <span className="ssc-tag">Full Stack</span>
          <div className="ssc-grid">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="ssc-group">
                <span className="ssc-cat">{cat}</span>
                <div className="ssc-tags">
                  {items.map(item => (
                    <span key={item} className="ssc-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
