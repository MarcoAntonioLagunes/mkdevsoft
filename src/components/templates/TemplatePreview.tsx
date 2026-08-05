'use client';

import type { Template } from '@/data/templates';
import type { PreviewProps } from './previews';
import {
  AduanasPreview,
  BankPreview,
  BarberPreview,
  ClinicPreview,
  EcommercePreview,
  FitnessPreview,
  HotelPreview,
  LegalPreview,
  RealEstatePreview,
  RestaurantPreview,
  SoftwarePreview,
  TravelPreview,
} from './previews';

const previewRegistry = {
  restaurante: RestaurantPreview,
  aduanas: AduanasPreview,
  banco: BankPreview,
  ecommerce: EcommercePreview,
  clinica: ClinicPreview,
  software: SoftwarePreview,
  barberia: BarberPreview,
  inmobiliaria: RealEstatePreview,
  legal: LegalPreview,
  hotel: HotelPreview,
  turismo: TravelPreview,
  fitness: FitnessPreview,
} satisfies Record<Template['previewType'], (props: PreviewProps) => JSX.Element>;

type TemplatePreviewProps = {
  template: Template;
  shouldAnimate: boolean;
  reducedMotion: boolean;
};

export function TemplatePreview({ template, shouldAnimate, reducedMotion }: TemplatePreviewProps) {
  const Preview = previewRegistry[template.previewType];
  return <Preview shouldAnimate={shouldAnimate} reducedMotion={reducedMotion} />;
}
