const SHIPMENTS = [
  { name: 'Envío #4821', meta: 'En ruta' },
  { name: 'Envío #4822', meta: 'Entregado' },
  { name: 'Envío #4823', meta: 'En bodega' },
  { name: 'Envío #4824', meta: 'En ruta' },
];

type LogisticsDashboardProps = {
  isPlaying: boolean;
};

export function LogisticsDashboard({ isPlaying }: LogisticsDashboardProps) {
  return (
    <div className={`pv-app-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-app-sidebar">
        <span className="pv-app-sidebar-logo" aria-hidden="true" />
        <div className="pv-app-sidebar-icons">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="pv-app-main">
        <div className="pv-app-topbar">
          <span className="pv-app-title">Carga Norte</span>
          <span className="pv-shared-badge">128 envíos activos</span>
        </div>

        <div className="pv-shared-map" style={{ minHeight: '90px', borderRadius: '0.75rem' }}>
          <svg className="pv-shared-route" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="pv-shared-route-path" d="M15,80 C60,30 120,90 185,20" />
          </svg>
          <span className="pv-shared-pin" />
        </div>

        <div className="pv-shared-list" style={{ height: '64px' }}>
          <div className="pv-shared-list-track">
            {[...SHIPMENTS, ...SHIPMENTS].map((item, index) => (
              <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
                <span>{item.name}</span>
                <span className="pv-shared-list-row-accent">{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
