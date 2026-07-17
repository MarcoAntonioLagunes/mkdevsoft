import Link from 'next/link';
import type { CSSProperties } from 'react';
import { capabilities, certifications, company, featurePillars, processSteps } from '@/data/company';

const services = [
  { href: '/desarrollo-web', title: 'Plataformas web', problem: 'Sitios o experiencias que no convierten ni representan la operación real.', result: 'Interfaces claras para vender, informar y operar mejor.' },
  { href: '/sistemas-empresariales', title: 'Sistemas empresariales', problem: 'Procesos manuales, hojas de cálculo dispersas y control fragmentado.', result: 'Flujos internos confiables con trazabilidad y acceso por roles.' },
  { href: '/aplicaciones', title: 'Aplicaciones móviles', problem: 'Clientes y equipos que dependen de procesos lentos fuera de la app.', result: 'Apps pensadas para reservas, pedidos, seguimiento y fidelización.' },
  { href: '/automatizacion', title: 'Automatización e integraciones', problem: 'Tareas repetitivas y sistemas que no se comunican entre sí.', result: 'Automatización del trabajo manual y sincronización de datos.' },
  { href: '/cloud-seguridad', title: 'Cloud e infraestructura', problem: 'Despliegues improvisados y entornos difíciles de mantener.', result: 'Infraestructura preparada para operar, monitorear y escalar.' },
  { href: '/cloud-seguridad', title: 'Seguridad aplicada', problem: 'Riesgos de acceso, validación débil y falta de controles base.', result: 'Protección integrada desde el diseño del producto.' },
];

const projectHighlights = [
  { href: '/proyectos/ultracloud', title: 'UltraCloud', label: 'Proyecto destacado', description: 'Plataforma de referencia para una solución orientada a operación y crecimiento.' },
  { href: '/proyectos/asommn', title: 'ASOMMMN', label: 'Caso de implementación', description: 'Solución desarrollada para documentar estructura, alcance y aprendizajes.' },
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
            <p className="eyebrow">DESARROLLO WEB, APLICACIONES Y SOFTWARE A LA MEDIDA</p>
            <h1>Construimos soluciones digitales para hacer crecer tu empresa.</h1>
            <p className="lead">Diseñamos páginas web, aplicaciones y sistemas empresariales que digitalizan procesos, mejoran la operación y convierten ideas en productos funcionales.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto">Solicitar una propuesta</Link>
              <Link className="button button-secondary" href="/servicios">Explorar soluciones</Link>
              <a className="hero-link" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
            </div>
            <p className="hero-capabilities">Desarrollo web · Sistemas empresariales · Aplicaciones · Automatización</p>
          </div>
          <div className="hero-visual" aria-label="Vista previa de soluciones digitales de MKDevSoft">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-gridline" aria-hidden="true" />
            <article className="hero-main-window" aria-label="Interfaz principal de gestión empresarial">
              <div className="hero-window-bar"><span /><span /><span /><p>Plataforma empresarial</p></div>
              <div className="hero-window-body">
                <section className="hero-module hero-module-wide">
                  <p className="panel-kicker">Panel administrativo</p>
                  <h2>Gestión de clientes, proyectos y procesos en un solo lugar.</h2>
                </section>
                <section className="hero-module">
                  <p className="panel-kicker">Procesos</p>
                  <ul className="hero-list">
                    <li>Proyecto web</li>
                    <li>Sistema interno</li>
                    <li>App móvil</li>
                    <li>Flujo automatizado</li>
                  </ul>
                </section>
                <section className="hero-module">
                  <p className="panel-kicker">Actividad reciente</p>
                  <div className="hero-activity">
                    <span>Brief aprobado</span>
                    <span>API conectada</span>
                    <span>QA en progreso</span>
                  </div>
                </section>
              </div>
            </article>

            <article className="hero-web-window" aria-label="Vista de sitio corporativo">
              <div className="hero-window-bar"><span /><span /><span /><p>Sitio corporativo</p></div>
              <div className="hero-web-body">
                <div className="hero-web-nav" />
                <div className="hero-web-title" />
                <div className="hero-web-copy" />
                <div className="hero-web-cards"><span /><span /><span /></div>
              </div>
            </article>

            <article className="hero-mobile-window" aria-label="Vista de aplicación móvil">
              <div className="hero-mobile-notch" />
              <div className="hero-mobile-content">
                <p>App móvil</p>
                <div className="hero-mobile-card" />
                <div className="hero-mobile-card" />
              </div>
            </article>

            <article className="hero-code-window" aria-label="Vista de arquitectura y código">
              <pre>{`const solution = {
  web: true,
  mobile: true,
  automation: true,
};`}</pre>
            </article>

            <div className="hero-capability-cards" aria-label="Capacidades principales">
              <span>Usuarios y permisos</span>
              <span>Flujos automatizados</span>
              <span>Datos protegidos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-strip">
        <div className="container capabilities-grid" aria-label="Capacidades principales">
          {capabilities.map((item) => <span key={item} className="capability-pill">{item}</span>)}
        </div>
      </section>

      <section className="section" id="soluciones">
        <div className="container">
          <header className="section-heading"><p className="section-label">Servicios</p><h2>Soluciones construidas alrededor del problema, no del adorno visual.</h2></header>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="card service-card">
                <p className="card-label">{service.title}</p>
                <p className="card-copy"><strong>Problema:</strong> {service.problem}</p>
                <p className="card-copy"><strong>Resultado:</strong> {service.result}</p>
                <Link href={service.href} className="card-link">Ver página del servicio</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <header className="section-heading"><p className="section-label">Ingeniería</p><h2>Construimos más que interfaces.</h2></header>
          <div className="pillar-grid">
            {featurePillars.map((pillar) => <article key={pillar.title} className="card"><h3>{pillar.title}</h3><p>{pillar.description}</p></article>)}
          </div>
          <div className="diagram" aria-label="Diagrama de arquitectura"><div>Experiencia web</div><span>→</span><div>API y servicios</div><span>→</span><div>Datos y almacenamiento</div><span>→</span><div>Cloud, monitoreo y seguridad</div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-heading"><p className="section-label">Proceso</p><h2>Una secuencia de trabajo clara, con entregables definidos.</h2></header>
          <div className="timeline">
            {processSteps.map((step) => (
              <article key={step.step} className="timeline-item">
                <div className="timeline-step">{step.step}</div>
                <div>
                  <h3>{step.title}</h3>
                  <ul>{step.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt stack-section">
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

      <section className="section">
        <div className="container">
          <header className="section-heading"><p className="section-label">Proyectos</p><h2>Casos de implementación para documentar capacidad y evolución.</h2></header>
          <div className="project-grid">
            {projectHighlights.map((project) => (
              <article key={project.title} className="card project-card">
                <p className="card-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link href={project.href} className="card-link">Ver caso de implementación</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <header className="section-heading"><p className="section-label">Certificaciones y confianza</p><h2>Información verificable y centralizada, lista para crecer con evidencia real.</h2></header>
          <div className="chip-grid">{certifications.map((item) => <span key={item} className="chip">{item}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-cta">
          <p className="section-label">Contacto</p>
          <h2>Hablemos de tu proyecto con contexto, alcance y prioridades claras.</h2>
          <p>Si ya tienes una idea, un sistema existente o un reto por resolver, podemos revisar el mejor camino.</p>
          <Link className="button button-primary" href="/contacto">Ir al formulario de contacto</Link>
        </div>
      </section>
    </main>
  );
}