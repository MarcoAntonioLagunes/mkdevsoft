import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

const sections = ['Introducción', 'Problemas comunes', 'Solución', 'Qué incluye', 'Casos de uso', 'Proceso', 'Entregables', 'Tecnologías relacionadas', 'Preguntas frecuentes'];

export default function AplicacionesPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Servicio" title="Aplicaciones" lead="Experiencias móviles y multiplataforma para operaciones, clientes y equipos." />
        <div className="meta-grid">
          {sections.map((item) => (
            <div key={item} className="card" style={{ padding: '1rem 1.15rem' }}>
              <h3>{item}</h3>
              <p>Estructura base lista para desarrollar la versión final.</p>
            </div>
          ))}
          <Link href="/contacto" className="button button-primary">Hablar sobre este servicio</Link>
        </div>
      </div>
    </main>
  );
}