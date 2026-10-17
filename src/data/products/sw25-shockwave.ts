import image from '@/assets/images/products/sw25-shockwave.webp';
import type { Product } from '@/types/product';

/**
 * Source: "MDX360-SW25_Professional_Shockwave_         web.pdf" (English version).
 * Image: "MDX360 -SW25 Professional Shockwave manual (1).pdf", page 1.
 */
export const sw25Shockwave: Product = {
  slug: 'sw25-shockwave',
  name: 'MDX360-SW25 Professional Shockwave',
  category: 'therapy',
  categoryLabel: 'Shockwave Therapy',
  icon: 'graphic_eq',
  technology: 'Pneumatic Ballistic Shockwave',
  technologyDetail: 'Pneumatic Ballistic Shockwave · Automatic & Manual Protocols',
  model: 'SW25',
  modelTag: 'Pneumatic Ballistic',
  highlight: '~20 min sessions · 282 VA',
  summary: 'Non-invasive pneumatic ballistic shockwave for chronic pain relief and tissue repair.',
  description:
    'A non-invasive pneumatic ballistic shockwave device that converts compressed air into precise shock pulses, used to relieve chronic pain, improve local circulation and stimulate natural tissue repair.',
  image: {
    src: image,
    alt: 'MDX360-SW25 Professional Shockwave console on its wheeled stand, with the shockwave handle holstered',
    fit: 'contain',
  },
  enquiryLabel: 'Pain Relief & Tissue Repair',
  relatedSlugs: [],
  detail: {
    eyebrow: 'Soft Tissue & Musculoskeletal Pain Management',
    tagline: 'Pneumatic Ballistic Shockwave Therapy',
    overview:
      'The MDX360-SW25 Professional Shockwave is a non-invasive pneumatic ballistic shockwave device that converts compressed air into precise shock pulses delivered to the target tissue through the treatment head. It is used to relieve chronic pain in different parts of the body, improve local blood circulation, help dissolve calcifications and stimulate natural tissue repair. It offers fast treatment sessions, ease of use and broad applications in soft tissue and musculoskeletal pain management.',
    keySpecs: [
      { label: 'Technology', value: 'Ballistic', note: 'Pneumatic shockwave' },
      { label: 'Session', value: '~20 min', note: 'No anesthesia required' },
      { label: 'Protocols', value: 'Auto & Manual', note: 'Multiple treatment protocols' },
      { label: 'Power', value: '282 VA', note: 'AC 220 V / 50 Hz or 110 V / 60 Hz' },
    ],
    mechanisms: {
      eyebrow: 'Technology Principle',
      title: 'Biological Effects',
      intro:
        'The internal compressor generates a pulse of compressed air that drives a projectile inside the handpiece, which repeatedly strikes the treatment head. The resulting high-pressure shock wave is transmitted to the target tissue to stimulate healing, reduce pain, improve blood flow and support tissue remodeling.',
      items: [
        { icon: 'biotech', phase: 'Cellular level', title: 'Membrane Permeability', body: 'Increases cell membrane permeability and activates ion channels.' },
        { icon: 'favorite', phase: 'Tendons and muscles', title: 'Circulation & Growth Factors', body: 'Improves blood circulation and increases growth factors.' },
        { icon: 'science', phase: 'Nitric oxide (NO) system', title: 'Bone Remodeling', body: 'Supports bone remodeling and healing.' },
        { icon: 'water_drop', phase: 'Microcirculation and metabolism', title: 'Metabolic Activity', body: 'Improves microcirculation and metabolic activity.' },
        { icon: 'grain', phase: 'Calcified fibrous cells', title: 'Calcification Breakdown', body: 'Helps dissolve calcifications.' },
        { icon: 'spa', phase: 'Collagen synthesis', title: 'Tissue Regeneration', body: 'Supports tissue regeneration.' },
        { icon: 'expand', phase: 'Tissue tension', title: 'Tension Reduction', body: 'Reduces organizational tension.' },
        { icon: 'healing', phase: 'Analgesic effect', title: 'Pain Relief', body: 'Provides pain relief.' },
      ],
    },
    indications: {
      eyebrow: 'Use Cases',
      title: 'Treatment Applications',
      items: [
        { icon: 'accessibility_new', title: 'Chronic Neck, Shoulder & Back Pain' },
        { icon: 'fitness_center', title: 'Muscle Tension & Soft Tissue Pain' },
        { icon: 'directions_walk', title: 'Tendon & Ligament Conditions' },
        { icon: 'favorite', title: 'Local Blood Circulation' },
        { icon: 'grain', title: 'Calcification Reduction' },
        { icon: 'healing', title: 'Joint Pain', body: 'Knee, elbow and ankle discomfort.' },
        { icon: 'sports', title: 'Muscle Strain & Sports Injury Recovery' },
        { icon: 'self_improvement', title: 'Chronic Muscle Spasm & Stiffness' },
        { icon: 'timer', title: 'Short Non-Invasive Sessions', body: 'For cases that need short sessions to reduce pain and improve mobility.' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Technical Parameters', label: 'Voltage', value: 'AC 220 V / 50 Hz or AC 110 V / 60 Hz' },
        { group: 'Technical Parameters', label: 'Power', value: '282 VA' },
        { group: 'Technical Parameters', label: 'Executive Standard', value: 'GB4706.1-2005' },
        { group: 'Treatment', label: 'Technology', value: 'Pneumatic ballistic shockwave' },
        { group: 'Treatment', label: 'Session Duration', value: 'Usually around 20 minutes' },
        { group: 'Treatment', label: 'Anesthesia', value: 'Not required' },
        { group: 'Treatment', label: 'Protocols', value: 'Multiple, in automatic and manual modes' },
      ],
      kit: {
        title: 'Attachment List',
        items: [
          '1 main unit',
          '1 set of shockwave handle',
          'Multiple treatment heads',
          'Accessory shelf',
          'Power cord and user manual (PDF)',
          '4 bullet bodies',
          '1 hexagon wrench and 3 hex socket screws',
          '1 cleaning brush and 1 small iron rod',
          '5 rubber particles and several sealing components',
        ],
      },
      note: {
        title: 'Advantages',
        body: 'High efficiency and fast pain relief, in a non-invasive, safe procedure that does not require anesthesia. Short sessions of around 20 minutes suit a wide range of soft tissue and musculoskeletal pain conditions.',
      },
    },
  },
};
