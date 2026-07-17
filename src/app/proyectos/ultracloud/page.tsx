import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

export default function UltraCloudPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader
          eyebrow="Proyecto destacado"
          title="UltraCloud"
          lead="Caso de implementación con estructura base para documentar contexto, arquitectura, seguridad y aprendizaje sin inventar métricas."
        />
        <div className="meta-grid">
          {['Contexto', 'Problema', 'Objetivo', 'Solución', 'Funciones principales', 'Arquitectura', 'Stack tecnológico', 'Seguridad', 'Proceso de desarrollo', 'Participación de MKDevSoft', 'Estado actual', 'Galería de imágenes', 'Aprendizajes', 'CTA'].map((item) => (
            <section key={item} className="card" style={{ padding: '1rem 1.15rem' }}>
              <h3>{item}</h3>
              <p>Contenido pendiente del propietario. Usar placeholders visibles hasta contar con información verificable.</p>
            </section>
          ))}
          <div className="muted-box">Placeholder de galería: aquí se insertarán capturas reales del proyecto cuando existan.</div>
          <Link href="/contacto" className="button button-primary">Consultar este proyecto</Link>
        </div>
      </div>
    </main>
  );
}