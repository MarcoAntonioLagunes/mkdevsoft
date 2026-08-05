import { useEffect, useState } from 'react';

export function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(document.visibilityState === 'visible');

    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);

    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return isVisible;
}
