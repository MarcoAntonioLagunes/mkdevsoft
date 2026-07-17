import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal('')),
  solutionType: z.string().min(2),
  projectStatus: z.string().min(2),
  goal: z.string().min(10),
  budget: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
  description: z.string().min(20),
  honeypot: z.string().optional().or(z.literal('')),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Verifica los campos marcados antes de enviar.' }, { status: 400 });
  }

  const { honeypot, ...data } = parsed.data;

  if (honeypot) {
    return NextResponse.json({ message: 'Solicitud rechazada.' }, { status: 202 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ message: 'El formulario está listo, pero falta configurar el correo del servidor.' }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `Nuevo proyecto de ${data.name}`,
    replyTo: data.email,
    text: [
      `Nombre: ${data.name}`,
      `Empresa: ${data.company}`,
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone || 'No indicado'}`,
      `Tipo de solución: ${data.solutionType}`,
      `Estado actual: ${data.projectStatus}`,
      `Objetivo: ${data.goal}`,
      `Presupuesto: ${data.budget || 'No indicado'}`,
      `Fecha esperada: ${data.timeline || 'No indicada'}`,
      `Descripción: ${data.description}`,
    ].join('\n'),
  });

  return NextResponse.json({ message: 'Tu solicitud fue enviada correctamente.' });
}