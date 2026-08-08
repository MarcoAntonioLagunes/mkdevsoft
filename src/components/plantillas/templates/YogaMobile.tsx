const SESSIONS = [
  { name: 'Vinyasa matutino', meta: '30 min' },
  { name: 'Meditación guiada', meta: '15 min' },
  { name: 'Yin restaurativo', meta: '45 min' },
  { name: 'Respiración consciente', meta: '10 min' },
];

type YogaMobileProps = {
  isPlaying: boolean;
};

export function YogaMobile({ isPlaying }: YogaMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <span
          className="pv-shared-breathe"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '64px',
            height: '64px',
            borderRadius: '999px',
            border: '2px solid var(--mockup-accent)',
            display: 'block',
          }}
        />
      </div>

      <div className="pv-shared-list" style={{ height: '96px' }}>
        <div className="pv-shared-list-track">
          {[...SESSIONS, ...SESSIONS].map((item, index) => (
            <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-shared-list-row-accent">{item.meta}</span>
            </div>
          ))}
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
