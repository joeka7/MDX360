import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cx } from '@/utils/cx';
import styles from './ButtonWithIcon.module.css';

export type ButtonWithIconSize = 'sm' | 'md';

interface BaseProps {
  children: ReactNode;
  /** `sm` is 40px tall (header bar), `md` 48px. */
  size?: ButtonWithIconSize;
  fullWidth?: boolean;
  className?: string;
}

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'>;

type NativeProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

/** Pass `to` for an in-app route, `href` for an external/anchor link, or neither for a `<button>`. */
export type ButtonWithIconProps = BaseProps & (({ to: string } & AnchorProps) | ({ href: string } & AnchorProps) | NativeProps);

/**
 * Pill CTA with an arrow in a circle on the right. On hover or keyboard focus the circle
 * travels to the left edge, the arrow turns 45°, and the label slides right to make room.
 */
export function ButtonWithIcon({ children, size = 'sm', fullWidth, className, ...rest }: ButtonWithIconProps) {
  const classes = cx(styles.button, styles[size], fullWidth && styles.fullWidth, className);

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      <span className={styles.iconWrap} aria-hidden="true">
        <ArrowUpRight size={16} className={styles.icon} />
      </span>
    </>
  );

  if ('to' in rest) {
    return (
      <Link {...rest} className={classes}>
        {content}
      </Link>
    );
  }

  if ('href' in rest) {
    return (
      <a {...rest} className={classes}>
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
