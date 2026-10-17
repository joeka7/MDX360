import image from '@/assets/images/products/morpheus-8.webp';
import type { Product } from '@/types/product';

/**
 * Source: "MDX360 Morpheus 8 web.pdf". Image: "MDX360_Morpheus 8 machine user manual.pdf", page 1.
 * The Web PDF's "FDA/CE Approved Indications" heading is not published until certification is confirmed.
 */
export const morpheus8: Product = {
  slug: 'morpheus-8',
  name: 'MDX360 Morpheus 8',
  category: 'face',
  categoryLabel: 'RF Microneedling',
  icon: 'grain',
  technology: 'Fractional RF Microneedling',
  technologyDetail: '4 MHz Fractional RF · Insulated Gold Microneedles · Burst Mode',
  modelTag: 'Crystallite Depth 8',
  highlight: '0.5–7 mm depth · 4 MHz RF',
  summary: 'Fractional RF through insulated gold microneedles for skin resurfacing, tightening and fat remodeling.',
  description:
    'Delivers fractional RF energy through insulated gold microneedles with programmable depth control, for skin resurfacing, fat remodeling and tissue tightening.',
  image: {
    src: image,
    alt: 'MDX360 Morpheus 8 tower with its touchscreen and two microneedling handles',
    fit: 'contain',
  },
  enquiryLabel: 'Gold RF Microneedling',
  relatedSlugs: ['9d-hifu', 'five-in-one', 'vertical-co2-oxygen'],
  detail: {
    eyebrow: 'Gold RF Microneedling Depth 8',
    tagline: 'Crystallite Depth 8 Fractional RF Microneedling',
    overview:
      'The MDX360 Morpheus 8 (Crystallite Depth 8) delivers fractional RF energy through insulated gold microneedles with programmable depth control (0.5–7 mm, plus a 1 mm thermal effect). This minimally invasive system combines RF, microneedling and Burst Mode technology for skin resurfacing, fat remodeling and tissue tightening, reaching 8 mm subcutaneous depth.',
    keySpecs: [
      { label: 'RF Frequency', value: '4 MHz', note: 'Fractional thermal coagulation' },
      { label: 'RF Power', value: '10–300 W', note: 'Face/neck up to 200 W' },
      { label: 'Needle Depth', value: '0.5–7 mm', note: '+1 mm thermal effect, 8 mm total' },
      { label: 'Probes', value: '4 types', note: '12P, 24P, 40P, Nano · single-use' },
    ],
    mechanisms: {
      eyebrow: 'Core Technology Platform',
      title: 'Triple Technology Integration',
      intro: 'Epidermal protection via insulated needles, combined with precise depth control.',
      items: [
        {
          icon: 'electric_bolt',
          phase: 'Fractional RF',
          title: '4 MHz Thermal Coagulation',
          body: 'RF energy is emitted at the needle tip only, through an insulated shaft, producing fat liquefaction and collagen stimulation with a thermal spread of 1 mm beyond the needle depth.',
          metric: { label: 'Depth capability', value: '8 mm total effect' },
        },
        {
          icon: 'grain',
          phase: 'Insulated microneedles',
          title: 'Gold-Plated 0.22 mm Needles',
          body: 'Insulated, gold-plated microneedles penetrate at a programmable depth, protecting the epidermis while delivering energy to the target tissue.',
          metric: { label: 'Penetration', value: '0.5–7 mm' },
        },
        {
          icon: 'layers',
          phase: 'Multi-level RF delivery',
          title: 'Burst Mode',
          body: 'For body treatments at 4 mm depth or more, RF is emitted at the maximum depth, then a mid depth, then a shallow depth (for example 7 mm, 5 mm, 3 mm) in one pulse.',
          metric: { label: 'Per pulse', value: '3 tissue layers' },
        },
      ],
    },
    indications: {
      eyebrow: 'Clinical Applications',
      title: 'Treatment Applications',
      intro:
        'Intended use: full-body skin resurfacing, skin tightening and stubborn fat reduction through non-surgical, minimally invasive fractional RF microneedling procedures.',
      items: [
        { icon: 'auto_fix_high', title: 'Wrinkle Reduction', body: "Fine lines, crow's feet, nasolabial folds." },
        { icon: 'healing', title: 'Acne Scars', body: 'Pits, marks, atrophic scarring.' },
        { icon: 'expand', title: 'Skin Laxity', body: 'Face, neck and body tightening.' },
        { icon: 'accessibility_new', title: 'Fat Remodeling', body: 'Cellulite, postpartum stretch marks.' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Probe Delivery System', label: '12P · 12 pins', value: 'Eyes, nose, small areas · 0.5–2.5 mm' },
        { group: 'Probe Delivery System', label: '24P · 24 pins', value: 'Face, neck, bony areas · 0.5–2.5 mm' },
        { group: 'Probe Delivery System', label: '40P · 40 pins', value: 'Body, deep tissue · 1.0–7.0 mm' },
        { group: 'Probe Delivery System', label: 'Nano · nano-tips', value: 'Product delivery, tightening · superficial' },
        { group: 'Probe Delivery System', label: 'Probe Use', value: 'Single-use sterile probes prevent cross-contamination' },
        { group: 'Operating Parameters', label: 'Face / Neck', value: 'RF 0–200 W · depth 0.5–2.5 mm' },
        { group: 'Operating Parameters', label: 'Body', value: 'RF 0–200 W (12P / Nano), 0–300 W (24P / 40P) · depth 1.0–7.0 mm' },
        { group: 'Operating Parameters', label: 'Time', value: '1–60 min' },
        { group: 'Operating Parameters', label: 'Parameter Memories', value: '5 (M1–M5)' },
        { group: 'Mechanical Modes', label: 'Regular', value: 'Single fixed depth · precision targeting' },
        { group: 'Mechanical Modes', label: 'Burst', value: '3-level sequential · multi-layer remodeling (body only, ≥4 mm depth)' },
        { group: 'Mechanical Modes', label: 'Technique', value: '90° vertical stamping, 30–50% overlap' },
        { group: 'Electrical Specifications', label: 'RF Frequency', value: '4 MHz' },
        { group: 'Electrical Specifications', label: 'RF Power', value: '10–300 W' },
        { group: 'Electrical Specifications', label: 'Input Voltage', value: '110–230 V ±10%, 50–60 Hz' },
        { group: 'Electrical Specifications', label: 'Display', value: '10.4" color touchscreen' },
        { group: 'Electrical Specifications', label: 'Weight', value: '35 kg' },
        { group: 'Clinical Protocols', label: '12P · Eyes / Nose', value: '40–80 W · 0.5–1.0 mm · Regular' },
        { group: 'Clinical Protocols', label: '24P · Face', value: '80–150 W · 1.0–2.0 mm · Regular' },
        { group: 'Clinical Protocols', label: '40P · Body', value: '80–200 W · 2.0–6.0 mm · Burst' },
        { group: 'Clinical Protocols', label: 'Target Endpoint', value: 'Pointed erythema and edema' },
        { group: 'Treatment Course', label: 'Frequency', value: '4–6 weeks apart' },
        { group: 'Treatment Course', label: 'Course', value: '3–5 sessions' },
        { group: 'Treatment Course', label: 'Session Time', value: '15–20 minutes' },
        { group: 'Treatment Course', label: 'Results', value: 'Initial at 4 days, peak at 2–3 months' },
        { group: 'IC Card Activation', label: 'Swipes per Card', value: '20 (1 per power-on), no session time limit' },
        { group: 'IC Card Activation', label: 'Cards', value: 'One free card per 10 probes' },
      ],
      kit: {
        title: 'Post-Treatment Protocol',
        items: [
          'Days 1–3: ice compress 10–20 min, no raw water',
          'Days 4–10: scab formation and natural fall-off',
          'Week 1: no exercise or sauna, sun protection',
          '15 days: no acid or alcohol products',
          '1 month: strict SPF',
        ],
      },
      note: {
        title: 'Safety',
        body: 'Contraindications include active skin infections and herpes simplex, pacemakers and metal implants, pregnancy, immunosuppression, and chemotherapy or radiotherapy. Remove all metal jewelry, keep the handle at 90° only, and do not deliver energy over the eyes, lips or thyroid.',
      },
    },
  },
};
