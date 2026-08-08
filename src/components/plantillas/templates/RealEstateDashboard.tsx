import type { CSSProperties } from 'react';
import inmobiliariaBanner from '../../../../public/plantillas/inmobiliaria-banner.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

type RealEstateDashboardProps = {
  isPlaying: boolean;
};

export function RealEstateDashboard({ isPlaying }: RealEstateDashboardProps) {
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
          <TemplateHeroPhoto src={inmobiliariaBanner} alt="Villa contemporánea con fachada de cristal y jardín" sizes="360px" />
          <div className="pv-app-photo-strip-overlay" />
          <span className="pv-hero-chip">🏠 Asesoría personalizada</span>
        </div>

        <div className="pv-app-topbar">
          <span className="pv-app-title">Llave Maestra</span>
          <span className="pv-shared-badge">Nueva propiedad</span>
        </div>

        <div className="pv-stat-row">
          <div className="pv-stat-card">
            <span className="pv-stat-value" style={{ '--count-target': 36 } as CSSProperties} />
            <span className="pv-stat-label">Propiedades activas</span>
          </div>
          <div className="pv-stat-card">
            <span className="pv-stat-value" style={{ '--count-target': 12 } as CSSProperties} />
            <span className="pv-stat-label">Citas esta semana</span>
          </div>
        </div>

        <div className="pv-shared-map" style={{ minHeight: '96px', borderRadius: '0.75rem' }}>
          <svg className="pv-shared-route" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="pv-shared-route-path" d="M15,80 C60,30 120,90 185,20" />
          </svg>
          <span className="pv-shared-pin" />
          <span className="pv-shared-badge" style={{ position: 'absolute', bottom: '0.5rem', right: '0.6rem', animationDelay: '1s' }}>
            +2 esta semana
          </span>
        </div>
      </div>
    </div>
  );
}
