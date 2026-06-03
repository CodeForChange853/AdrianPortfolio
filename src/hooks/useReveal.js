import { useEffect, useRef } from 'react';

// Triggers a fade-in + word-ink animation when the element enters the viewport.
export function useReveal(delay = 0, onReveal) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;

    // Split .write-target text into staggered word spans for the ink effect
    el.querySelectorAll('.write-target').forEach(textEl => {
      const text = textEl.textContent;
      let d = delay + 120;
      textEl.innerHTML = text.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) return part;
        const s = `<span class="word-ink" style="transition-delay:${d}ms">${part}</span>`;
        d += 26;
        return s;
      }).join('');
    });

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('revealed');
          onReveal?.();
          el.querySelectorAll('.word-ink').forEach(w => w.classList.add('word-visible'));
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return ref;
}
