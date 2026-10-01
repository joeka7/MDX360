import type { ReactNode } from 'react';
import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import { Icon } from '../Icon/Icon';
import styles from './Pill.module.css';

export type PillTone = 'soft' | 'muted' | 'high' | 'secondary' | 'glass' | 'solid' | 'dark' | 'cyan' | 'outlineDark';

interface PillProps {
  children: ReactNode;
  tone?: PillTone;
  /** Status indicator dot. */
  dot?: 'static' | 'pulse' | 'ping';
  icon?: IconName;
  className?: string;
}

/** Compact badge / status label. */
export function Pill({ children, tone = 'soft', dot, icon, className }: PillProps) {
  return (
    <span className={cx(styles.pill, styles[tone], className)}>
      {dot && <span className={cx(styles.dot, styles[dot])} aria-hidden="true" />}
      {icon && <Icon name={icon} size={15} />}
      {children}
    </span>
  );
}
