import image from '@/assets/images/products/MDX360_Velashape.webp';
import type { Product } from '@/types/product';

/** Source: "MDX360 Vertical 5    web.pdf". Image: "MDX360_Vertical 5 in 1 Velashape User Manual.pdf", page 1. */
export const vertical5in1Velashape: Product = {
  slug: 'vertical-5-in-1-velashape',
  name: 'MDX360 Vertical 5-in-1 Velashape',
  category: 'body',
  categoryLabel: 'Body Contouring',
  icon: 'accessibility_new',
  technology: 'Vacuum, Roller, RF, LED & IR',
  technologyDetail: 'Vacuum + Mechanical Rollers + RF + LED + Infrared',
  modelTag: 'Integrated 5-in-1 Technologies',
  highlight: 'RF 1–120 W · Vacuum 10–80 kPa',
  summary: 'Five integrated technologies for body contouring, cellulite reduction and skin tightening.',
  description:
    'Integrates vacuum, mechanical rollers, radiofrequency (RF), LED and infrared technologies for body contouring, cellulite reduction and skin tightening.',
  image: {
    src: image,
    alt: 'MDX360 Vertical 5-in-1 Velashape console with its treatment handpieces',
    fit: 'contain',
  },
  enquiryLabel: 'Body Contouring & Cellulite Reduction',
  relatedSlugs: ['6-in-1-cavitation', 'five-in-one', '9-in-1-hydro-facial'],
  detail: {
    eyebrow: 'Advanced Body Contouring',
    tagline: 'Multi-Functional Aesthetic Platform',
    overview:
      'The MDX360 Vertical 5-in-1 Velashape integrates vacuum, mechanical rollers, radiofrequency (RF), LED and infrared technologies for comprehensive body contouring, cellulite reduction and skin tightening. The platform delivers synergistic therapeutic effects through precise energy delivery and mechanical manipulation.',
    keySpecs: [
      { label: 'RF Power', value: '1–120 W', note: 'Adjustable RF output' },
      { label: 'Vacuum Pressure', value: '10–80 kPa', note: 'Suction and release timing 0–5.0 s' },
      { label: 'Technologies', value: '5-in-1', note: 'Vacuum, rollers, RF, LED, infrared' },
      { label: 'Working Time', value: '1–60 min', note: 'Four automatic suction modes' },
    ],
    mechanisms: {
      eyebrow: 'Core Technology Platform',
      title: 'Integrated 5-in-1 Technologies',
      intro:
        'Each technology has a distinct function and clinical effect, combined in one platform for body contouring and skin tightening.',
      items: [
        {
          icon: 'compress',
          phase: 'Tissue manipulation',
          title: 'Vacuum',
          body: 'Supports lymphatic drainage and deeper energy penetration.',
        },
        {
          icon: 'autorenew',
          phase: 'Massage action',
          title: 'Mechanical Rollers',
          body: 'Improves circulation and skin texture.',
        },
        {
          icon: 'electric_bolt',
          phase: 'Dermal heating',
          title: 'RF Energy',
          body: 'Stimulates collagen and supports lipolysis.',
          metric: { label: 'Output', value: '1–120 W' },
        },
        {
          icon: 'lightbulb',
          phase: 'Photobiomodulation',
          title: 'LED Therapy',
          body: 'Supports circulation and has a calming effect.',
          metric: { label: 'Brightness', value: '0–10' },
        },
        {
          icon: 'thermostat',
          phase: 'Deep thermal',
          title: 'Infrared (IR)',
          body: 'Supports fat metabolism and skin elasticity.',
          metric: { label: 'Wavelength', value: '950 nm' },
        },
      ],
    },
    indications: {
      eyebrow: 'Approved Clinical Indications',
      title: 'Target Treatment Areas',
      intro:
        'Intended for reduction in cellulite appearance, localized fat reduction, body circumference contouring, skin tightening, lymphatic drainage improvement and non-surgical facial lifting, for adults in medical aesthetic clinics.',
      items: [
        { icon: 'accessibility_new', title: 'Cellulite', body: 'Thighs, buttocks and abdomen.' },
        { icon: 'straighten', title: 'Localized Fat', body: 'Waist, arms and lower abdomen.' },
        { icon: 'expand', title: 'Skin Tightening', body: 'Abdomen, neck and face.' },
        { icon: 'face', title: 'Facial Lifting', body: 'Cheeks, jawline and periorbital area.' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Handpiece Delivery System', label: 'Large Vacuum Roller', value: 'Body · Full-body contouring' },
        { group: 'Handpiece Delivery System', label: 'Medium Roller', value: 'Body · RF 1–120 W, vacuum 10–80 kPa' },
        { group: 'Handpiece Delivery System', label: 'Face Rotating', value: 'Face · RF 1–120 W, LED 0–10' },
        { group: 'Handpiece Delivery System', label: '90° Fat Rotating', value: 'Body / face · Precision fat targeting' },
        { group: 'Handpiece Delivery System', label: 'Focus Dual Cavitation', value: 'Focal areas · Stubborn fat deposits' },
        { group: 'Dosimetry & Control', label: 'RF Power', value: '1–120 W, adjustable' },
        { group: 'Dosimetry & Control', label: 'Vacuum Pressure', value: '10–80 kPa' },
        { group: 'Dosimetry & Control', label: 'Suction / Release Timing', value: '0–5.0 s' },
        { group: 'Dosimetry & Control', label: 'Mode A', value: 'Suction 1.0 s, release 0 s' },
        { group: 'Dosimetry & Control', label: 'Mode B', value: 'Suction 0.5 s, release 0.5 s' },
        { group: 'Dosimetry & Control', label: 'Mode C', value: 'Suction 3.0 s, release 2.0 s' },
        { group: 'Dosimetry & Control', label: 'Mode D', value: 'Suction 5.0 s, release 2.0 s' },
        { group: 'Dosimetry & Control', label: 'Working Time', value: '1–60 minutes' },
        { group: 'Dosimetry & Control', label: 'Control', value: 'Real-time parameter adjustment via touchscreen' },
        { group: 'Electrical & Thermal', label: 'Input Voltage', value: '110 V / 220 V, 50–60 Hz' },
        { group: 'Electrical & Thermal', label: 'Operation Limit', value: '1 hour on / 10 minutes off' },
        { group: 'Electrical & Thermal', label: 'Cooling', value: 'Active cooling, auto-shutdown on overheat' },
        { group: 'Safety', label: 'Contraindications', value: '13 listed, including pacemakers, pregnancy and DVT' },
        { group: 'Safety', label: 'Monitoring', value: 'Real-time skin response monitoring' },
        { group: 'Safety', label: 'Risk Management', value: 'ISO 14971 compliant' },
        { group: 'Clinical Protocols', label: 'Face Treatment', value: 'Upward lifting motion toward the temple (2–3 passes); nasolabial folds, forehead and thick pores; eye area medial → lateral (3–4 passes)' },
        { group: 'Clinical Protocols', label: 'Neck Protocol', value: "Linear suction technique; avoid the Adam's apple" },
        { group: 'Warranty', label: 'Main Unit', value: '1 year' },
        { group: 'Warranty', label: 'Accessories', value: '3 months' },
        { group: 'Specifications Summary', label: 'Technologies', value: '5-in-1' },
        { group: 'Specifications Summary', label: 'Handpieces', value: '6 specialized' },
      ],
      kit: {
        title: 'Maintenance',
        items: [
          'Daily: inspection and alcohol roller cleaning',
          'Weekly: cables',
          'Annual: authorized service',
        ],
      },
      note: {
        title: 'Post-Treatment Care',
        body: 'No cold water for 8 hours (except the face), no massage for 8 hours, no raw or spicy food for 8 hours, and no sun exposure for 1 week.',
      },
    },
  },
};
