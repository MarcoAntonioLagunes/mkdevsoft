import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { company } from '@/data/company';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { ParticleBackground } from '@/components/layout/particle-background';
import { WhatsappFloat } from '@/components/layout/whatsapp-float';

const sora = Sora({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-sora' });
// Se mantiene cargada solo porque el watermark del footer sigue usando --font-space-grotesk (footer sin cambios).
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
    images: ['/og/mkdevsoft-og-image.png'],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKDevSoft | Ingeniería y desarrollo de software',
    description: company.description,
    images: ['/og/mkdevsoft-og-image.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
        <ParticleBackground />
        <div className="site-shell">
          <a className="skip-link" href="#contenido">
            Saltar al contenido
          </a>
          <Navigation />
          <div id="contenido">{children}</div>
          <Footer />
          <WhatsappFloat />
        </div>
      </body>
    </html>
  );
}