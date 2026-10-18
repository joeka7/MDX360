import image from '@/assets/images/products/standardized/vertical-co2-oxygen.webp';
import type { Product } from '@/types/product';

/**
 * Source: "MDX360 Vertical  web.pdf". Image: "MDX360 Vertical CO2 Oxygen machine manual (2).pdf",
 * page 1, cropped from the rendered page so the device carries the MDX360 label the manual shows.
 */
export const verticalCo2Oxygen: Product = {
  slug: 'vertical-co2-oxygen',
  name: 'MDX360 Vertical CO₂ Oxygen Machine',
  category: 'skin',
  categoryLabel: 'Oxygen Facial',
  icon: 'bubble_chart',
  technology: 'Hydro-Dermabrasion, RF & Oxygen',
  technologyDetail: 'Hydro-Dermabrasion · Bi-Polar RF · Oxygen Atomization · Ultrasound',
  modelTag: '7-in-1 Vertical Tower',
  highlight: '7 modalities · 4 reservoirs',
  summary: 'A 7-in-1 vertical platform for exfoliation, hydration, collagen stimulation and product penetration.',
  description:
    'An advanced 7-in-1 aesthetic platform integrating hydro-dermabrasion, RF, thermoelectric temperature control, high-pressure oxygen atomization, ultrasonic phonophoresis, vibration / sound meso and integrated cooling.',
  image: {
    src: image,
    alt: 'MDX360 Vertical CO₂ Oxygen Machine tower with its touchscreen, side applicators and four solution bottles',
    fit: 'contain',
  },
  enquiryLabel: '7-in-1 Vertical Aesthetic Platform',
  relatedSlugs: ['9-in-1-hydro-facial', '9-in-1-oxygen', 'morpheus-8'],
  detail: {
    eyebrow: 'Professional Dermatological & Aesthetic Treatments',
    tagline: '7-in-1 Vertical Aesthetic Platform',
    overview:
      'The MDX360 Vertical CO₂ Oxygen Machine is an advanced 7-in-1 aesthetic platform integrating hydro-dermabrasion, RF, thermoelectric temperature control, high-pressure oxygen atomization, ultrasonic phonophoresis, mechanical vibration / sound meso and integrated cooling. Its vertical tower architecture, touchscreen interface, multi-reservoir fluid delivery and precision applicators support skin rejuvenation, exfoliation and collagen stimulation.',
    keySpecs: [
      { label: 'Modalities', value: '7-in-1', note: 'Hydro, RF, temp, O₂, US, vib/meso, cooling' },
      { label: 'Fluid System', value: '4 reservoirs', note: 'Auto-cleaning via Reservoir D' },
      { label: 'RF', value: '1 / 2 MHz', note: 'Bi-polar, continuous or pulsed' },
      { label: 'Input', value: '220 V ± 22 V', note: '50 Hz ± 1 Hz, B-Type' },
    ],
    mechanisms: {
      eyebrow: 'Core Mechanism of Action',
      title: 'Core Technology Modules',
      intro:
        'Mechanical, thermal, electrical, acoustic and pneumatic modalities run in sequence: exfoliation removes dead skin, RF and heat stimulate collagen, ultrasound and vibration enhance penetration, and cooling reduces inflammation, all without repositioning the patient.',
      items: [
        {
          icon: 'water_drop',
          title: 'Hydro-Dermabrasion',
          body: 'Four reservoirs with adjustable vacuum and auto-cleaning via Reservoir D.',
          metric: { label: 'Time', value: '10 min cleansing; 5–8 min infusion' },
        },
        {
          icon: 'electric_bolt',
          title: 'RF (Bi-Polar)',
          body: '1 / 2 MHz selectable, continuous or pulsed, for dermal heating.',
          metric: { label: 'Time', value: '10–15 min / zone' },
        },
        {
          icon: 'device_thermostat',
          title: 'Thermoelectric (Peltier)',
          body: 'Hot and cold modes with real-time temperature display and rapid response.',
          metric: { label: 'Time', value: 'Variable per protocol' },
        },
        {
          icon: 'air',
          title: 'Oxygen Atomization',
          body: 'High-pressure pneumatic mist with an adjustable pattern.',
          metric: { label: 'Time', value: 'Continuous during application' },
        },
        {
          icon: 'graphic_eq',
          title: 'Ultrasonic Phonophoresis',
          body: 'High-frequency cavitation synchronized with essence delivery.',
          metric: { label: 'Time', value: '5–8 min / zone' },
        },
        {
          icon: 'vibration',
          title: 'Vibration / Sound Meso',
          body: 'Revive and Bright modes, continuous or pulsed.',
          metric: { label: 'Time', value: '8–10 min / side' },
        },
        {
          icon: 'ac_unit',
          title: 'Cooling System',
          body: 'Reservoir monitoring, variable pump speed and temperature display.',
          metric: { label: 'Time', value: 'Ongoing' },
        },
      ],
    },
    indications: {
      eyebrow: 'Use Cases',
      title: 'Treatment Applications',
      items: [
        { icon: 'water_drop', title: 'Facial Cleansing & Exfoliation' },
        { icon: 'auto_fix_high', title: 'Wrinkle Reduction' },
        { icon: 'auto_awesome', title: 'Pore Refinement, Hydration & Brightening' },
        { icon: 'compress', title: 'Lymphatic Drainage & Product Penetration Enhancement' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'System Architecture', label: 'Format', value: 'Vertical tower with dual-sided applicator docking' },
        { group: 'System Architecture', label: 'Fluid System', value: '4 reservoirs: A cleansing, B nutrition, C fruit acid peptide, D cleaning / sterilization' },
        { group: 'System Architecture', label: 'Waste & Cooling', value: 'Centralized waste collection, integrated cooling circuit' },
        { group: 'System Architecture', label: 'Hygiene', value: 'Self-cleaning protocols and real-time monitoring' },
        { group: 'Electrical Specifications', label: 'Input Voltage', value: '220 V ± 22 V AC' },
        { group: 'Electrical Specifications', label: 'Frequency', value: '50 Hz ± 1 Hz' },
        { group: 'Electrical Specifications', label: 'Fuse', value: '8 A, Φ5 × 20 mm' },
        { group: 'Electrical Specifications', label: 'Protection Class', value: 'B-Type (grounded)' },
        { group: 'Electrical Specifications', label: 'Power', value: 'Universal with overload protection' },
        { group: 'Environmental Specifications', label: 'Operating', value: '5–40°C / ≤80% RH (non-condensing)' },
        { group: 'Environmental Specifications', label: 'Storage', value: '−10–40°C / ≤93% RH' },
        { group: 'Environmental Specifications', label: 'Clearance', value: '≥5 cm all sides' },
        { group: 'User Interface', label: 'Display', value: 'High-res LCD touchscreen with multi-language support' },
        { group: 'User Interface', label: 'Real-Time Displays', value: 'Temperature, speed, waste level' },
        { group: 'User Interface', label: 'Controls', value: 'Mode selection, treatment timers, function screens (RF frequency / mode, solution selection), countdowns, alarms, status indicators' },
        { group: 'Safety & Maintenance', label: 'Safety', value: 'B-Type; EMI; auto-alarms' },
        { group: 'Safety & Maintenance', label: 'Daily', value: 'Grounding / power cord check, handle test' },
        { group: 'Safety & Maintenance', label: 'Periodic', value: 'Annual service; clean if unused for more than 2 weeks' },
        { group: 'Safety & Maintenance', label: 'Warranty', value: '1 year main unit; 3 months parts (excl. consumables)' },
      ],
      kit: {
        title: 'Standard Package',
        items: [
          'Main unit (1)',
          'Handles: levigation (1), RF (multiple), temperature control (1), ultrasound (1), sound meso / vibration (1), oxygen spray (1)',
          'Heads: massage (4), soft (4), hard (6), drilling stone (2)',
          'Essences (1 box + 2 bottles), caps (4), funnel (1)',
          'Catheters and syringes (3 each), power cord / fuse (1)',
        ],
      },
      note: {
        title: 'Consumables',
        body: 'Dermabrasion tips, seals, filters and covers.',
      },
    },
  },
};
