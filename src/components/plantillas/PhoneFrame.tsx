import type { ReactNode } from 'react';

type PhoneFrameProps = {
  children: ReactNode;
};

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="pv-phone-frame">
      <div className="pv-phone-notch" aria-hidden="true" />
      <div className="pv-phone-viewport">{children}</div>
      <div className="pv-phone-home" aria-hidden="true" />
    </div>
  );
}
