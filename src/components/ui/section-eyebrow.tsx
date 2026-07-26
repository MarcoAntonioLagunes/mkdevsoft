import type { ReactNode } from 'react';

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}
