import styles from './page-header.module.css';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className={styles.wrap}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
    </header>
  );
}