import { PageHeader } from '@/components/ui/page-header';
import { certifications } from '@/data/company';

export default function NosotrosPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Empresa" title="Nosotros" lead="MKDevSoft trabaja como una práctica de ingeniería de software enfocada en claridad, seguridad y evolución." />
        <div className="meta-grid">
          <section className="card" style={{ padding: '1rem 1.15rem' }}>
            <h3>Cómo trabajamos</h3>
            <p>En fase 1 se deja la base: una estructura editorial clara, preparada para completar con información verificada del propietario.</p>
          </section>
          <section className="card" style={{ padding: '1rem 1.15rem' }}>
            <h3>Confianza y formación</h3>
            <div className="chip-grid">
              {certifications.map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}