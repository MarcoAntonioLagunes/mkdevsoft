'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Project } from '@/data/projects';
import { ProjectCarousel } from './ProjectCarousel';

function getDomain(url: string): string {
  try {
    const { hostname, pathname } = new URL(url);
    const path = pathname === '/' ? '' : pathname.replace(/\/$/, '');
    return `${hostname}${path}`;
  } catch {
    return url;
  }
}

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const prefersReducedMotion = reduceMotion === true;
  const isLive = project.status === 'live';
  const accentStyle = { '--proy-accent': 'var(--accent-violet)' } as CSSProperties;

  return (
    <motion.article
      className="card proy-card"
      style={accentStyle}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={prefersReducedMotion ? undefined : { y: -10, scale: 1.02 }}
    >
      <div className="proy-card-body">
        <span className={`proy-card-badge${isLive ? ' proy-card-badge--live' : ''}`}>
          <span className="proy-card-badge-dot" aria-hidden="true" />
          {project.badge}
        </span>

        <div className="proy-card-head">
          <h3 className="proy-card-title">{project.title}</h3>
          {project.url && (
            <a
              className="proy-card-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.title} en una nueva pestaña`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          )}
        </div>

        <p className="proy-card-tag">
          {project.tag}
          {project.url && ` · ${getDomain(project.url)}`}
        </p>

        {project.description && <p className="proy-card-desc">{project.description}</p>}
      </div>

      <div className="proy-frame-wrap">
        <div className="proy-browser-frame">
          <div className="proy-browser-topbar" aria-hidden="true">
            <span className="proy-browser-dot" />
            <span className="proy-browser-dot" />
            <span className="proy-browser-dot" />
            <span className="proy-browser-url">{project.url ? getDomain(project.url) : 'proximamente'}</span>
          </div>
          <ProjectCarousel images={project.images} alt={project.title} />
        </div>
      </div>

      {project.tech.length > 0 && (
        <div className="proy-tech-row">
          {project.tech.map((tech) => (
            <span key={tech} className="proy-tech-chip">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
