import { guarantees } from '@/data/company';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { IconCard } from '@/components/ui/icon-card';

const guaranteeIcons = [
  (
    <svg key="code" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /></svg>
  ),
  (
    <svg key="scope" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h9l5 5v15H6z" /><path d="m9 13 2 2 4-4" /></svg>
  ),
  (
    <svg key="support" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-4.5 7.6 8.38 8.38 0 0 1-3.8.9 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.9a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8.5z" /></svg>
  ),
  (
    <svg key="comm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" /></svg>
  ),
];

export function Guarantees() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Garantías</SectionEyebrow>
          <h2>Trabajamos con reglas claras desde el inicio.</h2>
        </header>
        <div className="pillar-grid">
          {guarantees.map((item, index) => (
            <IconCard
              key={item.title}
              icon={guaranteeIcons[index % guaranteeIcons.length]}
              title={item.title}
              description={item.description}
              variant={index % 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
