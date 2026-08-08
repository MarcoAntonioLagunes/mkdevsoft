type FoodDeliveryMobileProps = {
  isPlaying: boolean;
};

const STEPS = [
  { label: 'Preparando', delay: '0s' },
  { label: 'En camino', delay: '1.6s' },
  { label: 'Entregado', delay: '3.2s' },
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
        <p className="pv-food-card-item">2x Burrito especial · 1x Limonada</p>

        <div className="pv-food-stepper">
          {STEPS.map((step) => (
            <div className="pv-food-step" key={step.label} style={{ animationDelay: step.delay }}>
              <span className="pv-food-step-dot" style={{ animationDelay: step.delay }} />
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-food-navbar" aria-hidden="true">
        <span className="pv-food-navicon is-active" />
        <span className="pv-food-navicon" />
        <span className="pv-food-navicon" />
        <span className="pv-food-navicon" />
      </div>
    </div>
  );
}
