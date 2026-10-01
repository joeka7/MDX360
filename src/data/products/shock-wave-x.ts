import image from '@/assets/images/products/shock-wave-x.webp';
import type { Product } from '@/types/product';
import { applicationsIntro, specificationsIntro, standardSpecRows, standardTraining } from './shared';

export const shockWaveX: Product = {
  slug: 'shock-wave-x',
  name: 'Shock Wave X',
  category: 'therapy',
  categoryLabel: 'Acoustic Shockwave',
  icon: 'waves',
  technology: 'Extracorporeal Shockwave Therapy',
  technologyDetail: 'Ballistic Radial Shockwave Modulator',
  model: 'MDX-SW-X',
  modelTag: 'Radial Pressure',
  highlight: '18.5 Bar Peak',
  summary: 'Electromagnetic ballistic pulses for stubborn connective tissue and micro-circulation.',
  description:
    'Extracorporeal shockwave platform treating grade 1-3 cellulite, stimulating deep lymphatic flow, and improving fibrous tissue mobility.',
  image: { src: image, alt: 'Shock Wave X shockwave therapy system', fit: 'contain' },
  enquiryLabel: 'Deep Tissue & Cellulite Acoustic Therapy',
  relatedSlugs: ['slim-wave-pro', 'shape-master', 'revita-heal'],
  detail: {
    systemRef: 'MDX-SW-X',
    eyebrow: 'Acoustic Shockwave Therapy',
    tagline: 'Ballistic Radial Shockwave Therapy Platform',
    overview:
      'Shock Wave X is a shockwave therapy device that treats cellulite, promotes muscle recovery, and improves skin elasticity by stimulating deep tissue. Ballistic radial pulses reach connective tissue to support circulation and tissue mobility.',
    heroBadges: { primary: 'Acoustic Energy', secondary: 'Radial Pulse Active' },
    keySpecs: [
      { label: 'Energy Modality', value: 'Radial Shockwave', note: 'Ballistic acoustic pulses' },
      { label: 'Peak Pressure', value: '18.5 Bar', note: 'Deep tissue stimulation', accent: true },
    ],
    indications: {
      ...applicationsIntro('Shock Wave X'),
      items: [
        {
          icon: 'sports_gymnastics',
          title: 'Cellulite Treatment',
          body: 'Acoustic pulses target the fibrous structures behind dimpled cellulite.',
        },
        {
          icon: 'fitness_center',
          title: 'Muscle Recovery',
          body: 'Stimulates deep tissue to promote muscle recovery and mobility.',
        },
        {
          icon: 'auto_fix_high',
          title: 'Skin Elasticity',
          body: 'Improves skin elasticity through deep tissue and micro-circulation stimulation.',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modality', value: 'Extracorporeal Radial Shockwave' },
        { label: 'Applicator Technology', value: 'Ballistic Radial Shockwave Modulator' },
        { label: 'Peak Pressure', value: '18.5 Bar', numeric: true, accent: true },
        ...standardSpecRows,
      ],
      training: standardTraining,
    },
  },
};
