const DESTINATIONS = [
  { name: 'Costa Esmeralda', meta: '7 días' },
  { name: 'Sierra Alta', meta: '5 días' },
  { name: 'Ruta del Vino', meta: '3 días' },
  { name: 'Isla Coral', meta: '6 días' },
];

type TravelAgencyWebProps = {
  isPlaying: boolean;
};

export function TravelAgencyWeb({ isPlaying }: TravelAgencyWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Rutas Azules</span>
        <div className="pv-web-links">
          <span>Destinos</span>
          <span>Paquetes</span>
          <span>Contacto</span>
        </div>
      </nav>

      <div className="pv-shared-map">
        <svg className="pv-shared-route" viewBox="0 0 200 140" preserveAspectRatio="none" aria-hidden="true">
          <path className="pv-shared-route-path" d="M20,110 C60,20 140,120 180,30" />
        </svg>
        <span className="pv-shared-pin" />
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...DESTINATIONS, ...DESTINATIONS].map((item, index) => (
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
