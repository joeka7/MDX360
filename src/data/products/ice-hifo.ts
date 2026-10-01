import image from '@/assets/images/products/ice-hifo.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const iceHifo: Product = {
  slug: 'ice-hifo',
  name: 'ICE HIFO',
  category: 'face',
  categoryLabel: 'Ultrasound & Cryo',
  icon: 'ac_unit',
  technology: 'Focused Ultrasound & Contact Cooling',
  technologyDetail: 'Active Cryo-Shielding Ultrasound Array',
  model: 'MDX-ICE-H',
  modelTag: 'Contact Chilling',
  highlight: 'Contact Chilling',
  summary: 'Focused ultrasound paired with active contact cooling for comfortable skin tightening.',
  description:
    'Combines focused acoustic ultrasound with active sub-zero contact cooling for skin tightening, localized fat reduction, and high comfort.',
  image: { src: image, alt: 'ICE HIFO cooled ultrasound system', fit: 'contain' },
  enquiryLabel: 'Ultrasound Cooling Skin Tightening',
  relatedSlugs: ['7d-hifo', 'ice-gold-rf', 'quantum-lift'],
  detail: {
    systemRef: 'MDX-ICE-H',
    eyebrow: 'Cooled Focused Ultrasound',
    tagline: 'Ultrasound Lifting with Active Contact Cooling',
    overview:
      'ICE HIFO combines focused ultrasound with integrated contact cooling to tighten skin, reduce fat, and improve facial contours with minimal discomfort. Active cryo-shielding protects the skin surface while acoustic energy works on deeper tissue layers.',
    heroBadges: { primary: 'Ultrasound & Cryo', secondary: 'Cryo-Shield Active' },
    keySpecs: [
      { label: 'Energy Modality', value: 'Focused US', note: 'Acoustic deep-tissue delivery' },
      { label: 'Surface Protection', value: 'Active Cooling', note: 'Sub-zero contact chilling', accent: true },
    ],
    indications: {
      ...applicationsIntro('ICE HIFO'),
      items: [
        {
          icon: 'face',
          title: 'Skin Tightening',
          body: 'Focused ultrasound tightens lax skin while contact cooling keeps treatments comfortable.',
        },
        {
          icon: 'accessibility_new',
          title: 'Localized Fat Reduction',
          body: 'Targets localized fat deposits for a more refined, sculpted contour.',
        },
        {
          icon: 'center_focus_strong',
          title: 'Facial Contouring',
          body: 'Improves facial contours with minimal discomfort and no surgical downtime.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Focused Ultrasound + Active Contact Cooling' },
        { label: 'Applicator Technology', value: 'Active Cryo-Shielding Ultrasound Array' },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
