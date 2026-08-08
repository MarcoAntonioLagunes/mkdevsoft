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
        <div className="pv-web-links">
          <span>Habitaciones</span>
          <span>Amenidades</span>
          <span>Reservas</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <span className="pv-shared-badge">Disponible hoy</span>
          <p className="pv-shared-kicker">Hospitalidad boutique</p>
          <h3 className="pv-shared-headline">
            Descansa frente al <span>mar</span>
          </h3>
          <span className="pv-shared-cta">Reservar habitación</span>
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
