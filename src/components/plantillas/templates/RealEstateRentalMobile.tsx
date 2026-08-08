type RealEstateRentalMobileProps = {
  isPlaying: boolean;
};

export function RealEstateRentalMobile({ isPlaying }: RealEstateRentalMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div style={{ padding: '0.9rem 0.9rem 0' }}>
        <p className="pv-shared-kicker">Renta Fácil</p>
      </div>

      <div className="pv-shared-swipe" style={{ margin: '0.5rem 0.9rem' }}>
        <div className="pv-shared-swipe-card">
          <span className="pv-mobile-card-title">Depto. Roma Norte</span>
          <span className="pv-mobile-card-sub">2 rec · 1 baño</span>
          <span className="pv-mobile-card-meta">$14,500 /mes</span>
        </div>
        <div className="pv-shared-swipe-card">
          <span className="pv-mobile-card-title">Casa Del Valle</span>
          <span className="pv-mobile-card-sub">3 rec · 2 baños</span>
          <span className="pv-mobile-card-meta">$22,000 /mes</span>
        </div>
      </div>

      <div className="pv-mobile-card">
        <div className="pv-mobile-card-row">
          <span className="pv-mobile-card-title">Ver más opciones</span>
          <span className="pv-mobile-card-meta">18 disponibles</span>
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
