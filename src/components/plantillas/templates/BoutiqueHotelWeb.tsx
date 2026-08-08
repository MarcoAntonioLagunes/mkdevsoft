import hotelHero from '../../../../public/plantillas/hotel-hero.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const ROOMS = [
  { name: 'Suite Vista Mar', meta: '$3,200' },
  { name: 'Junior Suite', meta: '$2,100' },
  { name: 'Habitación Deluxe', meta: '$1,650' },
  { name: 'Habitación Clásica', meta: '$1,200' },
];

type BoutiqueHotelWebProps = {
  isPlaying: boolean;
};

export function BoutiqueHotelWeb({ isPlaying }: BoutiqueHotelWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Hotel Marea</span>
        <div className="pv-web-nav-right">
          <div className="pv-web-links">
            <span>Habitaciones</span>
            <span>Amenidades</span>
            <span>Reservas</span>
          </div>
          <span className="pv-web-nav-cta">Reservar</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={hotelHero} alt="Alberca de hotel boutique con camastros junto al mar al atardecer" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">🌊 Vista al mar garantizada</span>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Hospitalidad boutique</p>
          <h3 className="pv-shared-headline">
            Descansa frente al <span>mar</span>
          </h3>
          <div className="pv-hero-actions">
            <span className="pv-shared-cta">Reservar habitación</span>
            <span className="pv-shared-cta--secondary">Ver amenidades</span>
          </div>
        </div>
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...ROOMS, ...ROOMS].map((item, index) => (
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
