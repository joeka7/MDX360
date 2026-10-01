import type { ProductCategory, ProductCategoryId } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './ProductCategoryFilter.module.css';

export type CategoryFilterValue = ProductCategoryId | 'all';

interface ProductCategoryFilterProps {
  categories: ProductCategory[];
  value: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
  totalCount: number;
}

/** Segmented pill bar for filtering the catalogue by category. */
export function ProductCategoryFilter({ categories, value, onChange, totalCount }: ProductCategoryFilterProps) {
  const options: Array<{ id: CategoryFilterValue; label: string }> = [
    { id: 'all', label: `All Devices (${totalCount})` },
    ...categories,
  ];

  return (
    <div className={styles.bar} role="group" aria-label="Filter devices by category">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={cx(styles.option, value === option.id && styles.active)}
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
