const PRODUCTS = [
  { name: 'Pan de masa madre', meta: '$85' },
  { name: 'Croissant mantequilla', meta: '$45' },
  { name: 'Baguette artesanal', meta: '$60' },
  { name: 'Concha tradicional', meta: '$25' },
];

type BakeryWebProps = {
  isPlaying: boolean;
};

export function BakeryWeb({ isPlaying }: BakeryWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Panadería Trigo</span>
        <div className="pv-web-links">
          <span>Menú</span>
          <span>Pedidos</span>
          <span>Nosotros</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <svg width="50" height="50" viewBox="0 0 60 60" aria-hidden="true" style={{ position: 'absolute', top: '0.6rem', right: '0.8rem' }}>
            <path className="pv-shared-breathe" d="M20,50 C16,38 22,32 18,20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: '0s' }} />
            <path className="pv-shared-breathe" d="M32,50 C28,36 34,30 30,16" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: '0.6s' }} />
            <path className="pv-shared-breathe" d="M44,50 C40,38 46,32 42,20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: '1.2s' }} />
          </svg>
          <p className="pv-shared-kicker">Recién horneado</p>
          <h3 className="pv-shared-headline">
            Pan artesanal, <span>todos los días</span>
          </h3>
          <span className="pv-shared-cta">Ver menú</span>
        </div>
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...PRODUCTS, ...PRODUCTS].map((item, index) => (
            <div className="pv-shared-list-row" key={`${item.name}-${index}`}>
              <span>{item.name}</span>
              <span className="pv-shared-list-row-accent">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
