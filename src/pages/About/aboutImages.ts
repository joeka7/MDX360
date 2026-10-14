import midPhoto from '@/assets/images/about-mid.webp';
import mid2Photo from '@/assets/images/about-mid-2.webp';
import heroPhoto from '@/assets/images/about-us.webp';
import sevenDHifoPhoto from '@/assets/images/products/7d-hifo.webp';
import hydroPlasmaPhoto from '@/assets/images/products/hydro-plasma.webp';
import shapeMasterPhoto from '@/assets/images/products/shape-master.webp';
import shockWaveXPhoto from '@/assets/images/products/shock-wave-x.webp';

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
  /** 1672 × 941 original: the assembly or calibration environment. */
  architecturalBand: midPhoto,
  /** 2400 × 1792 original: a technician's hands calibrating a treatment handpiece. */
  calibrationCloseup: mid2Photo,
  lineup: {
    hydroPlasma: device('hydro-plasma', hydroPlasmaPhoto),
    shapeMaster: device('shape-master', shapeMasterPhoto),
    shockWaveX: device('shock-wave-x', shockWaveXPhoto),
  },
  ctaDevice: device('7d-hifo', sevenDHifoPhoto),
};
