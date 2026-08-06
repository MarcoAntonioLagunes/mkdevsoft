'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Template } from '@/data/templates';

type TemplatePortfolioMockupProps = {
  template: Template;
  shouldAnimate: boolean;
  reducedMotion: boolean;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

const OBJECT_POSITIONS = ['center', '30% 50%', '70% 40%', '50% 70%'];

export function TemplatePortfolioMockup({ template, shouldAnimate, reducedMotion }: TemplatePortfolioMockupProps) {
  const { name, shortName, imageUrl, navItems, projects = [], accentColor, layoutVariant } = template;

  const isPlaying = shouldAnimate && !reducedMotion;
  const isRevealed = shouldAnimate || reducedMotion;
  const accentStyle = { '--mockup-accent': `var(${accentColor})` } as CSSProperties;

  return (
    <div className={`folio-mockup ${isPlaying ? 'hero-mockup-playing' : 'hero-mockup-paused'}`} style={accentStyle}>
      <motion.div initial="hidden" animate={isRevealed ? 'visible' : 'hidden'} variants={containerVariants}>
        <motion.nav className="folio-mockup-nav" variants={itemVariants}>
          <span className="folio-mockup-logo">{shortName}</span>
          <div className="folio-mockup-navlinks">
            {navItems.slice(0, 2).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.nav>
      </motion.div>

      <motion.div
        className={`folio-mockup-gallery folio-mockup-gallery--v${layoutVariant}`}
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div key={project.title} className="folio-mockup-tile" variants={itemVariants}>
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={`Proyecto ${project.title} — ${name}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 380px"
                className="hero-mockup-photo"
                style={{ objectPosition: OBJECT_POSITIONS[index % OBJECT_POSITIONS.length] }}
              />
            ) : (
              <Image
                src={imageUrl}
                alt={`Proyecto ${project.title} — ${name}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 380px"
                className="hero-mockup-photo"
                style={{ objectPosition: OBJECT_POSITIONS[index % OBJECT_POSITIONS.length] }}
              />
            )}
            <div className="folio-mockup-tile-overlay" />
            <span className="folio-mockup-tile-title">{project.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
