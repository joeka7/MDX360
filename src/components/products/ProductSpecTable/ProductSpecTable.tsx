import type { SpecRow } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './ProductSpecTable.module.css';

/** Two-column technical specification list. */
export function ProductSpecTable({ rows }: { rows: SpecRow[] }) {
  return (
    <dl className={styles.table}>
      {rows.map((row) => (
        <div key={row.label} className={styles.row}>
          <dt className={styles.label}>{row.label}</dt>
          <dd className={cx(styles.value, row.numeric && styles.valueNumeric, row.accent && styles.valueAccent)}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
