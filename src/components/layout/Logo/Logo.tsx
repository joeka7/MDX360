import type { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/brand/mdx360-logo.png';
import { company, routes } from '@/data/site';
import { cx } from '@/utils/cx';
import styles from './Logo.module.css';

interface LogoProps {
  /**
   * `light` for light backgrounds, `dark` frames the mark on a white plate,
   * `inverse` renders the mark alone in white for dark or glass surfaces,
   * `ink` renders the mark alone in its native black for white bars.
   */
  tone?: 'light' | 'dark' | 'inverse' | 'ink';
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/** Brand mark + wordmark, linking home. */
export function Logo({ tone = 'light', className, onClick }: LogoProps) {
  return (
    <Link
      to={routes.home}
      className={cx(styles.logo, styles[tone], className)}
      aria-label={`${company.name} home`}
      onClick={onClick}
    >
      <span className={styles.markFrame}>
        <img src={logo} alt="" className={styles.mark} width={332} height={93} />
      </span>
      <span className={styles.wordmark} aria-hidden="true">
        MDX<span className={styles.wordmarkAccent}>360</span>
      </span>
    </Link>
  );
}
