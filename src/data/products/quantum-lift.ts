import image from '@/assets/images/products/quantum-lift.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const quantumLift: Product = {
  slug: 'quantum-lift',
  name: 'Quantum Lift',
  category: 'face',
  categoryLabel: 'Non-Surgical Facelift',
  icon: 'auto_fix_high',
  technology: 'Microcurrent Facial Lifting',
  technologyDetail: 'Bio-Resonance & Microcurrent Tensor',
  model: 'MDX-QLIFT',
  modelTag: 'Deep SMAS Target',
  highlight: 'Quantum Micro-Currents',
  summary: 'Non-surgical facial lifting that tightens and rejuvenates skin for a youthful appearance.',
  description:
    'Non-surgical facial lifting system utilizing quantum cellular resonance to tighten, firm, and restore anatomical youthful balance.',
  image: { src: image, alt: 'Quantum Lift facial lifting device', fit: 'contain' },
  enquiryLabel: 'Quantum Energy RF Facial Lifting',
  relatedSlugs: ['7d-hifo', 'ice-hifo', 'hydro-plasma'],
  detail: {
    systemRef: 'MDX-QLIFT',
    eyebrow: 'Non-Surgical Facelift',
    tagline: 'Bio-Resonance Microcurrent Facial Lifting System',
    overview:
      'Quantum Lift is a non-surgical facelift device using quantum technology to lift, tighten, and rejuvenate skin for a youthful appearance. Bio-resonance and microcurrent waveforms work with facial tissue to restore firmness and natural balance.',
    heroBadges: { primary: 'Bio-Waveform Technology', secondary: 'Microcurrent Active' },
    keySpecs: [
      { label: 'Energy Modality', value: 'Microcurrent', note: 'Bio-resonance waveforms' },
      { label: 'Treatment Focus', value: 'Deep SMAS', note: 'Facial lifting & firming', accent: true },
    ],
    indications: {
      ...applicationsIntro('Quantum Lift'),
      items: [
        {
          icon: 'face',
          title: 'Facial Lifting',
          body: 'Lifts facial tissue without surgery for a naturally refreshed profile.',
        },
        {
          icon: 'center_focus_strong',
          title: 'Skin Tightening',
          body: 'Firms and tightens skin to restore a youthful facial framework.',
        },
        {
          icon: 'auto_fix_high',
          title: 'Rejuvenation',
          body: 'Revitalizes tired-looking skin for a lasting youthful appearance.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Bio-Resonance Microcurrent' },
        { label: 'Applicator Technology', value: 'Bio-Resonance & Microcurrent Tensor' },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
