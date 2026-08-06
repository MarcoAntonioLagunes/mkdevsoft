'use client';

import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Template } from '@/data/templates';

type TemplateDashboardMockupProps = {
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

function buildLinePath(values: number[], width: number, height: number) {
  const max = Math.max(...values, 1);
  const step = width / (values.length - 1 || 1);
  const points = values.map((v, i) => `${i * step},${height - (v / max) * height}`);
  return points.join(' ');
}

export function TemplateDashboardMockup({ template, shouldAnimate, reducedMotion }: TemplateDashboardMockupProps) {
  const { shortName, navItems, metrics = [], chartValues = [], accentColor, layoutVariant } = template;

  const isRevealed = shouldAnimate || reducedMotion;
  const accentStyle = { '--mockup-accent': `var(${accentColor})` } as CSSProperties;
  const hasSidebar = layoutVariant === 0;

  const linePoints = buildLinePath(chartValues, 260, 60);
  const areaPoints = `0,60 ${linePoints} 260,60`;

  return (
    <div className={`dash-mockup ${hasSidebar ? 'dash-mockup--sidebar' : 'dash-mockup--topbar'}`} style={accentStyle}>
      {hasSidebar ? (
        <div className="dash-mockup-sidebar">
          <span className="dash-mockup-sidebar-logo" aria-hidden="true" />
          <div className="dash-mockup-sidebar-icons">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : null}

      <motion.div
        className="dash-mockup-main"
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="dash-mockup-topbar" variants={itemVariants}>
          <span className="dash-mockup-title">{shortName}</span>
          {!hasSidebar ? (
            <div className="dash-mockup-tabs">
              {navItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.div className="dash-mockup-metrics" variants={itemVariants}>
          {metrics.map((metric) => (
            <div key={metric.label} className="dash-mockup-metric">
              <span className="dash-mockup-metric-value">{metric.value}</span>
              <span className="dash-mockup-metric-label">{metric.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="dash-mockup-chart" variants={itemVariants}>
          {hasSidebar ? (
            <div className="dash-mockup-bars">
              {chartValues.map((value, index) => (
                <span key={index} className="dash-mockup-bar" style={{ height: `${value}%` }} />
              ))}
            </div>
          ) : (
            <svg className="dash-mockup-line" viewBox="0 0 260 60" preserveAspectRatio="none" aria-hidden="true">
              <polygon points={areaPoints} className="dash-mockup-line-fill" />
              <polyline points={linePoints} className="dash-mockup-line-stroke" />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
