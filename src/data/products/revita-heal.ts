import image from '@/assets/images/products/revita-heal.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const revitaHeal: Product = {
  slug: 'revita-heal',
  name: 'Revita Heal',
  category: 'therapy',
  categoryLabel: 'Bio-Stimulation',
  icon: 'healing',
  technology: 'Photobiomodulation Recovery',
  technologyDetail: 'Photobiomodulation Bio-Stimulator',
  model: 'MDX-REVITA',
  modelTag: 'Tissue Regeneration',
  highlight: 'Photobiomodulation',
  summary: 'Surgical recovery and tissue inflammation reduction station promoting micro-vascular repair post procedure.',
  description:
    'Cellular repair console accelerating post-operative wound recovery, mitigating persistent inflammation, and restoring dermal integrity.',
  image: { src: image, alt: 'Revita Heal bio-stimulation system', fit: 'contain' },
  enquiryLabel: 'Accelerated Tissue Repair & Wound Recovery',
  relatedSlugs: ['shock-wave-x', 'hair-regain-3', 'shape-master'],
  detail: {
    systemRef: 'MDX-REVITA',
    eyebrow: 'Therapeutic Bio-Stimulation',
    tagline: 'Photobiomodulation Tissue Recovery System',
    overview:
      'Revita Heal is a therapeutic device accelerating wound healing, reducing inflammation, and promoting tissue repair with advanced bio-stimulation technology. It supports patient recovery after aesthetic and clinical procedures.',
    heroBadges: { primary: 'Bio-Stimulation', secondary: 'Recovery Mode Active' },
    keySpecs: [
      { label: 'Energy Modality', value: 'PBM', note: 'Photobiomodulation therapy' },
      { label: 'Treatment Focus', value: 'Tissue Repair', note: 'Post-procedure recovery', accent: true },
    ],
    indications: {
      ...applicationsIntro('Revita Heal'),
      items: [
        {
          icon: 'healing',
          title: 'Wound Healing',
          body: 'Accelerates post-operative and post-procedure wound recovery.',
        },
        {
          icon: 'ac_unit',
          title: 'Inflammation Reduction',
          body: 'Helps calm persistent inflammation to support patient comfort.',
        },
        {
          icon: 'auto_fix_high',
          title: 'Tissue Repair',
          body: 'Promotes tissue repair and restores dermal integrity.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Photobiomodulation (PBM)' },
        { label: 'Treatment Focus', value: 'Wound Recovery & Tissue Regeneration' },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
