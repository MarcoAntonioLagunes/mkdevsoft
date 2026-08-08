import type { CSSProperties } from 'react';

const CHECKINS = [
  { label: 'Registrado', delay: '0s' },
  { label: 'En consulta', delay: '1.6s' },
  { label: 'Finalizado', delay: '3.2s' },
];

type MedicalDashboardProps = {
  isPlaying: boolean;
};

export function MedicalDashboard({ isPlaying }: MedicalDashboardProps) {
  return (
    <div className={`pv-app-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-app-sidebar">
        <span className="pv-app-sidebar-logo" aria-hidden="true" />
        <div className="pv-app-sidebar-icons">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="pv-app-main">
        <div className="pv-app-topbar">
          <span className="pv-app-title">Consultorio Vitalis</span>
          <span className="pv-shared-badge">12 pacientes hoy</span>
        </div>

        <svg viewBox="0 0 240 50" preserveAspectRatio="none" aria-hidden="true" style={{ width: '100%', height: '54px' }}>
          <path
            className="pv-shared-drawline"
            d="M0,25 L50,25 L60,8 L72,42 L84,25 L120,25 L130,10 L142,40 L154,25 L240,25"
            style={{ '--draw-len': 320 } as CSSProperties}
          />
        </svg>

        <div className="pv-shared-stepper" style={{ paddingBottom: '0.4rem' }}>
          {CHECKINS.map((step) => (
            <div className="pv-shared-step" key={step.label}>
              <span className="pv-shared-step-dot" style={{ animationDelay: step.delay }} />
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
