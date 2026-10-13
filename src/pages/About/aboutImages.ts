import heroPhoto from '@/assets/images/about-us.webp';
import sevenDHifoPhoto from '@/assets/images/products/7d-hifo.webp';
import hydroPlasmaPhoto from '@/assets/images/products/hydro-plasma.webp';
import shapeMasterPhoto from '@/assets/images/products/shape-master.webp';
import shockWaveXPhoto from '@/assets/images/products/shock-wave-x.webp';

/**
 * Commissioned About photography. Drop each file into `src/assets/images/about/` under the name
 * below and the page picks it up; until then its ImageSlot renders a neutral placeholder.
 */
const aboutPhotos = import.meta.glob<string>('/src/assets/images/about/*.webp', { eager: true, import: 'default' });

/**
 * Transparent-background cut-outs, named by product slug: the same folder the Products page and
 * the home Device Catalogue read. A device without one falls back to its square product photo.
 */
const cutouts = import.meta.glob<string>('/src/assets/images/catalogue/*.webp', { eager: true, import: 'default' });

export interface DeviceImage {
  src: string;
  isCutout: boolean;
}

function device(slug: string, fallback: string): DeviceImage {
  const cutout = cutouts[`/src/assets/images/catalogue/${slug}.webp`];
  return { src: cutout ?? fallback, isCutout: !!cutout };
}

export const aboutImages = {
  /** 1500 × 1500 original. */
  hero: heroPhoto,
  /** ≥ 2400 × 1000: the assembly or calibration environment. */
  architecturalBand: aboutPhotos['/src/assets/images/about/architectural-band.webp'] as string | undefined,
  /** ≥ 1400 × 1600: a technician's hands calibrating a treatment handpiece. */
  calibrationCloseup: aboutPhotos['/src/assets/images/about/calibration-closeup.webp'] as string | undefined,
  lineup: {
    hydroPlasma: device('hydro-plasma', hydroPlasmaPhoto),
    shapeMaster: device('shape-master', shapeMasterPhoto),
    shockWaveX: device('shock-wave-x', shockWaveXPhoto),
  },
  ctaDevice: device('7d-hifo', sevenDHifoPhoto),
};
