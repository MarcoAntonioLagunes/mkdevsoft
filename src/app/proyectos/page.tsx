import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

const projects = [
  { href: '/proyectos/ultracloud', title: 'UltraCloud', label: 'Proyecto destacado', summary: 'Caso de implementación para documentar arquitectura, seguridad y evolución.' },
  { href: '/proyectos/asommn', title: 'ASOMMMN', label: 'Caso de implementación', summary: 'Proyecto en estructura base para mostrar solución, proceso y aprendizajes.' },
];

export default function ProyectosPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Proyectos" title="Casos de implementación" lead="Espacio para documentar soluciones reales, estructura técnica y participación específica de MKDevSoft." />
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.href} className="card project-card">
              <p className="card-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link href={project.href} className="card-link">Ver caso</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}