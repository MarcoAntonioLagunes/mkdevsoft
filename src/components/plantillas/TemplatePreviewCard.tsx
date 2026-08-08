'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef, type CSSProperties, type ComponentType } from 'react';
import { BrowserFrame } from './BrowserFrame';
import { PhoneFrame } from './PhoneFrame';
import { usePreviewPlayback } from '@/hooks/usePreviewPlayback';
import type { PlantillaType } from '@/data/plantillas';

type TemplatePreviewCardProps = {
  id: string;
  title: string;
  industry: string;
  type: PlantillaType;
  accent: string;
  url: string;
  Component: ComponentType<{ isPlaying: boolean }>;
};

const TYPE_LABELS: Record<PlantillaType, string> = {
  web: 'Web',
  webapp: 'Web App',
  mobile: 'App Móvil',
};

export function TemplatePreviewCard({ id, title, industry, type, accent, url, Component }: TemplatePreviewCardProps) {
  const reduceMotion = useReducedMotion();
  const prefersReducedMotion = reduceMotion === true;
  const ref = useRef<HTMLDivElement>(null);
  const { shouldAnimate } = usePreviewPlayback(ref);
  const accentStyle = { '--mockup-accent': accent } as CSSProperties;

  const preview = <Component isPlaying={shouldAnimate} />;

  return (
    <motion.article
      className="card pv-card"
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={prefersReducedMotion ? undefined : { y: -10, scale: 1.02 }}
    >
      <div ref={ref} className={`pv-card-frame-wrap${type === 'mobile' ? ' pv-card-frame-wrap--mobile' : ''}`} style={accentStyle}>
        {type === 'mobile' ? <PhoneFrame>{preview}</PhoneFrame> : <BrowserFrame url={url}>{preview}</BrowserFrame>}
      </div>

      <div className="pv-card-copy">
        <div className="pv-card-meta">
          <span className="pv-card-industry">{industry}</span>
          <span className="pv-card-type">{TYPE_LABELS[type]}</span>
        </div>
        <p className="pv-card-title">{title}</p>
        <Link href={`/contacto?plantilla=${id}`} className="pv-card-cta">
          Solicitar este diseño
        </Link>
      </div>
    </motion.article>
  );
}
