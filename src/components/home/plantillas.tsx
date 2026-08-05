'use client';

import { useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

type CategoryId = 'corporativo' | 'ecommerce' | 'portafolio' | 'landing' | 'restaurantes';
type FilterId = 'todas' | CategoryId;

type Template = {
  id: string;
  name: string;
  category: CategoryId;
  imageUrl?: string;
};

const CATEGORIES: { id: FilterId; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'portafolio', label: 'Portafolio' },
  { id: 'landing', label: 'Landing de servicios' },
  { id: 'restaurantes', label: 'Restaurantes' },
];

const CATEGORY_LABELS: Record<CategoryId, string> = {
  corporativo: 'Corporativo',
  ecommerce: 'E-commerce',
  portafolio: 'Portafolio',
  landing: 'Landing de servicios',
  restaurantes: 'Restaurantes',
};

const CATEGORY_COLORS: Record<CategoryId, [string, string]> = {
  corporativo: ['#3B82F6', '#64748B'],
  ecommerce: ['#8B5CF6', '#EC4899'],
  portafolio: ['#10B981', '#14B8A6'],
  landing: ['#6366F1', '#8B5CF6'],
  restaurantes: ['#F59E0B', '#C2410C'],
};

const templates: Template[] = [
  { id: 'corp-aurora', name: 'Corporativo Aurora', category: 'corporativo' },
  { id: 'corp-meridian', name: 'Corporativo Meridian', category: 'corporativo' },
  { id: 'corp-solstice', name: 'Corporativo Solstice', category: 'corporativo' },
  { id: 'corp-vantage', name: 'Corporativo Vantage', category: 'corporativo' },
  { id: 'corp-nimbus', name: 'Corporativo Nimbus', category: 'corporativo' },

  { id: 'shop-nova', name: 'Tienda Nova', category: 'ecommerce' },
  { id: 'shop-bloom', name: 'Tienda Bloom', category: 'ecommerce' },
  { id: 'shop-velvet', name: 'Tienda Velvet', category: 'ecommerce' },
  { id: 'shop-orbit', name: 'Tienda Orbit', category: 'ecommerce' },
  { id: 'shop-luma', name: 'Tienda Luma', category: 'ecommerce' },

  { id: 'port-lumen', name: 'Portafolio Lumen', category: 'portafolio' },
  { id: 'port-studio', name: 'Portafolio Studio', category: 'portafolio' },
  { id: 'port-atelier', name: 'Portafolio Atelier', category: 'portafolio' },
  { id: 'port-grid', name: 'Portafolio Grid', category: 'portafolio' },
  { id: 'port-ink', name: 'Portafolio Ink', category: 'portafolio' },

  { id: 'land-impulso', name: 'Landing Impulso', category: 'landing' },
  { id: 'land-momentum', name: 'Landing Momentum', category: 'landing' },
  { id: 'land-ignite', name: 'Landing Ignite', category: 'landing' },
  { id: 'land-vertex', name: 'Landing Vertex', category: 'landing' },
  { id: 'land-apex', name: 'Landing Apex', category: 'landing' },

  { id: 'rest-braza', name: 'Restaurante Braza', category: 'restaurantes' },
  { id: 'rest-terracota', name: 'Restaurante Terracota', category: 'restaurantes' },
  { id: 'rest-sazon', name: 'Restaurante Sazón', category: 'restaurantes' },
  { id: 'rest-ambar', name: 'Restaurante Ámbar', category: 'restaurantes' },
];

function TemplateMockup({ category }: { category: CategoryId }) {
  const [colorA, colorB] = CATEGORY_COLORS[category];

  return (
    <div className="template-mockup" style={{ '--tpl-a': colorA, '--tpl-b': colorB } as CSSProperties}>
      <div className="template-mockup-bar">
        <span className="template-mockup-dot template-mockup-dot--red" />
        <span className="template-mockup-dot template-mockup-dot--amber" />
        <span className="template-mockup-dot template-mockup-dot--green" />
        <span className="template-mockup-url" />
      </div>
      <div className="template-mockup-body">
        <div className="template-mockup-block template-mockup-block--header" />
        <div className="template-mockup-block template-mockup-block--hero" />
        <div className="template-mockup-row">
          <div className="template-mockup-block template-mockup-block--card" />
          <div className="template-mockup-block template-mockup-block--card" />
          <div className="template-mockup-block template-mockup-block--card" />
        </div>
      </div>
    </div>
  );
}

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
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      <TemplateMockup category={template.category} />
      <p className="template-name">{template.name}</p>
      <span className="template-tag">{CATEGORY_LABELS[template.category]}</span>
    </motion.article>
  );
}

export function Plantillas() {
  const [activeCategory, setActiveCategory] = useState<FilterId>('todas');
  const filtered = activeCategory === 'todas' ? templates : templates.filter((t) => t.category === activeCategory);

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
