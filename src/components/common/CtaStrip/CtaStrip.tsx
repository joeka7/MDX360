import type { ReactNode } from 'react';
import { IconTile, type IconTileTone } from '@/components/ui';
import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './CtaStrip.module.css';

interface CtaStripProps {
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  icon?: IconName;
  iconTone?: IconTileTone;
  iconRound?: boolean;
  /** `light` = tinted panel on light sections, `dark` = translucent panel on navy sections. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Horizontal call-to-action panel: optional icon, message, and actions. */
export function CtaStrip({
  title,
  description,
  actions,
  icon,
  iconTone = 'primary',
  iconRound,
  tone = 'light',
  className,
}: CtaStripProps) {
  return (
    <div className={cx(styles.strip, styles[tone], className)}>
      <div className={styles.message}>
        {icon && <IconTile icon={icon} size="lg" tone={iconTone} round={iconRound} />}
        <div className={styles.copy}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.actions}>{actions}</div>
    </div>
  );
}
