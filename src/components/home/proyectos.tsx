'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { projects, type ProjectCategory } from '@/data/projects';
import { ProjectCard } from '@/components/proyectos/ProjectCard';

type FilterId = 'todas' | ProjectCategory;

const CATEGORIES: { id: FilterId; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'Web', label: 'Web' },
  { id: 'Web App', label: 'Web App' },
  { id: 'Móvil', label: 'Móvil' },
];

export function Proyectos() {
  const [activeCategory, setActiveCategory] = useState<FilterId>('todas');
  const filtered = activeCategory === 'todas' ? projects : projects.filter((item) => item.category === activeCategory);

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Proyectos</SectionEyebrow>
          <h2>Proyectos reales, resultados reales.</h2>
          <p>Sitios y plataformas que he diseñado, desarrollado y puesto en producción.</p>
        </header>

        <div className="proyectos-filter-bar" role="tablist" aria-label="Filtrar proyectos por tipo">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`proyectos-filter-pill${activeCategory === cat.id ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="proyectos-grid">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((project) => <ProjectCard key={project.id} project={project} />)
            ) : (
              <div className="proyectos-empty" key="empty-state">
                <strong>Próximamente</strong>
                <span>Todavía no tengo un proyecto de este tipo listo para mostrar.</span>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
