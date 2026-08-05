import type { TemplateCategory } from '@/data/templates';

const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  restaurantes: 'Restaurante',
  logistica: 'Logística',
  fintech: 'Fintech',
};

const CATEGORY_COLORS: Record<TemplateCategory, string> = {
  restaurantes: '#F59E0B',
  logistica: '#0EA5E9',
  fintech: '#7C3AED',
};

export function TemplateBadge({ category }: { category: TemplateCategory }) {
  return (
    <span className="template-badge" style={{ borderColor: CATEGORY_COLORS[category], color: CATEGORY_COLORS[category] }}>
      {CATEGORY_LABELS[category]}
    </span>
  );
}
