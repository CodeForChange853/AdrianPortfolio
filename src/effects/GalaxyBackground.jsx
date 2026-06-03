import { useEffect, useRef } from 'react';
import './GalaxyBackground.css';

const PARALLAX_SPEEDS = [0.06, 0.10, 0.04, 0.08];

export default function GalaxyBackground({ contained = false }) {
  const layerRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = null;
    let lastY = window.scrollY;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const y = window.scrollY;
        if (y === lastY) return;
        lastY = y;
        layerRefs.forEach((ref, i) => {
          if (ref.current) {
            ref.current.style.transform = `translateY(${y * PARALLAX_SPEEDS[i]}px)`;
          }
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`galaxy-bg${contained ? ' galaxy-bg--contained' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="nebula-layer" ref={layerRefs[0]}><div className="nebula nebula-1" /></div>
      <div className="nebula-layer" ref={layerRefs[1]}><div className="nebula nebula-2" /></div>
      <div className="nebula-layer" ref={layerRefs[2]}><div className="nebula nebula-3" /></div>
      <div className="nebula-layer" ref={layerRefs[3]}><div className="nebula nebula-4" /></div>
      <div className="plasma-overlay" />
    </div>
  );
}
