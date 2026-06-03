import { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·—#@';

export function useScramble(text, { duration = 480, start = false } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!start || !ref.current) return;
    const el = ref.current;
    const chars = Array.from(text);
    const len = chars.length;
    const totalFrames = Math.ceil(duration / 33);
    let frame = 0;
    let rafId;

    const tick = () => {
      const lockCount = Math.floor((frame / totalFrames) * len);
      el.textContent = chars.map((ch, i) => {
        if (ch === ' ') return ' ';
        return i < lockCount
          ? ch
          : CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      frame++;
      if (frame <= totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        el.textContent = text;
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, text, duration]);

  return ref;
}
