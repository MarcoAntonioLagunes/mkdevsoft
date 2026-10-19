'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePreviewPlayback } from '@/hooks/usePreviewPlayback';

type ProjectCarouselProps = {
  images: string[];
  alt: string;
};

const AUTOPLAY_MS = 4000;
const SWIPE_THRESHOLD = 50;

export function ProjectCarousel({ images, alt }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const prefersReducedMotion = reduceMotion === true;
  const ref = useRef<HTMLDivElement>(null);
  const { shouldAnimate } = usePreviewPlayback(ref);

  const canAutoplay = images.length > 1 && shouldAnimate && !isHovered;

  useEffect(() => {
    if (!canAutoplay) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [canAutoplay, images.length]);

  if (images.length === 0) {
    return (
      <div className="proy-browser-viewport">
        <div className="proy-placeholder">
          <span>Próximamente</span>
        </div>
      </div>
    );
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (images.length <= 1) return;
    if (info.offset.x < -SWIPE_THRESHOLD) {
      setIndex((current) => (current + 1) % images.length);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      setIndex((current) => (current - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="proy-browser-viewport"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="proy-carousel-slide"
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
            drag={images.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={images[index]}
              alt={`${alt} — captura ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="proy-dots" role="tablist" aria-label="Capturas del proyecto">
          {images.map((image, dotIndex) => (
            <button
              key={image}
              type="button"
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Ver captura ${dotIndex + 1}`}
              className={`proy-dot${dotIndex === index ? ' is-active' : ''}`}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      )}
    </>
  );
}
