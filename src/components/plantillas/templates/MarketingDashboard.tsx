import type { CSSProperties } from 'react';

type MarketingDashboardProps = {
  isPlaying: boolean;
};

export function MarketingDashboard({ isPlaying }: MarketingDashboardProps) {
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
          <span className="pv-app-title">Estudio Impulso</span>
          <span className="pv-shared-badge">Campaña activa</span>
        </div>

        <div className="pv-app-metrics">
          <div className="pv-app-metric">
            <div className="pv-shared-crossfade">
              <span className="pv-app-metric-value pv-shared-crossfade-item pv-shared-crossfade-item--a">84.2K</span>
              <span className="pv-app-metric-value pv-shared-crossfade-item pv-shared-crossfade-item--b">91.6K</span>
            </div>
            <span className="pv-app-metric-label">Impresiones</span>
          </div>
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">3.4%</span>
            <span className="pv-app-metric-label">CTR</span>
          </div>
        </div>

        <svg viewBox="0 0 240 70" preserveAspectRatio="none" aria-hidden="true" style={{ width: '100%', flex: 1 }}>
          <path
            className="pv-shared-drawline"
            d="M0,60 C40,55 50,20 90,28 C130,36 140,10 180,14 C210,17 220,45 240,30"
            style={{ '--draw-len': 300 } as CSSProperties}
          />
        </svg>
      </div>
    </div>
  );
}
