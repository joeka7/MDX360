import { cx } from '@/utils/cx';
import styles from './AboutPage.module.css';

interface ImageSlotProps {
  src?: string;
  alt: string;
  /** What the final photo should show; captioned on the placeholder in development only. */
  brief: string;
  className?: string;
}

/** A commissioned photo, or a hatched placeholder until the file is delivered. */
export function ImageSlot({ src, alt, brief, className }: ImageSlotProps) {
  if (src) {
    return <img className={cx(styles.slotImg, className)} src={src} alt={alt} loading="lazy" decoding="async" />;
  }
  return (
    <div className={cx(styles.placeholder, className)} role="img" aria-label={alt}>
      {import.meta.env.DEV && (
        <span className={styles.placeholderNote}>
          <b>Image placeholder</b>
          {brief}
        </span>
      )}
    </div>
  );
}
