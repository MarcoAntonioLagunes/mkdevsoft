export const company = {
  name: 'MKDevSoft',
  legalName: 'MKDevSoft',
  description:
    'Empresa de ingeniería y desarrollo de software que diseña plataformas web, sistemas empresariales, aplicaciones, automatizaciones e infraestructura cloud.',
  location: 'Boca del Río, Veracruz',
  website: 'https://mkdevsoft.site',
  domain: 'mkdevsoft.site',
  email: 'contacto@mkdevsoft.site',
  phone: null as string | null,
  whatsapp: 'https://wa.me/522201064656',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  copyrightYear: new Date().getFullYear(),
};

export const navigation = [
  { id: 'inicio', href: '/', label: 'Inicio' },
  { id: 'soluciones', href: '/#soluciones', label: 'Soluciones' },
  { id: 'servicios', href: '/servicios', label: 'Servicios' },
  { id: 'proyectos', href: '/proyectos', label: 'Proyectos' },
  { id: 'proceso', href: '/#proceso', label: 'Proceso' },
  { id: 'nosotros', href: '/nosotros', label: 'Nosotros' },
  { id: 'contacto', href: '/contacto', label: 'Contacto' },
];

export const capabilities = [
  'Plataformas web',
  'Sistemas empresariales',
  'Aplicaciones',
  'Automatización',
  'Cloud',
  'Ciberseguridad',
];

export const featurePillars = [
  { title: 'Arquitectura', description: 'Diseñamos soluciones mantenibles, escalables y fáciles de evolucionar.' },
  { title: 'Experiencia de usuario', description: 'Jerarquía, claridad y navegación orientadas a tareas reales.' },
  { title: 'Seguridad', description: 'Validación, control de acceso y protección desde la base del sistema.' },
  { title: 'Operación y escalabilidad', description: 'Pensado para crecer sin rehacer todo cuando cambian las necesidades.' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Descubrimiento',
    deliverables: ['Documento de objetivos', 'Mapa del problema', 'Alcance inicial'],
  },
  {
    step: '02',
    title: 'Definición de producto y alcance',
    deliverables: ['Requerimientos', 'Priorización', 'Criterios de éxito'],
  },
  {
    step: '03',
    title: 'Diseño y arquitectura',
    deliverables: ['Prototipo', 'Arquitectura', 'Modelo de datos'],
  },
  {
    step: '04',
    title: 'Desarrollo, pruebas e iteración',
    deliverables: ['Incrementos funcionales', 'Pruebas', 'Documentación'],
  },
  {
    step: '05',
    title: 'Lanzamiento y evolución',
    deliverables: ['Despliegue', 'Plan de evolución', 'Soporte inicial'],
  },
];

export const technologyGroups = [
  { name: 'Frontend', items: ['Next.js', 'React', 'TypeScript'], description: 'Interfaces rápidas, mantenibles y orientadas a producto.' },
  { name: 'Backend', items: ['NestJS', 'Node.js', 'APIs REST'], description: 'Servicios estructurados para lógica de negocio y automatización.' },
  { name: 'Datos', items: ['PostgreSQL', 'MongoDB', 'Prisma'], description: 'Persistencia confiable con modelos adecuados para cada caso.' },
  { name: 'Cloud', items: ['AWS', 'Vercel', 'Railway'], description: 'Infraestructura lista para desplegar, observar y escalar.' },
  { name: 'Seguridad', items: ['JWT', 'RBAC', 'Validación', 'Cifrado'], description: 'Controles base para proteger accesos y datos sensibles.' },
  { name: 'Herramientas', items: ['Git', 'GitHub', 'Swagger', 'Postman'], description: 'Flujo de trabajo y documentación para equipos técnicos.' },
];

export const certifications = [
  'Cisco Certified Support Technician Cybersecurity',
  'Formación en redes',
  'Formación en IoT',
  'Cisco Packet Tracer',
  'Desarrollo Full Stack',
  'Experiencia en proyectos desplegados',
  'Experiencia de liderazgo',
];