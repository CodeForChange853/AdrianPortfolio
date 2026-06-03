import { useEffect, useState } from 'react';

const KEY_HEARTS  = 'ag_hearts';
const KEY_RATING  = 'ag_rating';
const KEY_VIEWS   = 'ag_views';
const SESSION_KEY = 'ag_session_viewed';

export function useEngagement() {
  const [hearts, setHearts] = useState(() => Number(localStorage.getItem(KEY_HEARTS) || 0));
  const [rating, setRating] = useState(() => Number(localStorage.getItem(KEY_RATING) || 0));
  const [views,  setViews]  = useState(() => Number(localStorage.getItem(KEY_VIEWS)  || 0));
  const [liked,  setLiked]  = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const v = Number(localStorage.getItem(KEY_VIEWS) || 0) + 1;
      localStorage.setItem(KEY_VIEWS, v);
      sessionStorage.setItem(SESSION_KEY, '1');
      setViews(v);
    }
  }, []);

  const toggleHeart = () => {
    setLiked(prev => {
      const next = !prev;
      setHearts(h => {
        const updated = h + (next ? 1 : -1);
        localStorage.setItem(KEY_HEARTS, updated);
        return updated;
      });
      return next;
    });
  };

  const rateProject = (n) => {
    const next = rating === n ? 0 : n;
    localStorage.setItem(KEY_RATING, next);
    setRating(next);
  };

  const share = async () => {
    const url  = window.location.href;
    const title = 'Adrian Garcia · Portfolio';
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch { /* user cancelled or API unavailable */ }
  };

  return { hearts, rating, views, liked, toggleHeart, rateProject, share };
}
