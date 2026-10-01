import { Link } from 'react-router-dom';
import logo from '@/assets/images/brand/mdx360-logo.png';
import { company, routes } from '@/data/site';
import { cx } from '@/utils/cx';
import styles from './Logo.module.css';

interface LogoProps {
  /** `light` for light backgrounds, `dark` frames the mark on a white plate. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Brand mark + wordmark, linking home. */
export function Logo({ tone = 'light', className }: LogoProps) {
  return (
    <Link to={routes.home} className={cx(styles.logo, styles[tone], className)} aria-label={`${company.name} home`}>
      <span className={styles.markFrame}>
        <img src={logo} alt="" className={styles.mark} width={332} height={93} />
      </span>
      <span className={styles.wordmark} aria-hidden="true">
        MDX<span className={styles.accent}>360</span>
      </span>
    </Link>
  );
}
