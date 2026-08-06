'use client';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { TemplateBrowserFrame } from './TemplateBrowserFrame';
import { TemplateMockup } from './TemplateMockup';
import type { Template } from '@/data/templates';

type TemplatePreviewModalProps = {
  template: Template;
  onClose: () => void;
};

export function TemplatePreviewModal({ template, onClose }: TemplatePreviewModalProps) {
  const reduceMotion = useReducedMotion();
  const prefersReducedMotion = reduceMotion === true;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="template-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="template-modal-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Vista previa de ${template.name}`}
      >
        <button type="button" className="template-modal-close" onClick={onClose} aria-label="Cerrar vista previa">
          ✕
        </button>
        <TemplateBrowserFrame>
          <TemplateMockup template={template} shouldAnimate reducedMotion={prefersReducedMotion} />
        </TemplateBrowserFrame>
      </div>
    </div>,
    document.body
  );
}
