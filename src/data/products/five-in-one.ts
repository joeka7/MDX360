import image from '@/assets/images/products/five-in-one.webp';
import type { Product } from '@/types/product';

/**
 * Source: "FIVE IN ONE web.pdf".
 * Image: "A0205-5 5 in 1 7D+Microneedle rf+Vmax+Vaginal+Liposonix-Kmist hub.pdf", page 1.
 */
export const fiveInOne: Product = {
  slug: 'five-in-one',
  name: 'FIVE IN ONE',
  category: 'face',
  categoryLabel: 'HIFU & Microneedle RF',
  icon: 'face',
  technology: 'HIFU & Microneedle RF',
  technologyDetail: '7D HIFU · Vaginal HIFU · Microneedle RF · Vmax · Liposonix',
  modelTag: 'Four Handles',
  highlight: '5 technologies · 4 handles',
  summary: 'Ultrasound and radiofrequency on one platform for face, body and vaginal treatments.',
  description:
    'Combines 7D HIFU, vaginal HIFU, Gold RF Microneedle, Vmax and Liposonix technologies in one platform for skin tightening, wrinkle removal, body shaping and vaginal tightening.',
  image: {
    src: image,
    alt: 'FIVE IN ONE console showing the mode selection screen, with its HIFU, vaginal, microneedle RF and Liposonix handles',
    fit: 'contain',
  },
  enquiryLabel: '7D + Vaginal + Microneedle RF + Vmax + Liposonix',
  relatedSlugs: ['vertical-5-in-1-velashape', '6-in-1-cavitation', '9-in-1-hydro-facial'],
  detail: {
    eyebrow: 'Multifunctional Ultrasound & RF Platform',
    tagline: '7D + Vaginal + Microneedle RF + Vmax + Liposonix',
    overview:
      'A multifunctional platform that combines 7D HIFU, vaginal HIFU, Gold RF Microneedle, Vmax and Liposonix technologies. It is designed for skin tightening, wrinkle removal, body shaping and vaginal tightening, using ultrasound energy and radiofrequency to act on different tissue depths, and is positioned as a non-invasive solution with no bleeding, no surgery, no scars and no trauma.',
    keySpecs: [
      { label: 'Technologies', value: '5 in 1', note: '7D, vaginal, microneedle RF, Vmax, Liposonix' },
      { label: '7D Cartridges', value: '1.5–13.0 mm', note: 'Seven treatment depths' },
      { label: 'Liposonix Depth', value: '13 mm', note: 'Subcutaneous fat targeting' },
      { label: 'Handles', value: '4', note: 'With multiple cartridge options' },
    ],
    mechanisms: {
      eyebrow: 'Therapy Principle',
      title: 'Five Technologies, One Platform',
      intro:
        'Ultrasound energy and radiofrequency act on different tissue depths, from facial lifting and collagen regeneration to vaginal tightening and subcutaneous fat reduction.',
      items: [
        {
          icon: 'layers',
          phase: 'Focused ultrasound',
          title: '7D HIFU',
          body: 'Probes of different depths focus energy on the epidermis, fascia and collagen layers. The 4.5 mm probe targets the subcutaneous fascia layer to create a coagulation reaction and tightening effect, while the 3.0 mm probe stimulates collagen regeneration to improve elasticity and reduce wrinkles.',
          metric: { label: 'Cartridges', value: '1.5, 2.0, 3.0, 4.5, 6.0, 9.0, 13.0 mm' },
        },
        {
          icon: 'favorite',
          phase: 'Focused ultrasound',
          title: 'Vaginal HIFU',
          body: '3.0 mm and 4.5 mm treatment heads focus energy on vaginal collagen and fascia layers, using a thermal effect of about 60–70 °C to promote collagen regeneration, fascia contraction and tissue tightening.',
          metric: { label: 'Cartridges', value: '3.0, 4.5 mm' },
        },
        {
          icon: 'grain',
          phase: 'Microneedle radiofrequency',
          title: 'Gold RF Microneedle',
          body: 'Combines microneedle penetration with radiofrequency energy. Insulated needles deliver RF energy to the microcrystal tip while minimizing epidermal irritation.',
          metric: { label: 'Tips', value: '10, 25, 64 pins, nano' },
        },
        {
          icon: 'tune',
          title: 'Vmax',
          body: 'Vmax cartridges are available in five treatment depths.',
          metric: { label: 'Cartridges', value: '1.5, 3.0, 4.5, 8, 13 mm' },
        },
        {
          icon: 'center_focus_strong',
          phase: 'High-intensity focused ultrasound',
          title: 'Liposonix',
          body: 'Targets subcutaneous fat at a precise depth of 13 mm, intended for stubborn fat reduction without surgery. The manual states that a single treatment may reduce the waistline by about 1 inch within 8 to 12 weeks.',
          metric: { label: 'Focal depth', value: '13 mm' },
        },
      ],
    },
    indications: {
      eyebrow: 'Applications',
      title: 'Treatment Applications',
      items: [
        { icon: 'face', title: 'Facial Lifting & Tightening' },
        { icon: 'face', title: 'Double Chin & Jawline Improvement' },
        { icon: 'auto_fix_high', title: 'Wrinkle Reduction' },
        { icon: 'accessibility_new', title: 'Body Shaping' },
        { icon: 'favorite', title: 'Vaginal Tightening', body: 'Addresses vaginal relaxation, dryness, rupture, damage and urinary incontinence.' },
        { icon: 'spa', title: 'Skin Rejuvenation' },
        { icon: 'grain', title: 'Acne, Scars & Relaxation', body: 'With microneedle RF.' },
        { icon: 'straighten', title: 'Fat Reduction & Contour Improvement', body: 'With Liposonix.' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Technical Specifications', label: 'Output Power', value: '2–4M' },
        { group: 'Technical Specifications', label: 'Input Power', value: '10–200 W' },
        { group: 'Technical Specifications', label: 'Input Voltage', value: 'AC 110–220 V, 50 / 60 Hz' },
        { group: 'Technical Specifications', label: 'Probe Options', value: '10 pin, 25 pin, 64 pin, nano pin, fractional RF tip' },
        { group: 'Technical Specifications', label: 'Warranty', value: 'Machine 1 year, accessories 3 months' },
        { group: 'Device Components', label: 'Handles', value: '4, with multiple cartridge options' },
        { group: 'Device Components', label: '7D Cartridges', value: '1.5, 2.0, 3.0, 4.5, 6.0, 9.0, 13.0 mm' },
        { group: 'Device Components', label: 'Vaginal Cartridges', value: '3.0, 4.5 mm' },
        { group: 'Device Components', label: 'Vmax Cartridges', value: '1.5, 3.0, 4.5, 8, 13 mm' },
        { group: 'Device Components', label: 'Microneedle RF Tips', value: '10 pins (eye area), 25 pins (face), 64 pins (body), nano tips (optional)' },
        { group: 'Recommended Probe Use', label: '1.5 mm', value: 'Neck, double chin, jaw, cheek, forehead' },
        { group: 'Recommended Probe Use', label: '2.0 mm', value: 'Around the eyes' },
        { group: 'Recommended Probe Use', label: '3.0 mm', value: 'Neck, double chin, jaw, cheek' },
        { group: 'Recommended Probe Use', label: '4.5 mm', value: 'Neck, double chin, jaw, cheek' },
        { group: 'Recommended Probe Use', label: '6.0 mm', value: 'Hands and legs' },
        { group: 'Recommended Probe Use', label: '8.0 mm', value: 'Hands and legs' },
        { group: 'Recommended Probe Use', label: '10.0 mm', value: 'Hands, legs, abdomen' },
        { group: 'Recommended Probe Use', label: '13.0 mm', value: 'Hands, legs, abdomen' },
        { group: 'Recommended Probe Use', label: '16.0 mm', value: 'Hands, legs, abdomen' },
      ],
      kit: {
        title: '7D Technology Advantages',
        items: [
          'Manual and auto modes',
          'Parameters adjustable to the treatment area',
          'Two treatment heads for precision across skin depths',
          'Energy acts slightly over the epidermis without damage when used correctly',
          'Immediate tightening effect possible after treatment',
          'Results may last 24 to 30 months',
          'Makeup can be applied immediately after treatment',
        ],
      },
      note: {
        title: 'Maintenance',
        body: 'Clean with alcohol disinfectant after use and store properly. Keep away from wet areas, direct sunlight and strong heat sources. Ground the device properly and use only specified or recommended accessories.',
      },
    },
  },
};
