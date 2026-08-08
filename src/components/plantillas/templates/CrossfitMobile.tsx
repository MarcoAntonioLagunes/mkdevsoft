const EXERCISES = [
  { label: 'Sentadillas', delay: '0s' },
  { label: 'Burpees', delay: '1.6s' },
  { label: 'Cuerda', delay: '3.2s' },
];

type CrossfitMobileProps = {
  isPlaying: boolean;
};

export function CrossfitMobile({ isPlaying }: CrossfitMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', justifyItems: 'center', gap: '0.3rem' }}>
          <svg className="pv-shared-ring" viewBox="0 0 80 80" aria-hidden="true" style={{ width: '92px', height: '92px' }}>
            <circle className="pv-shared-ring-track" cx="40" cy="40" r="34" />
            <circle className="pv-shared-ring-progress" cx="40" cy="40" r="34" />
          </svg>
          <span style={{ color: '#f5f6fb', fontFamily: 'var(--font-sora), Sora, sans-serif', fontWeight: 700, fontSize: '0.8rem', marginTop: '-3.6rem' }}>
            WOD 18:24
          </span>
        </div>
      </div>

      <div className="pv-shared-stepper" style={{ padding: '0.8rem 0.9rem' }}>
        {EXERCISES.map((step) => (
          <div className="pv-shared-step" key={step.label}>
            <span className="pv-shared-step-dot" style={{ animationDelay: step.delay }} />
            <span>{step.label}</span>
          </div>
        ))}
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
