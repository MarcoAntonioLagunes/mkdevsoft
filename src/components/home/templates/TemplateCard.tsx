'use client';

import { useState } from 'react';
import type { TemplateDefinition } from '@/data/templates';
import { TemplateBadge } from './TemplateBadge';
import { TemplatePreview } from './TemplatePreview';
import { TemplateModal } from './TemplateModal';

export function TemplateCard({ template }: { template: TemplateDefinition }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="template-card card">
      <button type="button" className="template-card-inner" onClick={() => setIsOpen(true)}>
        <TemplatePreview template={template} />
        <div className="template-card-body">
          <div>
            <h3 className="template-card-title">{template.name}</h3>
            <p className="template-card-description">{template.description}</p>
          </div>
          <div className="template-card-footer">
            <TemplateBadge category={template.category} />
            <span className="template-card-cta">Ver vista previa</span>
          </div>
        </div>
      </button>

      {isOpen && <TemplateModal template={template} onClose={() => setIsOpen(false)} />}
    </article>
  );
}
