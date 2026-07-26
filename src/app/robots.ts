import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://mkdevsoft.com/sitemap.xml',
    host: 'https://mkdevsoft.netlify.app/',
  };
}