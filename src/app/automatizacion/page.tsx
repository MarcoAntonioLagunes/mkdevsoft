import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

const sections = ['Introducción', 'Problemas comunes', 'Solución', 'Qué incluye', 'Casos de uso', 'Proceso', 'Entregables', 'Tecnologías relacionadas', 'Preguntas frecuentes'];

export default function AutomatizacionPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Servicio" title="Automatización e integraciones" lead="Conectamos sistemas, reducimos trabajo manual y damos más consistencia a la operación." />
        <div className="meta-grid">
          {sections.map((item) => (
            <div key={item} className="card" style={{ padding: '1rem 1.15rem' }}>
              <h3>{item}</h3>
              <p>Bloque preparado para completarse con decisiones de arquitectura y alcance.</p>
            </div>
          ))}
          <Link href="/contacto" className="button button-primary">Hablar sobre este servicio</Link>
        </div>
      </div>
    </main>
  );
}