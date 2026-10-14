import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { cx } from '@/utils/cx';
import { REVEAL_OBSERVER_OPTIONS } from '@/utils/reveal';
import { pillars } from '../content';
import styles from './ClinicalArchitectureSection.module.css';

/** An informational concept card (not a link). */
export interface Pillar {
  id: string;
  index: string;
  category: string;
  title: string;
  body: string;
  /**
   * Optional media. Without it the card shows a plain media panel. `focus` is the point (CSS
   * object-position) kept in frame when the panel crops the image; `zoom` enlarges the image
   * around that point, for artwork with a lot of empty space around the subject. `mobile` overrides
   * both for the square phone panel, so the subject fills it instead of leaving empty backdrop.
   */
  image?: {
    src: string;
    alt: string;
    focus?: string;
    zoom?: number;
    mobile?: { focus?: string; zoom?: number };
  };
}

function PillarCard({ pillar, featured, order }: { pillar: Pillar; featured?: boolean; order: number }) {
  const titleId = `${pillar.id}-title`;

  return (
    <article
      className={cx(styles.card, featured && styles.cardFeatured, styles.reveal)}
      data-reveal={order}
      aria-labelledby={titleId}
    >
      <div className={styles.media}>
        {pillar.image && (
          <img
            className={styles.mediaImg}
            src={pillar.image.src}
            alt={pillar.image.alt}
            style={
              {
                '--ca-focus': pillar.image.focus,
                '--ca-zoom': pillar.image.zoom,
                '--ca-focus-m': pillar.image.mobile?.focus,
                '--ca-zoom-m': pillar.image.mobile?.zoom,
              } as CSSProperties
            }
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.label}>
          {pillar.index} — {pillar.category}
        </p>
        <h3 id={titleId} className={styles.cardTitle}>
          {pillar.title}
        </h3>
        <p className={styles.cardText}>{pillar.body}</p>
      </div>
    </article>
  );
}

/**
 * Home "Clinical Architecture" band: a white stage with a featured pillar card and two stacked
 * secondary cards that introduce the three device concepts. Content rises in once on first view;
 * it only starts hidden after JS has opted in (`data-motion="ready"`), and never under reduced motion.
 */
export function ClinicalArchitectureSection() {
  const rootRef = useRef<HTMLElement>(null);

  // A layout effect, so content in view on load is hidden before the first paint, never flashed.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return;

    root.dataset.motion = 'ready';
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          root.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      REVEAL_OBSERVER_OPTIONS,
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      delete root.dataset.motion;
    };
  }, []);

  const [featured, ...rest] = pillars;

  return (
    <section ref={rootRef} className={styles.section} aria-labelledby="clinical-architecture-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={cx(styles.rail, styles.reveal)} data-reveal="1">
            <p className={styles.eyebrow}>Clinical Architecture</p>
            <p className={styles.railMeta} aria-hidden="true">
              Aesthetic · Regenerative · Diagnostic
            </p>
          </div>
          <div className={styles.intro}>
            <h2 id="clinical-architecture-title" className={cx(styles.title, styles.reveal)} data-reveal="2">
              Revolutionizing Patient Care with <span className={styles.titleAccent}>Advanced Medical Devices</span>
            </h2>
            <p className={cx(styles.lede, styles.reveal)} data-reveal="3">
              At MDX360, we are dedicated to pushing the boundaries of healthcare technology. Our innovative devices are
              designed to enhance diagnostics, streamline treatments, and improve patient outcomes across aesthetic and
              regenerative medical practices.
            </p>
          </div>
        </header>

        <div className={styles.bento}>
          <PillarCard pillar={featured} featured order={4} />
          <div className={styles.stack}>
            {rest.map((pillar, i) => (
              <PillarCard key={pillar.id} pillar={pillar} order={5 + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
