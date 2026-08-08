import type { ReactNode } from 'react';

type BrowserFrameProps = {
  url: string;
  children: ReactNode;
};

export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="pv-browser-frame">
      <div className="pv-browser-topbar" aria-hidden="true">
        <span className="pv-browser-dot" />
        <span className="pv-browser-dot" />
        <span className="pv-browser-dot" />
        <span className="pv-browser-url">{url}</span>
      </div>
      <div className="pv-browser-viewport">{children}</div>
    </div>
  );
}
