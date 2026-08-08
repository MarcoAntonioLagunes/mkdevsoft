import restauranteHero from '../../../../public/plantillas/restaurante-hero.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const MENU_ITEMS = [
  { name: 'Risotto de hongos', price: '$185' },
  { name: 'Salmón a las brasas', price: '$240' },
  { name: 'Tártaro de atún', price: '$210' },
  { name: 'Pasta al tartufo', price: '$195' },
];

type RestaurantWebProps = {
  isPlaying: boolean;
};

export function RestaurantWeb({ isPlaying }: RestaurantWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Casa Olivo</span>
        <div className="pv-web-nav-right">
          <div className="pv-web-links">
            <span>Menú</span>
            <span>Reservas</span>
            <span>Nosotros</span>
          </div>
          <span className="pv-web-nav-cta">Reservar mesa</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={restauranteHero} alt="Mariscos y brochetas a la parrilla servidos sobre tabla de madera" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">🦐 Mariscos frescos del día</span>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Cocina de autor</p>
          <h3 className="pv-shared-headline">
            Sabores que <span>enamoran</span>
          </h3>
          <div className="pv-hero-actions">
            <span className="pv-shared-cta">Reservar mesa</span>
            <span className="pv-shared-cta--secondary">Ver menú</span>
          </div>
        </div>
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...MENU_ITEMS, ...MENU_ITEMS].map((item, index) => (
            <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-shared-list-row-accent">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
