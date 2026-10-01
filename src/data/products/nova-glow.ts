import image from '@/assets/images/products/nova-glow.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const novaGlow: Product = {
  slug: 'nova-glow',
  name: 'Nova Glow',
  category: 'skin',
  categoryLabel: 'Skin Rejuvenation',
  icon: 'flare',
  technology: 'Optical Skin Rejuvenation',
  technologyDetail: 'Calibrated Multi-Spectrum Pulsed Light',
  model: 'MDX-NG-PRO',
  modelTag: 'Optical Therapy',
  highlight: 'Optical Therapy',
  summary: 'Gentle, non-invasive rejuvenation that improves texture and reduces pigmentation.',
  description:
    'Multi-wavelength clinical photo-rejuvenation system reducing hyperpigmentation, uneven dermal tone, and fine vascular lesions.',
  image: { src: image, alt: 'Nova Glow skin rejuvenation system', fit: 'contain' },
  enquiryLabel: 'Skin Texture & Pigmentation Rejuvenation',
  relatedSlugs: ['hydro-plasma', 'oxy-mist', 'ice-gold-rf'],
  detail: {
    systemRef: 'MDX-NG-PRO',
    eyebrow: 'Optical Skin Rejuvenation',
    tagline: 'Multi-Spectrum Photo-Rejuvenation System',
    overview:
      'Nova Glow is a skin rejuvenation device improving texture, reducing pigmentation, and restoring a youthful glow with gentle, non-invasive treatments. Calibrated multi-spectrum light targets uneven tone and fine vascular concerns.',
    heroBadges: { primary: 'Optical Therapy', secondary: 'Multi-Spectrum Active' },
    keySpecs: [
      { label: 'Energy Modality', value: 'Pulsed Light', note: 'Calibrated multi-spectrum output' },
      { label: 'Treatment Style', value: 'Non-Invasive', note: 'Gentle, comfortable sessions', accent: true },
    ],
    indications: {
      ...applicationsIntro('Nova Glow'),
      items: [
        {
          icon: 'auto_fix_high',
          title: 'Texture Refinement',
          body: 'Improves skin texture for a smoother, more refined surface.',
        },
        {
          icon: 'flare',
          title: 'Pigmentation Reduction',
          body: 'Reduces hyperpigmentation and evens out dermal tone.',
        },
        {
          icon: 'face',
          title: 'Youthful Glow',
          body: 'Restores natural radiance with gentle, non-invasive treatments.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Multi-Wavelength Photo-Rejuvenation' },
        { label: 'Light Source', value: 'Calibrated Multi-Spectrum Pulsed Light' },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
