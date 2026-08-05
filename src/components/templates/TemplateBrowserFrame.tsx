import type { ReactNode } from 'react';

type TemplateBrowserFrameProps = {
  children: ReactNode;
};

export function TemplateBrowserFrame({ children }: TemplateBrowserFrameProps) {
  return (
    <div className="template-browser-frame">
      <div className="browser-controls" aria-hidden="true">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
      </div>
      <div className="browser-preview">{children}</div>
    </div>
  );
}
