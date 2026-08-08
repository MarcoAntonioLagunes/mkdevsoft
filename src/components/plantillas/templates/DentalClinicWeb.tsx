const SERVICES = [
  { name: 'Limpieza dental', meta: '✓' },
  { name: 'Ortodoncia', meta: '✓' },
  { name: 'Blanqueamiento', meta: '✓' },
  { name: 'Implantes', meta: '✓' },
];

type DentalClinicWebProps = {
  isPlaying: boolean;
};

export function DentalClinicWeb({ isPlaying }: DentalClinicWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Sonrisa Dental</span>
        <div className="pv-web-links">
          <span>Servicios</span>
          <span>Citas</span>
          <span>Nosotros</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <span className="pv-shared-badge">Cita confirmada</span>
          <p className="pv-shared-kicker">Odontología integral</p>
          <h3 className="pv-shared-headline">
            Sonrisas sanas, <span>cuidado real</span>
          </h3>
          <span className="pv-shared-cta">Agendar cita</span>
        </div>
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...SERVICES, ...SERVICES].map((item, index) => (
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
