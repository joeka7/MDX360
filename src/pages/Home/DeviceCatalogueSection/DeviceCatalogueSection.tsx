import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getProductBySlug } from '@/data/products';
import { routes } from '@/data/site';
import type { Product } from '@/types/product';
import { cx } from '@/utils/cx';
import { REVEAL_OBSERVER_OPTIONS } from '@/utils/reveal';
import { catalogueDevices, catalogueIntro, portfolioTeaser } from '../content';
import styles from './DeviceCatalogueSection.module.css';

/** A device shown in the home catalogue: a product slug plus its decorative background word. */
export interface CatalogueDevice {
  slug: string;
  ghostWord: string;
}

/**
 * Transparent-background cut-outs, named by product slug (e.g. `shape-master.webp`). A device
 * without one falls back to its product photo, framed as a rounded `photo` tile.
 */
const cutouts = import.meta.glob<string>('/src/assets/images/catalogue/*.webp', { eager: true, import: 'default' });

interface CatalogueItem {
  product: Product;
  ghostWord: string;
  image: string;
  imageStyle: 'cutout' | 'photo';
}

const items: CatalogueItem[] = catalogueDevices.flatMap(({ slug, ghostWord }) => {
  const product = getProductBySlug(slug);
  if (!product) return [];
  const cutout = cutouts[`/src/assets/images/catalogue/${slug}.webp`];
  return [{ product, ghostWord, image: cutout ?? product.image.src, imageStyle: cutout ? 'cutout' : 'photo' }];
});

/** The bento slot map assumes exactly six devices; any other count uses a plain two-column grid. */
const SLOT_COUNT = 6;
const TALL_SLOTS = new Set([1, 5]);
const STAGGER_MS = 90;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 6h15M11 1l5 5-5 5" />
    </svg>
  );
}

/**
 * Home "Device Catalogue": an immersive bento of device tiles shaped to each silhouette (tall
 * towers, wide consoles), closed by a navy portfolio banner. Each tile is one stretched link.
 * Tiles reveal once on scroll; they only start hidden after JS has opted in (`data-motion="ready"`),
 * and never under reduced motion or without IntersectionObserver.
 */
export function DeviceCatalogueSection() {
  const rootRef = useRef<HTMLElement>(null);
  const useSlots = items.length === SLOT_COUNT;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return;

    root.dataset.motion = 'ready';
    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger only the targets that enter together, so later tiles don't inherit long delays.
        let batchIndex = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.style.setProperty('--reveal-delay', `${batchIndex * STAGGER_MS}ms`);
          target.dataset.revealed = 'true';
          batchIndex += 1;
          observer.unobserve(target);
        }
      },
      REVEAL_OBSERVER_OPTIONS,
    );
    root.querySelectorAll('[data-reveal]').forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      delete root.dataset.motion;
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="featured-devices"
      className={styles.section}
      aria-labelledby="device-catalogue-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Device Catalogue
            </p>
            <h2 id="device-catalogue-title" className={styles.title}>
              Explore Our Innovative Devices for{' '}
              <span className={styles.titleAccent}>Cutting-Edge Medical Solutions</span>
            </h2>
          </div>

          <p className={styles.intro}>{catalogueIntro}</p>
        </header>

        <div className={cx(styles.grid, !useSlots && styles.gridFallback)}>
          {items.map(({ product, ghostWord, image, imageStyle }, i) => {
            const slot = i + 1;
            const layout = useSlots ? (TALL_SLOTS.has(slot) ? 'tall' : 'wide') : 'stacked';
            return (
              <article
                key={product.slug}
                id={`catalogue-${product.slug}`}
                className={styles.tile}
                data-reveal=""
                data-slot={useSlots ? slot : undefined}
                data-layout={layout}
                data-image={imageStyle}
              >
                <span className={styles.ghost} aria-hidden="true">
                  {ghostWord}
                </span>
                <span className={styles.spot} aria-hidden="true" />

                <div className={styles.content}>
                  <p className={styles.category}>
                    <span className={styles.categoryDot} aria-hidden="true" />
                    {product.categoryLabel}
                  </p>
                  <h3 className={styles.name}>
                    <Link to={routes.product(product.slug)} className={styles.nameLink}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className={styles.description}>{product.description}</p>
                  <div className={styles.footer}>
                    <span className={styles.tech}>{product.highlight}</span>
                    <span className={styles.go} aria-hidden="true">
                      <span className={styles.goLabel}>Discover</span>
                      <svg
                        className={styles.goIcon}
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        focusable="false"
                      >
                        <path d="M17 24h14M26 19l5 5-5 5" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className={styles.media}>
                  <div className={styles.mediaInner}>
                    <img
                      className={styles.image}
                      src={image}
                      alt={product.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </article>
            );
          })}

          <aside className={styles.banner} aria-labelledby="device-catalogue-portfolio-title" data-reveal="">
            <div>
              <p className={cx(styles.eyebrow, styles.bannerEyebrow)}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                Complete Portfolio
              </p>
              <h3 id="device-catalogue-portfolio-title" className={styles.bannerTitle}>
                {portfolioTeaser.title}
              </h3>
              <ul className={styles.pills} aria-hidden="true">
                {portfolioTeaser.names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.bannerSide}>
              <p className={styles.bannerText}>{portfolioTeaser.text}</p>
              <Link to={routes.products} className={styles.cta}>
                {portfolioTeaser.ctaLabel}
                <ArrowIcon className={styles.ctaIcon} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
