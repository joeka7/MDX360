import type { Product } from '@/types/product';
import { cx } from '@/utils/cx';
import { ProductCard, type ProductCardVariant } from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
  variant?: ProductCardVariant;
  /** Maximum columns on wide screens. */
  columns?: 3 | 4;
  onEnquire?: (product: Product) => void;
  headingLevel?: 'h2' | 'h3';
  className?: string;
}

/** Responsive grid of product cards. */
export function ProductGrid({
  products,
  variant = 'catalog',
  columns = 3,
  onEnquire,
  headingLevel,
  className,
}: ProductGridProps) {
  return (
    <ul className={cx(styles.grid, columns === 4 ? styles.columns4 : styles.columns3, className)}>
      {products.map((product) => (
        <li key={product.slug}>
          <ProductCard product={product} variant={variant} onEnquire={onEnquire} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
