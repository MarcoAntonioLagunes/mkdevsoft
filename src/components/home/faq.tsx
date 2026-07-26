import { faqItems } from '@/data/company';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

export function Faq() {
  return (
    <section className="section section-alt">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
          <h2>Todo lo que necesitas saber antes de empezar.</h2>
        </header>
        <div className="accordion">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
