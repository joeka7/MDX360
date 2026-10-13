import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { type CategoryFilterValue } from '@/components/products';
import { productCategories, products } from '@/data/products';
import { routes } from '@/data/site';
import type { Product } from '@/types/product';
import { cx } from '@/utils/cx';
import { catalogueFacts } from './content';
import styles from './ProductsPage.module.css';

const CATEGORY_PARAM = 'category';

/**
 * Transparent-background cut-outs, named by product slug (e.g. `shape-master.webp`) — the same
 * folder the home Device Catalogue reads. A device without one falls back to its product photo.
 */
const cutouts = import.meta.glob<string>('/src/assets/images/catalogue/*.webp', { eager: true, import: 'default' });

/** A product as the catalogue grid renders it. */
interface CatalogueDevice {
  id: string;
  name: string;
  categoryLabel: string;
  model: string;
  tag: string;
  description: string;
  feature: string;
  image: string;
  imageAlt: string;
  isCutout: boolean;
  href: string;
}

function toCatalogueDevice(product: Product): CatalogueDevice {
  const cutout = cutouts[`/src/assets/images/catalogue/${product.slug}.webp`];
  return {
    id: product.slug,
    name: product.name,
    categoryLabel: product.categoryLabel,
    model: product.model,
    tag: product.modelTag,
    description: product.description,
    feature: product.technologyDetail,
    image: cutout ?? product.image.src,
    imageAlt: product.image.alt,
    isCutout: !!cutout,
    href: routes.product(product.slug),
  };
}

const filterOptions: Array<{ id: CategoryFilterValue; label: string }> = [
  { id: 'all', label: `All Devices (${products.length})` },
  ...productCategories,
];

function parseCategory(value: string | null): CategoryFilterValue {
  return productCategories.some((category) => category.id === value) ? (value as CategoryFilterValue) : 'all';
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
      <path d="M1 6h15M11 1l5 5-5 5" />
    </svg>
  );
}

/**
 * Products portfolio: editorial hero with a spec list, underline category tabs (synced to
 * `?category=`), and an open-card device grid. Cards reveal once on scroll; they only start hidden
 * after JS has opted in (`data-motion="ready"`), and never under reduced motion or without
 * IntersectionObserver.
 */
export function ProductsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = parseCategory(searchParams.get(CATEGORY_PARAM));
  const visibleProducts = category === 'all' ? products : products.filter((product) => product.category === category);
  const devices = visibleProducts.map(toCatalogueDevice);

  const handleCategoryChange = (value: CategoryFilterValue) => {
    setSearchParams(value === 'all' ? {} : { [CATEGORY_PARAM]: value }, { replace: true, preventScrollReset: true });
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;
    root.dataset.motion = 'ready';
    return () => {
      delete root.dataset.motion;
    };
  }, []);

  // Re-runs on every filter change so newly mounted cards are observed too.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || root.dataset.motion !== 'ready') return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger only the cards that enter together, capped at six steps.
        let batchIndex = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.dataset.delay = String(Math.min(batchIndex, 5));
          target.dataset.revealed = 'true';
          batchIndex += 1;
          observer.unobserve(target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    root.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [category]);

  return (
    <>
      <title>Products | MDX360 Medical &amp; Aesthetic Systems</title>

      <div ref={rootRef} className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.crumbRow}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.crumb}>
                <li>
                  <Link to={routes.home}>Home</Link>
                </li>
                <li aria-current="page">Products Portfolio</li>
              </ol>
            </nav>
            <p className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              {products.length} Clinical Energy Platforms Active
            </p>
          </div>

          <header className={styles.hero}>
            <div>
              <p className={styles.eyebrow}>Enterprise Medical Systems</p>
              <h1 className={styles.title}>
                Medical &amp; <span className={styles.titleAccent}>Aesthetic Systems</span>
              </h1>
              <p className={styles.lead}>
                Explore our complete portfolio of advanced non-invasive medical technologies, body sculpting platforms,
                facial rejuvenation systems, and therapeutic bio-stimulation devices engineered for clinical efficacy
                and exceptional patient outcomes.
              </p>
            </div>
            <dl className={styles.specs}>
              {catalogueFacts.map((fact) => (
                <div key={fact.label} className={styles.specRow}>
                  <dt>{fact.label}</dt>
                  <dd className={cx(fact.accent && styles.specValueAccent)}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <div className={styles.tabs} role="group" aria-label="Filter devices by category">
            {filterOptions.map((option) => {
              const isActive = category === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={styles.tab}
                  data-active={isActive}
                  aria-pressed={isActive}
                  onClick={() => handleCategoryChange(option.id)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <p className={styles.count} aria-live="polite">
            Showing {devices.length} of {products.length} devices
          </p>

          <ul className={styles.grid}>
            {devices.map((device) => (
              <li key={device.id} className={styles.card} data-reveal="">
                <div className={styles.plate} data-cutout={device.isCutout}>
                  <div className={styles.plateMeta}>
                    <span className={styles.plateCategory}>{device.categoryLabel}</span>
                    <span className={styles.plateModel}>{device.model}</span>
                  </div>
                  <img className={styles.image} src={device.image} alt={device.imageAlt} loading="lazy" decoding="async" />
                </div>
                <p className={styles.tag}>{device.tag}</p>
                <h2 className={styles.name}>{device.name}</h2>
                <p className={styles.description}>{device.description}</p>
                <p className={styles.feature}>
                  <CheckIcon />
                  {device.feature}
                </p>
                <Link to={device.href} className={styles.discover} aria-label={`Discover ${device.name}`}>
                  Discover Device
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
