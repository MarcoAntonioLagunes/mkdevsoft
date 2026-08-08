import type { CSSProperties } from 'react';

const PRACTICE_AREAS = [
  { name: 'Derecho corporativo', meta: '01' },
  { name: 'Litigio civil', meta: '02' },
  { name: 'Propiedad intelectual', meta: '03' },
  { name: 'Derecho laboral', meta: '04' },
];

type LawFirmWebProps = {
  isPlaying: boolean;
};

export function LawFirmWeb({ isPlaying }: LawFirmWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Vega &amp; Asociados</span>
        <div className="pv-web-links">
          <span>Áreas</span>
          <span>Equipo</span>
          <span>Contacto</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <svg
            width="44"
            height="44"
            viewBox="0 0 60 60"
            aria-hidden="true"
            style={{ position: 'absolute', top: '0.8rem', right: '0.8rem' }}
          >
            <circle cx="30" cy="30" r="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <circle className="pv-shared-drawline" cx="30" cy="30" r="22" style={{ '--draw-len': 138 } as CSSProperties} />
          </svg>
          <p className="pv-shared-kicker">Asesoría legal confiable</p>
          <h3 className="pv-shared-headline">
            Justicia con <span>experiencia</span>
          </h3>
          <span className="pv-shared-cta">Agendar consulta</span>
        </div>
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...PRACTICE_AREAS, ...PRACTICE_AREAS].map((item, index) => (
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
