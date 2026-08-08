const BOOKINGS = [
  { name: 'Masaje relajante', meta: '10:00' },
  { name: 'Facial hidratante', meta: '11:30' },
  { name: 'Aromaterapia', meta: '13:00' },
  { name: 'Circuito termal', meta: '15:30' },
];

type SpaDashboardProps = {
  isPlaying: boolean;
};

export function SpaDashboard({ isPlaying }: SpaDashboardProps) {
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
          <span className="pv-app-title">Spa Serena</span>
          <span className="pv-shared-badge">6 cabinas activas</span>
        </div>

        <div className="pv-app-panels" style={{ alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <span className="pv-app-metric-value">78%</span>
            <span className="pv-app-metric-label" style={{ display: 'block' }}>
              Ocupación de cabinas
            </span>
          </div>
          <svg className="pv-shared-ring" viewBox="0 0 80 80" aria-hidden="true">
            <circle className="pv-shared-ring-track" cx="40" cy="40" r="34" />
            <circle className="pv-shared-ring-progress" cx="40" cy="40" r="34" />
          </svg>
        </div>

        <div className="pv-shared-list" style={{ height: '64px' }}>
          <div className="pv-shared-list-track">
            {[...BOOKINGS, ...BOOKINGS].map((item, index) => (
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
