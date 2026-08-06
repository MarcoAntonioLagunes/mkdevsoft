'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Template } from '@/data/templates';

type TemplateAppMockupProps = {
  template: Template;
  shouldAnimate: boolean;
  reducedMotion: boolean;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export function TemplateAppMockup({ template, shouldAnimate, reducedMotion }: TemplateAppMockupProps) {
  const { name, shortName, imageUrl, appItems = [], accentColor } = template;

  const isPlaying = shouldAnimate && !reducedMotion;
  const isRevealed = shouldAnimate || reducedMotion;
  const accentStyle = { '--mockup-accent': `var(${accentColor})` } as CSSProperties;

  return (
    <div className={`app-mockup ${isPlaying ? 'hero-mockup-playing' : 'hero-mockup-paused'}`} style={accentStyle}>
      <div className="app-mockup-bg">
        <Image
          src={imageUrl}
          alt={`Fondo de la plantilla ${name}`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 380px"
          className="hero-mockup-photo"
        />
        <div className="app-mockup-bg-overlay" />
      </div>

      <motion.div
        className="app-mockup-phone"
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="app-mockup-notch" />
        <motion.div className="app-mockup-header" variants={itemVariants}>
          <span className="app-mockup-app-name">{shortName}</span>
        </motion.div>
        <div className="app-mockup-list">
          {appItems.map((item) => (
            <motion.div key={item.label} className="app-mockup-list-item" variants={itemVariants}>
              <span className="app-mockup-list-label">{item.label}</span>
              <span className="app-mockup-list-meta">{item.meta}</span>
            </motion.div>
          ))}
        </div>
        <motion.div className="app-mockup-bottomnav" variants={itemVariants}>
          <span />
          <span />
          <span />
          <span />
        </motion.div>
      </motion.div>
    </div>
  );
}
