import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({ variant = 'primary', href, external = false, className, children }: ButtonProps) {
  const classes = ['button', `button-${variant}`, className].filter(Boolean).join(' ');

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
