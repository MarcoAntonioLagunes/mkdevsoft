import type { CSSProperties } from 'react';
import reservasThumb from '../../../../public/plantillas/reservas-thumb.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const DAYS = [
  { label: 'Lu', delay: '0s' },
  { label: 'Ma', delay: '0.8s' },
  { label: 'Mi', delay: '1.6s' },
  { label: 'Ju', delay: '2.4s' },
  { label: 'Vi', delay: '3.2s' },
];

const NAV_ICONS = [
  <path key="home" d="M3 10.5 12 4l9 6.5M5 9.5V19h14V9.5" />,
  <path key="orders" d="M4 7h16l-1.2 11.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7ZM9 7a3 3 0 0 1 6 0" />,
  <path key="promos" d="m20 10-8.5-8.5a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.1c0 .5.2 1 .6 1.4L12 20.5 20 12.5v-2.5ZM7 7h.01" />,
  <path key="profile" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" />,
];

type BookingMobileProps = {
  isPlaying: boolean;
};

export function BookingMobile({ isPlaying }: BookingMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '120px' }}>
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={reservasThumb} alt="Calendario de escritorio junto a una taza de café" sizes="220px" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">📅 Confirmación instantánea</span>
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
        {NAV_ICONS.map((path, index) => (
          <span className={`pv-mobile-navicon${index === 0 ? ' is-active' : ''}`} key={index}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {path}
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
