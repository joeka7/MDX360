import {
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type PointerEvent,
} from 'react';
import { ArrowRight } from 'lucide-react';
import { cx } from '@/utils/cx';
import styles from './ArrowFillButton.module.css';

interface ArrowFillButtonBaseProps {
  btnText: string;
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
  /** Arrow circle background once active. */
  hoverCircleColor?: string;
  /** Arrow colour at rest. */
  arrowColor?: string;
  /** Arrow colour once active. */
  hoverArrowColor?: string;
}

type LinkProps = ArrowFillButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> & { href: string };

type ActionProps = ArrowFillButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { href?: undefined };

/** With `href` it renders a link; without, a `<button>` (e.g. a form submit). */
export type ArrowFillButtonProps = LinkProps | ActionProps;

type PointerHandler = (event: PointerEvent<HTMLElement>) => void;

/**
 * Pill link with an arrow in a circle on the right. On hover, keyboard focus or touch press a
 * circle grows out from behind the arrow until it fills the pill, while the arrow slides out
 * and a fresh one slides in. Colours default to the MDX360 palette and can be overridden.
 */
export function ArrowFillButton({
  btnText,
  bgColor,
  textColor,
  fillColor,
  hoverTextColor,
  circleColor,
  hoverCircleColor,
  arrowColor,
  hoverArrowColor,
  className,
  style,
  ...rest
}: ArrowFillButtonProps) {
  const [pressed, setPressed] = useState(false);
  const { onPointerDown, onPointerUp, onPointerCancel, onPointerLeave } = rest as {
    onPointerDown?: PointerHandler;
    onPointerUp?: PointerHandler;
    onPointerCancel?: PointerHandler;
    onPointerLeave?: PointerHandler;
  };

  // Touch screens never hover, so a finger on the button plays the fill as a pressed state.
  const press = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') setPressed(true);
    onPointerDown?.(event);
  };
  const release = (handler?: PointerHandler) => (event: PointerEvent<HTMLElement>) => {
    setPressed(false);
    handler?.(event);
  };

  const colors = {
    '--afb-bg': bgColor,
    '--afb-text': textColor,
    '--afb-fill': fillColor,
    '--afb-hover-text': hoverTextColor,
    '--afb-circle': circleColor,
    '--afb-hover-circle': hoverCircleColor,
    '--afb-arrow': arrowColor,
    '--afb-hover-arrow': hoverArrowColor,
  } as CSSProperties;

  const shared = {
    className: cx(styles.button, className),
    style: { ...colors, ...style },
    'data-pressed': pressed || undefined,
    onPointerDown: press,
    onPointerUp: release(onPointerUp),
    onPointerCancel: release(onPointerCancel),
    onPointerLeave: release(onPointerLeave),
  };

  const content = (
    <>
      <span className={styles.fill} aria-hidden="true" />
      <span className={styles.label}>{btnText}</span>
      <span className={styles.circle} aria-hidden="true">
        <ArrowRight size={18} strokeWidth={2.25} className={styles.arrow} />
        <ArrowRight size={18} strokeWidth={2.25} className={cx(styles.arrow, styles.arrowNext)} />
      </span>
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a {...(rest as LinkProps)} {...shared}>
        {content}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ActionProps;
  return (
    <button {...buttonRest} type={type} {...shared}>
      {content}
    </button>
  );
}
