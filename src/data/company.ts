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
  { id: 'plantillas', href: '/#plantillas', label: 'Plantillas' },
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

export const pricingPlans = [
  {
    id: 'esencial',
    name: 'Esencial',
    price: 'Desde $3,800 MXN',
    tagline: 'Página web de presencia para empezar a vender en línea.',
    bullets: ['Landing a medida', 'Diseño responsivo', 'Formulario de contacto', '1 ronda de ajustes'],
    featured: false,
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: 'Desde $8,500 MXN',
    tagline: 'Sitio con panel administrable para operar sin depender de nosotros.',
    bullets: ['Todo lo de Esencial', 'CMS para editar contenido', 'Integración WhatsApp y correo', 'SEO básico y analítica', '3 rondas de ajustes'],
    featured: true,
    badge: 'Más elegido',
  },
  {
    id: 'empresarial',
    name: 'Empresarial',
    price: 'Desde $18,000 MXN',
    tagline: 'Sistema a medida (ERP, CRM o app) para digitalizar tu operación.',
    bullets: ['Arquitectura backend a medida', 'Base de datos y roles de usuario', 'Integraciones (pagos, APIs, apps)', 'Soporte y mantenimiento incluido'],
    featured: false,
  },
];

export const guarantees = [
  { title: 'Código fuente entregado', description: 'El proyecto termina siendo tuyo: repositorio y accesos completos al finalizar.' },
  { title: 'Alcance definido por escrito', description: 'Cotización y entregables claros antes de empezar, sin sorpresas a mitad de proyecto.' },
  { title: 'Soporte post-lanzamiento', description: 'Acompañamiento incluido durante el periodo pactado tras la entrega.' },
  { title: 'Comunicación directa', description: 'Un solo punto de contacto con nuestro equipo durante todo el proyecto.' },
];

export const comparisonRows = [
  { feature: 'Tiempo de respuesta', freelancer: 'Variable, depende de su disponibilidad', mkdevsoft: 'Comunicación directa y ágil con nuestro equipo', agencia: 'Procesos largos con varios intermediarios' },
  { feature: 'Precio', freelancer: 'Bajo, con riesgo de calidad dispareja', mkdevsoft: 'Accesible para PyMEs, con alcance claro', agencia: 'Alto, pensado para cuentas grandes' },
  { feature: 'Atención', freelancer: 'Una sola persona, sin respaldo', mkdevsoft: 'Equipo dedicado con respaldo real', agencia: 'Atención genérica de cuenta' },
  { feature: 'Escalabilidad', freelancer: 'Limitada a la disponibilidad de una persona', mkdevsoft: 'Arquitectura pensada para crecer', agencia: 'Escalable, con costos elevados' },
  { feature: 'Soporte post-entrega', freelancer: 'Poco frecuente o informal', mkdevsoft: 'Incluido y documentado por plan', agencia: 'Existe, con contratos rígidos' },
];

// TODO: Reemplazar estos 3 testimonios placeholder con citas reales de clientes cuando estén disponibles.
export const testimonials = [
  { quote: 'Aquí irá el testimonio real de un cliente que ya trabajó con nuestro equipo.', author: 'Nombre del cliente', role: 'Empresa · Boca del Río' },
  { quote: 'Espacio reservado para una segunda experiencia real documentada.', author: 'Nombre del cliente', role: 'Empresa · Veracruz' },
  { quote: 'Espacio reservado para una tercera experiencia real documentada.', author: 'Nombre del cliente', role: 'Empresa · Veracruz' },
];

export const faqItems = [
  { question: '¿Cuánto tiempo toma un proyecto?', answer: 'Depende del alcance: un sitio de presencia puede estar listo en 1-2 semanas, mientras que un sistema a medida toma varias semanas según los módulos definidos en el alcance inicial.' },
  { question: '¿Cómo funcionan los pagos?', answer: 'Trabajamos con un anticipo para iniciar y pagos por avance según los entregables definidos en la cotización.' },
  { question: '¿Qué pasa si necesito cambios después de la entrega?', answer: 'Cada plan incluye rondas de ajustes definidas, y ofrecemos soporte y mantenimiento post-lanzamiento como servicio continuo.' },
  { question: '¿Puedo pedir algo que no está en los planes?', answer: 'Sí, los planes son un punto de partida. Usa el cotizador rápido o escríbenos para armar una propuesta a la medida de tu proyecto.' },
  { question: '¿Trabajan con negocios fuera de Veracruz?', answer: 'Sí, trabajamos de forma remota con clientes en distintas ciudades; la mayor parte de nuestro proceso se puede llevar a distancia.' },
];