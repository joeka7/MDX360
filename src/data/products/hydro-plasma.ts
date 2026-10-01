import image from '@/assets/images/products/hydro-plasma.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const hydroPlasma: Product = {
  slug: 'hydro-plasma',
  name: 'Hydro Plasma',
  category: 'skin',
  categoryLabel: 'Hydration & Plasma',
  icon: 'water_drop',
  technology: 'Cold Plasma Skin Rejuvenation',
  technologyDetail: 'Cold Atmospheric Plasma + Hydro-Dermabrasion',
  model: 'MDX-HP-TOWER',
  modelTag: 'Multi-Stage Cleanse',
  highlight: 'Cold Plasma Exfoliation',
  summary: 'Hydro-plasma skincare that deeply hydrates, rejuvenates, and refines skin texture.',
  description:
    'Comprehensive skincare console leveraging atmospheric plasma and vortex hydration to deeply exfoliate, sanitize, and hydrate the skin.',
  image: { src: image, alt: 'Hydro Plasma skincare workstation', fit: 'contain' },
  enquiryLabel: 'Deep Hydration & Pore Refinement',
  relatedSlugs: ['oxy-mist', 'nova-glow', 'quantum-lift'],
  detail: {
    systemRef: 'MDX-HP-TOWER',
    eyebrow: 'Hydration & Plasma Infusion',
    tagline: 'Multi-Stage Cold Plasma & Hydration Workstation',
    overview:
      'Hydro Plasma is a skincare device using hydro-plasma technology to deeply hydrate, rejuvenate, and improve skin texture and glow. Cold atmospheric plasma and hydro-dermabrasion combine in one multi-stage workflow to cleanse, exfoliate, and nourish the skin.',
    heroBadges: { primary: 'Plasma Infusion', secondary: 'Multi-Stage Active' },
    keySpecs: [
      { label: 'Core Technology', value: 'Cold Plasma', note: 'Atmospheric plasma treatment' },
      { label: 'Workflow', value: 'Multi-Stage', note: 'Cleanse, exfoliate & hydrate', accent: true },
    ],
    indications: {
      ...applicationsIntro('Hydro Plasma'),
      items: [
        {
          icon: 'water_drop',
          title: 'Deep Hydration',
          body: 'Delivers deep, lasting hydration for supple, healthy-looking skin.',
        },
        {
          icon: 'auto_fix_high',
          title: 'Skin Rejuvenation',
          body: 'Revitalizes the skin surface for a fresher, more even complexion.',
        },
        {
          icon: 'flare',
          title: 'Texture & Glow',
          body: 'Refines pores and skin texture to restore a natural radiance.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Cold Atmospheric Plasma + Hydro-Dermabrasion' },
        { label: 'Treatment Workflow', value: 'Multi-Stage Cleanse, Exfoliation & Hydration' },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
