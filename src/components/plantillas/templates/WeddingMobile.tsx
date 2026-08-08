const GUESTS = [
  { label: 'Familia', delay: '0s' },
  { label: 'Amigos', delay: '1.6s' },
  { label: 'Trabajo', delay: '3.2s' },
];

type WeddingMobileProps = {
  isPlaying: boolean;
};

export function WeddingMobile({ isPlaying }: WeddingMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Bodas Almendra</p>
          <div className="pv-shared-crossfade">
            <h3 className="pv-shared-headline pv-shared-crossfade-item pv-shared-crossfade-item--a">Faltan 42 días</h3>
            <h3 className="pv-shared-headline pv-shared-crossfade-item pv-shared-crossfade-item--b">Faltan 41 días</h3>
          </div>
        </div>
      </div>

      <div className="pv-shared-stepper" style={{ padding: '0.8rem 0.9rem' }}>
        {GUESTS.map((step) => (
          <div className="pv-shared-step" key={step.label}>
            <span className="pv-shared-step-dot" style={{ animationDelay: step.delay }} />
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      <div className="pv-mobile-card">
        <div className="pv-mobile-card-row">
          <span className="pv-mobile-card-title">Confirmaciones</span>
          <span className="pv-mobile-card-meta">86 / 120</span>
        </div>
      </div>

      <div className="pv-mobile-navbar" aria-hidden="true">
        <span className="pv-mobile-navicon is-active" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
      </div>
    </div>
  );
}
