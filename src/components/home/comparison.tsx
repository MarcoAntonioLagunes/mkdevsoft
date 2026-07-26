import { comparisonRows } from '@/data/company';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

export function Comparison() {
  return (
    <section className="section section-alt">
      <div className="container">
        <header className="section-heading">
          <SectionEyebrow>Comparativa</SectionEyebrow>
          <h2>Por qué MKDevSoft.</h2>
        </header>
        <div className="comparison-grid">
          <div className="comparison-header">
            <span />
            <span>Freelancer</span>
            <span className="comparison-col--highlight">MKDevSoft</span>
            <span>Agencia grande</span>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.feature} className="comparison-row">
              <span className="comparison-feature">{row.feature}</span>
              <span><span className="comparison-cell-label">Freelancer</span>{row.freelancer}</span>
              <span className="comparison-col--highlight"><span className="comparison-cell-label">MKDevSoft</span>{row.mkdevsoft}</span>
              <span><span className="comparison-cell-label">Agencia grande</span>{row.agencia}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
