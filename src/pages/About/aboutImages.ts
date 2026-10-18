import midPhoto from '@/assets/images/about-mid.webp';
import mid2Photo from '@/assets/images/about-mid-2.webp';
import heroPhoto from '@/assets/images/about-us.webp';
import cavitationPhoto from '@/assets/images/products/MDX360 6 in 1 Cavitation New.webp';
import hydroFacialPhoto from '@/assets/images/products/MDX360 9 in 1 Hydra.webp';
import fiveInOnePhoto from '@/assets/images/products/five-in-one.webp';
import velashapePhoto from '@/assets/images/products/MDX360_Velashape.webp';

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
    fiveInOne: device('five-in-one', fiveInOnePhoto),
    velashape: device('vertical-5-in-1-velashape', velashapePhoto),
    cavitation: device('6-in-1-cavitation', cavitationPhoto),
  },
  /** Portrait photo: the CTA frames it with `contain`, unlike the square lineup tiles. */
  ctaDevice: device('9-in-1-hydro-facial', hydroFacialPhoto),
};
