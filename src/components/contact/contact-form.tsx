'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { plantillas } from '@/data/plantillas';
import styles from './contact-form.module.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Ingresa tu nombre.'),
  company: z.string().min(2, 'Ingresa tu empresa u organización.'),
  email: z.string().email('Ingresa un correo válido.'),
  phone: z.string().optional().or(z.literal('')),
  solutionType: z.string().min(2, 'Selecciona el tipo de solución.'),
  projectStatus: z.string().min(2, 'Selecciona el estado actual.'),
  goal: z.string().min(10, 'Describe el objetivo principal con más detalle.'),
  budget: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
  description: z.string().min(20, 'Describe brevemente el proyecto.'),
  honeypot: z.string().optional().or(z.literal('')),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const solutionOptions = ['Plataforma web', 'Sistema empresarial', 'Aplicación móvil', 'Automatización', 'Cloud e infraestructura', 'Seguridad aplicada'];
const projectStatusOptions = ['Idea inicial', 'Definición de alcance', 'Diseño o prototipo', 'Desarrollo en curso', 'Sistema existente a mejorar'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [cooldown, setCooldown] = useState(false);
  const searchParams = useSearchParams();
  const requestedTemplate = useMemo(() => {
    const templateId = searchParams.get('plantilla');
    return templateId ? plantillas.find((template) => template.id === templateId) : undefined;
  }, [searchParams]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      solutionType: requestedTemplate ? 'Plataforma web' : '',
      projectStatus: '',
      goal: '',
      budget: '',
      timeline: '',
      description: requestedTemplate ? `Me interesa: ${requestedTemplate.title}. ` : '',
      honeypot: '',
    },
  });

  useEffect(() => {
    if (!cooldown) return;
    const timeout = window.setTimeout(() => setCooldown(false), 12_000);
    return () => window.clearTimeout(timeout);
  }, [cooldown]);

  const envReady = useMemo(() => typeof process.env.NEXT_PUBLIC_SITE_URL === 'string', []);

  const onSubmit = handleSubmit(async (values) => {
    if (values.honeypot) return;
    if (cooldown) {
      setStatus('error');
      setStatusMessage('Espera unos segundos antes de enviar nuevamente.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Enviando tu solicitud...');

    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      const payload = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(payload.message ?? 'No fue posible enviar el formulario.');

      setStatus('success');
      setStatusMessage(payload.message ?? 'Tu mensaje fue enviado. Te contactaremos en breve.');
      reset();
      setCooldown(true);
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Hubo un problema al enviar el formulario.');
    }
  });

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <input type="hidden" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
      <div className={styles.grid}>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="name">Nombre</label><input id="name" className={styles.field} type="text" autoComplete="name" {...register('name')} />{errors.name ? <span className={styles.error}>{errors.name.message}</span> : null}</div>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="company">Empresa u organización</label><input id="company" className={styles.field} type="text" autoComplete="organization" {...register('company')} />{errors.company ? <span className={styles.error}>{errors.company.message}</span> : null}</div>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="email">Correo</label><input id="email" className={styles.field} type="email" autoComplete="email" {...register('email')} />{errors.email ? <span className={styles.error}>{errors.email.message}</span> : null}</div>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="phone">Teléfono opcional</label><input id="phone" className={styles.field} type="tel" autoComplete="tel" {...register('phone')} />{errors.phone ? <span className={styles.error}>{errors.phone.message}</span> : null}</div>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="solutionType">Tipo de solución</label><select id="solutionType" className={styles.select} defaultValue="" {...register('solutionType')}><option value="" disabled>Selecciona una opción</option>{solutionOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select>{errors.solutionType ? <span className={styles.error}>{errors.solutionType.message}</span> : null}</div>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="projectStatus">Estado actual del proyecto</label><select id="projectStatus" className={styles.select} defaultValue="" {...register('projectStatus')}><option value="" disabled>Selecciona una opción</option>{projectStatusOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select>{errors.projectStatus ? <span className={styles.error}>{errors.projectStatus.message}</span> : null}</div>
      </div>
      <div className={styles.fieldGroup}><label className={styles.label} htmlFor="goal">Objetivo principal</label><input id="goal" className={styles.field} type="text" {...register('goal')} />{errors.goal ? <span className={styles.error}>{errors.goal.message}</span> : null}</div>
      <div className={styles.grid}>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="budget">Presupuesto opcional</label><input id="budget" className={styles.field} type="text" {...register('budget')} />{errors.budget ? <span className={styles.error}>{errors.budget.message}</span> : null}</div>
        <div className={styles.fieldGroup}><label className={styles.label} htmlFor="timeline">Fecha esperada opcional</label><input id="timeline" className={styles.field} type="text" placeholder="Ej. Q4 2026" {...register('timeline')} />{errors.timeline ? <span className={styles.error}>{errors.timeline.message}</span> : null}</div>
      </div>
      <div className={styles.fieldGroup}><label className={styles.label} htmlFor="description">Descripción</label><textarea id="description" className={styles.textarea} {...register('description')} />{errors.description ? <span className={styles.error}>{errors.description.message}</span> : null}</div>
      <div className={styles.actions}><button className="button button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar proyecto'}</button><span className={styles.help}>La información se usa únicamente para responder tu solicitud.</span></div>
      <p className={`${styles.status} ${status === 'error' ? styles.error : ''} ${status === 'success' ? styles.success : ''}`} role="status" aria-live="polite">{statusMessage}</p>
      {!envReady ? <p className={styles.help}>Falta completar la configuración de entorno. Revisa <code>.env.example</code> antes de activar el envío.</p> : null}
    </form>
  );
}