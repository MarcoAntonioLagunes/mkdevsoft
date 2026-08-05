export type TemplateCategory = 'corporativo' | 'ecommerce' | 'portafolio' | 'landing' | 'restaurantes';

export type PreviewType =
  | 'restaurante'
  | 'aduanas'
  | 'banco'
  | 'ecommerce'
  | 'clinica'
  | 'software'
  | 'portafolio'
  | 'landing'
  | 'barberia'
  | 'inmobiliaria'
  | 'legal'
  | 'hotel'
  | 'turismo'
  | 'fitness';

export type Template = {
  id: string;
  name: string;
  category: TemplateCategory;
  previewType: PreviewType;
  imageUrl: string;
  description: string;
  feature: string;
};

export const templates: Template[] = [
  {
    id: 'mk-software-studio',
    name: 'MK Software Studio',
    category: 'corporativo',
    previewType: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
    description: 'Portal corporativo para estudio creativo con métricas y servicio premium.',
    feature: 'Panel interno con métricas, módulos y seguimiento de proyectos.',
  },
  {
    id: 'banco-puerto',
    name: 'Banco Puerto',
    category: 'corporativo',
    previewType: 'banco',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80',
    description: 'Dashboard de banca digital con saldo, transferencias y confirmaciones.',
    feature: 'Experiencia bancaria premium con estado de cuentas y movimientos recientes.',
  },
  {
    id: 'aduanas-golfo',
    name: 'Aduanas del Golfo',
    category: 'corporativo',
    previewType: 'aduanas',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    description: 'Portal logístico para monitoreo de contenedores y trazabilidad aduanera.',
    feature: 'Vista de estado de carga, seguimiento y alertas de entrega en tiempo real.',
  },
  {
    id: 'corp-vantage',
    name: 'Vantage Corporativo',
    category: 'corporativo',
    previewType: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80',
    description: 'Territorio de servicios corporativos con panel de rendimiento y equipo.',
    feature: 'Landing con ventajas competitivas, clientes y métricas de confianza.',
  },
  {
    id: 'corp-nimbus',
    name: 'Nimbus Corporativo',
    category: 'corporativo',
    previewType: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1492725764894-5c1b1b52aa3b?auto=format&fit=crop&w=1400&q=80',
    description: 'Página institucional con enfoque en soluciones digitales y confianza.',
    feature: 'Mensaje corporativo potente con secciones de equipo y éxito de proyectos.',
  },
  {
    id: 'tienda-nova',
    name: 'Tienda Nova',
    category: 'ecommerce',
    previewType: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
    description: 'Tienda online con productos destacados, carrito y compra rápida.',
    feature: 'Interfaz de comercio con productos, etiquetas premium y resumen de carrito.',
  },
  {
    id: 'shop-bloom',
    name: 'Bloom E-commerce',
    category: 'ecommerce',
    previewType: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1400&q=80',
    description: 'E-commerce de moda con colección destacada y diseño visual limpio.',
    feature: 'Landing de producto con fichas de colección, valoraciones y ofertas.',
  },
  {
    id: 'shop-velvet',
    name: 'Velvet E-commerce',
    category: 'ecommerce',
    previewType: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1400&q=80',
    description: 'Checkout elegante para productos premium con proceso de pago claro.',
    feature: 'Interfaz de compra con resumen de pago y confirmación visual.',
  },
  {
    id: 'shop-orbit',
    name: 'Orbit E-commerce',
    category: 'ecommerce',
    previewType: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80',
    description: 'Marketplace con categorías y destacados listos para subir conversiones.',
    feature: 'Navegación de producto con tarjetas, filtros y llamada a la acción.',
  },
  {
    id: 'shop-luma',
    name: 'Luma E-commerce',
    category: 'ecommerce',
    previewType: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5dc?auto=format&fit=crop&w=1400&q=80',
    description: 'Tienda de lifestyle con envíos, promociones y páginas de producto claras.',
    feature: 'UX de tienda moderna con stock, ofertas y detalles del producto.',
  },
  {
    id: 'port-lumen',
    name: 'Lumen Portafolio',
    category: 'portafolio',
    previewType: 'portafolio',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    description: 'Portafolio profesional con muestras de trabajo y contacto directo.',
    feature: 'Galería visual con tarjetas de caso, biografía y secciones de servicios.',
  },
  {
    id: 'port-studio',
    name: 'Studio Portafolio',
    category: 'portafolio',
    previewType: 'portafolio',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    description: 'Portafolio creativo para estudios de branding con apariencia premium.',
    feature: 'Presenta proyectos, clientes y narrativa de diseño en un solo lugar.',
  },
  {
    id: 'port-atelier',
    name: 'Atelier Portafolio',
    category: 'portafolio',
    previewType: 'portafolio',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    description: 'Landing personal para creativos con foco en estilo y propuestas.',
    feature: 'Secciones de servicios, testimonios y trabajo en un diseño ágil.',
  },
  {
    id: 'port-grid',
    name: 'Grid Portafolio',
    category: 'portafolio',
    previewType: 'portafolio',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    description: 'Portafolio moderno con presentación en mosaico y entrada visual.',
    feature: 'Grid de proyectos con enfoque en casos de estudio y llamada a la acción.',
  },
  {
    id: 'port-ink',
    name: 'Ink Portafolio',
    category: 'portafolio',
    previewType: 'portafolio',
    imageUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de7d780?auto=format&fit=crop&w=1400&q=80',
    description: 'Portafolio estilizado para creativos con énfasis en contenido visual.',
    feature: 'Experiencia editorial con tarjetas de proyecto y presentación de marca.',
  },
  {
    id: 'land-impulso',
    name: 'Impulso Landing',
    category: 'landing',
    previewType: 'landing',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    description: 'Landing de producto SaaS con propuesta clara y registro inmediato.',
    feature: 'Hero de conversión con beneficios, llamada a la acción y prueba social.',
  },
  {
    id: 'land-momentum',
    name: 'Momentum Landing',
    category: 'landing',
    previewType: 'landing',
    imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80',
    description: 'Landing para servicio digital con mensaje de alto impacto.',
    feature: 'Sección de valor, testimonios y formulario de contacto integrado.',
  },
  {
    id: 'land-ignite',
    name: 'Ignite Landing',
    category: 'landing',
    previewType: 'landing',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    description: 'Landing de experiencia digital con foco en demostraciones y ventas.',
    feature: 'Muestra beneficios, módulos y CTA visual para conversiones rápidas.',
  },
  {
    id: 'land-vertex',
    name: 'Vertex Landing',
    category: 'landing',
    previewType: 'landing',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80',
    description: 'Landing empresarial con presentación de solución y clientes.',
    feature: 'Contenido premium con misión, servicio y demostración de resultados.',
  },
  {
    id: 'clinica-costa',
    name: 'Clínica Costa',
    category: 'landing',
    previewType: 'clinica',
    imageUrl: 'https://images.unsplash.com/photo-1512446810254-7f49e0b4b9a2?auto=format&fit=crop&w=1400&q=80',
    description: 'Site de cita médica con agenda, paciente y confirmación de visita.',
    feature: 'Entrada de agenda con horario, especialidad y estado de reserva.',
  },
  {
    id: 'restaurante-la-marea',
    name: 'Restaurante La Marea',
    category: 'restaurantes',
    previewType: 'restaurante',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
    description: 'Página de reserva para restaurante costero con hero apetecible.',
    feature: 'Mini UI de reserva y detalle de mesa diseñada para inspirar confianza.',
  },
  {
    id: 'rest-terracota',
    name: 'Terracota Restaurante',
    category: 'restaurantes',
    previewType: 'restaurante',
    imageUrl: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1400&q=80',
    description: 'Restaurante íntimo con experiencia de cena y menú digital.',
    feature: 'Card de menú, llamadas a la acción y reservas con estilo cálido.',
  },
  {
    id: 'rest-sazon',
    name: 'Sazón Restaurante',
    category: 'restaurantes',
    previewType: 'restaurante',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1a5c5a5dc4b?auto=format&fit=crop&w=1400&q=80',
    description: 'Landing culinaria con especialidades, horarios y experiencia gourmet.',
    feature: 'Panel de menú premium con reservas y secciones de sabor en foco.',
  },
  {
    id: 'rest-ambar',
    name: 'Ámbar Restaurante',
    category: 'restaurantes',
    previewType: 'restaurante',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80',
    description: 'Experiencia de reservación con ambiente moderno y estilo gourmet.',
    feature: 'Interfaz de restaurante elegante con menú y acciones de reserva.',
  },
  {
    id: 'barberia-puerto',
    name: 'Barbería Puerto',
    category: 'corporativo',
    previewType: 'barberia',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
    description: 'Barbería premium con agenda visual, servicios y confirmación de cita.',
    feature: 'Mini UI de agenda con selección de barbería, horario y reserva.',
  },
  {
    id: 'faro-inmobiliaria',
    name: 'Bienes Raíces Faro',
    category: 'landing',
    previewType: 'inmobiliaria',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    description: 'Portal inmobiliario con filtros, resultados y ficha de propiedad.',
    feature: 'Busca casas y departamentos con vista al mar y reserva tu visita.',
  },
  {
    id: 'bufete-veracruz',
    name: 'Bufete Veracruz',
    category: 'corporativo',
    previewType: 'legal',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    description: 'Sitio legal elegante con servicios, formulario y notificaciones de caso.',
    feature: 'Landing profesional para bufete con consulta rápida y estadísticas.',
  },
  {
    id: 'hotel-horizonte',
    name: 'Hotel Horizonte',
    category: 'landing',
    previewType: 'hotel',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    description: 'Reserva de hotel frente al mar con fechas, huéspedes y confirmación.',
    feature: 'Interfaz de reserva clara con habitaciones, check-in y precio final.',
  },
  {
    id: 'veracruz-travel',
    name: 'Veracruz Travel',
    category: 'ecommerce',
    previewType: 'turismo',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    description: 'Agencia de viajes con paquetes, viajeros y resumen de reserva.',
    feature: 'Mini UI de turismo con destino, paquete y estado de viaje reservado.',
  },
  {
    id: 'titan-fitness',
    name: 'Titan Fitness',
    category: 'corporativo',
    previewType: 'fitness',
    imageUrl: 'https://images.unsplash.com/photo-1534430480875-774a74a01d1b?auto=format&fit=crop&w=1400&q=80',
    description: 'Dashboard de fitness con rutinas, calorías y progreso semanal.',
    feature: 'Interfaz de entrenamiento con medidor de objetivos y desbloqueo de insignias.',
  },
];
