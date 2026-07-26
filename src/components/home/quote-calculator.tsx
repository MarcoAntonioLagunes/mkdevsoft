'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { company } from '@/data/company';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const PROJECT_TYPES = [
  { id: 'web', label: 'Página web' },
  { id: 'app', label: 'App móvil' },
  { id: 'erp', label: 'Sistema ERP/CRM' },
  { id: 'automation', label: 'Automatización' },
];

const SCOPES = [
  { id: 'basico', label: 'Básico' },
  { id: 'intermedio', label: 'Intermedio' },
  { id: 'avanzado', label: 'Avanzado' },
];

// Estimado, extrapolado de los 3 planes de la sección Precios (ver pricingPlans en data/company.ts).
// Ajustar estos rangos aquí si cambian los precios ancla reales.
const PRICE_MATRIX: Record<string, Record<string, string>> = {
  web: { basico: '$3,800 – $5,500 MXN', intermedio: '$5,500 – $8,500 MXN', avanzado: '$8,500 – $12,000 MXN' },
  app: { basico: '$12,000 – $18,000 MXN', intermedio: '$18,000 – $28,000 MXN', avanzado: '$28,000 – $45,000 MXN' },
  erp: { basico: '$18,000 – $28,000 MXN', intermedio: '$28,000 – $45,000 MXN', avanzado: '$45,000 – $70,000 MXN' },
  automation: { basico: '$6,000 – $10,000 MXN', intermedio: '$10,000 – $18,000 MXN', avanzado: '$18,000 – $30,000 MXN' },
};

const STEP_LABELS = ['Tipo de proyecto', 'Alcance', 'Estimado'];

export function QuoteCalculator() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [scope, setScope] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const estimate = projectType && scope ? PRICE_MATRIX[projectType][scope] : null;
  const projectLabel = PROJECT_TYPES.find((p) => p.id === projectType)?.label;
  const scopeLabel = SCOPES.find((s) => s.id === scope)?.label;

  const whatsappHref = (() => {
    const message = `Hola, quiero una cotización para: ${projectLabel ?? ''} (alcance ${scopeLabel ?? ''}). Rango estimado: ${estimate ?? ''}.`;
    return `${company.whatsapp}?text=${encodeURIComponent(message)}`;
  })();

  const selectType = (id: string) => {
    setProjectType(id);
    setStep(1);
  };
  const selectScope = (id: string) => {
    setScope(id);
    setStep(2);
  };
  const restart = () => {
    setProjectType(null);
    setScope(null);
    setStep(0);
  };

  const stepTransition = reduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' as const };
  const stepVariants = reduceMotion ? {} : { initial: { opacity: 0, x: 16 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -16 } };

  return (
    <section className="section section-alt" id="cotizador">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Cotizador rápido</SectionEyebrow>
          <h2>Arma un estimado en menos de un minuto.</h2>
        </header>
        <div className="quote-widget">
          <div className="quote-progress" aria-hidden="true">
            {STEP_LABELS.map((label, index) => (
              <span key={label} className={`quote-progress-step${index <= step ? ' is-active' : ''}`} />
            ))}
          </div>
          <p className="quote-step-label">{STEP_LABELS[step]}</p>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step-0" {...stepVariants} transition={stepTransition} className="quote-step">
                <div className="quote-chip-grid">
                  {PROJECT_TYPES.map((type) => (
                    <button key={type.id} type="button" className={`quote-chip${projectType === type.id ? ' is-active' : ''}`} onClick={() => selectType(type.id)}>
                      {type.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step-1" {...stepVariants} transition={stepTransition} className="quote-step">
                <div className="quote-chip-grid">
                  {SCOPES.map((s) => (
                    <button key={s.id} type="button" className={`quote-chip${scope === s.id ? ' is-active' : ''}`} onClick={() => selectScope(s.id)}>
                      {s.label}
                    </button>
                  ))}
                </div>
                <button type="button" className="quote-back" onClick={() => setStep(0)}>← Cambiar tipo de proyecto</button>
              </motion.div>
            )}

            {step === 2 && estimate && (
              <motion.div key="step-2" {...stepVariants} transition={stepTransition} className="quote-step quote-result">
                <p className="quote-result-label">Estimado para: <strong>{projectLabel}</strong> · Alcance {scopeLabel}</p>
                <p className="quote-result-price">{estimate}</p>
                <p className="quote-disclaimer">Estimado orientativo — la cotización final depende del alcance específico de tu proyecto.</p>
                <a className="button button-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">Recibir esta cotización por WhatsApp</a>
                <button type="button" className="quote-back" onClick={restart}>Empezar de nuevo</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
