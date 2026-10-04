import { Link } from 'react-router-dom';
import { Button, Icon, Pill } from '@/components/ui';
import { routes } from '@/data/site';
import type { Product } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './ProductCard.module.css';

/**
 * - `feature`: large tinted card (home page device catalogue).
 * - `catalog`: full catalogue card with model, technology, and CTA (products page).
 * - `showcase`: compact card with an enquire action (contact page).
 * - `related`: complementary-system card (single product page).
 */
export type ProductCardVariant = 'feature' | 'catalog' | 'showcase' | 'related';

interface ProductCardProps {
  product: Product;
  variant?: ProductCardVariant;
  /** Called by the `showcase` variant's Enquire action. */
  onEnquire?: (product: Product) => void;
  headingLevel?: 'h2' | 'h3';
}

export function ProductCard({ product, variant = 'catalog', onEnquire, headingLevel: Heading = 'h3' }: ProductCardProps) {
  const href = routes.product(product.slug);
  const image = (
    <img
      src={product.image.src}
      alt={product.image.alt}
      width={1000}
      height={1000}
      loading="lazy"
      className={styles.image}
    />
  );

  switch (variant) {
    case 'feature':
      return (
        <article className={cx(styles.card, styles.feature)}>
          <div>
            <div className={styles.featureTop}>
              <span className={styles.category}>{product.categoryLabel}</span>
              <span className={styles.categoryDot} aria-hidden="true" />
            </div>
            <Link to={href} className={styles.media} tabIndex={-1} aria-hidden="true">
              {image}
            </Link>
            <Heading className={styles.titleMd}>{product.name}</Heading>
            <p className={styles.description}>{product.description}</p>
          </div>
          <div className={styles.footer}>
            <span className={styles.highlight}>{product.highlight}</span>
            <Link to={href} className={styles.discoverLink}>
              Discover <span className="visually-hidden">{product.name}</span>
              <Icon name="arrow_right_alt" size={18} />
            </Link>
          </div>
        </article>
      );

    case 'showcase':
      return (
        <article className={cx(styles.card, styles.showcase)}>
          <div>
            <div className={styles.media}>
              {image}
              <Pill tone="dark" className={styles.badge}>
                {product.categoryLabel}
              </Pill>
            </div>
            <Heading className={styles.titleSm}>
              <Link to={href} className={styles.titleLink}>
                {product.name}
              </Link>
            </Heading>
            <p className={cx(styles.description, styles.descriptionClamped)}>{product.summary}</p>
          </div>
          <div className={styles.footer}>
            <span className={styles.highlight}>{product.highlight}</span>
            <button type="button" className={styles.enquireButton} onClick={() => onEnquire?.(product)}>
              Enquire <span className="visually-hidden">about {product.name}</span>
            </button>
          </div>
        </article>
      );

    case 'related':
      return (
        <article className={cx(styles.card, styles.related)}>
          <div className={styles.relatedBody}>
            <Link to={href} className={styles.media} tabIndex={-1} aria-hidden="true">
              {image}
            </Link>
            <span className={styles.techTag}>{product.technology}</span>
            <Heading className={styles.titleSm}>{product.name}</Heading>
            <p className={styles.descriptionSm}>{product.summary}</p>
          </div>
          <div className={styles.relatedAction}>
            <Button to={href} variant="tonal" size="sm" fullWidth>
              Explore {product.name}
            </Button>
          </div>
        </article>
      );

    case 'catalog':
    default:
      return (
        <article className={cx(styles.card, styles.catalog)}>
          <div className={styles.media}>
            <Pill tone="glass" className={styles.badge}>
              {product.categoryLabel}
            </Pill>
            <span className={styles.iconBadge} aria-hidden="true">
              <Icon name={product.icon} size={16} />
            </span>
            {image}
          </div>
          <div className={styles.catalogBody}>
            <div className={styles.catalogText}>
              <div className={styles.modelRow}>
                <span>Model: {product.model}</span>
                <span className={styles.modelTag}>{product.modelTag}</span>
              </div>
              <Heading className={styles.titleMd}>{product.name}</Heading>
              <p className={styles.description}>{product.description}</p>
            </div>
            <div className={styles.catalogActions}>
              <div className={styles.techRow}>
                <Icon name="verified" size={18} />
                <span>{product.technologyDetail}</span>
              </div>
              <Link to={href} className={styles.catalogCta}>
                <span>
                  Discover Device <span className="visually-hidden">: {product.name}</span>
                </span>
                <Icon name="arrow_forward" size={18} className={styles.catalogCtaArrow} />
              </Link>
            </div>
          </div>
        </article>
      );
  }
}
