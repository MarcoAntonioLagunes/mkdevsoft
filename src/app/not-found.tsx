import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section">
      <div className="container contact-cta">
        <p className="section-label">404</p>
        <h1>Página no encontrada</h1>
        <p className="lead">La ruta solicitada no existe o fue movida durante la reconstrucción del sitio.</p>
        <Link href="/" className="button button-primary">Volver al inicio</Link>
      </div>
    </main>
  );
}