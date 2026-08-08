'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

type TemplateHeroPhotoProps = {
  src: StaticImageData;
  alt: string;
  sizes?: string;
};

export function TemplateHeroPhoto({ src, alt, sizes = '(max-width: 640px) 100vw, 360px' }: TemplateHeroPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      placeholder="blur"
      loading="lazy"
      className="pv-hero-photo"
      onError={() => setFailed(true)}
    />
  );
}
