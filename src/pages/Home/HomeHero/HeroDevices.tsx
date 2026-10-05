import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cx } from '@/utils/cx';
import styles from './HomeHero.module.css';

export interface HeroDevice {
  name: string;
  /** Square cut-out with a transparent background. */
  image: string;
  alt: string;
  /** Device silhouette inside the square image, as percentages of its width and height. */
  crop: { x: number; y: number; width: number; height: number };
}

interface HeroDevicesProps {
  /** The first device is the flagship and starts in front. */
  devices: HeroDevice[];
}

const IMAGE_SIZE = 2048;
/** How long each device stays in front before the next one rotates in. */
const AUTOPLAY_DELAY = 4000;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
/**
 * Back slots in rotation order: the next device waits nearest the front on the left, the one
 * after it further back, then the far right, and the device that just left the front stands
 * nearest it on the right. Each rotation walks every device one slot along that loop.
 */
const backSlots = [styles.slotLeft, styles.slotLeftFar, styles.slotRightFar, styles.slotRight];
/** Horizontal travel before a press counts as a swipe rather than a click on a device. */
const SWIPE_SLOP = 6;
/** Horizontal travel that steps to the neighbouring device: 15% of the stage, kept within 48–80px. */
const SWIPE_RATIO = 0.15;
const SWIPE_MIN = 48;
const SWIPE_MAX = 80;
/** A quick flick steps too, even short of the threshold: at least this far, within this long. */
const FLICK_DISTANCE = 24;
const FLICK_TIME = 250;

interface SwipeState {
  pointerId: number;
  startX: number;
  startTime: number;
  /** Front device when the press began; a swipe steps once from here. */
  startIndex: number;
  threshold: number;
  /** Past SWIPE_SLOP: the stage holds the pointer and the trailing click is dropped. */
  tracking: boolean;
  /** This press has already stepped, so it won't step again. */
  done: boolean;
}

/** Sizes the frame to the silhouette and shifts the image so its transparent margin falls outside it. */
function cropStyles({ x, y, width, height }: HeroDevice['crop']) {
  const frame: CSSProperties = { aspectRatio: `${width} / ${height}` };
  const image: CSSProperties = {
    width: `${(100 * 100) / width}%`,
    left: `${(-100 * x) / width}%`,
    top: `${(-100 * y) / height}%`,
  };
  return { frame, image };
}

/**
 * Hero device composition: the selected device stands in front, the other four behind it. The
 * front device rotates every few seconds, pausing while the composition is hovered or focused;
 * clicking a back device, or its item in the index below the stage, brings it to the front and
 * restarts the rotation from there, even while the pointer is still over it.
 *
 * The rotation is clocked by the progress bar on the selected index item: when its fill
 * animation ends the next device rotates in, so pausing the animation pauses the rotation
 * and the bar never drifts from it. A new front device starts a fresh fill.
 *
 * Pressing on the stage and moving sideways steps one device: moving right brings forward the
 * device standing on its right (the previous one), moving left the one on its left (the next
 * one), looping round past either end. A press steps at most once, and the devices never
 * follow the pointer.
 */
export function HeroDevices({ devices }: HeroDevicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const swipeRef = useRef<SwipeState | null>(null);
  /** Set once a press turns into a swipe, so its trailing click doesn't select a device. */
  const suppressClickRef = useRef(false);

  const autoplay = !reducedMotion && devices.length > 1;

  const backIndexes = devices
    .slice(1)
    .map((_, offset) => (activeIndex + 1 + offset) % devices.length);

  /** Brings a device to the front and runs its timer; hovering again after leaving pauses it. */
  const select = (index: number) => {
    setActiveIndex(index);
    setPaused(false);
  };

  /** Steps once from where the press began, wrapping past either end. */
  const step = (swipe: SwipeState, deltaX: number) => {
    swipe.done = true;
    select((swipe.startIndex + (deltaX > 0 ? -1 : 1) + devices.length) % devices.length);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    const width = event.currentTarget.getBoundingClientRect().width;
    suppressClickRef.current = false;
    swipeRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startTime: event.timeStamp,
      startIndex: activeIndex,
      threshold: Math.min(SWIPE_MAX, Math.max(SWIPE_MIN, width * SWIPE_RATIO)),
      tracking: false,
      done: false,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const swipe = swipeRef.current;
    if (!swipe || swipe.done || event.pointerId !== swipe.pointerId) return;
    const deltaX = event.clientX - swipe.startX;

    if (!swipe.tracking && Math.abs(deltaX) >= SWIPE_SLOP) {
      // Hold the pointer so the swipe keeps reading moves (and its release) beyond the stage.
      swipe.tracking = true;
      suppressClickRef.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (Math.abs(deltaX) >= swipe.threshold) step(swipe, deltaX);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const swipe = swipeRef.current;
    if (swipe?.pointerId !== event.pointerId) return;
    swipeRef.current = null;
    const deltaX = event.clientX - swipe.startX;
    const quick = event.timeStamp - swipe.startTime <= FLICK_TIME;
    if (!swipe.done && quick && Math.abs(deltaX) >= FLICK_DISTANCE) step(swipe, deltaX);
  };

  const onPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeRef.current?.pointerId === event.pointerId) swipeRef.current = null;
  };

  return (
    <div
      className={cx(styles.devices, autoplay && styles.autoplay, paused && styles.paused)}
      style={{ '--autoplay-delay': `${AUTOPLAY_DELAY}ms` } as CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div
        className={styles.stage}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerEnd}
        // Touch implicitly captures to the pressed image, which bubbles its loss here when the
        // stage takes over; only the stage's own loss ends the swipe.
        onLostPointerCapture={(event) => {
          if (event.target === event.currentTarget) onPointerEnd(event);
        }}
        onClickCapture={(event) => {
          if (!suppressClickRef.current) return;
          suppressClickRef.current = false;
          event.stopPropagation();
        }}
      >
        {devices.map((device, index) => {
          const crop = cropStyles(device.crop);
          const isFront = index === activeIndex;
          const slot = isFront ? styles.slotFront : backSlots[backIndexes.indexOf(index)];
          return (
            // Pointer shortcut only; the index buttons below are the keyboard path.
            <div
              key={device.name}
              className={cx(styles.device, slot, !isFront && styles.deviceSelectable)}
              style={crop.frame}
              onClick={isFront ? undefined : () => select(index)}
            >
              <div className={styles.deviceCrop}>
                <img
                  className={styles.deviceImage}
                  style={crop.image}
                  src={device.image}
                  alt={device.alt}
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE}
                  decoding="async"
                  draggable={false}
                  fetchPriority={index === 0 ? 'high' : undefined}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.selector}>
        <div className={styles.selectorList} role="group" aria-label="Featured systems">
          {devices.map((device, index) => (
            <button
              key={device.name}
              type="button"
              className={styles.selectorItem}
              aria-pressed={index === activeIndex}
              aria-label={device.name}
              onClick={() => select(index)}
            >
              <span
                className={styles.selectorProgress}
                aria-hidden="true"
                onAnimationEnd={() => {
                  if (autoplay) setActiveIndex((current) => (current + 1) % devices.length);
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
