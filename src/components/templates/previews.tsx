'use client';

import { usePreviewScene } from '@/hooks/usePreviewScene';

export type PreviewProps = {
  shouldAnimate: boolean;
  reducedMotion: boolean;
};

function RestaurantPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(6, shouldAnimate, 1400);
  const selected = scene >= 2;
  const confirmed = scene >= 4;

  return (
    <div className="preview-panel preview-restaurant">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Restaurante La Marea</span>
        <strong className="preview-small-text">Sabor del mar</strong>
      </div>

      <div className="restaurant-hero">
        <div>
          <p className="preview-title">Sabor del mar, tradición veracruzana</p>
          <p className="preview-copy">Reserva tu mesa frente al puerto con menú fresco y ambiente premium.</p>
        </div>
        <div className={`hero-tag ${scene >= 1 ? 'hero-tag-active' : ''}`}>Reservar mesa</div>
      </div>

      <div className={`restaurant-form ${scene >= 1 ? 'restaurant-form-visible' : ''}`}>
        <div className={`restaurant-field ${scene >= 2 ? 'restaurant-field-active' : ''}`}>
          <span>Fecha</span>
          <strong>Vie, 12 Jul</strong>
        </div>
        <div className={`restaurant-field ${scene >= 3 ? 'restaurant-field-active' : ''}`}>
          <span>Hora</span>
          <strong>20:30</strong>
        </div>
        <div className={`restaurant-field ${scene >= 3 ? 'restaurant-field-active' : ''}`}>
          <span>Personas</span>
          <strong>4 invitados</strong>
        </div>
      </div>

      <div className={`restaurant-status ${confirmed ? 'restaurant-status-confirmed' : ''}`}>
        <span>{confirmed ? 'Reserva confirmada' : selected ? 'Selecciona tus datos' : 'Abre la agenda'}</span>
      </div>
    </div>
  );
}

function AduanasPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(6, shouldAnimate, 1400);
  const step = Math.min(scene, 4);

  const stepLabels = ['Recepción', 'En tránsito', 'Inspección', 'Liberado', 'Entregado'];

  return (
    <div className="preview-panel preview-aduanas">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Aduanas del Golfo</span>
        <strong className="preview-small-text">Guía #ADU-2048</strong>
      </div>

      <div className="timeline-bar">
        {stepLabels.map((label, index) => (
          <div key={label} className="timeline-step">
            <div className={`timeline-dot ${index <= step ? 'timeline-dot-active' : ''}`} />
            <span className={`timeline-label ${index <= step ? 'timeline-label-active' : ''}`}>{label}</span>
          </div>
        ))}
      </div>

      <div className="aduanas-summary">
        <div>
          <p className="preview-copy">Estado</p>
          <strong>{step < 4 ? 'En tránsito' : 'Entrega completada'}</strong>
        </div>
        <div className={`status-pill ${step >= 4 ? 'status-pill-success' : ''}`}>
          {step >= 4 ? 'Entregado' : `Paso ${step + 1} / 5`}
        </div>
      </div>
    </div>
  );
}

function BankPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);
  const transferred = scene >= 4;
  const success = scene >= 5;

  return (
    <div className="preview-panel preview-bank">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Banco Puerto</span>
        <strong className="preview-small-text">Cuenta Premium</strong>
      </div>

      <div className="bank-grid bank-overview">
        <div className="bank-card">
          <span>Saldo disponible</span>
          <strong>${success ? '15,220' : '18,420'}</strong>
        </div>
        <div className={`bank-card bank-card--accent ${scene >= 2 ? 'bank-card-active' : ''}`}>
          <span>{transferred ? 'Transferencia exitosa' : 'Transferir ahora'}</span>
          <strong>{transferred ? '+ $3,200' : '+ $0'}</strong>
        </div>
      </div>

      <div className={`bank-form ${scene >= 1 ? 'bank-form-visible' : ''}`}>
        <div className={`bank-field ${scene >= 2 ? 'bank-field-active' : ''}`}>
          <span>Destino</span>
          <strong>Cuenta 1234</strong>
        </div>
        <div className={`bank-field ${scene >= 3 ? 'bank-field-active' : ''}`}>
          <span>Monto</span>
          <strong>$3,200</strong>
        </div>
      </div>
    </div>
  );
}

function EcommercePreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1200);
  const added = scene >= 3;
  const confirmed = scene >= 5;

  return (
    <div className="preview-panel preview-ecommerce">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Tienda Nova</span>
        <strong className="preview-small-text">Moda & estilo</strong>
      </div>

      <div className="shop-hero">
        <div>
          <p className="preview-title">Estilo que inspira cada día</p>
          <p className="preview-copy">Destaca tu colección con fichas rápidas y carrito instantáneo.</p>
        </div>
        <div className={`hero-dot ${scene === 1 ? 'hero-dot-active' : ''}`}>Top</div>
      </div>

      <div className="shop-grid">
        <div className={`product-card ${scene >= 1 ? 'product-card-highlight' : ''}`}>
          <span className="product-tag">Nuevo</span>
          <strong>Chaqueta Nova</strong>
          <span>$129</span>
        </div>
        <div className={`product-card ${scene >= 4 ? 'product-card-badge' : ''}`}>
          <strong>Botines</strong>
          <span>$89</span>
        </div>
        <div className={`product-card ${scene >= 2 ? 'product-card-selected' : ''}`}>
          <strong>Bolso</strong>
          <span>$69</span>
        </div>
      </div>

      <div className="cart-summary">
        <span>{added ? '1 artículo agregado' : 'Carrito vacío'}</span>
        <strong>{confirmed ? '¡Listo para comprar!' : `$${added ? '129' : '0'}`}</strong>
      </div>
    </div>
  );
}

function ClinicPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(6, shouldAnimate, 1400);

  return (
    <div className="preview-panel preview-clinic">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Clínica Costa</span>
        <strong className="preview-small-text">Agenda médica</strong>
      </div>

      <div className="clinic-hero">
        <div>
          <p className="preview-title">Agenda tu consulta en minutos</p>
          <p className="preview-copy">Especialistas, fechas disponibles y confirmación inmediata.</p>
        </div>
        <div className={`hero-pill ${scene >= 1 ? 'hero-pill-active' : ''}`}>Agendar cita</div>
      </div>

      <div className="clinic-form">
        <div className={`clinic-field ${scene >= 2 ? 'clinic-field-active' : ''}`}>
          <span>Servicio</span>
          <strong>Consulta general</strong>
        </div>
        <div className={`clinic-field ${scene >= 3 ? 'clinic-field-active' : ''}`}>
          <span>Fecha</span>
          <strong>14 Julio</strong>
        </div>
        <div className={`clinic-field ${scene >= 4 ? 'clinic-field-active' : ''}`}>
          <span>Hora</span>
          <strong>09:30</strong>
        </div>
      </div>

      <div className={`clinic-confirm ${scene >= 5 ? 'clinic-confirm-active' : ''}`}>
        {scene >= 5 ? 'Cita confirmada' : 'Completa tus datos para reservar'}
      </div>
    </div>
  );
}

function SoftwarePreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);

  return (
    <div className="preview-panel preview-software">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">MK Software Studio</span>
        <strong className="preview-small-text">Dashboard</strong>
      </div>

      <div className="dashboard-metrics">
        <div className={`dashboard-tile ${scene >= 1 ? 'dashboard-tile-active' : ''}`}>
          <span>Usuarios</span>
          <strong>12.4K</strong>
        </div>
        <div className={`dashboard-tile ${scene >= 2 ? 'dashboard-tile-active' : ''}`}>
          <span>Proyectos</span>
          <strong>18</strong>
        </div>
      </div>

      <div className="dashboard-chart">
        <div className={`chart-line ${scene >= 3 ? 'preview-animate-chart' : ''}`} />
      </div>

      <div className="dashboard-actions">
        <div className={`dashboard-module ${scene >= 4 ? 'dashboard-module-active' : ''}`}>Proyectos</div>
        <div className={`dashboard-notice ${scene >= 5 ? 'dashboard-notice-active' : ''}`}>Nuevo comentario recibido</div>
      </div>
    </div>
  );
}

function BarberPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);

  return (
    <div className="preview-panel preview-barber">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Barbería Puerto</span>
        <strong className="preview-small-text">Corte & estilo</strong>
      </div>

      <div className="preview-hero preview-hero-dark">
        <div>
          <p className="preview-title">Estilo que te define</p>
          <p className="preview-copy">Reserva tu corte con barbería premium y atención personalizada.</p>
        </div>
        <div className={`hero-pill ${scene >= 1 ? 'hero-pill-active' : ''}`}>Agendar</div>
      </div>

      <div className="barber-grid">
        <div className={`barber-card ${scene >= 2 ? 'barber-card-active' : ''}`}>
          <span>Servicio</span>
          <strong>Corte clásico</strong>
        </div>
        <div className={`barber-card ${scene >= 3 ? 'barber-card-active' : ''}`}>
          <span>Barbero</span>
          <strong>Leo</strong>
        </div>
        <div className={`barber-card ${scene >= 4 ? 'barber-card-active' : ''}`}>
          <span>Horario</span>
          <strong>16:00</strong>
        </div>
      </div>

      <div className={`status-pill ${scene >= 5 ? 'status-pill-success' : ''}`}>
        {scene >= 5 ? 'Cita confirmada' : 'Selecciona tu turno'}
      </div>
    </div>
  );
}

function RealEstatePreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);

  return (
    <div className="preview-panel preview-realestate">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Bienes Raíces Faro</span>
        <strong className="preview-small-text">Venta & renta</strong>
      </div>

      <div className="search-row">
        <div className={`search-chip ${scene >= 1 ? 'search-chip-active' : ''}`}>Venta</div>
        <div className={`search-chip ${scene >= 2 ? 'search-chip-active' : ''}`}>Boca del Río</div>
      </div>

      <div className="property-grid">
        <div className={`property-card ${scene >= 3 ? 'property-card-active' : ''}`}>
          <span>Casa moderna</span>
          <strong>3 hab · 2 baños</strong>
        </div>
        <div className={`property-card ${scene >= 4 ? 'property-card-active' : ''}`}>
          <span>Departamento</span>
          <strong>Vista al mar</strong>
        </div>
      </div>

      <div className={`property-status ${scene >= 5 ? 'property-status-active' : ''}`}>
        {scene >= 5 ? 'Ficha destacada' : 'Resultados disponibles'}
      </div>
    </div>
  );
}

function LegalPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);

  return (
    <div className="preview-panel preview-legal">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Bufete Veracruz</span>
        <strong className="preview-small-text">Derecho corporativo</strong>
      </div>

      <div className="legal-grid">
        <div className={`legal-card ${scene >= 1 ? 'legal-card-active' : ''}`}>
          <span>Servicio</span>
          <strong>Corporativo</strong>
        </div>
        <div className={`legal-card ${scene >= 2 ? 'legal-card-active' : ''}`}>
          <span>Consulta</span>
          <strong>Formulario rápido</strong>
        </div>
      </div>

      <div className="legal-form">
        <div className={`legal-field ${scene >= 3 ? 'legal-field-active' : ''}`}>
          <span>Nombre</span>
          <strong>María G.</strong>
        </div>
        <div className={`legal-field ${scene >= 4 ? 'legal-field-active' : ''}`}>
          <span>Área</span>
          <strong>Contratos</strong>
        </div>
      </div>

      <div className={`status-pill ${scene >= 5 ? 'status-pill-success' : ''}`}>
        {scene >= 5 ? 'Solicitud recibida' : 'Envía tu consulta'}
      </div>
    </div>
  );
}

function HotelPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);

  return (
    <div className="preview-panel preview-hotel">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Hotel Horizonte</span>
        <strong className="preview-small-text">Check-in frente al mar</strong>
      </div>

      <div className="hotel-hero">
        <div>
          <p className="preview-title">Habitación con vista al horizonte</p>
          <p className="preview-copy">Reserva tu estadía con fecha flexible y precios claros.</p>
        </div>
        <div className={`hero-tag ${scene >= 1 ? 'hero-tag-active' : ''}`}>Reserva</div>
      </div>

      <div className="hotel-grid">
        <div className={`hotel-card ${scene >= 2 ? 'hotel-card-active' : ''}`}>
          <span>Entrada</span>
          <strong>22 Jul</strong>
        </div>
        <div className={`hotel-card ${scene >= 3 ? 'hotel-card-active' : ''}`}>
          <span>Salida</span>
          <strong>25 Jul</strong>
        </div>
        <div className={`hotel-card ${scene >= 4 ? 'hotel-card-active' : ''}`}>
          <span>Huéspedes</span>
          <strong>2 adultos</strong>
        </div>
      </div>

      <div className={`hotel-status ${scene >= 5 ? 'hotel-status-confirmed' : ''}`}>
        {scene >= 5 ? 'Reserva confirmada' : 'Elige tu habitación favorita'}
      </div>
    </div>
  );
}

function TravelPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);

  return (
    <div className="preview-panel preview-travel">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Veracruz Travel</span>
        <strong className="preview-small-text">Tours & paquetes</strong>
      </div>

      <div className="travel-carousel">
        <div className={`travel-card ${scene >= 1 ? 'travel-card-active' : ''}`}>
          <span>Destino</span>
          <strong>Isla</strong>
        </div>
        <div className={`travel-card ${scene >= 2 ? 'travel-card-active' : ''}`}>
          <span>Viajeros</span>
          <strong>3</strong>
        </div>
      </div>

      <div className="travel-summary">
        <span>Precio</span>
        <strong>{scene >= 4 ? '$1,290' : '$0'}</strong>
      </div>

      <div className={`status-pill ${scene >= 5 ? 'status-pill-success' : ''}`}>
        {scene >= 5 ? 'Viaje reservado' : 'Selecciona tu paquete'}</div>
    </div>
  );
}

function FitnessPreview({ shouldAnimate }: PreviewProps) {
  const scene = usePreviewScene(7, shouldAnimate, 1300);

  return (
    <div className="preview-panel preview-fitness">
      <div className="preview-row preview-header">
        <span className="preview-eyebrow">Titan Fitness</span>
        <strong className="preview-small-text">Progreso activo</strong>
      </div>

      <div className="fitness-grid">
        <div className={`fitness-card ${scene >= 1 ? 'fitness-card-active' : ''}`}>
          <span>Calorías</span>
          <strong>582</strong>
        </div>
        <div className={`fitness-card ${scene >= 2 ? 'fitness-card-active' : ''}`}>
          <span>Rutina</span>
          <strong>{scene >= 3 ? 'Cardio' : 'Fuerza'}</strong>
        </div>
      </div>

      <div className="fitness-progress">
        <span>Progreso</span>
        <div className={`fitness-meter ${scene >= 4 ? 'fitness-meter-complete' : ''}`} />
      </div>

      <div className={`status-pill ${scene >= 5 ? 'status-pill-success' : ''}`}>
        {scene >= 5 ? 'Insignia desbloqueada' : 'Sigue tu entrenamiento'}</div>
    </div>
  );
}

export {
  PreviewProps,
  RestaurantPreview,
  AduanasPreview,
  BankPreview,
  EcommercePreview,
  ClinicPreview,
  SoftwarePreview,
  BarberPreview,
  RealEstatePreview,
  LegalPreview,
  HotelPreview,
  TravelPreview,
  FitnessPreview,
};
