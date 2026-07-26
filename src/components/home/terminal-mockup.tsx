'use client';

import { useEffect, useState } from 'react';

const PHRASES = [
  'Desplegando a producción...',
  'Sitio listo. Clientes conectando...',
  'Build verificado. 0 errores.',
];

const TYPE_SPEED = 45;
const DELETE_SPEED = 25;
const HOLD_TIME = 1600;

export function TerminalMockup() {
  const [text, setText] = useState('');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setText(PHRASES[0]);
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = PHRASES[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setText(phrase.slice(0, charIndex));
        if (charIndex === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(tick, HOLD_TIME);
          return;
        }
        timeoutId = setTimeout(tick, TYPE_SPEED);
        return;
      }

      charIndex -= 1;
      setText(phrase.slice(0, charIndex));
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        timeoutId = setTimeout(tick, TYPE_SPEED);
        return;
      }
      timeoutId = setTimeout(tick, DELETE_SPEED);
    };

    timeoutId = setTimeout(tick, TYPE_SPEED);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="hero-terminal">
      <div className="hero-terminal-bar">
        <span className="hero-terminal-dot hero-terminal-dot--red" />
        <span className="hero-terminal-dot hero-terminal-dot--yellow" />
        <span className="hero-terminal-dot hero-terminal-dot--green" />
        <span className="hero-terminal-title">deploy — mkdevsoft</span>
      </div>
      <div className="hero-terminal-body">
        <p className="hero-terminal-line"><span className="hero-terminal-check">✓</span> Instalando dependencias</p>
        <p className="hero-terminal-line"><span className="hero-terminal-check">✓</span> Compilando build de producción</p>
        <p className="hero-terminal-line"><span className="hero-terminal-check">✓</span> Desplegado en Vercel</p>
        <p className="hero-terminal-line hero-terminal-current">
          <span aria-hidden="true">$</span> {text}<span className="hero-terminal-cursor" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
