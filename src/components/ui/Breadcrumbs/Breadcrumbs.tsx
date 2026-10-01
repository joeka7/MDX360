import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@/utils/cx';
import { Icon } from '../Icon/Icon';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: 'chevron' | 'slash';
  /** `label` = small uppercase, `tech` = regular-case spec text. */
  variant?: 'label' | 'tech';
  homeIcon?: boolean;
  className?: string;
}

export function Breadcrumbs({
  items,
  separator = 'chevron',
  variant = 'label',
  homeIcon,
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cx(styles.breadcrumbs, styles[variant], className)}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Fragment key={item.label}>
              <li className={styles.item}>
                {item.to && !isLast ? (
                  <Link to={item.to} className={styles.link}>
                    {homeIcon && index === 0 && <Icon name="home" size={14} />}
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.current} aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li className={styles.separator} aria-hidden="true">
                  {separator === 'chevron' ? <Icon name="chevron_right" size={variant === 'tech' ? 16 : 14} /> : '/'}
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
