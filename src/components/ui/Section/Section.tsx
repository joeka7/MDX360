import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './Section.module.css';

export type SectionTone = 'lowest' | 'surface' | 'low' | 'tinted' | 'dark';

const spacingClass = {
  none: styles.spacingNone,
  sm: styles.spacingSm,
  md: styles.spacingMd,
  lg: styles.spacingLg,
};

interface SectionProps {
  children: ReactNode;
  /** Background surface. */
  tone?: SectionTone;
  /** Vertical padding: sm = 2.5rem, md = 4rem, lg = 5rem. */
  spacing?: keyof typeof spacingClass;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Decorative layers rendered behind the content (e.g. glows). */
  background?: ReactNode;
}

/** Full-width page band with a centred, max-width content container. */
export function Section({
  children,
  tone = 'lowest',
  spacing = 'md',
  id,
  className,
  containerClassName,
  background,
}: SectionProps) {
  return (
    <section id={id} className={cx(styles.section, styles[tone], spacingClass[spacing], className)}>
      {background}
      <div className={cx(styles.container, containerClassName)}>{children}</div>
    </section>
  );
}

/** Max-width content wrapper for use outside `Section`. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.container, className)}>{children}</div>;
}
