export type ProjectCategory = 'Web' | 'Web App' | 'Móvil';
export type ProjectStatus = 'live' | 'soon';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  badge: string;
  tag: string;
  description: string;
  url?: string;
  images: string[];
  tech: string[];
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: 'rym-solar',
    title: 'RYM Solar',
    category: 'Web',
    badge: 'EN PRODUCCIÓN',
    tag: 'Empresa de paneles solares',
    description:
      'Sitio web corporativo para dar a conocer y promocionar los servicios de una empresa veracruzana de paneles solares.',
    url: 'https://rymsolarmx.netlify.app/',
    images: ['/projects/rym-solar-1.webp', '/projects/rym-solar-2.webp', '/projects/rym-solar-3.webp'],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    status: 'live',
  },
  {
    id: 'reclutamiento-asommmn',
    title: 'Plataforma de Reclutamiento ASOMMMN',
    category: 'Web App',
    badge: 'EN PRODUCCIÓN',
    tag: 'Plataforma de reclutamiento',
    description:
      'Plataforma full-stack para evaluar CVs y documentos de oficiales de la marina mercante, con roles de postulante, evaluador y administrador, autenticación JWT y backend REST.',
    url: 'https://reclutamiento-asommmn.netlify.app/',
    images: ['/projects/reclutamiento-asommmn-1.webp'],
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    status: 'live',
  },
  {
    id: 'asommmn',
    title: 'ASOMMMN',
    category: 'Web',
    badge: 'EN PRODUCCIÓN',
    tag: 'Sitio institucional',
    description:
      'Sitio institucional de la asociación, con una sección de noticias marítimas que se actualiza a diario de forma automatizada.',
    url: 'https://asommmn.org.mx/',
    images: ['/projects/asommmn-1.webp', '/projects/asommmn-2.webp', '/projects/asommmn-3.webp'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'live',
  },
  {
    id: 'portafolio-marco-lagunes',
    title: 'Marco Lagunes',
    category: 'Web',
    badge: 'PROYECTO PERSONAL',
    tag: 'Portafolio personal',
    description: 'Portafolio profesional de desarrollo full-stack, bilingüe en español e inglés.',
    url: 'https://portafoliomarcolagunes.netlify.app/es',
    images: [
      '/projects/portafolio-marco-lagunes-1.webp',
      '/projects/portafolio-marco-lagunes-2.webp',
      '/projects/portafolio-marco-lagunes-3.webp',
    ],
    tech: ['Next.js', 'Tailwind CSS'],
    status: 'live',
  },
  {
    id: 'proximo-web',
    title: 'Próximo proyecto web',
    category: 'Web',
    badge: 'PRÓXIMAMENTE',
    tag: 'Próximamente',
    description: '',
    images: [],
    tech: [],
    status: 'soon',
  },
  {
    id: 'proximo-webapp',
    title: 'Próxima plataforma web app',
    category: 'Web App',
    badge: 'PRÓXIMAMENTE',
    tag: 'Próximamente',
    description: '',
    images: [],
    tech: [],
    status: 'soon',
  },
];
