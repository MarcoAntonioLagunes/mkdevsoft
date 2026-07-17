# MKDevSoft

Aplicacion web oficial de MKDevSoft construida con Next.js para presentar servicios, proyectos y canales de contacto.

## Stack

- Next.js (App Router)
- React
- TypeScript
- ESLint

## Requisitos

- Node.js 18+
- npm 9+

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Aplicacion local en `http://localhost:3000`.

## Build de produccion

```bash
npm run build
npm run start
```

## Variables de entorno

Crea un archivo `.env.local` basado en `.env.example`.

Variables requeridas:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_GITHUB_URL`

## Despliegue en Vercel

1. Importar este repositorio en Vercel.
2. Configurar todas las variables de entorno requeridas.
3. Confirmar framework detectado: Next.js.
4. Ejecutar deploy en rama `main`.

Dominio previsto: `https://mkdevsoft.site`
