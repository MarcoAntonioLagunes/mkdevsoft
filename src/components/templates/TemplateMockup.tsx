'use client';

import type { Template } from '@/data/templates';
import { TemplateHeroMockup } from './TemplateHeroMockup';
import { TemplateEcommerceMockup } from './TemplateEcommerceMockup';
import { TemplatePortfolioMockup } from './TemplatePortfolioMockup';
import { TemplateAppMockup } from './TemplateAppMockup';
import { TemplateDashboardMockup } from './TemplateDashboardMockup';

type TemplateMockupProps = {
  template: Template;
  shouldAnimate: boolean;
  reducedMotion: boolean;
};

export function TemplateMockup({ template, shouldAnimate, reducedMotion }: TemplateMockupProps) {
  switch (template.mockupFormat) {
    case 'ecommerce':
      return <TemplateEcommerceMockup template={template} shouldAnimate={shouldAnimate} reducedMotion={reducedMotion} />;
    case 'portfolio':
      return <TemplatePortfolioMockup template={template} shouldAnimate={shouldAnimate} reducedMotion={reducedMotion} />;
    case 'app':
      return <TemplateAppMockup template={template} shouldAnimate={shouldAnimate} reducedMotion={reducedMotion} />;
    case 'dashboard':
      return <TemplateDashboardMockup template={template} shouldAnimate={shouldAnimate} reducedMotion={reducedMotion} />;
    case 'hero':
    default:
      return <TemplateHeroMockup template={template} shouldAnimate={shouldAnimate} reducedMotion={reducedMotion} />;
  }
}
