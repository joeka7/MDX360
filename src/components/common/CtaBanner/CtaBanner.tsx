import type { ReactNode } from 'react';
import { Icon, Pill } from '@/components/ui';
import type { IconName } from '@/types/product';
import styles from './CtaBanner.module.css';

interface CtaBannerProps {
  badge?: { icon: IconName; label: string };
  title: ReactNode;
  description: ReactNode;
  highlights?: Array<{ icon: IconName; label: string }>;
  actions: ReactNode;
}

/** Enterprise enquiry banner: deep navy gradient panel with vector linework. */
export function CtaBanner({ badge, title, description, highlights, actions }: CtaBannerProps) {
  return (
    <div className={styles.banner}>
      <svg className={styles.mesh} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,0 L100,100 M20,0 L100,80 M0,20 L80,100 M40,0 L100,60 M0,40 L60,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
      <div className={styles.grid}>
        <div className={styles.copy}>
          {badge && (
            <Pill tone="cyan" icon={badge.icon}>
              {badge.label}
            </Pill>
          )}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          {highlights && (
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item.label} className={styles.highlight}>
                  <Icon name={item.icon} size={18} className={styles.highlightIcon} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.actions}>{actions}</div>
      </div>
    </div>
  );
}
