'use client';

import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import type { TemplateDefinition } from '@/data/templates';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { usePageVisibility } from '@/hooks/usePageVisibility';

const PREVIEW_ORDER: Record<TemplateDefinition['previewType'], string[]> = {
  restaurant: ['hero', 'menu', 'reservation'],
  logistics: ['hero', 'timeline', 'status'],
  bank: ['hero', 'balance', 'transfer'],
};

const TRANSITION_DURATION = 4200;

export function TemplatePreview({ template, size = 'compact' }: { template: TemplateDefinition; size?: 'compact' | 'expanded' }) {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>();
  const isVisible = usePageVisibility();
  const reduceMotion = useReducedMotion();
  const order = PREVIEW_ORDER[template.previewType];
  const [stateIndex, setStateIndex] = useState(0);
  const active = isInView && isVisible && !reduceMotion;

  useEffect(() => {
    if (!active) {
      setStateIndex(0);
      return;
    }

    const intervalId = window.setInterval(() => {
      setStateIndex((current) => (current + 1) % order.length);
    }, TRANSITION_DURATION);

    return () => window.clearInterval(intervalId);
  }, [active, order.length]);

  const activeState = useMemo(() => order[stateIndex], [order, stateIndex]);

  const renderState = (state: string) => {
    switch (template.previewType) {
      case 'restaurant':
        return (
          <div className={`preview-state preview-state--${state}`}>
            {state === 'hero' && (
              <div className="preview-restaurant-hero" aria-hidden="true">
                <div className="preview-restaurant-heading">
                  <span>Mariscos Veracruz</span>
                  <strong>Reserva tu mesa</strong>
                </div>
                <div className="preview-restaurant-actions">
                  <span className="preview-button preview-button-solid">Reservar</span>
                  <span className="preview-button preview-button-outline">Ver menú</span>
                </div>
              </div>
            )}
            {state === 'menu' && (
              <div className="preview-restaurant-menu" aria-hidden="true">
                <span className="preview-pill">Especial del día</span>
                <div>
                  <h4>Paquete mar y tierra</h4>
                  <p>Campechana + cóctel de camarón</p>
                </div>
                <div className="preview-menu-price">$580</div>
              </div>
            )}
            {state === 'reservation' && (
              <div className="preview-restaurant-reservation" aria-hidden="true">
                <span>Martes 8:30 pm</span>
                <strong>Reserva confirmada</strong>
                <div className="preview-status-chip">Mesa 12</div>
              </div>
            )}
          </div>
        );
      case 'logistics':
        return (
          <div className={`preview-state preview-state--${state}`}>
            {state === 'hero' && (
              <div className="preview-logistics-hero" aria-hidden="true">
                <span>Rastreo de carga</span>
                <strong>Contenedor en tránsito</strong>
              </div>
            )}
            {state === 'timeline' && (
              <div className="preview-logistics-timeline" aria-hidden="true">
                <div className="preview-step active"><span />Origen</div>
                <div className="preview-step"><span />Tránsito</div>
                <div className="preview-step"><span />Despacho</div>
                <div className="preview-step"><span />Entrega</div>
              </div>
            )}
            {state === 'status' && (
              <div className="preview-logistics-status" aria-hidden="true">
                <strong>ETA 24h</strong>
                <p>Puerto Veracruz → Ciudad de México</p>
              </div>
            )}
          </div>
        );
      case 'bank':
        return (
          <div className={`preview-state preview-state--${state}`}>
            {state === 'hero' && (
              <div className="preview-bank-hero" aria-hidden="true">
                <div>
                  <span>Saldo disponible</span>
                  <strong>$18,420.00</strong>
                </div>
              </div>
            )}
            {state === 'balance' && (
              <div className="preview-bank-balance" aria-hidden="true">
                <div><span>Tarjeta</span><strong>•••• 1298</strong></div>
                <div><span>Disponible</span><strong>$12,890</strong></div>
              </div>
            )}
            {state === 'transfer' && (
              <div className="preview-bank-transfer" aria-hidden="true">
                <span>Transferencia</span>
                <strong>$1,250 MXN</strong>
                <p>Completada a cuenta 0145</p>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`template-preview template-preview--${size}`} ref={ref} data-active={active} aria-hidden="true">
      <Image src={template.heroImage} alt={template.heroAlt} fill className="template-preview-image" sizes="(max-width: 640px) 100vw, 33vw" />
      <div className="template-preview-layer" />
      <div className="template-preview-content">
        <div className="template-preview-label">{template.name}</div>
        <div className="template-preview-buttons">
          <div className="preview-button preview-button-solid">{template.ctaLabel}</div>
          <div className="preview-button preview-button-outline">{template.ctaSecondary}</div>
        </div>
        <div className="template-preview-state-wrapper">
          {renderState(active ? activeState : order[0])}
        </div>
      </div>
    </div>
  );
}
