import { useState } from 'react';
import { Icon, Pill } from '@/components/ui';
import type { GalleryItem } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
  items: GalleryItem[];
  badges?: { primary: string; secondary?: string };
  /** Caption pinned to the bottom-right of the main viewport. */
  note?: string;
}

/** Main product viewport with selectable thumbnails. */
export function ProductGallery({ items, badges, note }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <div className={styles.gallery}>
      <div className={styles.viewport}>
        <img
          key={active.src}
          src={active.src}
          alt={active.alt}
          width={1000}
          height={1000}
          className={cx(styles.mainImage, active.fit === 'cover' && styles.cover)}
        />

        {badges && (
          <div className={styles.badges}>
            <Pill tone="glass" dot="static" className={styles.primaryBadge}>
              {badges.primary}
            </Pill>
            {badges.secondary && (
              <Pill tone="dark" icon="sensors" className={styles.secondaryBadge}>
                {badges.secondary}
              </Pill>
            )}
          </div>
        )}

        {note && (
          <span className={styles.note}>
            <Icon name="zoom_in" size={16} />
            {note}
          </span>
        )}
      </div>

      {items.length > 1 && (
        <div className={styles.thumbnails} role="group" aria-label="Product images">
          {items.map((item, index) => (
            <button
              key={`${item.src}-${item.label}`}
              type="button"
              className={cx(styles.thumb, index === activeIndex && styles.thumbActive)}
              aria-pressed={index === activeIndex}
              aria-label={`Show image: ${item.alt}`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.src}
                alt=""
                loading="lazy"
                className={cx(styles.thumbImage, item.fit === 'cover' && styles.cover)}
              />
              <span className={cx(styles.thumbLabel, item.fit === 'cover' && styles.thumbLabelDark)}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
