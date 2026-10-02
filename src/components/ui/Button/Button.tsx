import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import { Icon, type IconSize } from '../Icon/Icon';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'tonal' | 'light' | 'ghostDark' | 'accentOutline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon before the label. */
  icon?: IconName;
  /** Icon after the label; nudges right on hover. */
  trailingIcon?: IconName;
  fullWidth?: boolean;
  className?: string;
}

type NativeProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

type LinkProps = { onClick?: MouseEventHandler<HTMLAnchorElement> };

/** Pass `to` for an in-app route, `href` for an external/anchor link, or neither for a `<button>`. */
export type ButtonProps = BaseProps & (({ to: string } & LinkProps) | ({ href: string } & LinkProps) | NativeProps);

const iconSizes: Record<ButtonSize, IconSize> = { sm: 16, md: 18, lg: 20 };

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  trailingIcon,
  fullWidth,
  className,
  ...rest
}: ButtonProps) {
  const classes = cx(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, className);

  const content = (
    <>
      {icon && <Icon name={icon} size={iconSizes[size]} />}
      <span>{children}</span>
      {trailingIcon && <Icon name={trailingIcon} size={iconSizes[size]} className={styles.trailing} />}
    </>
  );

  if ('to' in rest) {
    return (
      <Link to={rest.to} onClick={rest.onClick} className={classes}>
        {content}
      </Link>
    );
  }

  if ('href' in rest) {
    return (
      <a href={rest.href} onClick={rest.onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...rest} className={classes}>
      {content}
    </button>
  );
}
