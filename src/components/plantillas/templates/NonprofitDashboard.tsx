type NonprofitDashboardProps = {
  isPlaying: boolean;
};

export function NonprofitDashboard({ isPlaying }: NonprofitDashboardProps) {
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
          <span className="pv-app-title">Fundación Puente</span>
          <span className="pv-shared-badge">Campaña activa</span>
        </div>

        <div className="pv-app-metrics">
          <div className="pv-app-metric">
            <div className="pv-shared-crossfade">
              <span className="pv-app-metric-value pv-shared-crossfade-item pv-shared-crossfade-item--a">1,204</span>
              <span className="pv-app-metric-value pv-shared-crossfade-item pv-shared-crossfade-item--b">1,318</span>
            </div>
            <span className="pv-app-metric-label">Donantes</span>
          </div>
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">$620K</span>
            <span className="pv-app-metric-label">Recaudado</span>
          </div>
        </div>

        <div className="pv-app-panels" style={{ alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <span className="pv-app-metric-label">Meta: $800K</span>
          </div>
          <svg className="pv-shared-ring" viewBox="0 0 80 80" aria-hidden="true">
            <circle className="pv-shared-ring-track" cx="40" cy="40" r="34" />
            <circle className="pv-shared-ring-progress" cx="40" cy="40" r="34" />
          </svg>
        </div>
      </div>
    </div>
  );
}
