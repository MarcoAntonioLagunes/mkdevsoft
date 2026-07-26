'use client';

import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const VARIANT_COLORS = ['var(--accent-violet)', 'var(--accent-pink)', 'var(--accent-cyan)', 'var(--cta)'];

type IconCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  variant?: number;
};

export function IconCard({ icon, title, description, href, linkLabel = 'Ver detalle', variant = 0 }: IconCardProps) {
  const reduceMotion = useReducedMotion();
  const accent = VARIANT_COLORS[variant % VARIANT_COLORS.length];

  return (
    <motion.article
      className="card icon-card"
      style={{ '--card-accent': accent } as CSSProperties}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <span className="icon-card-icon" aria-hidden="true">{icon}</span>
      <p className="card-label">{title}</p>
      <p>{description}</p>
      {href && (
        <Link href={href} className="card-link">{linkLabel}</Link>
      )}
    </motion.article>
  );
}
