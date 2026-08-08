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
    <div className={`pv-rest${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-rest-nav">
        <span className="pv-rest-logo">Casa Olivo</span>
        <div className="pv-rest-links">
          <span>Menú</span>
          <span>Reservas</span>
          <span>Nosotros</span>
        </div>
      </nav>

      <div className="pv-rest-hero">
        <div className="pv-rest-hero-bg" />
        <div className="pv-rest-hero-overlay" />
        <div className="pv-rest-hero-content">
          <p className="pv-rest-kicker">Cocina de autor</p>
          <h3 className="pv-rest-headline">
            Sabores que <span>enamoran</span>
          </h3>
          <span className="pv-rest-cta">Reservar mesa</span>
        </div>
      </div>

      <div className="pv-rest-menu">
        <div className="pv-rest-menu-track">
          {[...MENU_ITEMS, ...MENU_ITEMS].map((item, index) => (
            <div className="pv-rest-menu-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-rest-menu-price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
