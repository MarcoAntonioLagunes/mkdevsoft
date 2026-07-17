import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

const commonSections = [
  'Introducción',
  'Problemas comunes',
  'Solución',
  'Qué incluye',
  'Casos de uso',
  'Proceso',
  'Entregables',
  'Tecnologías relacionadas',
  'Preguntas frecuentes',
];

export default function DesarrolloWebPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader
          eyebrow="Servicio"
          title="Plataformas web"
          lead="Sitios, portales y experiencias web pensadas para presentar la marca, captar oportunidades y apoyar operaciones reales."
        />
        <div className="meta-grid">
          {commonSections.map((item) => (
            <div key={item} className="card" style={{ padding: '1rem 1.15rem' }}>
              <h3>{item}</h3>
              <p>Contenido por completar en la siguiente fase de implementación.</p>
            </div>
          ))}
          <Link href="/contacto" className="button button-primary">
            Hablar sobre este servicio
          </Link>
        </div>
      </div>
    </main>
  );
}