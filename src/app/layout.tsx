import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { company } from '@/data/company';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: { default: 'MKDevSoft | Ingeniería y desarrollo de software', template: '%s | MKDevSoft' },
  description: company.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'MKDevSoft | Ingeniería y desarrollo de software',
    description: company.description,
    url: '/',
    siteName: company.name,
    images: ['/og/default.svg'],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKDevSoft | Ingeniería y desarrollo de software',
    description: company.description,
    images: ['/og/default.svg'],
  },
  icons: { icon: '/brand/favicon.svg', apple: '/brand/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Navigation />
        <div id="contenido">{children}</div>
        <Footer />
      </body>
    </html>
  );
}