import type { ReactNode } from 'react';
import { Icon, IconTile, type IconTileTone } from '@/components/ui';
import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: IconName;
  title: ReactNode;
  children: ReactNode;
  /** Small label above the title (e.g. a phase or category). */
  eyebrow?: ReactNode;
  /** Ordinal shown opposite the icon, e.g. "01". */
  index?: string;
  footer?: ReactNode;
  /** `white` card, `muted` (tinted) card, or translucent `dark` card for navy sections. */
  tone?: 'white' | 'muted' | 'dark';
  iconTone?: IconTileTone;
  iconSize?: 'md' | 'lg';
  padding?: 'md' | 'lg' | 'xl';
  /** `display` = 20px headline, `caps` = small uppercase heading. */
  titleStyle?: 'display' | 'caps';
  bodySize?: 'sm' | 'md';
  hover?: 'shadow' | 'lift' | 'tint';
  headingLevel?: 'h3' | 'h4';
  className?: string;
}

const paddingClass = { md: styles.padMd, lg: styles.padLg, xl: styles.padXl };
const hoverClass = { shadow: styles.hoverShadow, lift: styles.hoverLift, tint: styles.hoverTint };
const bodyClass = { sm: styles.bodySm, md: styles.bodyMd };

const defaultIconTone: Record<NonNullable<FeatureCardProps['tone']>, IconTileTone> = {
  white: 'high',
  muted: 'white',
  dark: 'cyanSoft',
};

/** Icon + title + body card — the core repeated content pattern across the site. */
export function FeatureCard({
  icon,
  title,
  children,
  eyebrow,
  index,
  footer,
  tone = 'white',
  iconTone,
  iconSize = 'lg',
  padding = 'lg',
  titleStyle = 'display',
  bodySize = 'md',
  hover = 'shadow',
  headingLevel: Heading = 'h3',
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cx(
        styles.card,
        styles[tone],
        paddingClass[padding],
        hoverClass[hover],
        className,
      )}
    >
      <div className={styles.content}>
        <div className={styles.top}>
          <IconTile icon={icon} size={iconSize} tone={iconTone ?? defaultIconTone[tone]} />
          {index && <span className={styles.index}>{index}</span>}
        </div>
        <div className={styles.heading}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <Heading className={cx(styles.title, styles[titleStyle])}>{title}</Heading>
        </div>
        <div className={cx(styles.body, bodyClass[bodySize])}>{children}</div>
      </div>
      {footer}
    </article>
  );
}

/** Footer row with a label and a highlighted value, separated by a hairline. */
export function FeatureMeta({ label, value }: { label: ReactNode; value: ReactNode }) {
  return (
    <div className={styles.meta}>
      <span>{label}</span>
      <span className={styles.metaValue}>{value}</span>
    </div>
  );
}

/** Footer line with a check icon. */
export function FeatureCheck({
  children,
  divider = true,
  tone = 'light',
}: {
  children: ReactNode;
  divider?: boolean;
  tone?: 'light' | 'dark';
}) {
  return (
    <div className={cx(styles.check, divider && styles.checkDivider, tone === 'dark' && styles.checkDark)}>
      <Icon name="check_circle" size={16} />
      <span>{children}</span>
    </div>
  );
}

/** Tinted metric chip with a label and value. */
export function FeatureMetric({ label, value }: { label: ReactNode; value: ReactNode }) {
  return (
    <div className={styles.metric}>
      <span className={styles.metricLabel}>{label}</span>
      <span className={styles.metricValue}>{value}</span>
    </div>
  );
}

/** Accent footer text with an icon, leading by default (e.g. a duration) or trailing (link-like). */
export function FeatureNote({
  icon,
  children,
  trailing,
}: {
  icon: IconName;
  children: ReactNode;
  trailing?: boolean;
}) {
  return (
    <div className={cx(styles.note, trailing && styles.noteTrailing)}>
      {!trailing && <Icon name={icon} size={15} />}
      <span>{children}</span>
      {trailing && <Icon name={icon} size={16} />}
    </div>
  );
}
