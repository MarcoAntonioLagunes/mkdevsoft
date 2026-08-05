import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import { company } from '@/data/company';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <Link href="/" className={styles.brand} aria-label="MKDevSoft inicio">
            <span className={styles.logoChip}>
              <Image src="/brand/mkdevsoft-icon.png" alt="" aria-hidden="true" width={135} height={48} priority />
            </span>
            <span className={styles.wordGroup}>
              <Image src="/brand/wordmark-dark.svg" alt="MKDevSoft" width={196} height={36} priority />
            </span>
          </Link>

          <div className={styles.meta}>
            <span>© {year} MKDevSoft · {company.location}</span>
            <a href="https://mkdevsoft.site" target="_blank" rel="noopener noreferrer">https://mkdevsoft.site</a>
          </div>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          <span>MKDevSoft</span>
        </div>
      </div>
    </footer>
  );
}