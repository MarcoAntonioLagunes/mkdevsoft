'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { TemplateBrowserFrame } from './TemplateBrowserFrame';
import { TemplatePreview } from './TemplatePreview';
import { usePreviewPlayback } from '@/hooks/usePreviewPlayback';
import type { Template, TemplateCategory } from '@/data/templates';

type TemplateCardProps = {
  template: Template;
};

const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  corporativo: 'Corporativo',
  ecommerce: 'E-commerce',
  portafolio: 'Portafolio',
  landing: 'Landing de servicios',
  restaurantes: 'Restaurantes',
};

export function TemplateCard({ template }: TemplateCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { shouldAnimate } = usePreviewPlayback(ref);

  return (
    <motion.article
      ref={ref}
      className="card template-card"
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={reduceMotion ? undefined : { y: -10, scale: 1.02 }}
    >
      <TemplateBrowserFrame>
        <div className={`template-preview ${shouldAnimate && !reduceMotion ? 'preview-playing' : 'preview-paused'}`}>
          <TemplatePreview template={template} shouldAnimate={shouldAnimate} reducedMotion={reduceMotion} />
        </div>
      </TemplateBrowserFrame>

      <div className="template-card-copy">
        <span className="template-category">{CATEGORY_LABELS[template.category]}</span>
        <p className="template-name">{template.name}</p>
        <p className="template-description">{template.description}</p>
        <div className="template-card-actions">
          <button type="button" className="template-button template-button--ghost">
            Vista previa
          </button>
          <button type="button" className="template-button template-button--solid">
            Solicitar este diseño
          </button>
        </div>
      </div>
    </motion.article>
  );
}
