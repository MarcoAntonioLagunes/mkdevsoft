import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';

const PROYECTOS_TITLE = 'Proyectos y casos de implementación';
const PROYECTOS_DESCRIPTION = 'Conoce los proyectos que hemos desarrollado: arquitectura, procesos y resultados documentados para negocios reales.';

export const metadata: Metadata = {
  title: PROYECTOS_TITLE,
  description: PROYECTOS_DESCRIPTION,
  alternates: { canonical: '/proyectos' },
  openGraph: {
    title: `${PROYECTOS_TITLE} | MKDevSoft`,
    description: PROYECTOS_DESCRIPTION,
    url: '/proyectos',
    images: ['/og/mkdevsoft-og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROYECTOS_TITLE} | MKDevSoft`,
    description: PROYECTOS_DESCRIPTION,
    images: ['/og/mkdevsoft-og-image.png'],
  },
};

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