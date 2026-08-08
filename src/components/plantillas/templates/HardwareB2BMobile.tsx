import ferreteriaThumb from '../../../../public/plantillas/ferreteria-thumb.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const PRODUCTS = [
  { name: 'Tornillos 1/4" (caja)', meta: '$180' },
  { name: 'Taladro industrial', meta: '$2,450' },
  { name: 'Cable eléctrico 10m', meta: '$320' },
  { name: 'Cemento 50kg', meta: '$210' },
];

const NAV_ICONS = [
  <path key="home" d="M3 10.5 12 4l9 6.5M5 9.5V19h14V9.5" />,
  <path key="orders" d="M4 7h16l-1.2 11.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7ZM9 7a3 3 0 0 1 6 0" />,
  <path key="promos" d="m20 10-8.5-8.5a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.1c0 .5.2 1 .6 1.4L12 20.5 20 12.5v-2.5ZM7 7h.01" />,
  <path key="profile" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" />,
];

type HardwareB2BMobileProps = {
  isPlaying: boolean;
};

export function HardwareB2BMobile({ isPlaying }: HardwareB2BMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '110px' }}>
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={ferreteriaThumb} alt="Herramientas de taller sobre mesa de madera rústica" sizes="220px" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">📦 Entrega en 24h</span>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Ferretería Central</p>
          <h3 className="pv-shared-headline">
            Pedidos <span>al mayoreo</span>
          </h3>
        </div>
      </div>

      <div className="pv-shared-list" style={{ height: '96px' }}>
        <div className="pv-shared-list-track">
          {[...PRODUCTS, ...PRODUCTS].map((item, index) => (
            <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-shared-list-row-accent">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-mobile-card">
        <div className="pv-mobile-card-row">
          <span className="pv-mobile-card-title">Cotización #3391</span>
          <span className="pv-shared-badge">Enviada</span>
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
