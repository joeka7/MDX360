import image from '@/assets/images/products/slim-wave-pro.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const slimWavePro: Product = {
  slug: 'slim-wave-pro',
  name: 'Slim Wave Pro',
  category: 'body',
  categoryLabel: 'Cavitation & Slimming',
  icon: 'graphic_eq',
  technology: 'Ultrasonic Cavitation & Laser Lipo',
  technologyDetail: 'Multi-Polar Cavitation & Vacuum Drainage',
  model: 'MDX-SW-6IN1',
  modelTag: 'Adipose Targeting',
  highlight: '6-in-1 Workstation',
  summary: 'Multi-pad acoustic resonance and diodethermy designed to accelerate metabolic lymphatic discharge.',
  description:
    '6-in-1 body contouring workstation combining focused ultrasonic cavitation waves to disrupt stubborn localized adipose tissue deposits.',
  image: { src: image, alt: 'Slim Wave Pro cavitation console', fit: 'contain' },
  enquiryLabel: 'Wave-based Localized Adipose Reduction',
  relatedSlugs: ['shape-master', 'shock-wave-x', 'revita-heal'],
  detail: {
    systemRef: 'MDX-SW-6IN1',
    eyebrow: 'Cavitation Body Slimming',
    tagline: '6-in-1 Ultrasonic Cavitation Contouring Workstation',
    overview:
      'Slim Wave Pro is a body slimming device using wave technology to target stubborn fat, enhancing body contour and overall shape. Six treatment modalities combine in one workstation for flexible, multi-zone protocols.',
    heroBadges: { primary: 'Cavitation & Slimming', secondary: 'Multi-Pad Active' },
    keySpecs: [
      { label: 'Configuration', value: '6-in-1', note: 'Multi-modality workstation' },
      { label: 'Core Technology', value: 'Cavitation', note: 'Focused ultrasonic waves', accent: true },
    ],
    indications: {
      ...applicationsIntro('Slim Wave Pro'),
      items: [
        {
          icon: 'accessibility_new',
          title: 'Stubborn Fat Reduction',
          body: 'Cavitation waves target stubborn localized fat deposits resistant to diet and exercise.',
        },
        {
          icon: 'sports_gymnastics',
          title: 'Body Contouring',
          body: 'Enhances body contour for a more sculpted, defined figure.',
        },
        {
          icon: 'water_drop',
          title: 'Lymphatic Support',
          body: 'Vacuum drainage supports lymphatic flow as part of the slimming protocol.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Ultrasonic Cavitation + Vacuum Drainage' },
        { label: 'Configuration', value: '6-in-1 Body Contouring Workstation' },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
