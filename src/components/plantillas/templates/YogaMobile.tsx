import yogaThumb from '../../../../public/plantillas/yoga-thumb.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

const SESSIONS = [
  { name: 'Vinyasa matutino', meta: '30 min' },
  { name: 'Meditación guiada', meta: '15 min' },
  { name: 'Yin restaurativo', meta: '45 min' },
  { name: 'Respiración consciente', meta: '10 min' },
];

const NAV_ICONS = [
  <path key="home" d="M3 10.5 12 4l9 6.5M5 9.5V19h14V9.5" />,
  <path key="orders" d="M4 7h16l-1.2 11.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7ZM9 7a3 3 0 0 1 6 0" />,
  <path key="promos" d="m20 10-8.5-8.5a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.1c0 .5.2 1 .6 1.4L12 20.5 20 12.5v-2.5ZM7 7h.01" />,
  <path key="profile" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" />,
];

type YogaMobileProps = {
  isPlaying: boolean;
};

export function YogaMobile({ isPlaying }: YogaMobileProps) {
  return (
    <div className={`pv-mobile-shell${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-shared-hero" style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="pv-shared-hero-bg" />
        <TemplateHeroPhoto src={yogaThumb} alt="Persona en postura de meditación sobre una terraza soleada" sizes="220px" />
        <div className="pv-shared-hero-overlay" />
        <span className="pv-hero-chip">🧘 Primera clase gratis</span>
        <span
          className="pv-shared-breathe"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '64px',
            height: '64px',
            borderRadius: '999px',
            border: '2px solid var(--mockup-accent)',
            display: 'block',
          }}
        />
      </div>

      <div className="pv-shared-list" style={{ height: '96px' }}>
        <div className="pv-shared-list-track">
          {[...SESSIONS, ...SESSIONS].map((item, index) => (
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
