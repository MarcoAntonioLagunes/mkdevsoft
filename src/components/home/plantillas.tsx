'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { templates, type Template, type TemplateCategory } from '@/data/templates';

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

function TemplateCard({ template }: { template: Template }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="card template-card"
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
    >
      <motion.div
        className="template-card-image"
        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Image
          src={template.imageUrl}
          alt={template.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
          className="template-card-image-img"
          priority={false}
        />
        <div className="template-card-image-mask" aria-hidden="true" />
        <div className="template-card-image-copy">
          <span className="template-badge">{CATEGORY_LABELS[template.category]}</span>
          <p className="template-feature">{template.feature}</p>
        </div>
      </motion.div>
      <div className="template-card-copy">
        <p className="template-name">{template.name}</p>
        <p className="template-description">{template.description}</p>
      </div>
    </motion.article>
  );
}

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
