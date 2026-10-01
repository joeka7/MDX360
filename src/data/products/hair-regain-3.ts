import image from '@/assets/images/products/hair-regain-3.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const hairRegain3: Product = {
  slug: 'hair-regain-3',
  name: 'Hair Regain 3',
  category: 'therapy',
  categoryLabel: 'Hair Restoration',
  icon: 'psychology',
  technology: 'Low-Level Laser Therapy',
  technologyDetail: '650nm / 808nm Dual Diode Array',
  model: 'MDX-HR3-TRIO',
  modelTag: 'Follicular LLLT',
  highlight: 'Dual Diode Array',
  summary: 'Targeted laser therapy that stimulates follicles, promotes growth, and helps prevent hair loss.',
  description:
    'Clinical low-level laser therapy helmet and applicator station activating dormant follicles and reversing micro-vascular miniaturization.',
  image: { src: image, alt: 'Hair Regain 3 laser hair restoration station', fit: 'contain' },
  enquiryLabel: 'Follicular Bio-stimulation & Regrowth',
  relatedSlugs: ['revita-heal', 'oxy-mist', 'nova-glow'],
  detail: {
    systemRef: 'MDX-HR3-TRIO',
    eyebrow: 'Laser Hair Restoration',
    tagline: 'Dual-Diode Low-Level Laser Hair Restoration Station',
    overview:
      'Hair Regain 3 is a hair restoration device that stimulates follicles, promotes hair growth, and helps prevent hair loss with targeted treatment. A dual diode laser array delivers low-level light therapy to the scalp in comfortable clinical sessions.',
    heroBadges: { primary: 'Follicular LLLT', secondary: 'Dual Diode Active' },
    keySpecs: [
      { label: 'Wavelengths', value: '650 / 808 nm', note: 'Dual diode laser array', accent: true },
      { label: 'Energy Modality', value: 'LLLT', note: 'Low-level laser therapy' },
    ],
    indications: {
      ...applicationsIntro('Hair Regain 3'),
      items: [
        {
          icon: 'psychology',
          title: 'Follicle Stimulation',
          body: 'Activates dormant follicles with targeted low-level laser energy.',
        },
        {
          icon: 'trending_up',
          title: 'Hair Growth',
          body: 'Promotes healthier, fuller hair growth over a course of treatments.',
        },
        {
          icon: 'shield',
          title: 'Hair Loss Prevention',
          body: 'Helps prevent further hair loss as part of a clinical restoration program.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Low-Level Laser Therapy (LLLT)' },
        { label: 'Laser Wavelengths', value: '650nm / 808nm Dual Diode Array', numeric: true, accent: true },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
