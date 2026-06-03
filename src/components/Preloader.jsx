import { useState, useEffect, useRef } from 'react';
import './Preloader.css';

// Professional taglines that reflect Adrian's identity
const REVEAL_WORDS = ['Engineer', 'Designer', 'Builder'];

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('intro');
  // intro -> name -> tagline -> bar -> outro -> done
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [exitActive, setExitActive] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Master timeline — total ~6.5s
  useEffect(() => {
    const timers = [];

    // 0.0s  — intro (logo draws in)
    // 1.2s  — name fully revealed, start tagline cycling
    // 1.2s–3.6s — cycle through 3 words (0.8s each)
    // 3.6s  — switch to progress bar phase
    // 3.6s–5.8s — progress bar fills
    // 5.8s  — start outro (split/exit)
    // 6.5s  — call onComplete

    timers.push(setTimeout(() => setPhase('name'), 400));
    timers.push(setTimeout(() => setPhase('tagline'), 1200));

    // Word cycling: Engineer → Designer → Builder
    timers.push(setTimeout(() => setWordIndex(1), 2000));
    timers.push(setTimeout(() => setWordIndex(2), 2800));

    timers.push(setTimeout(() => setPhase('bar'), 3600));

    timers.push(setTimeout(() => {
      setExitActive(true);
      setPhase('outro');
    }, 5800));

    timers.push(setTimeout(() => {
      onCompleteRef.current?.();
    }, 6500));

    return () => timers.forEach(clearTimeout);
  }, []);

  // Smooth progress animation
  useEffect(() => {
    if (phase === 'bar') {
      let start;
      const duration = 2200;
      const raf = (ts) => {
        if (!start) start = ts;
        const elapsed = ts - start;
        const p = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - p, 2.5); // ease-out
        setProgress(eased * 100);
        if (p < 1) requestAnimationFrame(raf);
      };
      const id = requestAnimationFrame(raf);
      return () => cancelAnimationFrame(id);
    }
  }, [phase]);

  // Skip handler
  const handleSkip = () => {
    if (!exitActive) {
      setExitActive(true);
      setPhase('outro');
      setTimeout(() => onCompleteRef.current?.(), 700);
    }
  };

  const isOutro = phase === 'outro';

  return (
    <div
      className={`pl-overlay${isOutro ? ' pl-exit' : ''}`}
      onClick={handleSkip}
      role="presentation"
      aria-hidden="true"
    >
      {/* Ambient background orbs */}
      <div className="pl-orb pl-orb-1" />
      <div className="pl-orb pl-orb-2" />

      {/* ── Top half ── */}
      <div className="pl-half pl-top">
        <div className="pl-half-inner pl-half-inner--top">
          <div className="pl-center-stage">

            {/* Monogram / Logo Mark */}
            <div className={`pl-monogram${phase !== 'intro' ? ' pl-monogram--revealed' : ''}`}>
              <svg className="pl-ring" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="54" stroke="url(#ringGrad)" strokeWidth="1.2" className="pl-ring-circle" />
                <circle cx="60" cy="60" r="44" stroke="rgba(0,223,129,0.12)" strokeWidth="0.6" />
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00DF81" />
                    <stop offset="100%" stopColor="#2CC295" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="pl-letter">A</span>
            </div>

            {/* Name */}
            <div className={`pl-name${phase === 'name' || phase === 'tagline' || phase === 'bar' || phase === 'outro' ? ' pl-name--visible' : ''}`}>
              <span className="pl-name-first">ADRIAN</span>
              <span className="pl-name-last">GARCIA</span>
            </div>

            {/* Tagline word cycling */}
            {(phase === 'tagline' || phase === 'bar') && (
              <div className="pl-tagline">
                {REVEAL_WORDS.map((word, i) => (
                  <span
                    key={word}
                    className={`pl-tag-word${i === wordIndex ? ' pl-tag-word--active' : ''}${i < wordIndex ? ' pl-tag-word--past' : ''}`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            )}

            {/* Progress bar */}
            {phase === 'bar' && (
              <div className="pl-bar-wrap">
                <div className="pl-bar-track">
                  <div className="pl-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <div
                  className="pl-bar-glow"
                  style={{ left: `${progress}%` }}
                />
                <span className="pl-bar-pct">{Math.round(progress)}%</span>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* ── Bottom half ── */}
      <div className="pl-half pl-bottom">
        <div className="pl-half-inner pl-half-inner--bottom">
          <div className="pl-center-stage">

            <div className={`pl-monogram${phase !== 'intro' ? ' pl-monogram--revealed' : ''}`}>
              <svg className="pl-ring" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="54" stroke="url(#ringGrad2)" strokeWidth="1.2" className="pl-ring-circle" />
                <circle cx="60" cy="60" r="44" stroke="rgba(0,223,129,0.12)" strokeWidth="0.6" />
                <defs>
                  <linearGradient id="ringGrad2" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00DF81" />
                    <stop offset="100%" stopColor="#2CC295" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="pl-letter">A</span>
            </div>

            <div className={`pl-name${phase === 'name' || phase === 'tagline' || phase === 'bar' || phase === 'outro' ? ' pl-name--visible' : ''}`}>
              <span className="pl-name-first">ADRIAN</span>
              <span className="pl-name-last">GARCIA</span>
            </div>

            {(phase === 'tagline' || phase === 'bar') && (
              <div className="pl-tagline">
                {REVEAL_WORDS.map((word, i) => (
                  <span
                    key={word}
                    className={`pl-tag-word${i === wordIndex ? ' pl-tag-word--active' : ''}${i < wordIndex ? ' pl-tag-word--past' : ''}`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            )}

            {phase === 'bar' && (
              <div className="pl-bar-wrap">
                <div className="pl-bar-track">
                  <div className="pl-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <div
                  className="pl-bar-glow"
                  style={{ left: `${progress}%` }}
                />
                <span className="pl-bar-pct">{Math.round(progress)}%</span>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Seam line that flashes on exit */}
      <div className={`pl-seam${isOutro ? ' pl-seam--flash' : ''}`} />

      {/* Skip hint */}
      {!exitActive && (
        <p className="pl-skip-hint">Click anywhere to skip</p>
      )}
    </div>
  );
}