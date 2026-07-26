'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';
import { company, navigation } from '@/data/company';

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeHref = useMemo(() => {
    return navigation
      .filter((item) => !item.href.includes('#'))
      .find((item) => item.href !== '/' && pathname.startsWith(item.href))?.href ?? pathname;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={styles.nav} data-scrolled={scrolled}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={company.name} onClick={() => setOpen(false)}>
          <Image className={styles.brandMark} src="/og/mkdevsoft-icon-square-512.png" alt="" aria-hidden="true" width={42} height={42} priority />
          <span className={styles.brandText}>
            <Image className={styles.wordmark} src="/brand/wordmark-dark.svg" alt="MKDevSoft" width={196} height={36} priority />
            <span className={styles.brandTag}>Ingeniería y desarrollo de software</span>
          </span>
        </Link>

        <nav className={styles.desktopLinks} aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.id} href={item.href} className={activeHref === item.href ? styles.activeLink : styles.link} aria-current={activeHref === item.href ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
          <Link href="/contacto" className={styles.cta}>
            Solicitar propuesta
          </Link>
        </nav>

        <button type="button" className={styles.menuButton} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)}>
          <span className="sr-only">Abrir menú</span>
          ☰
        </button>
      </div>

      <div id="mobile-navigation" className={styles.mobilePanel} data-open={open}>
        <div className={styles.mobilePanelInner}>
          {navigation.map((item) => (
            <Link key={item.id} href={item.href} className={styles.mobileLink} aria-current={activeHref === item.href ? 'page' : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contacto" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Solicitar propuesta
          </Link>
        </div>
      </div>
    </header>
  );
}