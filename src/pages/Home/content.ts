import type { IconName } from '@/types/product';

export const heroMetrics = [
  { value: '12+', label: 'Proprietary Systems', accent: true },
  { value: '12-Mo', label: 'OEM Guarantee' },
  { value: '100%', label: 'Turnkey Protocol' },
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
