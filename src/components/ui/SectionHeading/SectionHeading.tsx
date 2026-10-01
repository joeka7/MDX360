import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  eyebrowDot?: boolean;
  title: ReactNode;
  intro?: ReactNode;
  /** `lg` = 36px headline, `xl` = 48px headline. */
  size?: 'lg' | 'xl';
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  /** Content aligned to the right of the heading on wide screens (links, badges, notes). */
  aside?: ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
}

/** Eyebrow + title + intro block used at the top of content sections. */
export function SectionHeading({
  eyebrow,
  eyebrowDot,
  title,
  intro,
  size = 'lg',
  align = 'left',
  tone = 'light',
  aside,
  as: Heading = 'h2',
  className,
}: SectionHeadingProps) {
  const heading = (
    <div className={cx(styles.heading, styles[align], styles[size])}>
      {eyebrow && (
        <Eyebrow tone={tone} dot={eyebrowDot}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading className={cx(styles.title, tone === 'dark' && styles.titleDark)}>{title}</Heading>
      {intro && <p className={cx(styles.intro, tone === 'dark' && styles.introDark)}>{intro}</p>}
    </div>
  );

  if (!aside) return <div className={cx(styles.wrapper, className)}>{heading}</div>;

  return (
    <div className={cx(styles.wrapper, styles.withAside, className)}>
      {heading}
      <div className={styles.aside}>{aside}</div>
    </div>
  );
}
