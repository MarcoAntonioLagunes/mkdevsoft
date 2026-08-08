import type { CSSProperties } from 'react';

const DAYS = [
  { label: 'Lu', delay: '0s' },
  { label: 'Ma', delay: '0.8s' },
  { label: 'Mi', delay: '1.6s' },
  { label: 'Ju', delay: '2.4s' },
  { label: 'Vi', delay: '3.2s' },
];

type BookingMobileProps = {
  isPlaying: boolean;
};

export function BookingMobile({ isPlaying }: BookingMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '120px' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Agenda Fácil</p>
          <h3 className="pv-shared-headline">
            Tu próxima <span>cita</span>
          </h3>
        </div>
      </div>

      <div className="pv-shared-stepper" style={{ padding: '0.8rem 0.9rem' }}>
        {DAYS.map((day) => (
          <div className="pv-shared-step" key={day.label}>
            <span className="pv-shared-step-dot" style={{ animationDelay: day.delay }} />
            <span>{day.label}</span>
          </div>
        ))}
      </div>

      <div className="pv-mobile-card">
        <div className="pv-mobile-card-row">
          <span className="pv-mobile-card-title">Corte y barba</span>
          <span className="pv-mobile-card-meta">16:30</span>
        </div>
        <div className="pv-mobile-card-sub" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              className="pv-shared-drawline"
              d="M4,13 L9,18 L20,6"
              style={{ '--draw-len': 24 } as CSSProperties}
            />
          </svg>
          Cita confirmada
        </div>
      </div>

      <div className="pv-mobile-navbar" aria-hidden="true">
        <span className="pv-mobile-navicon is-active" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
      </div>
    </div>
  );
}
