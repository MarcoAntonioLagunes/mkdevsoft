const SLOTS = [
  { label: '9:00', delay: '0s' },
  { label: '11:30', delay: '1.6s' },
  { label: '14:00', delay: '3.2s' },
];

type VetDashboardProps = {
  isPlaying: boolean;
};

export function VetDashboard({ isPlaying }: VetDashboardProps) {
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
          <span className="pv-app-title">Vet Amigo</span>
          <span className="pv-shared-badge">🐾 Nueva mascota</span>
        </div>

        <div className="pv-app-metrics">
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">54</span>
            <span className="pv-app-metric-label">Mascotas activas</span>
          </div>
          <div className="pv-app-metric">
            <span className="pv-app-metric-value">8</span>
            <span className="pv-app-metric-label">Citas hoy</span>
          </div>
        </div>

        <div className="pv-shared-stepper" style={{ flex: 1, alignItems: 'flex-end', paddingBottom: '0.5rem' }}>
          {SLOTS.map((slot) => (
            <div className="pv-shared-step" key={slot.label}>
              <span className="pv-shared-step-dot" style={{ animationDelay: slot.delay }} />
              <span>{slot.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
