import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

const serviceRoutes = [
  { href: '/desarrollo-web', title: 'Plataformas web', summary: 'Sitios, portales y experiencias orientadas a conversión y operación.' },
  { href: '/sistemas-empresariales', title: 'Sistemas empresariales', summary: 'Herramientas internas para procesos, roles y trazabilidad.' },
  { href: '/aplicaciones', title: 'Aplicaciones', summary: 'Apps móviles y experiencias multiplataforma.' },
  { href: '/automatizacion', title: 'Automatización', summary: 'Integraciones y flujos para reducir trabajo manual.' },
  { href: '/cloud-seguridad', title: 'Cloud y seguridad', summary: 'Infraestructura, despliegue y protección base.' },
];

export default function ServiciosPage() {
  return (
    <main className="section">
      <div className="container">
        <PageHeader
          eyebrow="Servicios"
          title="Capacidades para construir software útil y sostenible."
          lead="Cada servicio responde a un problema distinto, pero todos comparten el mismo criterio: claridad, seguridad y orientación al negocio."
        />

        <div className="service-grid">
          {serviceRoutes.map((service) => (
            <article key={service.href} className="card service-card">
              <p className="card-label">{service.title}</p>
              <p>{service.summary}</p>
              <Link href={service.href} className="card-link">
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}