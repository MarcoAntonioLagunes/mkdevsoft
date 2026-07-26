import { testimonials } from '@/data/company';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

// Los 3 testimonios son placeholders explícitos (ver comentario en data/company.ts) — reemplazar por citas reales cuando estén disponibles.
export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Testimonios</SectionEyebrow>
          <h2>Lo que dicen los clientes que ya trabajaron con nuestro equipo.</h2>
        </header>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article key={`${testimonial.author}-${index}`} className="card testimonial-card">
              <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
              <p>{testimonial.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" /></svg>
                </span>
                <span>
                  <strong>{testimonial.author}</strong>
                  <br />
                  {testimonial.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
