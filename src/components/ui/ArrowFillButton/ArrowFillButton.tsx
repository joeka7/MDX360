import { useState, type AnchorHTMLAttributes, type CSSProperties, type PointerEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { cx } from '@/utils/cx';
import styles from './ArrowFillButton.module.css';

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>;

export interface ArrowFillButtonProps extends AnchorProps {
  btnText: string;
  href: string;
  /** Pill background at rest. */
  bgColor?: string;
  /** Label colour at rest. */
  textColor?: string;
  /** Colour of the circle that floods the pill on hover, focus or press. */
  fillColor?: string;
  /** Label colour once the fill has covered the pill. */
  hoverTextColor?: string;
  /** Arrow circle background. */
  circleColor?: string;
  /** Arrow colour at rest. */
  arrowColor?: string;
  /** Arrow colour once active. */
  hoverArrowColor?: string;
}

/**
 * Pill link with an arrow in a circle on the right. On hover, keyboard focus or touch press a
 * circle grows out from behind the arrow until it fills the pill, while the arrow slides out
 * and a fresh one slides in. Colours default to the MDX360 palette and can be overridden.
 */
export function ArrowFillButton({
  btnText,
  href,
  bgColor,
  textColor,
  fillColor,
  hoverTextColor,
  circleColor,
  arrowColor,
  hoverArrowColor,
  className,
  style,
  onPointerDown,
  onPointerUp,
  onPointerCancel,
  onPointerLeave,
  ...rest
}: ArrowFillButtonProps) {
  const [pressed, setPressed] = useState(false);

  // Touch screens never hover, so a finger on the button plays the fill as a pressed state.
  const press = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== 'mouse') setPressed(true);
    onPointerDown?.(event);
  };
  const release =
    (handler?: (event: PointerEvent<HTMLAnchorElement>) => void) => (event: PointerEvent<HTMLAnchorElement>) => {
      setPressed(false);
      handler?.(event);
    };

  const colors = {
    '--afb-bg': bgColor,
    '--afb-text': textColor,
    '--afb-fill': fillColor,
    '--afb-hover-text': hoverTextColor,
    '--afb-circle': circleColor,
    '--afb-arrow': arrowColor,
    '--afb-hover-arrow': hoverArrowColor,
  } as CSSProperties;

  return (
    <a
      {...rest}
      href={href}
      className={cx(styles.button, className)}
      style={{ ...colors, ...style }}
      data-pressed={pressed || undefined}
      onPointerDown={press}
      onPointerUp={release(onPointerUp)}
      onPointerCancel={release(onPointerCancel)}
      onPointerLeave={release(onPointerLeave)}
    >
      <span className={styles.fill} aria-hidden="true" />
      <span className={styles.label}>{btnText}</span>
      <span className={styles.circle} aria-hidden="true">
        <ArrowRight size={18} strokeWidth={2.25} className={styles.arrow} />
        <ArrowRight size={18} strokeWidth={2.25} className={cx(styles.arrow, styles.arrowNext)} />
      </span>
    </a>
  );
}
