const MEDICINES = [
  { name: 'Paracetamol 500mg', meta: 'En stock' },
  { name: 'Ibuprofeno 400mg', meta: 'En stock' },
  { name: 'Vitamina C', meta: 'En stock' },
  { name: 'Suero oral', meta: 'En stock' },
];

type PharmacyMobileProps = {
  isPlaying: boolean;
};

export function PharmacyMobile({ isPlaying }: PharmacyMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '130px' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <span className="pv-shared-cta" style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', margin: 0, padding: '0.4rem', borderRadius: '0.5rem' }}>
            +
          </span>
          <p className="pv-shared-kicker">Farmacia Bienestar</p>
          <h3 className="pv-shared-headline">
            Tu salud, <span>siempre cerca</span>
          </h3>
        </div>
      </div>

      <div className="pv-shared-list" style={{ height: '96px' }}>
        <div className="pv-shared-list-track">
          {[...MEDICINES, ...MEDICINES].map((item, index) => (
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
