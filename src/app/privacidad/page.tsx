import { PageHeader } from '@/components/ui/page-header';

export default function PrivacidadPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Legal" title="Aviso de privacidad" lead="Documento base con placeholders explícitos hasta contar con razón social y datos legales verificados." />
        <div className="meta-grid">
          <section className="card" style={{ padding: '1rem 1.15rem' }}>
            <h3>TODO: datos del responsable</h3>
            <p className="legal-note">Completar razón social, domicilio, contacto legal y base jurídica antes de publicación final.</p>
          </section>
          <section className="card" style={{ padding: '1rem 1.15rem' }}>
            <h3>Tratamiento de datos</h3>
            <p>Los formularios y canales de contacto solo deben utilizarse para responder solicitudes de información y proyectos.</p>
          </section>
        </div>
      </div>
    </main>
  );
}