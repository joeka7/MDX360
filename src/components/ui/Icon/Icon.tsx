import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './Icon.module.css';

export type IconSize = 13 | 14 | 15 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 36;

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  /** Accessible label. Icons are decorative (hidden from assistive tech) unless labelled. */
  label?: string;
}

/** Material Symbols Outlined icon. */
export function Icon({ name, size = 20, className, label }: IconProps) {
  return (
    <span
      className={cx('material-symbols-outlined', styles.icon, styles[`size${size}`], className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      {name}
    </span>
  );
}
