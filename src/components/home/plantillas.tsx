'use client';

import { useState } from 'react';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { TemplateCard } from '@/components/home/templates/TemplateCard';
import { TEMPLATE_CATEGORIES, templates } from '@/data/templates';

export function Plantillas() {
  const [activeCategory, setActiveCategory] = useState<'todas' | 'restaurantes' | 'logistica' | 'fintech'>('todas');
  const filtered = activeCategory === 'todas' ? templates : templates.filter((t) => t.category === activeCategory);

  return (
    <section className="section" id="plantillas">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Plantillas</SectionEyebrow>
          <h2>Catálogo visual para proyectos reales.</h2>
          <p>Descubre diseños listos para restaurantes, logística y fintech que se ven como producto terminado.</p>
        </header>

        <div className="templates-filter-bar" role="tablist" aria-label="Filtrar plantillas por categoría">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`templates-filter-pill${activeCategory === cat.id ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="templates-grid">
          {filtered.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
