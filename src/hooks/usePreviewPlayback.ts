import { useEffect, useState, type RefObject } from 'react';
import { useReducedMotion } from 'framer-motion';

export type PreviewPlaybackState = {
  isInView: boolean;
  isPageVisible: boolean;
  reducedMotion: boolean;
  shouldAnimate: boolean;
};

export function usePreviewPlayback<T extends HTMLElement>(ref: RefObject<T | null>): PreviewPlaybackState {
  const reducedMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    const handleVisibility = () => {
      setIsPageVisible(!document.hidden);
    };

    handleVisibility();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const shouldAnimate = isInView && isPageVisible && !reducedMotion;

  return {
    isInView,
    isPageVisible,
    reducedMotion,
    shouldAnimate,
  };
}
