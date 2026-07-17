import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

const sections = ['Introducción', 'Problemas comunes', 'Solución', 'Qué incluye', 'Casos de uso', 'Proceso', 'Entregables', 'Tecnologías relacionadas', 'Preguntas frecuentes'];

export default function SistemasEmpresarialesPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Servicio" title="Sistemas empresariales" lead="Productos internos para equipos que necesitan control, trazabilidad y flujos claros." />
        <div className="meta-grid">
          {sections.map((item) => (
            <div key={item} className="card" style={{ padding: '1rem 1.15rem' }}>
              <h3>{item}</h3>
              <p>Disponible como estructura base para completar con contenido verificado.</p>
            </div>
          ))}
          <Link href="/contacto" className="button button-primary">Hablar sobre este servicio</Link>
        </div>
      </div>
    </main>
  );
}