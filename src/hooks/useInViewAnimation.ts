import { useCallback, useEffect, useState } from 'react';

export function useInViewAnimation<T extends HTMLElement>() {
  const [element, setElement] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  const ref = useCallback((node: T | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return { ref, isInView };
}
