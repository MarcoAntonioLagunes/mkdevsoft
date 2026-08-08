import dentalHero from '../../../../public/plantillas/dental-hero.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const SERVICES = ['Limpieza dental', 'Ortodoncia invisible', 'Blanqueamiento dental', 'Implantes dentales'];

type DentalClinicWebProps = {
  isPlaying: boolean;
};

export function DentalClinicWeb({ isPlaying }: DentalClinicWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Sonrisa Dental</span>
        <div className="pv-web-nav-right">
          <div className="pv-web-links">
            <span>Servicios</span>
            <span>Citas</span>
            <span>Nosotros</span>
          </div>
          <span className="pv-web-nav-cta">Agendar cita</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={dentalHero} alt="Instrumental dental profesional sobre superficie azul clínica" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">🦷 +15 años de experiencia</span>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Odontología integral</p>
          <h3 className="pv-shared-headline">
            Tu sonrisa, <span>nuestra prioridad</span>
          </h3>
          <div className="pv-hero-actions">
            <span className="pv-shared-cta">Agendar cita</span>
            <span className="pv-shared-cta--secondary">Ver servicios</span>
          </div>
        </div>
      </div>

      <div className="pv-service-list">
        {SERVICES.map((name, index) => (
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
