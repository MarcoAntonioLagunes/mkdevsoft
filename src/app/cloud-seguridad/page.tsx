import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

const sections = ['Introducción', 'Problemas comunes', 'Solución', 'Qué incluye', 'Casos de uso', 'Proceso', 'Entregables', 'Tecnologías relacionadas', 'Preguntas frecuentes'];

export default function CloudSeguridadPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Servicio" title="Cloud e infraestructura" lead="Arquitectura lista para desplegar, monitorear y evolucionar con seguridad base." />
        <div className="meta-grid">
          {sections.map((item) => (
            <div key={item} className="card" style={{ padding: '1rem 1.15rem' }}>
              <h3>{item}</h3>
              <p>Espacio reservado para ampliar la propuesta técnica en fases posteriores.</p>
            </div>
          ))}
          <Link href="/contacto" className="button button-primary">Hablar sobre este servicio</Link>
        </div>
      </div>
    </main>
  );
}