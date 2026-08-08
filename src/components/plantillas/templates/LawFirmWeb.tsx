import type { CSSProperties } from 'react';
import legalHero from '../../../../public/plantillas/legal-hero.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const PRACTICE_AREAS = ['Derecho corporativo', 'Litigio civil', 'Propiedad intelectual', 'Derecho laboral'];

type LawFirmWebProps = {
  isPlaying: boolean;
};

export function LawFirmWeb({ isPlaying }: LawFirmWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Vega &amp; Asociados</span>
        <div className="pv-web-nav-right">
          <div className="pv-web-links">
            <span>Áreas</span>
            <span>Equipo</span>
            <span>Contacto</span>
          </div>
          <span className="pv-web-nav-cta">Agendar consulta</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={legalHero} alt="Biblioteca jurídica con estatua de la justicia y sala de reuniones" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">⚖️ +20 años de trayectoria</span>
        <svg
          width="44"
          height="44"
          viewBox="0 0 60 60"
          aria-hidden="true"
          style={{ position: 'absolute', bottom: '0.8rem', right: '0.8rem', zIndex: 1 }}
        >
          <circle cx="30" cy="30" r="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <circle className="pv-shared-drawline" cx="30" cy="30" r="22" style={{ '--draw-len': 138 } as CSSProperties} />
        </svg>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Asesoría legal confiable</p>
          <h3 className="pv-shared-headline">
            Justicia con <span>experiencia</span>
          </h3>
          <div className="pv-hero-actions">
            <span className="pv-shared-cta">Agendar consulta</span>
            <span className="pv-shared-cta--secondary">Ver áreas</span>
          </div>
        </div>
      </div>

      <div className="pv-service-list">
        {PRACTICE_AREAS.map((name, index) => (
          <div className="pv-service-item" key={name} style={{ animationDelay: `${index * 0.9}s` }}>
            <span className="pv-service-icon">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
