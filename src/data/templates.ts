export type TemplateCategory = 'restaurantes' | 'logistica' | 'fintech';
export type TemplatePreviewType = 'restaurant' | 'logistics' | 'bank';

export type TemplateDefinition = {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  badge: string;
  heroImage: string;
  heroAlt: string;
  accent: string;
  secondaryAccent: string;
  previewType: TemplatePreviewType;
  ctaLabel: string;
  ctaSecondary: string;
  features: string[];
  highlights: string[];
};

export const TEMPLATE_CATEGORIES: { id: TemplateCategory | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'restaurantes', label: 'Restaurantes' },
  { id: 'logistica', label: 'Logística' },
  { id: 'fintech', label: 'Fintech' },
];

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  restaurantes: 'Restaurante',
  logistica: 'Logística',
  fintech: 'Fintech',
};

export const templates: TemplateDefinition[] = [
  {
    id: 'restaurante-la-marea',
    name: 'Restaurante La Marea',
    category: 'restaurantes',
    description: 'Landing gastronómica premium para mariscos, reservas y carta con estilo veracruzano.',
    badge: 'Restaurante',
    heroImage: '/templates/restaurant-la-marea-hero.svg',
    heroAlt: 'Interfaz de restaurante La Marea con hero de mariscos y botones de reserva',
    accent: '#F59E0B',
    secondaryAccent: '#D97706',
    previewType: 'restaurant',
    ctaLabel: 'Reservar mesa',
    ctaSecondary: 'Ver menú',
    features: ['Reserva de mesas con horario disponible', 'Promociones del día', 'Menú destacado con fotos', 'Datos de ubicación y horario'],
    highlights: ['Hero con imagen marítima y CTA animado', 'Reserva confirmada en 3 pasos', 'Estado de mesas y tiempos de llegada'],
  },
  {
    id: 'aduanas-del-golfo',
    name: 'Aduanas del Golfo',
    category: 'logistica',
    description: 'Portal logístico para seguimiento de contenedores, cotizaciones y gestión de despacho internacional.',
    badge: 'Logística',
    heroImage: '/templates/logistics-easyship-hero.svg',
    heroAlt: 'Interfaz de aduanas con seguimiento de carga y timeline de envío',
    accent: '#0EA5E9',
    secondaryAccent: '#0369A1',
    previewType: 'logistics',
    ctaLabel: 'Cotizar envío',
    ctaSecondary: 'Rastrear carga',
    features: ['Seguimiento animado en timeline', 'Cotizaciones rápidas por ruta', 'Panel de estado de despacho', 'Indicadores de cumplimiento y tiempos'],
    highlights: ['Estado del contenedor en tiempo real', 'Cambio de etapas de envío', 'Resumen de rutas mar y terrestre'],
  },
  {
    id: 'banco-puerto',
    name: 'Banco Puerto',
    category: 'fintech',
    description: 'Experiencia financiera moderna con cuentas, tarjetas y transferencias desde un dashboard premium.',
    badge: 'Fintech',
    heroImage: '/templates/fintech-oval-bank-hero.svg',
    heroAlt: 'Interfaz de banco con saldo, tarjeta y lista de movimientos recientes',
    accent: '#7C3AED',
    secondaryAccent: '#0F172A',
    previewType: 'bank',
    ctaLabel: 'Transferir ahora',
    ctaSecondary: 'Ver movimientos',
    features: ['Saldo en tiempo real y gestión de tarjetas', 'Transferencias con confirmación', 'Movimientos recientes y metas', 'Panel financiero con comparativas'],
    highlights: ['Simulación de transferencia completada', 'Cards de saldo y gastos', 'Animación de cambio en paneles financieros'],
  },
];
