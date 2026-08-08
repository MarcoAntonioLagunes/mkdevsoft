import type { CSSProperties } from 'react';
import gymBanner from '../../../../public/plantillas/gym-banner.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const BAR_HEIGHTS = [42, 68, 55, 80, 60, 90];
const ACTIVITY = [
  { name: 'Nuevo socio: Ana Ruiz', meta: 'hace 2 min' },
  { name: 'Pago recibido: Carlos M.', meta: 'hace 12 min' },
  { name: 'Clase llena: Spinning 7am', meta: 'hace 30 min' },
  { name: 'Renovación: Luis Peña', meta: 'hace 1 h' },
];

type GymDashboardProps = {
  isPlaying: boolean;
};

export function GymDashboard({ isPlaying }: GymDashboardProps) {
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
        <div className="pv-app-photo-strip" style={{ margin: '-0.85rem -0.9rem 0' }}>
          <TemplateHeroPhoto
            src={gymBanner}
            alt="Interior de gimnasio con máquinas cardiovasculares y área de pesas"
            sizes="360px"
          />
          <div className="pv-app-photo-strip-overlay" />
          <span className="pv-hero-chip">🏋️ Equipo de última generación</span>
        </div>

        <div className="pv-app-topbar">
          <span className="pv-app-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 9v6M2 10v4M22 10v4M20 9v6M7 12h10"
                stroke="var(--mockup-accent)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Forja Fitness
          </span>
          <span className="pv-shared-badge">+ Nuevo socio</span>
        </div>

        <div className="pv-stat-row">
          <div className="pv-stat-card">
            <span className="pv-stat-value" style={{ '--count-target': 128 } as CSSProperties} />
            <span className="pv-stat-label">Miembros activos</span>
          </div>
          <div className="pv-stat-card">
            <span style={{ display: 'inline-flex' }}>
              <span className="pv-stat-value" style={{ '--count-target': 92 } as CSSProperties} />
              <span className="pv-stat-suffix">%</span>
            </span>
            <span className="pv-stat-label">Asistencia</span>
          </div>
        </div>

        <div className="pv-app-panels">
          <div className="pv-shared-bars">
            {BAR_HEIGHTS.map((height, index) => (
              <span
                key={index}
                className="pv-shared-bar"
                style={{ '--bar-h': `${height}%`, animationDelay: `${index * 0.12}s` } as CSSProperties}
              />
            ))}
          </div>

          <svg className="pv-shared-ring" viewBox="0 0 80 80" aria-hidden="true">
            <circle className="pv-shared-ring-track" cx="40" cy="40" r="34" />
            <circle className="pv-shared-ring-progress" cx="40" cy="40" r="34" />
          </svg>
        </div>

        <div className="pv-shared-list" style={{ height: '64px' }}>
          <div className="pv-shared-list-track">
            {[...ACTIVITY, ...ACTIVITY].map((item, index) => (
              <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
                <span>{item.name}</span>
                <span className="pv-shared-list-row-accent">{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
