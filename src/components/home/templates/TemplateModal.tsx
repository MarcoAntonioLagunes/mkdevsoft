'use client';

import { useEffect, useRef, type MouseEvent } from 'react';
import type { TemplateDefinition } from '@/data/templates';
import { TemplatePreview } from './TemplatePreview';
import { Button } from '@/components/ui/button';

type TemplateModalProps = {
  template: TemplateDefinition;
  onClose: () => void;
};

function getFocusableElements(element: HTMLElement) {
  return Array.from(
    element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((item) => !item.hasAttribute('disabled'));
}

export function TemplateModal({ template, onClose }: TemplateModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    modalRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return;
      }

      const focusable = getFocusableElements(modalRef.current);
      if (focusable.length === 0) return;

      const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
      const nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
      const wrapIndex = (nextIndex + focusable.length) % focusable.length;
      focusable[wrapIndex].focus();
      event.preventDefault();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus();
    };
  }, [onClose]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="template-modal-backdrop" onClick={handleBackdropClick} role="presentation">
      <div
        className="template-modal-panel card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="template-modal-title"
        aria-describedby="template-modal-description"
        ref={modalRef}
        tabIndex={-1}
      >
        <div className="template-modal-header">
          <div>
            <p className="template-badge template-badge--modal">{template.badge}</p>
            <h2 id="template-modal-title">{template.name}</h2>
            <p id="template-modal-description" className="template-modal-lead">
              {template.description}
            </p>
          </div>
          <button type="button" className="button button-secondary template-modal-close" onClick={onClose}>
            Cerrar
          </button>
        </div>

        <TemplatePreview template={template} size="expanded" />

        <div className="template-modal-body">
          <section>
            <h3>Qué muestra este diseño</h3>
            <ul className="template-modal-list">
              {template.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Características incluidas</h3>
            <ul className="template-modal-list">
              {template.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="template-modal-actions">
          <Button variant="primary" href={`/contacto?plantilla=${encodeURIComponent(template.name)}`}>
            Quiero este diseño
          </Button>
          <button type="button" className="button button-secondary" onClick={onClose}>
            Seguir viendo plantillas
          </button>
        </div>
      </div>
    </div>
  );
}
