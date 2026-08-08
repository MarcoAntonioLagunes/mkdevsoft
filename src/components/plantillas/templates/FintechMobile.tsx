import fintechThumb from '../../../../public/plantillas/fintech-thumb.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const TRANSACTIONS = [
  { name: 'Transferencia a Ana', meta: '-$450' },
  { name: 'Depósito nómina', meta: '+$8,200' },
  { name: 'Pago de servicios', meta: '-$620' },
  { name: 'Transferencia recibida', meta: '+$1,100' },
];

const NAV_ICONS = [
  <path key="home" d="M3 10.5 12 4l9 6.5M5 9.5V19h14V9.5" />,
  <path key="orders" d="M4 7h16l-1.2 11.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7ZM9 7a3 3 0 0 1 6 0" />,
  <path key="promos" d="m20 10-8.5-8.5a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.1c0 .5.2 1 .6 1.4L12 20.5 20 12.5v-2.5ZM7 7h.01" />,
  <path key="profile" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" />,
];

type FintechMobileProps = {
  isPlaying: boolean;
};

export function FintechMobile({ isPlaying }: FintechMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px' }}>
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={fintechThumb} alt="Teléfono mostrando una app de pagos digitales" sizes="220px" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">💳 Pagos sin comisión</span>
        <div className="pv-shared-hero-content">
          <p className="pv-shared-kicker">Saldo disponible</p>
          <div className="pv-shared-crossfade">
            <h3 className="pv-shared-headline pv-shared-crossfade-item pv-shared-crossfade-item--a">$24,180.00</h3>
            <h3 className="pv-shared-headline pv-shared-crossfade-item pv-shared-crossfade-item--b">$25,930.00</h3>
          </div>
          <span className="pv-shared-cta">Enviar dinero</span>
        </div>
      </div>

      <div className="pv-shared-list" style={{ height: '96px' }}>
        <div className="pv-shared-list-track">
          {[...TRANSACTIONS, ...TRANSACTIONS].map((item, index) => (
            <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-shared-list-row-accent">{item.meta}</span>
            </div>
          ))}
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
