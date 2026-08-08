import rentaThumb from '../../../../public/plantillas/renta-thumb.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const NAV_ICONS = [
  <path key="home" d="M3 10.5 12 4l9 6.5M5 9.5V19h14V9.5" />,
  <path key="orders" d="M4 7h16l-1.2 11.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7ZM9 7a3 3 0 0 1 6 0" />,
  <path key="promos" d="m20 10-8.5-8.5a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.1c0 .5.2 1 .6 1.4L12 20.5 20 12.5v-2.5ZM7 7h.01" />,
  <path key="profile" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" />,
];

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginTop: '0.5rem' }}>
          <span className="pv-mobile-thumb">
            <TemplateHeroPhoto src={rentaThumb} alt="Edificio de departamentos moderno con balcones" sizes="42px" />
          </span>
          <p className="pv-mobile-card-sub" style={{ margin: 0 }}>
            Edificios verificados en toda la ciudad
          </p>
        </div>
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
