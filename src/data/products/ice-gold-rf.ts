import image from '@/assets/images/products/ice-gold-rf.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const iceGoldRf: Product = {
  slug: 'ice-gold-rf',
  name: 'Ice Gold RF',
  category: 'skin',
  categoryLabel: 'Radiofrequency',
  icon: 'electric_bolt',
  technology: 'Thermal-Cooling Radiofrequency',
  technologyDetail: 'Gold-Plated Multi-Polar RF + Cryo Head',
  model: 'MDX-RF-G',
  modelTag: 'Fractional + Micro',
  highlight: 'Cryo-Shielded',
  summary: 'Cryogenic epidermal cooling coupled with deep fractional dermal remodeling.',
  description:
    'Radiofrequency platform with integrated epidermal cooling for dermal tightening, collagen remodeling, and comfortable rejuvenation treatments.',
  image: { src: image, alt: 'Ice Gold RF radiofrequency platform', fit: 'contain' },
  enquiryLabel: 'RF Micro-needling & Rejuvenation',
  relatedSlugs: ['ice-hifo', 'quantum-lift', 'nova-glow'],
  detail: {
    systemRef: 'MDX-RF-G',
    eyebrow: 'Cooled Radiofrequency Rejuvenation',
    tagline: 'Multi-Polar RF with Integrated Cryo Protection',
    overview:
      'Ice Gold RF is a radiofrequency device with cooling technology for skin tightening, fat reduction, and rejuvenation. Gold-plated multi-polar RF delivers controlled thermal energy to the dermis while the integrated cryo head keeps every treatment comfortable.',
    heroBadges: { primary: 'Cryo-RF Technology', secondary: 'Cryo Head Active' },
    keySpecs: [
      { label: 'Energy Modality', value: 'Multi-Polar RF', note: 'Gold-plated electrode delivery' },
      { label: 'Surface Protection', value: 'Cryo Head', note: 'Sub-zero epidermal guard', accent: true },
    ],
    indications: {
      ...applicationsIntro('Ice Gold RF'),
      items: [
        {
          icon: 'face',
          title: 'Skin Tightening',
          body: 'Controlled RF heating contracts and firms the dermis for visibly tighter skin.',
        },
        {
          icon: 'accessibility_new',
          title: 'Fat Reduction',
          body: 'Thermal energy supports the reduction of localized fat while the skin surface stays protected.',
        },
        {
          icon: 'auto_fix_high',
          title: 'Skin Rejuvenation',
          body: 'Stimulates collagen remodeling for renewed skin texture and tone.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Multi-Polar Radiofrequency + Integrated Cooling' },
        { label: 'Applicator Technology', value: 'Gold-Plated Multi-Polar RF + Cryo Head' },
        { label: 'Treatment Mode', value: 'Fractional + Micro' },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
