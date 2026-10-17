import image from '@/assets/images/products/2-in-1-rf-microneedle.webp';
import type { Product } from '@/types/product';

/**
 * Source: "MDX360 2 in 1 Microneedle with cold hammer user manual web.pdf".
 * Image: "MDX360 2 in 1 Microneedle with cold hammer user manual.pdf", page 1.
 */
export const twoInOneRfMicroneedle: Product = {
  slug: '2-in-1-rf-microneedle',
  name: 'MDX360 2-in-1 Gold RF Microneedle + Ice Hammer',
  category: 'face',
  categoryLabel: 'RF Microneedling',
  icon: 'grain',
  technology: 'Gold RF Microneedling & Cooling',
  technologyDetail: 'Gold RF Microneedling · Ice Cooling Hammer',
  modelTag: 'Fractional RF Microneedling',
  highlight: 'RF 10–150 W · 0.5–3.0 mm',
  summary: 'Gold RF microneedling with an ice cooling hammer for wrinkles, acne scars, pores and stretch marks.',
  description:
    'Combines Gold RF microneedling with Ice Cooling Hammer technology: insulated gold-coated microneedles deliver adjustable RF energy to stimulate collagen and tighten skin, and the ice hammer soothes after treatment.',
  image: {
    src: image,
    alt: 'MDX360 2-in-1 Gold RF Microneedle tabletop console with its microneedle handle and ice hammer',
    fit: 'contain',
  },
  enquiryLabel: 'Gold RF Microneedle + Ice Hammer',
  relatedSlugs: ['morpheus-8', 'five-in-one', '9d-hifu'],
  detail: {
    eyebrow: 'Gold RF Microneedling + Ice Cooling Hammer',
    tagline: 'Fractional RF Microneedling',
    overview:
      'The MDX360 2-in-1 combines Gold RF Microneedling with Ice Cooling Hammer technology. Insulated gold-coated microneedles deliver adjustable RF energy (10–150 W) through four needle configurations, creating micro-channels for enhanced nutrient absorption while stimulating collagen regeneration and skin tightening.',
    keySpecs: [
      { label: 'RF Energy', value: '10–150 W', note: 'Input power 10–200 W' },
      { label: 'Needle Depth', value: '0.5–3.0 mm', note: 'Face and body interfaces' },
      { label: 'Needle Types', value: '10 / 25 / 64', note: 'Plus nano and soft RF tips' },
      { label: 'Course', value: '3–5 sessions', note: '3–4 weeks apart' },
    ],
    mechanisms: {
      eyebrow: 'Core Technology Platform',
      title: 'Dual Synergy System',
      intro: 'Microneedles create absorption channels while RF thermal stimulation activates the skin’s self-repair.',
      items: [
        {
          icon: 'grain',
          phase: 'Fractional RF + mechanical stimulation',
          title: 'Gold RF Microneedling',
          body: 'Insulated gold-coated microneedles deliver RF energy for collagen regeneration and skin tightening.',
          metric: { label: 'RF energy', value: '10–150 W' },
        },
        {
          icon: 'ac_unit',
          phase: 'Post-treatment cryotherapy',
          title: 'Ice Cooling Hammer',
          body: 'Reduces redness, swelling and pain after treatment.',
        },
        {
          icon: 'layers',
          phase: 'Part 1 · Lift & skin tightening',
          title: 'Lattice Physical Microcrystal',
          body: 'Breaks through the skin barrier to target deep tissue precisely.',
        },
        {
          icon: 'electric_bolt',
          phase: 'Part 2 · Fuller, smoother skin',
          title: 'High Energy Constant RF',
          body: 'RF energy stimulates the synthesis of collagen, elastin and hyaluronic acid, leaving skin fuller, more hydrated and more elastic, with fewer wrinkles.',
        },
        {
          icon: 'auto_awesome',
          phase: 'Part 3 · Brighter skin',
          title: 'Transdermal Delivery',
          body: 'Personalized active products are introduced along the channels created by the microcrystals for better results.',
        },
      ],
    },
    indications: {
      eyebrow: 'Clinical Applications',
      title: 'Target Concerns',
      intro:
        'Gold RF microneedling with Ice Hammer cooling for wrinkle reduction, facial rejuvenation, acne scars, pore refinement, skin whitening and stretch mark improvement.',
      items: [
        { icon: 'auto_fix_high', title: 'Fine Lines & Wrinkles', body: "Fine lines, forehead wrinkles, crow's feet." },
        { icon: 'healing', title: 'Acne Scars', body: 'Acne pits, depression scars.' },
        { icon: 'blur_on', title: 'Pores & Dullness', body: 'Large pores, skin dullness.' },
        { icon: 'accessibility_new', title: 'Stretch Marks', body: 'Pregnancy marks, striae.' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Handpiece Delivery System', label: '10-pin', value: 'Periorbital, small areas · eye wrinkles, fine lines around eyes / nose' },
        { group: 'Handpiece Delivery System', label: '25-pin', value: 'Face · general facial rejuvenation, acne scars' },
        { group: 'Handpiece Delivery System', label: '64-pin', value: 'Body · large-area body treatment, stretch marks' },
        { group: 'Handpiece Delivery System', label: 'Nano Needles', value: 'All areas · painless nutrient delivery, no bleeding' },
        { group: 'Handpiece Delivery System', label: 'Fractional RF Soft', value: 'Face / body · skin tightening, wrinkle removal' },
        { group: 'Handpiece Delivery System', label: 'Ice Hammer', value: 'Cooling head · post-treatment redness reduction, soothing, pain relief' },
        { group: 'Handpiece Delivery System', label: 'Crystal Heads', value: 'Single-use (alcohol disinfection required)' },
        { group: 'Dosimetry & Control', label: 'Face (A) Interface', value: 'Depth, speed, suction and RF adjustable' },
        { group: 'Dosimetry & Control', label: 'Body (M) Interface', value: 'Belly / abdomen optimized parameters' },
        { group: 'Dosimetry & Control', label: 'RF Energy', value: '10–150 W' },
        { group: 'Dosimetry & Control', label: 'Depth', value: '0.5–3.0 mm' },
        { group: 'Dosimetry & Control', label: 'Speed', value: '0.2–0.3' },
        { group: 'Dosimetry & Control', label: 'Suction', value: '0–2 levels' },
        { group: 'Clinical Protocols', label: 'Forehead', value: '0.5–1.0 mm · speed 0.2–0.3 · suction 1–2 · 60–110 W' },
        { group: 'Clinical Protocols', label: 'Face', value: '1.0–1.5 mm · speed 0.2–0.3 · suction 1–2 · 60–100 W' },
        { group: 'Clinical Protocols', label: 'Eyes', value: '0.5–1.0 mm · speed 0.2–0.3 · suction 1–2 · 60–100 W' },
        { group: 'Clinical Protocols', label: 'Acne Scars', value: '1.0–2.0 mm · speed 0.2–0.3 · suction 1–2 · 60–120 W' },
        { group: 'Clinical Protocols', label: 'Body', value: '1.0–3.0 mm · speed 0.2–0.3 · suction 0–1 · 60–120 W' },
        { group: 'Clinical Protocols', label: 'Endpoint', value: 'Erythema and mild edema, 1–2 passes maximum' },
        { group: 'Clinical Protocols', label: 'Course', value: '3–5 sessions, 3–4 weeks apart' },
        { group: 'Electrical Specifications', label: 'RF Energy', value: '10–150 W' },
        { group: 'Electrical Specifications', label: 'Input Power', value: '10–200 W' },
        { group: 'Electrical Specifications', label: 'Input Voltage', value: 'AC 110–220 V, 50 / 60 Hz' },
        { group: 'Electrical Specifications', label: 'Needle Types', value: '10 / 25 / 64-pin, Nano, Soft RF' },
        { group: 'Gold RF vs Fractional Laser', label: 'Depth Control', value: 'Gold RF: precise (adjustable) · Laser: limited (~2 mm)' },
        { group: 'Gold RF vs Fractional Laser', label: 'Epidermal Damage', value: 'Gold RF: none (insulated) · Laser: thermal injury' },
        { group: 'Gold RF vs Fractional Laser', label: 'Sessions Required', value: 'Gold RF: 1–3 · Laser: 3–5' },
        { group: 'Gold RF vs Fractional Laser', label: 'Recovery', value: 'Gold RF: minimal · Laser: longer downtime' },
        { group: 'Gold RF vs Fractional Laser', label: 'Treatment Longevity', value: '3–6 years' },
      ],
      kit: {
        title: 'Post-Treatment Timeline',
        items: [
          'Immediate: redness, swelling, warmth',
          'Day 1: heat sensation, mild edema',
          'Days 2–3: erythema, possible acne',
          'Days 3–4: scab formation, natural fall-off',
          '24 hours: no water contact',
        ],
      },
      note: {
        title: 'Safety & Aftercare',
        body: 'Contraindications: skin infections, hemorrhagic disorders, pregnancy, pacemakers, metal implants and anticoagulant therapy. After treatment, apply moisturizers and repair products morning and evening, let scabs fall off naturally, use strict sun protection, and avoid exercise, sauna, swimming, alcohol and spicy foods in the short term.',
      },
    },
  },
};
