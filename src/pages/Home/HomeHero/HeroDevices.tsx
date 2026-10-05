import { useState, type CSSProperties } from 'react';
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
 */
export function HeroDevices({ devices }: HeroDevicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);

  const autoplay = !reducedMotion && devices.length > 1;

  const backIndexes = devices
    .slice(1)
    .map((_, offset) => (activeIndex + 1 + offset) % devices.length);

  /** Brings a device to the front and runs its timer; hovering again after leaving pauses it. */
  const select = (index: number) => {
    setActiveIndex(index);
    setPaused(false);
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
      <div className={styles.stage}>
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
              onClick={() => select(index)}
            >
              <span
                className={styles.selectorProgress}
                aria-hidden="true"
                onAnimationEnd={() => {
                  if (autoplay) setActiveIndex((current) => (current + 1) % devices.length);
                }}
              />
              <span className={styles.selectorIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.selectorName}>{device.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
