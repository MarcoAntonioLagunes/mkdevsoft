import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

export default function AsommnPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader
          eyebrow="Caso de implementación"
          title="ASOMMMN"
          lead="Estructura base para documentar una solución desarrollada sin exagerar resultados ni inventar clientes."
        />
        <div className="meta-grid">
          {['Contexto', 'Problema', 'Objetivo', 'Solución', 'Funciones principales', 'Arquitectura', 'Stack tecnológico', 'Seguridad', 'Proceso de desarrollo', 'Participación de MKDevSoft', 'Estado actual', 'Galería de imágenes', 'Aprendizajes', 'CTA'].map((item) => (
            <section key={item} className="card" style={{ padding: '1rem 1.15rem' }}>
              <h3>{item}</h3>
              <p>Placeholder editorial hasta recibir contenido verificable del proyecto.</p>
            </section>
          ))}
          <div className="muted-box">Placeholder de galería: agregar imágenes y descripciones cuando exista evidencia visual.</div>
          <Link href="/contacto" className="button button-primary">Consultar este proyecto</Link>
        </div>
      </div>
    </main>
  );
}