import { useEffect, useState } from 'react';
import { PROJECTS } from '../data';

export function useProjectCarousel(intervalMs = 2000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex(i => (i + 1) % PROJECTS.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [intervalMs]);

  return { index, project: PROJECTS[index] };
}
