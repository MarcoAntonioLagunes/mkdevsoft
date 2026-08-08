import type { CSSProperties } from 'react';

const BAR_HEIGHTS = [42, 68, 55, 80, 60, 90];

type GymDashboardProps = {
  isPlaying: boolean;
};

export function GymDashboard({ isPlaying }: GymDashboardProps) {
  return (
    <div className={`pv-gym${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-gym-sidebar">
        <span className="pv-gym-sidebar-logo" aria-hidden="true" />
        <div className="pv-gym-sidebar-icons">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="pv-gym-main">
        <div className="pv-gym-topbar">
          <span className="pv-gym-title">Forja Fitness</span>
          <span className="pv-gym-badge">+ Nuevo socio</span>
        </div>

        <div className="pv-gym-metrics">
          <div className="pv-gym-metric">
            <span className="pv-gym-metric-value">128</span>
            <span className="pv-gym-metric-label">Miembros activos</span>
          </div>
          <div className="pv-gym-metric">
            <span className="pv-gym-metric-value">92%</span>
            <span className="pv-gym-metric-label">Asistencia</span>
          </div>
        </div>

        <div className="pv-gym-panels">
          <div className="pv-gym-chart">
            {BAR_HEIGHTS.map((height, index) => (
              <span
                key={index}
                className="pv-gym-bar"
                style={{ '--bar-h': `${height}%`, animationDelay: `${index * 0.12}s` } as CSSProperties}
              />
            ))}
          </div>

          <svg className="pv-gym-ring" viewBox="0 0 80 80" aria-hidden="true">
            <circle className="pv-gym-ring-track" cx="40" cy="40" r="34" />
            <circle className="pv-gym-ring-progress" cx="40" cy="40" r="34" />
          </svg>
        </div>
      </div>
    </div>
  );
}
