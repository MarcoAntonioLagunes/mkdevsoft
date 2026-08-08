type TechEcommerceMobileProps = {
  isPlaying: boolean;
};

export function TechEcommerceMobile({ isPlaying }: TechEcommerceMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <div className="pv-shared-crossfade">
            <div className="pv-shared-crossfade-item pv-shared-crossfade-item--a">
              <p className="pv-shared-kicker">Audífonos Pro</p>
              <h3 className="pv-shared-headline">Sonido sin límites</h3>
            </div>
            <div className="pv-shared-crossfade-item pv-shared-crossfade-item--b">
              <p className="pv-shared-kicker">Smartwatch Fit</p>
              <h3 className="pv-shared-headline">Tu ritmo, tu control</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="pv-mobile-card">
        <div className="pv-mobile-card-row">
          <span className="pv-mobile-card-title">TecnoGo</span>
          <span className="pv-mobile-card-meta">$1,899</span>
        </div>
        <p className="pv-mobile-card-sub">Envío gratis · 12 MSI</p>
        <span className="pv-shared-cta">Agregar al carrito</span>
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
