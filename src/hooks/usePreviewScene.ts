import { useEffect, useState } from 'react';

export function usePreviewScene(sceneCount: number, shouldAnimate: boolean, sceneDuration = 1600) {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || sceneCount <= 1) {
      setScene(0);
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setScene((current) => (current + 1) % sceneCount);
    }, sceneDuration);

    return () => window.clearTimeout(timeout);
  }, [scene, sceneCount, sceneDuration, shouldAnimate]);

  return scene;
}
