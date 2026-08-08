import type { CSSProperties } from 'react';

const BAR_HEIGHTS = [38, 55, 48, 70, 62, 85];
const STEPS = [
  { label: 'Declaración', delay: '0s' },
  { label: 'Revisión', delay: '1.6s' },
  { label: 'Presentado', delay: '3.2s' },
];

type AccountingFirmWebProps = {
  isPlaying: boolean;
};

export function AccountingFirmWeb({ isPlaying }: AccountingFirmWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Contadores Sur</span>
        <div className="pv-web-links">
          <span>Servicios</span>
          <span>Clientes</span>
          <span>Contacto</span>
        </div>
      </nav>

      <div className="pv-shared-hero" style={{ minHeight: '150px' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Contabilidad &amp; fiscal</p>
          <h3 className="pv-shared-headline">
            Tus finanzas, <span>en orden</span>
          </h3>
        </div>
      </div>

      <div style={{ padding: '0.75rem 0.9rem 0.4rem' }}>
        <div className="pv-shared-bars" style={{ height: '58px' }}>
          {BAR_HEIGHTS.map((height, index) => (
            <span key={index} className="pv-shared-bar" style={{ '--bar-h': `${height}%`, animationDelay: `${index * 0.12}s` } as CSSProperties} />
          ))}
        </div>
      </div>

      <div className="pv-shared-stepper" style={{ padding: '0 0.9rem 0.9rem' }}>
        {STEPS.map((step) => (
          <div className="pv-shared-step" key={step.label}>
            <span className="pv-shared-step-dot" style={{ animationDelay: step.delay }} />
            <span>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
