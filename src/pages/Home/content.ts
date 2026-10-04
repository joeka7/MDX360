import excimerImage from '@/assets/images/products/308nm_Excimer.webp';
import flagshipImage from '@/assets/images/products/5 in 1 7D+Microneedle rf+Vmax+Vaginal+Liposonix.webp';
import magnetoImage from '@/assets/images/products/A0271 Physio Magneto.webp';
import type { IconName } from '@/types/product';
import type { HeroDevice } from './HomeHero/HeroDevices';

/** Hero trust strip. */
export const heroTrust = [
  { label: 'Quality', value: 'ISO 13485 manufacturing' },
  { label: 'Portfolio', value: '12+ proprietary systems' },
  { label: 'Warranty', value: '12-month OEM guarantee' },
  { label: 'Support', value: 'Turnkey clinic setup' },
];

/**
 * Hero device composition. The first entry is the flagship and starts in front.
 * `crop` is the measured device silhouette inside each square cut-out (percent of the canvas).
 */
export const heroDevices: HeroDevice[] = [
  {
    name: '5-in-1 7D Platform',
    image: flagshipImage,
    alt: '5-in-1 7D platform with microneedle RF, Vmax, vaginal and Liposonix handpieces',
    crop: { x: 26.3, y: 7.6, width: 47.5, height: 88.4 },
  },
  {
    name: '308nm Excimer',
    image: excimerImage,
    alt: '308nm excimer phototherapy system with a single handpiece',
    crop: { x: 33.7, y: 14.5, width: 37.8, height: 78.3 },
  },
  {
    name: 'A0271 Physio Magneto',
    image: magnetoImage,
    alt: 'A0271 Physio Magneto therapy system with an articulated treatment head',
    crop: { x: 27.9, y: 7.2, width: 44.4, height: 87.7 },
  },
];

export const pillars: Array<{ icon: IconName; title: string; body: string; footer: string }> = [
  {
    icon: 'center_focus_strong',
    title: 'Non-Invasive Aesthetic Precision',
    body: 'Targeting subcutaneous tissue matrices and stimulating endogenous collagen remodeling with zero epidermal disruption, delivering immediate contour clarity.',
    footer: 'Sub-dermal Target Systems',
  },
  {
    icon: 'healing',
    title: 'Regenerative & Therapeutic Power',
    body: 'Harnessing micro-current bio-stimulation and shockwave dynamics to accelerate clinical tissue repair, soothe cellular inflammation, and restore vascular vitality.',
    footer: 'Dynamic Cellular Activation',
  },
  {
    icon: 'insights',
    title: 'Unrivaled Diagnostic Confidence',
    body: 'Equipped with intuitive, high-resolution visual interfaces, algorithmic impedance sensors, and automated energy metering to guarantee practitioner certainty.',
    footer: 'Intelligent Energy Modulation',
  },
];

/** Products featured in the home page device catalogue. */
export const featuredProductSlugs = [
  'shape-master',
  '7d-hifo',
  'ice-gold-rf',
  'quantum-lift',
  'hydro-plasma',
  'revita-heal',
];

export const capabilities: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'tune',
    title: 'Free Custom Service',
    body: 'Tailored device ergonomics, branded interface presets, and personalized multi-stage treatment configuration for your specialized medical workflow.',
  },
  {
    icon: 'rocket_launch',
    title: 'Free Expert Installation',
    body: 'Turnkey international delivery followed by on-premise installation and comprehensive hands-on operational training by certified clinical engineers.',
  },
  {
    icon: 'verified',
    title: '12-Month Guarantee',
    body: 'Uncompromising manufacturer warranty covering internal micro-components, power supplies, optical waveguides, and rapid replacement guarantees.',
  },
  {
    icon: 'headset_mic',
    title: 'Dedicated Clinical Support',
    body: 'Direct 24/7 access to biomedical engineering desks, ongoing clinical updates, and software firmware calibration over the entire hardware lifecycle.',
  },
];

export const enquiryBenefits = [
  'Direct OEM Device Pricing & Specification Sheets',
  'Regional Clinical Certification Demonstrations',
  'Bespoke Multi-Unit Enterprise Leasing Available',
];
