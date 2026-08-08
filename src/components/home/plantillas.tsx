'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { plantillas, type PlantillaType } from '@/data/plantillas';
import { TemplatePreviewCard } from '@/components/plantillas/TemplatePreviewCard';

type FilterId = 'todas' | PlantillaType;

const CATEGORIES: { id: FilterId; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'web', label: 'Web' },
  { id: 'webapp', label: 'Web App' },
  { id: 'mobile', label: 'Móvil' },
];

export function Plantillas() {
  const [activeCategory, setActiveCategory] = useState<FilterId>('todas');
  const filtered = activeCategory === 'todas' ? plantillas : plantillas.filter((item) => item.type === activeCategory);

  return (
    <section className="section" id="plantillas">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Plantillas</SectionEyebrow>
          <h2>Diseños listos para tu negocio.</h2>
          <p>Explora plantillas profesionales por tipo de interfaz y encuentra el punto de partida ideal para tu proyecto.</p>
        </header>

        <div className="templates-filter-bar" role="tablist" aria-label="Filtrar plantillas por tipo de interfaz">
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
              <TemplatePreviewCard
                key={template.id}
                id={template.id}
                title={template.title}
                industry={template.industry}
                type={template.type}
                accent={template.accent}
                url={template.url}
                Component={template.Component}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
