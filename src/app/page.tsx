import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { capabilities, company, featurePillars, processSteps } from '@/data/company';
import { Reveal } from '@/components/home/reveal';
import { TerminalMockup } from '@/components/home/terminal-mockup';
import { IconCard } from '@/components/ui/icon-card';
import { Pricing } from '@/components/home/pricing';
import { QuoteCalculator } from '@/components/home/quote-calculator';
import { Plantillas } from '@/components/home/plantillas';
import { Guarantees } from '@/components/home/guarantees';
import { Comparison } from '@/components/home/comparison';
import { Faq } from '@/components/home/faq';
import { CheckIcon } from '@/components/ui/check-icon';

const HOME_TITLE = 'MKDevSoft — Desarrollo de software para PyMEs en Veracruz';
const HOME_DESCRIPTION = 'Páginas web, sistemas ERP/CRM y apps a la medida para negocios en Boca del Río y Veracruz. Cotiza tu proyecto hoy.';

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: '/',
    images: ['/og/mkdevsoft-og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ['/og/mkdevsoft-og-image.png'],
  },
};

const services = [
  {
    href: '/desarrollo-web',
    title: 'Plataformas web',
    description: 'Interfaces claras para vender, informar y operar mejor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
    ),
  },
  {
    href: '/sistemas-empresariales',
    title: 'Sistemas empresariales',
    description: 'Flujos internos confiables con trazabilidad y acceso por roles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>
    ),
  },
  {
    href: '/aplicaciones',
    title: 'Aplicaciones móviles',
    description: 'Apps pensadas para reservas, pedidos, seguimiento y fidelización.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
    ),
  },
  {
    href: '/automatizacion',
    title: 'Automatización e integraciones',
    description: 'Automatización del trabajo manual y sincronización de datos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>
    ),
  },
  {
    href: '/cloud-seguridad',
    title: 'Cloud e infraestructura',
    description: 'Infraestructura preparada para operar, monitorear y escalar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a5.5 5.5 0 1 1 1.09-10.9A6 6 0 0 1 22 12a4.5 4.5 0 0 1-4.5 7Z" /></svg>
    ),
  },
  {
    href: '/cloud-seguridad',
    title: 'Seguridad aplicada',
    description: 'Protección integrada desde el diseño del producto.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
];

const pillarIcons = [
  (
    <svg key="architecture" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z" /><path d="M3 9h18M9 21V9" /></svg>
  ),
  (
    <svg key="ux" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m4 4 7 17 2-7 7-2Z" /></svg>
  ),
  (
    <svg key="security" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  (
    <svg key="scale" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17 9 11l4 4 8-8" /><path d="M15 7h6v6" /></svg>
  ),
];

const stackItems = [
  {
    name: 'HTML5',
    color: '#E34F26',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0V0zm12.82 18.21c.36.58.83 1.03 1.66 1.03.7 0 1.14-.35 1.14-.84 0-.58-.46-.79-1.23-1.13l-.42-.18c-1.21-.52-2.01-1.18-2.01-2.57 0-1.28.98-2.25 2.51-2.25 1.09 0 1.88.38 2.44 1.37l-1.34.86c-.29-.53-.61-.74-1.1-.74-.5 0-.82.31-.82.74 0 .52.32.73 1.07 1.05l.42.18c1.42.61 2.22 1.24 2.22 2.66 0 1.52-1.2 2.36-2.8 2.36-1.57 0-2.59-.75-3.09-1.73l1.35-.78zm-6.03.15c.27.48.51.88 1.09.88.55 0 .9-.22.9-1.08v-5.85h1.68v5.87c0 1.78-1.04 2.59-2.56 2.59-1.36 0-2.15-.7-2.56-1.54l1.45-.87z"/></svg>
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.23 12.004a2.236 2.236 0 1 1-4.472 0 2.236 2.236 0 0 1 4.472 0zm7.274 0c0-.81-1.014-1.58-2.686-2.142.386-1.702.28-3.08-.33-3.433-.14-.08-.31-.12-.5-.12-.76 0-1.74.45-2.78 1.23-.99-.86-1.98-1.32-2.72-1.32-.19 0-.36.04-.5.12-.62.36-.72 1.75-.31 3.48-1.65.56-2.66 1.33-2.66 2.13 0 .81 1.01 1.58 2.68 2.14-.39 1.7-.28 3.08.33 3.43.14.08.31.12.5.12.75 0 1.73-.45 2.77-1.22 1 .86 1.99 1.32 2.74 1.32.19 0 .36-.04.5-.12.62-.36.72-1.75.31-3.48 1.66-.56 2.67-1.33 2.67-2.13zm-2.07 0c0 .36-.56.9-1.58 1.33-.24-.82-.56-1.67-.95-2.54.38-.87.68-1.71.92-2.52 1.05.43 1.61.97 1.61 1.33zm-2.13 4.25c-.12.68-.35 1.09-.53 1.19-.05.03-.13.03-.23.03-.44 0-1.12-.3-1.88-.83.54-.57 1.07-1.23 1.55-1.97.38-.04.75-.1 1.09-.17zM12 16.45c-.64 0-1.27-.03-1.88-.09-.33-.48-.65-.99-.95-1.54-.3-.54-.57-1.09-.8-1.64.24-.55.51-1.1.81-1.65.3-.54.61-1.04.94-1.52.61-.06 1.24-.1 1.88-.1.65 0 1.28.04 1.89.1.33.48.64.99.94 1.53.3.54.57 1.09.81 1.64-.24.55-.51 1.1-.81 1.64-.3.54-.61 1.05-.94 1.53-.61.06-1.24.1-1.89.1zm-2.75 1.06c-.77.53-1.45.82-1.89.82-.1 0-.18-.01-.23-.04-.18-.1-.4-.5-.52-1.18.34.07.71.12 1.09.16.48.75 1 1.41 1.55 1.98zM4.6 12c0-.36.56-.9 1.58-1.33.24.82.56 1.67.95 2.54-.38.87-.68 1.71-.92 2.52-1.05-.43-1.61-.97-1.61-1.33zm2.13-4.25c.12-.68.35-1.09.53-1.19.05-.03.13-.03.23-.03.44 0 1.12.3 1.88.83-.54.57-1.07 1.23-1.55 1.97-.38.04-.75.1-1.09.17zm8.02 0c.77-.53 1.45-.82 1.89-.82.1 0 .18.01.23.04.18.1.4.5.52 1.18-.34-.07-.71-.12-1.09-.16-.48-.75-1-1.41-1.55-1.98z"/></svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#f2f2f7',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm0 1.8a8.7 8.7 0 0 1 7.68 12.8l-5.6-7.88h-1.56v7.58h1.8v-4.42l4.12 5.87A8.7 8.7 0 1 1 12 3.3z"/></svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0 1.6 6v12L12 24l10.4-6V6L12 0zm0 1.9 8.7 5v10.2L12 22.1 3.3 17.1V6.9L12 1.9zm-2.5 5.6v8.9h1.7V7.5H9.5zm3.5 0v8.9h1.7V7.5H13zm-6.6 9.1c.4.7 1.1 1.1 2.2 1.1s1.8-.4 2.2-1.1l-1.4-.8c-.2.3-.4.4-.8.4s-.6-.1-.8-.4l-1.4.8zm8.9 0c.4.7 1.1 1.1 2.2 1.1s1.8-.4 2.2-1.1l-1.4-.8c-.2.3-.4.4-.8.4s-.6-.1-.8-.4l-1.4.8z"/></svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M1.5 1.5h21v21h-21v-21zm11.56 9.06h-2.9v1.45h2.86c.84 0 1.24.35 1.24.9 0 .57-.42.9-1.19.9h-1.76v1.4h1.95c1.72 0 2.82-.86 2.82-2.33 0-1.36-.99-2.32-3.02-2.32zm-8.23 0v1.45h2.05v5.2h1.62v-5.2h2.05v-1.45H4.83z"/></svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="hero-eyebrow-dot" aria-hidden="true" />
              DISPONIBLE PARA NUEVOS PROYECTOS
            </p>
            <h1>Construimos <span className="text-gradient-brand">soluciones digitales</span> para hacer crecer tu empresa.</h1>
            <p className="lead">Diseñamos páginas web, aplicaciones y sistemas empresariales que digitalizan procesos, mejoran la operación y convierten ideas en productos funcionales.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto">Cotizar mi proyecto →</Link>
              <a className="hero-link" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
            </div>
            <div className="hero-trust-row">
              <span className="hero-trust-item"><CheckIcon />Entrega documentada</span>
              <span className="hero-trust-item"><CheckIcon />Stack moderno</span>
              <span className="hero-trust-item"><CheckIcon />Soporte post-lanzamiento</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Terminal de despliegue de MKDevSoft">
            <TerminalMockup />
          </div>
        </div>
      </section>

      <section className="capabilities-strip">
        <div className="container capabilities-grid" aria-label="Capacidades principales">
          {capabilities.map((item) => (
            <span key={item} className="capability-pill"><CheckIcon />{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="soluciones">
        <div className="container">
          <header className="section-heading"><p className="section-label">Servicios</p><h2>Soluciones construidas para tu negocio.</h2></header>
          <div className="service-grid">
            {services.map((service, index) => (
              <IconCard
                key={`${service.href}-${service.title}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                variant={index % 4}
              />
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      <QuoteCalculator />

      <Plantillas />

      <section className="section">
        <div className="container">
          <header className="section-heading"><p className="section-label">Ingeniería</p><h2>Construimos más que interfaces.</h2></header>
          <div className="pillar-grid">
            {featurePillars.map((pillar, index) => (
              <IconCard
                key={pillar.title}
                icon={pillarIcons[index % pillarIcons.length]}
                title={pillar.title}
                description={pillar.description}
                variant={index % 4}
              />
            ))}
          </div>
          <div className="flow-diagram" aria-label="Diagrama de arquitectura">
            <div className="flow-diagram-line"><span className="flow-diagram-dot" aria-hidden="true" /></div>
            {['Experiencia web', 'API y servicios', 'Datos y almacenamiento', 'Cloud, monitoreo y seguridad'].map((label, index) => (
              <div key={label} className="flow-node">
                <span className="flow-node-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <header className="section-heading"><p className="section-label">Proceso</p><h2>Un camino claro, paso a paso.</h2></header>
          <div className="process-horizontal">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.08} className="process-step">
                <div className="process-step-marker">{step.step}</div>
                <h3>{step.title}</h3>
                <ul>{step.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Guarantees />

      <Comparison />

      <section className="section stack-section">
        <div className="stack-visual" aria-hidden="true">
          <span className="stack-orbit stack-orbit-a" />
          <span className="stack-orbit stack-orbit-b" />
          <span className="stack-orbit stack-orbit-c" />
        </div>
        <div className="container stack-shell">
          <header className="section-heading stack-heading">
            <p className="section-label">Stack</p>
            <h2>Tecnología diseñada para impulsar tu negocio.</h2>
            <p className="stack-subtitle">Herramientas modernas para construir experiencias digitales, sistemas y productos preparados para evolucionar.</p>
          </header>
          <div className="stack-marquee" aria-label="Tecnologías principales">
            <div className="stack-track" role="list">
              {[...stackItems, ...stackItems].map((item, index) => (
                <article key={`${item.name}-${index}`} className="stack-item" style={{ '--tech-color': item.color } as CSSProperties} role="listitem">
                  <span className="stack-item-icon" aria-hidden="true">{item.icon}</span>
                  <span>{item.name}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <section className="section">
        <div className="container contact-cta">
          <p className="section-label">Contacto</p>
          <h2>Hablemos de tu proyecto.</h2>
          <p>Cuéntanos tu idea, sistema o reto: revisamos juntos el mejor camino.</p>
          <div className="contact-cta-actions">
            <a className="button button-whatsapp" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
            <Link className="button button-secondary" href="/contacto">Ir al formulario de contacto</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
