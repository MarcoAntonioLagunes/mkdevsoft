import burritoPhoto from '../../../../public/plantillas/food-burrito.webp';
import { TemplateHeroPhoto } from '../TemplateHeroPhoto';

type FoodDeliveryMobileProps = {
  isPlaying: boolean;
};

const STEPS = [
  { label: 'Preparando', delay: '0s' },
  { label: 'En camino', delay: '1.6s' },
  { label: 'Entregado', delay: '3.2s' },
];

const NAV_ICONS = [
  <path key="home" d="M3 10.5 12 4l9 6.5M5 9.5V19h14V9.5" />,
  <path key="orders" d="M4 7h16l-1.2 11.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7ZM9 7a3 3 0 0 1 6 0" />,
  <path key="promos" d="m20 10-8.5-8.5a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.1c0 .5.2 1 .6 1.4L12 20.5 20 12.5v-2.5ZM7 7h.01" />,
  <path key="profile" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" />,
];

export function FoodDeliveryMobile({ isPlaying }: FoodDeliveryMobileProps) {
  return (
    <div className={`pv-food${isPlaying ? ' is-playing' : ''}`}>
      <div className="pv-food-map">
        <svg className="pv-food-route" viewBox="0 0 200 140" preserveAspectRatio="none" aria-hidden="true">
          <path className="pv-food-route-path" d="M20,110 C60,20 140,120 180,30" />
        </svg>
        <span className="pv-food-pin">
          <span className="pv-food-pin-pulse" />
        </span>
      </div>

      <div className="pv-food-card">
        <div className="pv-food-card-row">
          <span className="pv-food-card-title">Rapidito Express</span>
          <span className="pv-food-card-eta">18 min</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', margin: '0.35rem 0 0.55rem' }}>
          <span className="pv-mobile-thumb">
            <TemplateHeroPhoto src={burritoPhoto} alt="Burrito mexicano recién preparado, relleno de carne, arroz y frijoles" sizes="42px" />
          </span>
          <p className="pv-food-card-item" style={{ margin: 0 }}>
            2x Burrito especial · 1x Limonada
          </p>
        </div>

        <div className="pv-food-stepper">
          {STEPS.map((step) => (
            <div className="pv-food-step" key={step.label} style={{ animationDelay: step.delay }}>
              <span className="pv-food-step-dot" style={{ animationDelay: step.delay }} />
              <span>{step.label}</span>
            </div>
          ))}
        </div>

        <span className="pv-shared-cta" style={{ marginTop: '0.6rem' }}>
          Rastrear pedido
        </span>
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
