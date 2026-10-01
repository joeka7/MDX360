import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import { Icon, type IconSize } from '../Icon/Icon';
import styles from './IconTile.module.css';

export type IconTileTone =
  | 'high'
  | 'low'
  | 'white'
  | 'tint'
  | 'cyanSoft'
  | 'cyan'
  | 'primary'
  | 'glassDark';

interface IconTileProps {
  icon: IconName;
  /** sm = 32px, md = 40px, lg = 48px. */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  tone?: IconTileTone;
  round?: boolean;
  className?: string;
}

const iconSizes: Record<NonNullable<IconTileProps['size']>, IconSize> = { xs: 16, sm: 18, md: 22, lg: 28 };

/** Square (or round) tile framing an icon. */
export function IconTile({ icon, size = 'md', tone = 'high', round, className }: IconTileProps) {
  return (
    <span className={cx(styles.tile, styles[size], styles[tone], round && styles.round, className)}>
      <Icon name={icon} size={iconSizes[size]} />
    </span>
  );
}
