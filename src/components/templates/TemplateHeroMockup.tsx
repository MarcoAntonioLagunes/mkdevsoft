'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Template } from '@/data/templates';

type TemplateHeroMockupProps = {
  template: Template;
  shouldAnimate: boolean;
  reducedMotion: boolean;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export function TemplateHeroMockup({ template, shouldAnimate, reducedMotion }: TemplateHeroMockupProps) {
  const {
    name,
    shortName,
    imageUrl,
    headlineStart,
    headlineHighlight,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    navItems,
    stats,
    accentColor,
  } = template;

  const isPlaying = shouldAnimate && !reducedMotion;
  const isRevealed = shouldAnimate || reducedMotion;

  return (
    <div
      className={`hero-mockup ${isPlaying ? 'hero-mockup-playing' : 'hero-mockup-paused'}`}
      style={{ '--mockup-accent': `var(${accentColor})` } as CSSProperties}
    >
      <div className="hero-mockup-bg">
        <Image
          src={imageUrl}
          alt={`Fondo de la plantilla ${name}`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 380px"
          className="hero-mockup-photo"
        />
        <div className="hero-mockup-overlay" />
      </div>

      <motion.div
        className="hero-mockup-content"
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.nav className="hero-mockup-nav" variants={itemVariants}>
          <span className="hero-mockup-logo">{shortName}</span>
          <div className="hero-mockup-navlinks">
            {navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <span className="hero-mockup-navcta">{ctaPrimary}</span>
        </motion.nav>

        <div className="hero-mockup-body">
          <motion.p className="hero-mockup-headline" variants={itemVariants}>
            {headlineStart} <span className="hero-mockup-highlight">{headlineHighlight}</span>
          </motion.p>
          <motion.p className="hero-mockup-subheadline" variants={itemVariants}>
            {subheadline}
          </motion.p>
          <motion.div className="hero-mockup-actions" variants={itemVariants}>
            <span className="hero-mockup-btn hero-mockup-btn--primary">{ctaPrimary}</span>
            <span className="hero-mockup-btn hero-mockup-btn--secondary">{ctaSecondary}</span>
          </motion.div>
        </div>

        <motion.div className="hero-mockup-stats" variants={itemVariants}>
          {stats.map((stat) => (
            <div key={stat.label} className="hero-mockup-stat">
              <span className="hero-mockup-stat-icon" aria-hidden="true">
                {stat.icon}
              </span>
              <span className="hero-mockup-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
