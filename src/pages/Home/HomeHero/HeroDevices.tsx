import { useState, type CSSProperties } from 'react';
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
const backSlots = [styles.slotLeft, styles.slotRight];

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
 * Hero device composition: the selected device stands in front, the other two behind it on
 * either side. The index below the stage brings any of them to the front.
 */
export function HeroDevices({ devices }: HeroDevicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const backIndexes = devices.map((_, index) => index).filter((index) => index !== activeIndex);

  return (
    <div className={styles.devices}>
      <div className={styles.stage}>
        {devices.map((device, index) => {
          const crop = cropStyles(device.crop);
          const slot = index === activeIndex ? styles.slotFront : backSlots[backIndexes.indexOf(index)];
          return (
            <div key={device.name} className={cx(styles.device, slot)} style={crop.frame}>
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
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.selectorIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.selectorName}>{device.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
