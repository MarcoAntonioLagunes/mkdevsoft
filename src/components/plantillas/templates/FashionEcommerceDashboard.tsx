import type { CSSProperties } from 'react';

const CATEGORY_BARS = [58, 82, 45, 70, 90, 63];

type FashionEcommerceDashboardProps = {
  isPlaying: boolean;
};

export function FashionEcommerceDashboard({ isPlaying }: FashionEcommerceDashboardProps) {
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
          <span className="pv-app-title">Moda Lúa</span>
          <span className="pv-shared-badge">Nuevo pedido</span>
        </div>

        <div className="pv-app-metrics">
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">$48.2K</span>
            <span className="pv-app-metric-label">Ventas del mes</span>
          </div>
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">214</span>
            <span className="pv-app-metric-label">Pedidos</span>
          </div>
        </div>

        <div className="pv-app-panels">
          <div className="pv-shared-bars">
            {CATEGORY_BARS.map((height, index) => (
              <span key={index} className="pv-shared-bar" style={{ '--bar-h': `${height}%`, animationDelay: `${index * 0.12}s` } as CSSProperties} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
