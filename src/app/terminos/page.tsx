import { PageHeader } from '@/components/ui/page-header';

export default function TerminosPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Legal" title="Términos de uso" lead="Base editorial para condiciones de uso, alcance y límites del servicio, sin asesoría legal ni afirmaciones no verificadas." />
        <div className="meta-grid">
          <section className="card" style={{ padding: '1rem 1.15rem' }}>
            <h3>TODO: alcance del servicio</h3>
            <p className="legal-note">Agregar entregables, revisiones, soporte y límites contractuales cuando existan las condiciones reales.</p>
          </section>
          <section className="card" style={{ padding: '1rem 1.15rem' }}>
            <h3>Uso del sitio</h3>
            <p>El sitio se ofrece como medio informativo y de contacto para proyectos de software e ingeniería.</p>
          </section>
        </div>
      </div>
    </main>
  );
}