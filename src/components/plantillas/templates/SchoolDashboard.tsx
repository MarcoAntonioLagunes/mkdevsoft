import type { CSSProperties } from 'react';
import escuelaBanner from '../../../../public/plantillas/escuela-banner.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const GRADE_BARS = [72, 85, 68, 91, 78, 88];

type SchoolDashboardProps = {
  isPlaying: boolean;
};

export function SchoolDashboard({ isPlaying }: SchoolDashboardProps) {
  return (
    <div className={`pv-app-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-app-sidebar">
        <span className="pv-app-sidebar-logo" aria-hidden="true" />
        <div className="pv-app-sidebar-icons">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="pv-app-main">
        <div className="pv-app-photo-strip" style={{ margin: '-0.85rem -0.9rem 0' }}>
          <TemplateHeroPhoto src={escuelaBanner} alt="Salón de clases con globos terráqueos y libros bajo luz natural" sizes="360px" />
          <div className="pv-app-photo-strip-overlay" />
          <span className="pv-hero-chip">🎓 Inscripciones abiertas</span>
        </div>

        <div className="pv-app-topbar">
          <span className="pv-app-title">Colegio Aurora</span>
          <span className="pv-shared-badge">Ciclo 2026</span>
        </div>

        <div className="pv-stat-row">
          <div className="pv-stat-card">
            <span className="pv-stat-value" style={{ '--count-target': 312 } as CSSProperties} />
            <span className="pv-stat-label">Alumnos</span>
          </div>
          <div className="pv-stat-card">
            <span style={{ display: 'inline-flex' }}>
              <span className="pv-stat-value" style={{ '--count-target': 96 } as CSSProperties} />
              <span className="pv-stat-suffix">%</span>
            </span>
            <span className="pv-stat-label">Asistencia</span>
          </div>
        </div>

        <div className="pv-app-panels">
          <div className="pv-shared-bars">
            {GRADE_BARS.map((height, index) => (
              <span key={index} className="pv-shared-bar" style={{ '--bar-h': `${height}%`, animationDelay: `${index * 0.12}s` } as CSSProperties} />
            ))}
          </div>
          <svg className="pv-shared-ring" viewBox="0 0 80 80" aria-hidden="true">
            <circle className="pv-shared-ring-track" cx="40" cy="40" r="34" />
            <circle className="pv-shared-ring-progress" cx="40" cy="40" r="34" />
          </svg>
        </div>
      </div>
    </div>
  );
}
