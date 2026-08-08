import tallerHero from '../../../../public/plantillas/taller-hero.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

type AutoShopWebProps = {
  isPlaying: boolean;
};

export function AutoShopWeb({ isPlaying }: AutoShopWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Taller Roble</span>
        <div className="pv-web-nav-right">
          <div className="pv-web-links">
            <span>Servicios</span>
            <span>Cotizar</span>
            <span>Contacto</span>
          </div>
          <span className="pv-web-nav-cta">Agendar</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={tallerHero} alt="Manos de mecánico trabajando en el motor de un automóvil" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">🔧 +15 años de experiencia</span>
        <svg width="46" height="46" viewBox="0 0 60 60" aria-hidden="true" style={{ position: 'absolute', bottom: '0.8rem', right: '0.8rem', zIndex: 1 }}>
          <g className="pv-shared-gear">
            <circle cx="30" cy="30" r="10" fill="none" stroke="var(--mockup-accent)" strokeWidth="3" />
            {Array.from({ length: 8 }).map((_, index) => {
              const angle = (index * 360) / 8;
              return (
                <rect
                  key={index}
                  x="28"
                  y="4"
                  width="4"
                  height="8"
                  fill="var(--mockup-accent)"
                  transform={`rotate(${angle} 30 30)`}
                />
              );
            })}
          </g>
        </svg>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Servicio automotriz</p>
          <h3 className="pv-shared-headline">
            Tu auto en <span>buenas manos</span>
          </h3>
          <div className="pv-hero-actions">
            <span className="pv-shared-cta">Agendar servicio</span>
            <span className="pv-shared-cta--secondary">Ver servicios</span>
          </div>
        </div>
      </div>

      <div className="pv-app-panels" style={{ padding: '0.85rem 0.9rem 1rem' }}>
        <div style={{ flex: 1, display: 'grid', gap: '0.35rem' }}>
          <span className="pv-app-metric-label">Diagnóstico</span>
          <span className="pv-app-metric-value">Motor y frenos</span>
        </div>
        <svg className="pv-shared-ring" viewBox="0 0 80 80" aria-hidden="true">
          <circle className="pv-shared-ring-track" cx="40" cy="40" r="34" />
          <circle className="pv-shared-ring-progress" cx="40" cy="40" r="34" />
        </svg>
      </div>
    </div>
  );
}
