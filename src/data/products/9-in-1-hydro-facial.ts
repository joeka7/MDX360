import image from '@/assets/images/products/9-in-1-hydro-facial.webp';
import type { Product } from '@/types/product';

/**
 * Source: "MDX 360 9 in 1 hadra     web.pdf" (English part). Image: "MDX360 9 in 1 Hydra manual.pdf",
 * page 1, cropped from the rendered page so the device carries the MDX360 labels the manual shows.
 */
export const nineInOneHydroFacial: Product = {
  slug: '9-in-1-hydro-facial',
  name: 'MDX360 Plasma Warm Hydro Facial Machine',
  category: 'skin',
  categoryLabel: 'Hydro Facial',
  icon: 'water_drop',
  technology: 'Hydra Facial, RF & Plasma',
  technologyDetail: 'Hydra Facial · BIO RF · Plasma · Ion Meso · Ultrasound',
  modelTag: '9-in-1 Hydra Facial System',
  highlight: 'Needle-free · 9 functions',
  summary: 'Deep cleansing, hydration and collagen stimulation in one needle-free facial system.',
  description:
    'A multifunctional facial system integrating Hydra Facial with heating, BIO multi-polar RF, Nano Spray, Plasma, Ion Meso, eye and face ultrasound, hot and cold hammer, and ion clamp.',
  image: {
    src: image,
    alt: 'MDX360 Plasma Warm Hydro Facial Machine on its trolley, with treatment handles and A, B and C solution bottles',
    fit: 'contain',
  },
  enquiryLabel: '9-in-1 Hydra Facial System',
  relatedSlugs: ['9-in-1-oxygen', 'five-in-one', 'vertical-5-in-1-velashape'],
  detail: {
    eyebrow: 'Multifunctional Facial System',
    tagline: '9-in-1 Hydra Facial System',
    overview:
      'Integrates Hydra Facial with heating, BIO multi-polar RF, Nano Spray, Plasma, Ion Meso, eye and face ultrasound, hot and cold hammer, and ion clamp. The system deep-cleans pores, hydrates the skin, stimulates collagen, tightens facial contours, and improves texture and radiance, all non-invasively and without needles.',
    keySpecs: [
      { label: 'Hydra Suction', value: '30 L', note: 'Handle negative pressure flow' },
      { label: 'Bipolar RF', value: '1.5 MHz', note: 'BIO multi-polar RF head' },
      { label: 'Ultrasound', value: '1 MHz', note: 'Eye and face handles' },
      { label: 'Display', value: '10.4-inch', note: 'LCD touch screen' },
    ],
    mechanisms: {
      eyebrow: 'Main Functions',
      title: 'Nine Functions, One System',
      items: [
        {
          icon: 'water_drop',
          phase: 'Deep cleaning',
          title: 'Hydra Facial Handle',
          body: 'Removes dead keratinocytes, sebum, impurities, mites and grease, provides long-lasting nutrition, and leaves skin moist, delicate and shiny.',
          metric: { label: 'Solution bottles', value: 'A, B, C' },
        },
        {
          icon: 'electric_bolt',
          phase: 'Multi-polar RF',
          title: 'BIO Head',
          body: 'Multi-polar RF penetrates subcutaneous tissue, generating 50–65 °C heat energy that stimulates collagen rearrangement, fills wrinkles and firms lax skin.',
          metric: { label: 'Energy · time', value: '5–12 · 15 min' },
        },
        {
          icon: 'shower',
          phase: 'Hydration',
          title: 'Nano Spray',
          body: 'Sprays nutrient solution evenly on the skin at 0.2 Pa, delivering oxygen-therapy-like hydration for wrinkle reduction and skin rejuvenation.',
          metric: { label: 'Pressure', value: '0.2 Pa' },
        },
        {
          icon: 'bolt',
          phase: 'Antibacterial',
          title: 'Plasma Head',
          body: 'A specific frequency generates plasma with an antibacterial, anti-inflammatory and sterilizing effect. It opens cell channels, boosts product penetration up to 10 times, stimulates collagen and repairs problem skin.',
          metric: { label: 'Energy · time', value: '5+ · about 10 min' },
        },
        {
          icon: 'science',
          phase: 'Needle-free infusion',
          title: 'Ion Meso Head',
          body: 'Uses electroporation and aquaporin technology as an alternative to needle-based mesotherapy, introducing active ingredients with a mild current while stimulating lymphatic and blood circulation.',
          metric: { label: 'Energy', value: 'From 5' },
        },
        {
          icon: 'visibility',
          phase: 'Ultrasound',
          title: 'Eye & Face Ultrasound',
          body: 'Ultrasonic waves help product absorption, promote metabolism and enhance skin health.',
          metric: { label: 'Mode · energy · time', value: 'A · 5 · 10 min' },
        },
        {
          icon: 'device_thermostat',
          phase: 'Thermal therapy',
          title: 'Hot & Cold Hammer',
          body: 'Cold reduces redness, swelling and pore size while firming skin; heat increases blood flow, opens pores and accelerates absorption of gels, serums and oils.',
          metric: { label: 'Heating', value: '35–50 °C' },
        },
        {
          icon: 'cable',
          phase: 'Bio-microcurrent',
          title: 'Ion Clamp',
          body: 'Uses bio-microcurrent to drive mask nutrients into the skin within 15 minutes.',
          metric: { label: 'Energy · mode · time', value: '3 · A · 15 min' },
        },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Main Performance & Technical Parameters', label: 'Water Oxygen Atomization Pressure', value: '6 kg' },
        { group: 'Main Performance & Technical Parameters', label: 'Hydra Handle Negative Pressure Flow', value: '30 L' },
        { group: 'Main Performance & Technical Parameters', label: 'Hydra Solution Bottles', value: 'A, B, C (3 bottles)' },
        { group: 'Main Performance & Technical Parameters', label: 'Hydra Tips', value: '3 skin-friendly silicone heads, 3 vortex heads, 2 sanding heads' },
        { group: 'Main Performance & Technical Parameters', label: 'Cold Hammer Temperature', value: '2–5 °C' },
        { group: 'Main Performance & Technical Parameters', label: 'Heat Temperature', value: '35–50 °C' },
        { group: 'Main Performance & Technical Parameters', label: 'Ultrasonic Frequency', value: '1 MHz' },
        { group: 'Main Performance & Technical Parameters', label: 'Bipolar RF Frequency', value: '1.5 MHz' },
        { group: 'Main Performance & Technical Parameters', label: 'Display Screen', value: '10.4-inch LCD touch screen' },
        { group: 'Hot & Cold Hammer Gears', label: 'Cooling (Gears 1 / 2 / 3)', value: '−5 °C / 0 °C / −2 °C' },
        { group: 'Hot & Cold Hammer Gears', label: 'Heating (Gears 1 / 2 / 3)', value: '35 °C / 45 °C / 50 °C' },
        { group: 'Hot & Cold Hammer Gears', label: 'Settings', value: 'Energy hot 2 / ice 3; time hot 10–15 min / ice 3–5 min' },
        { group: 'Treatment Settings', label: 'BIO Head', value: 'Model A, energy 5–12, 15 min' },
        { group: 'Treatment Settings', label: 'Plasma Head', value: 'Energy 5 or above, about 10 min, about 1 cm from the skin' },
        { group: 'Treatment Settings', label: 'Eye & Face Ultrasound', value: 'Model A, energy 5, 10 min' },
        { group: 'Treatment Settings', label: 'Ion Clamp', value: 'Mode A, energy 3, 15 min' },
        { group: 'Treatment Settings', label: 'Nano Spray', value: 'About 10 cm from the skin (moisturizing) or 1 cm (injecting & moisturizing)' },
        { group: 'Treatment Settings', label: 'Small Bubble Cleansing', value: '15 min, full face' },
      ],
      kit: {
        title: 'Machine Components',
        items: [
          'Accessories and accessory racks',
          'Touch screen',
          'Air regulating valve',
          'Solution bottles (A, B, C)',
          'Water flow control valve',
          'Waste water bottle',
          'Water in and water out connections',
          'Overflow protection',
        ],
      },
      note: {
        title: 'Operating Notes',
        body: 'Do not operate on the eyelids. Keep RF probes in contact with the skin and moving to avoid overheating, and keep the skin moist during ultrasound. Use only clean water in the Nano Spray to prevent blockage.',
      },
    },
  },
};
