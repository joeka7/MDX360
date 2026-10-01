import image from '@/assets/images/products/7d-hifo.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const sevenDHifo: Product = {
  slug: '7d-hifo',
  name: '7D. HIFO',
  category: 'face',
  categoryLabel: 'HIFU / Lifting',
  icon: 'face',
  technology: 'High-Intensity Focused Ultrasound',
  technologyDetail: 'Micro & Macro High-Intensity Focused US',
  model: 'MDX-7DH',
  modelTag: 'Multi-Depth Targeting',
  highlight: 'Dual Micro & Macro',
  summary: 'Deep SMAS tissue lifting and body focal contouring with micrometer precision transducers.',
  description:
    'Non-invasive high-intensity focused ultrasound tightening skin, diminishing deep wrinkles, and sharpening facial jawlines with 7D precision.',
  image: { src: image, alt: '7D. HIFO focused ultrasound system', fit: 'contain' },
  enquiryLabel: 'Non-invasive Facelift & Wrinkle Reduction',
  relatedSlugs: ['ice-hifo', 'quantum-lift', 'ice-gold-rf'],
  detail: {
    systemRef: 'MDX-7DH',
    eyebrow: 'Non-Invasive Focused Ultrasound Lifting',
    tagline: '7D Micro & Macro Focused Ultrasound Lifting System',
    overview:
      'The 7D. HIFO is a non-invasive HIFU system that tightens skin, reduces wrinkles, and enhances facial contours with 7D precision. Dual micro and macro focused ultrasound handpieces deliver energy to targeted tissue depths for deep fascia tightening without disrupting the skin surface.',
    heroBadges: { primary: 'Focused Ultrasound', secondary: 'Dual Handpiece Active' },
    keySpecs: [
      { label: 'Energy Modality', value: 'Focused US', note: 'High-intensity ultrasound delivery' },
      { label: 'Depth Modes', value: '7 Modes', note: 'Multi-depth tissue targeting', accent: true },
      { label: 'Handpieces', value: 'Micro & Macro', note: 'Face and body focal precision' },
      { label: 'Treatment Focus', value: 'SMAS Layer', note: 'Deep fascia tightening', accent: true },
    ],
    indications: {
      ...applicationsIntro('7D. HIFO'),
      items: [
        {
          icon: 'face',
          title: 'Skin Tightening',
          body: 'Focused ultrasound energy reaches deep tissue layers to tighten lax skin without surgery or downtime.',
        },
        {
          icon: 'auto_fix_high',
          title: 'Wrinkle Reduction',
          body: 'Targeted treatment diminishes deep wrinkles and fine lines for a smoother, refreshed appearance.',
        },
        {
          icon: 'center_focus_strong',
          title: 'Facial Contouring',
          body: 'Sharpens jawlines and enhances facial contours through precise multi-depth focal delivery.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'High-Intensity Focused Ultrasound (HIFU)' },
        { label: 'Handpiece Configuration', value: 'Dual Micro & Macro Focused Transducers' },
        { label: 'Depth Modes', value: '7 Depth Modes', numeric: true, accent: true },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
