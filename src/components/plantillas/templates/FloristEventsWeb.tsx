import floreriaHero from '../../../../public/plantillas/floreria-hero.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const ARRANGEMENTS = [
  { name: 'Ramo Primavera', meta: '$650' },
  { name: 'Centro de mesa', meta: '$480' },
  { name: 'Decoración de boda', meta: 'Cotizar' },
  { name: 'Arreglo ejecutivo', meta: '$390' },
];

type FloristEventsWebProps = {
  isPlaying: boolean;
};

export function FloristEventsWeb({ isPlaying }: FloristEventsWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Flor de Lis</span>
        <div className="pv-web-nav-right">
          <div className="pv-web-links">
            <span>Catálogo</span>
            <span>Eventos</span>
            <span>Contacto</span>
          </div>
          <span className="pv-web-nav-cta">Cotizar</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={floreriaHero} alt="Ramos de flores vibrantes exhibidos en florería" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">🌸 Entrega el mismo día</span>
        <svg width="60" height="44" viewBox="0 0 80 60" aria-hidden="true" style={{ position: 'absolute', bottom: '0.7rem', right: '0.7rem', zIndex: 1 }}>
          <circle className="pv-shared-breathe" cx="20" cy="20" r="7" fill="var(--mockup-accent)" opacity="0.85" style={{ animationDelay: '0s' }} />
          <circle className="pv-shared-breathe" cx="45" cy="12" r="5" fill="var(--mockup-accent)" opacity="0.7" style={{ animationDelay: '0.8s' }} />
          <circle className="pv-shared-breathe" cx="62" cy="34" r="6" fill="var(--mockup-accent)" opacity="0.8" style={{ animationDelay: '1.6s' }} />
        </svg>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Florería &amp; eventos</p>
          <h3 className="pv-shared-headline">
            Flores para cada <span>momento</span>
          </h3>
          <div className="pv-hero-actions">
            <span className="pv-shared-cta">Ver catálogo</span>
            <span className="pv-shared-cta--secondary">Cotizar evento</span>
          </div>
        </div>
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...ARRANGEMENTS, ...ARRANGEMENTS].map((item, index) => (
            <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-shared-list-row-accent">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
