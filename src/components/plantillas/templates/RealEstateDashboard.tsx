type RealEstateDashboardProps = {
  isPlaying: boolean;
};

export function RealEstateDashboard({ isPlaying }: RealEstateDashboardProps) {
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
          <span className="pv-app-title">Llave Maestra</span>
          <span className="pv-shared-badge">Nueva propiedad</span>
        </div>

        <div className="pv-app-metrics">
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">36</span>
            <span className="pv-app-metric-label">Propiedades activas</span>
          </div>
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">12</span>
            <span className="pv-app-metric-label">Citas esta semana</span>
          </div>
        </div>

        <div className="pv-shared-map" style={{ minHeight: '96px', borderRadius: '0.75rem' }}>
          <svg className="pv-shared-route" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="pv-shared-route-path" d="M15,80 C60,30 120,90 185,20" />
          </svg>
          <span className="pv-shared-pin" />
          <span className="pv-shared-badge" style={{ position: 'absolute', bottom: '0.5rem', right: '0.6rem', animationDelay: '1s' }}>
            +2 esta semana
          </span>
        </div>
      </div>
    </div>
  );
}
