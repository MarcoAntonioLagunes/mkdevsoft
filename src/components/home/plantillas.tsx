'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { templates, type TemplateCategory } from '@/data/templates';
import { TemplateCard } from '@/components/templates/TemplateCard';

type FilterId = 'todas' | TemplateCategory;

const CATEGORIES: { id: FilterId; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'portafolio', label: 'Portafolio' },
  { id: 'landing', label: 'Landing de servicios' },
  { id: 'restaurantes', label: 'Restaurantes' },
];

const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  corporativo: 'Corporativo',
  ecommerce: 'E-commerce',
  portafolio: 'Portafolio',
  landing: 'Landing de servicios',
  restaurantes: 'Restaurantes',
};

export function Plantillas() {
  const [activeCategory, setActiveCategory] = useState<FilterId>('todas');
  const filtered = activeCategory === 'todas' ? templates : templates.filter((item) => item.category === activeCategory);

  return (
    <section className="section" id="plantillas">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Plantillas</SectionEyebrow>
          <h2>Diseños listos para tu negocio.</h2>
          <p>Explora plantillas profesionales por categoría y encuentra el punto de partida ideal para tu proyecto.</p>
        </header>

        <div className="templates-filter-bar" role="tablist" aria-label="Filtrar plantillas por categoría">
          {CATEGORIES.map((cat) => (
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
          <AnimatePresence mode="popLayout">
            {filtered.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
