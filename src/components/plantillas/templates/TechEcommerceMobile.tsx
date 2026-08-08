import tecnogoThumb from '../../../../public/plantillas/tecnogo-thumb.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const NAV_ICONS = [
  <path key="home" d="M3 10.5 12 4l9 6.5M5 9.5V19h14V9.5" />,
  <path key="orders" d="M4 7h16l-1.2 11.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7ZM9 7a3 3 0 0 1 6 0" />,
  <path key="promos" d="m20 10-8.5-8.5a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.1c0 .5.2 1 .6 1.4L12 20.5 20 12.5v-2.5ZM7 7h.01" />,
  <path key="profile" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" />,
];

type TechEcommerceMobileProps = {
  isPlaying: boolean;
};

export function TechEcommerceMobile({ isPlaying }: TechEcommerceMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px' }}>
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={tecnogoThumb} alt="Smartphones sobre escritorio con monitor iluminado de fondo" sizes="220px" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">🚚 Envío gratis</span>
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
        {NAV_ICONS.map((path, index) => (
          <span className={`pv-mobile-navicon${index === 0 ? ' is-active' : ''}`} key={index}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {path}
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
