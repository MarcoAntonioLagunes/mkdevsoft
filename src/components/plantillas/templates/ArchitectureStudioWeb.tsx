import type { CSSProperties } from 'react';

const PROJECTS = [
  { name: 'Casa Lomas', meta: 'Residencial' },
  { name: 'Torre Vidrio', meta: 'Comercial' },
  { name: 'Plaza Central', meta: 'Urbano' },
  { name: 'Loft Norte', meta: 'Interiorismo' },
];

type ArchitectureStudioWebProps = {
  isPlaying: boolean;
};

export function ArchitectureStudioWeb({ isPlaying }: ArchitectureStudioWebProps) {
  return (
    <div className={`pv-web-shell${isPlaying ? ' is-playing' : ''}`}>
      <nav className="pv-web-nav">
        <span className="pv-web-logo">Estudio Base</span>
        <div className="pv-web-links">
          <span>Proyectos</span>
          <span>Estudio</span>
          <span>Contacto</span>
        </div>
      </nav>

      <div className="pv-shared-hero">
        <div className="pv-shared-hero-bg" />
        <div className="pv-shared-hero-overlay" />
        <div className="pv-shared-hero-content">
          <svg
            width="72"
            height="44"
            viewBox="0 0 100 60"
            aria-hidden="true"
            style={{ position: 'absolute', top: '0.8rem', right: '0.8rem' }}
          >
            <rect x="4" y="4" width="92" height="52" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <path
              className="pv-shared-drawline"
              d="M4,56 L40,4 L60,30 L96,4"
              style={{ '--draw-len': 170 } as CSSProperties}
            />
          </svg>
          <p className="pv-shared-kicker">Arquitectura &amp; diseño</p>
          <h3 className="pv-shared-headline">
            Espacios con <span>propósito</span>
          </h3>
          <span className="pv-shared-cta">Ver portafolio</span>
        </div>
      </div>

      <div className="pv-shared-list">
        <div className="pv-shared-list-track">
          {[...PROJECTS, ...PROJECTS].map((item, index) => (
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
