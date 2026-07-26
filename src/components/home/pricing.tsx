import { pricingPlans } from '@/data/company';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@/components/ui/check-icon';

export function Pricing() {
  return (
    <section className="section" id="precios">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Precios</SectionEyebrow>
          <h2>Planes pensados para PyMEs que están arrancando su presencia digital.</h2>
        </header>
        <div className="plan-grid">
          {pricingPlans.map((plan) => (
            <article key={plan.id} className={`card plan-card${plan.featured ? ' plan-card--featured' : ''}`}>
              {plan.badge && <span className="plan-badge">{plan.badge}</span>}
              <p className="card-label">{plan.name}</p>
              <p className="plan-price">{plan.price}</p>
              <p>{plan.tagline}</p>
              <ul className="plan-bullets">
                {plan.bullets.map((bullet) => (
                  <li key={bullet}><CheckIcon />{bullet}</li>
                ))}
              </ul>
              <Button variant="primary" href="/contacto">Cotizar este plan</Button>
            </article>
          ))}
        </div>
        <p className="plan-note">
          ¿Necesitas algo distinto? <a href="#cotizador">Arma tu cotización personalizada</a>.
        </p>
      </div>
    </section>
  );
}
