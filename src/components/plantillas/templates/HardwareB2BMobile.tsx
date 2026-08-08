const PRODUCTS = [
  { name: 'Tornillos 1/4" (caja)', meta: '$180' },
  { name: 'Taladro industrial', meta: '$2,450' },
  { name: 'Cable eléctrico 10m', meta: '$320' },
  { name: 'Cemento 50kg', meta: '$210' },
];

type HardwareB2BMobileProps = {
  isPlaying: boolean;
};

export function HardwareB2BMobile({ isPlaying }: HardwareB2BMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '110px' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Ferretería Central</p>
          <h3 className="pv-shared-headline">
            Pedidos <span>al mayoreo</span>
          </h3>
        </div>
      </div>

      <div className="pv-shared-list" style={{ height: '96px' }}>
        <div className="pv-shared-list-track">
          {[...PRODUCTS, ...PRODUCTS].map((item, index) => (
            <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-shared-list-row-accent">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-mobile-card">
        <div className="pv-mobile-card-row">
          <span className="pv-mobile-card-title">Cotización #3391</span>
          <span className="pv-shared-badge">Enviada</span>
        </div>
      </div>

      <div className="pv-mobile-navbar" aria-hidden="true">
        <span className="pv-mobile-navicon is-active" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
      </div>
    </div>
  );
}
