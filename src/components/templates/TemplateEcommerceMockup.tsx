'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Template } from '@/data/templates';

type TemplateEcommerceMockupProps = {
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

export function TemplateEcommerceMockup({ template, shouldAnimate, reducedMotion }: TemplateEcommerceMockupProps) {
  const { name, shortName, imageUrl, headlineHighlight, navItems, products = [], accentColor, layoutVariant } = template;

  const isPlaying = shouldAnimate && !reducedMotion;
  const isRevealed = shouldAnimate || reducedMotion;
  const accentStyle = { '--mockup-accent': `var(${accentColor})` } as CSSProperties;

  return (
    <div
      className={`ecom-mockup ${isPlaying ? 'hero-mockup-playing' : 'hero-mockup-paused'}`}
      style={accentStyle}
    >
      <motion.div initial="hidden" animate={isRevealed ? 'visible' : 'hidden'} variants={containerVariants}>
        <motion.nav className="ecom-mockup-nav" variants={itemVariants}>
          <span className="ecom-mockup-logo">{shortName}</span>
          <div className="ecom-mockup-navlinks">
            {navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <span className="ecom-mockup-navcart" aria-hidden="true">
            🛍️
          </span>
        </motion.nav>
      </motion.div>

      <div className="ecom-mockup-banner">
        <Image
          src={imageUrl}
          alt={`Foto de la plantilla ${name}`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 380px"
          className="hero-mockup-photo"
        />
        <div className="ecom-mockup-banner-overlay" />
        <span className="ecom-mockup-banner-tag">{headlineHighlight}</span>
      </div>

      <motion.div
        className={`ecom-mockup-products ecom-mockup-products--v${layoutVariant}`}
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            className="ecom-mockup-product"
            data-swatch={index % 3}
            variants={itemVariants}
          >
            {product.imageUrl ? (
              <div className="ecom-mockup-product-photo">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 180px"
                  className="ecom-mockup-product-image"
                />
              </div>
            ) : (
              <div className="ecom-mockup-product-swatch" />
            )}
            <span className="ecom-mockup-product-name">{product.name}</span>
            <span className="ecom-mockup-product-price">{product.price}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
