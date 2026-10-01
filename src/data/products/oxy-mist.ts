import image from '@/assets/images/products/oxy-mist.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const oxyMist: Product = {
  slug: 'oxy-mist',
  name: 'Oxy Mist',
  category: 'skin',
  categoryLabel: 'Oxygen Therapy',
  icon: 'air',
  technology: 'Oxygen Infusion Therapy',
  technologyDetail: '3.0 Bar Medical Grade Oxygen Sprayer',
  model: 'MDX-OXY-PRO',
  modelTag: 'Transdermal Flow',
  highlight: 'Transdermal Flow',
  summary: 'Oxygen and nutrient-rich serum delivery for hydration, glow, and an even complexion.',
  description:
    'Hyperbaric micro-atomized oxygen workstation delivering antioxidant serums into the skin for instant radiance and moisture lock.',
  image: { src: image, alt: 'Oxy Mist oxygen infusion workstation', fit: 'contain' },
  enquiryLabel: 'Pressurized Hyperbaric Nutrient Delivery',
  relatedSlugs: ['hydro-plasma', 'nova-glow', 'quantum-lift'],
  detail: {
    systemRef: 'MDX-OXY-PRO',
    eyebrow: 'Oxygen Skin Revitalization',
    tagline: 'Micro-Atomized Oxygen & Serum Infusion Workstation',
    overview:
      'Oxy Mist is a skin revitalization device delivering oxygen and nutrient-rich serums, enhancing hydration, glow, and overall skin complexion. Pressurized micro-atomized oxygen carries active serums into the skin for visible, immediate results.',
    heroBadges: { primary: 'Oxygen Therapy', secondary: 'Transdermal Flow Active' },
    keySpecs: [
      { label: 'Spray Pressure', value: '3.0 Bar', note: 'Medical grade oxygen sprayer', accent: true },
      { label: 'Delivery', value: 'Transdermal', note: 'Oxygen & serum infusion' },
    ],
    indications: {
      ...applicationsIntro('Oxy Mist'),
      items: [
        {
          icon: 'water_drop',
          title: 'Hydration',
          body: 'Infuses nutrient-rich serums for lasting skin hydration.',
        },
        {
          icon: 'flare',
          title: 'Radiant Glow',
          body: 'Oxygen delivery revitalizes the skin for an instant, healthy glow.',
        },
        {
          icon: 'face',
          title: 'Overall Complexion',
          body: 'Improves overall skin complexion for a fresher, more even look.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Pressurized Oxygen & Serum Infusion' },
        { label: 'Spray Pressure', value: '3.0 Bar Medical Grade Oxygen Sprayer', numeric: true, accent: true },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
