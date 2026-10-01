import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import { Icon } from '../Icon/Icon';
import styles from './TextLink.module.css';

interface TextLinkProps {
  to: string;
  children: ReactNode;
  icon?: IconName;
  className?: string;
}

/** Bold accent text link with a trailing icon. */
export function TextLink({ to, children, icon = 'arrow_forward', className }: TextLinkProps) {
  return (
    <Link to={to} className={cx(styles.link, className)}>
      <span>{children}</span>
      <Icon name={icon} size={18} />
    </Link>
  );
}
