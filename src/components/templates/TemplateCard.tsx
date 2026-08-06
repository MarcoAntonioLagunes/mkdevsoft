'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { TemplateBrowserFrame } from './TemplateBrowserFrame';
import { TemplateMockup } from './TemplateMockup';
import { TemplatePreviewModal } from './TemplatePreviewModal';
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
  const prefersReducedMotion = reduceMotion === true;
  const ref = useRef<HTMLDivElement>(null);
  const { shouldAnimate } = usePreviewPlayback(ref);
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  return (
    <motion.article
      className="card template-card"
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={prefersReducedMotion ? undefined : { y: -10, scale: 1.02 }}
    >
      <div ref={ref}>
        <TemplateBrowserFrame>
          <TemplateMockup template={template} shouldAnimate={shouldAnimate} reducedMotion={prefersReducedMotion} />
        </TemplateBrowserFrame>

        <div className="template-card-copy">
          <span className="template-category">{CATEGORY_LABELS[template.category]}</span>
          <p className="template-name">{template.name}</p>
          <p className="template-description">{template.description}</p>
          <div className="template-card-actions">
            <button type="button" className="template-button template-button--ghost" onClick={() => setPreviewOpen(true)}>
              Vista previa
            </button>
            <Link href={`/contacto?plantilla=${template.id}`} className="template-button template-button--solid">
              Solicitar este diseño
            </Link>
          </div>
        </div>
      </div>

      {isPreviewOpen ? <TemplatePreviewModal template={template} onClose={() => setPreviewOpen(false)} /> : null}
    </motion.article>
  );
}
