import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  /** `light` sections use teal, `dark` sections use cyan, `muted` uses grey. */
  tone?: 'light' | 'dark' | 'muted';
  dot?: boolean;
  className?: string;
}

/** Small uppercase label shown above section headings. */
export function Eyebrow({ children, tone = 'light', dot, className }: EyebrowProps) {
  return (
    <span className={cx(styles.eyebrow, styles[tone], className)}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
