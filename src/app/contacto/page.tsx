import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { company } from '@/data/company';

const CONTACTO_TITLE = 'Contacto — Cotiza tu proyecto';
const CONTACTO_DESCRIPTION = 'Cuéntanos tu idea, sistema o reto. Te respondemos con una revisión inicial de alcance y siguientes pasos para tu proyecto.';

export const metadata: Metadata = {
  title: CONTACTO_TITLE,
  description: CONTACTO_DESCRIPTION,
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: `${CONTACTO_TITLE} | MKDevSoft`,
    description: CONTACTO_DESCRIPTION,
    url: '/contacto',
    images: ['/og/mkdevsoft-og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONTACTO_TITLE} | MKDevSoft`,
    description: CONTACTO_DESCRIPTION,
    images: ['/og/mkdevsoft-og-image.png'],
  },
};

export default function ContactoPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader eyebrow="Contacto" title="Cuéntanos tu proyecto" lead="Completa los datos y te responderemos con una revisión inicial del alcance y próximos pasos." />
        <div className="meta-grid">
          <ContactForm />
          <section className="card" style={{ padding: '1rem 1.15rem' }}>
            <h3>Contacto alternativo</h3>
            <p className="legal-note">Los enlaces definitivos deben configurarse desde src/data/company.ts cuando existan datos oficiales.</p>
            <div className="chip-grid">
              <span className="chip">Correo: {company.email ?? 'Pendiente de configuración'}</span>
              <span className="chip">WhatsApp: {company.whatsapp ?? 'Pendiente de configuración'}</span>
              <span className="chip">LinkedIn: {company.linkedin ?? 'Pendiente de configuración'}</span>
              <span className="chip">GitHub: {company.github ?? 'Pendiente de configuración'}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}