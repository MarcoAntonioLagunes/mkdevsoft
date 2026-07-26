import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mkdevsoft.netlify.app/';

  return [
    '/',
    '/servicios',
    '/desarrollo-web',
    '/sistemas-empresariales',
    '/aplicaciones',
    '/automatizacion',
    '/cloud-seguridad',
    '/proyectos',
    '/proyectos/ultracloud',
    '/proyectos/asommn',
    '/nosotros',
    '/contacto',
    '/privacidad',
    '/terminos',
  ].map((url) => ({ url: `${baseUrl}${url}`, lastModified: new Date() }));
}