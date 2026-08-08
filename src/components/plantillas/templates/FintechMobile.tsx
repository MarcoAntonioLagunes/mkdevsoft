const TRANSACTIONS = [
  { name: 'Transferencia a Ana', meta: '-$450' },
  { name: 'Depósito nómina', meta: '+$8,200' },
  { name: 'Pago de servicios', meta: '-$620' },
  { name: 'Transferencia recibida', meta: '+$1,100' },
];

type FintechMobileProps = {
  isPlaying: boolean;
};

export function FintechMobile({ isPlaying }: FintechMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px' }}>
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
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
        <span className="pv-mobile-navicon is-active" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
        <span className="pv-mobile-navicon" />
      </div>
    </div>
  );
}
