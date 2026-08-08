import type { CSSProperties } from 'react';
import veterinariaBanner from '../../../../public/plantillas/veterinaria-banner.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const SLOTS = [
  { label: '9:00', delay: '0s' },
  { label: '11:30', delay: '1.6s' },
  { label: '14:00', delay: '3.2s' },
];

type VetDashboardProps = {
  isPlaying: boolean;
};

export function VetDashboard({ isPlaying }: VetDashboardProps) {
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
          <TemplateHeroPhoto src={veterinariaBanner} alt="Veterinario revisando a un perro pomerania con estetoscopio" sizes="360px" />
          <div className="pv-app-photo-strip-overlay" />
          <span className="pv-hero-chip">🐾 Atención de urgencias</span>
        </div>

        <div className="pv-app-topbar">
          <span className="pv-app-title">Vet Amigo</span>
          <span className="pv-shared-badge">🐾 Nueva mascota</span>
        </div>

        <div className="pv-stat-row">
          <div className="pv-stat-card">
            <span className="pv-stat-value" style={{ '--count-target': 54 } as CSSProperties} />
            <span className="pv-stat-label">Mascotas activas</span>
          </div>
          <div className="pv-stat-card">
            <span className="pv-stat-value" style={{ '--count-target': 8 } as CSSProperties} />
            <span className="pv-stat-label">Citas hoy</span>
          </div>
        </div>

        <div className="pv-shared-stepper" style={{ flex: 1, alignItems: 'flex-end', paddingBottom: '0.5rem' }}>
          {SLOTS.map((slot) => (
            <div className="pv-shared-step" key={slot.label}>
              <span className="pv-shared-step-dot" style={{ animationDelay: slot.delay }} />
              <span>{slot.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
