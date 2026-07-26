import Link from 'next/link';

/**
 * Caso destacado de UltraCloud. No se renderiza en la home todavía —
 * queda disponible para reactivarse cuando haya una captura real del proyecto.
 */
export function UltraCloudShowcase() {
  return (
    <section className="section section-alt">
      <div className="container showcase-grid">
        <div className="showcase-copy">
          <p className="section-label">Caso destacado</p>
          <h2>UltraCloud: cómo construimos software real.</h2>
          <p className="lead">Arquitectura, seguridad y evolución de una plataforma pensada para operar y crecer.</p>
          <Link className="button button-secondary" href="/proyectos/ultracloud">Ver caso completo</Link>
        </div>
        <div className="showcase-media" aria-hidden="true">
          <span className="showcase-media-label">UltraCloud — captura próximamente</span>
        </div>
      </div>
    </section>
  );
}
