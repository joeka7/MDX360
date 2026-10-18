import image from '@/assets/images/products/standardized/9-in-1-oxygen.webp';
import type { Product } from '@/types/product';

/**
 * Source: "MDX 360 9 in 1 skin_ inject web.pdf" (second, longer executive overview).
 * Image: "MDX360 9 in 1 Oxygen machine.pdf", page 1.
 */
export const nineInOneOxygen: Product = {
  slug: '9-in-1-oxygen',
  name: '9in1 Skin Inject Oxygen Machine',
  category: 'skin',
  categoryLabel: 'Oxygen Facial',
  icon: 'air',
  technology: 'Oxygen Jet, Microcurrent & LED',
  technologyDetail: 'Oxygen Spray · Needle-Free Injection · Inhalation',
  modelTag: 'Almighty Oxygen Jet',
  highlight: 'Spray · injection · inhalation',
  summary: 'High-concentration oxygen delivered by spray, needle-free injection and inhalation.',
  description:
    'An advanced multifunctional aesthetic system that delivers non-invasive skin rejuvenation through high-concentration oxygen technology, infused by pressurized spray, needle-free injection and inhalation.',
  image: {
    src: image,
    alt: '9in1 Skin Inject Oxygen Machine with its touchscreen, treatment heads and oxygen humidifier bottle',
    fit: 'contain',
  },
  enquiryLabel: 'Almighty Oxygen Jet',
  relatedSlugs: ['9-in-1-hydro-facial', 'five-in-one', '6-in-1-cavitation'],
  detail: {
    eyebrow: 'Non-Invasive Oxygen Skin Rejuvenation',
    tagline: 'Almighty Oxygen Jet',
    overview:
      'The 9in1 Skin Inject Oxygen Machine (Almighty Oxygen Jet) is an advanced multifunctional aesthetic system designed to deliver non-invasive skin rejuvenation through high-concentration oxygen technology. The device infuses oxygen into the skin via pressurized spray delivery, needle-free oxygen injection, and oxygen inhalation therapy.',
    keySpecs: [
      { label: 'Oxygen Delivery', value: '3 Methods', note: 'Spray, needle-free injection, inhalation' },
      { label: 'BIO Microcurrent', value: 'Mode A / B', note: 'Continuous or pulsed' },
      { label: 'LED Photon', value: 'Blue & Red', note: 'Phototherapy modules' },
      { label: 'Oxygen Mask', value: '15–30 min', note: 'At 3 LPM oxygen flow' },
    ],
    mechanisms: {
      eyebrow: 'Device Components',
      title: 'Usage & Benefits',
      intro:
        'Combining advanced oxygen jet technology with a comprehensive range of aesthetic functions, the system features diamond microdermabrasion with vacuum suction, bio microcurrent stimulation, red and blue light therapy, deep hydro-infusion cleansing, lymphatic drainage and suction therapy, as well as an intensive oxygen mask treatment.',
      items: [
        {
          icon: 'air',
          phase: 'Sprays oxygen and active serum onto the skin',
          title: 'Oxygen Spray Lance',
          body: 'Delivers a pure-oxygen massage; treats sensitive skin, dermatitis, eczema and sun damage; refreshes and hydrates instantly.',
        },
        {
          icon: 'vaccines',
          phase: 'Pressurized needle-free injection',
          title: 'Oxygen Infusion Injection Nozzle',
          body: 'Injects oxygen and essence into the epidermis, penetrating active nutrients deeply, strengthening cells, boosting metabolism and reducing wrinkles, pigmentation and laxity.',
        },
        {
          icon: 'electric_bolt',
          phase: 'Microcurrent, Mode A or B',
          title: 'BIO Electrodes (Double Sticks)',
          body: 'Stimulate facial muscles and tissue to improve firmness and elasticity, targeting early to mid signs of aging.',
        },
        {
          icon: 'compress',
          phase: 'Vacuum along lymph pathways',
          title: 'Suction Pen',
          body: 'Used along the neck, cheeks and jawline to remove toxins and metabolic waste, smooth lymphatic and blood circulation, reduce puffiness and improve contour.',
        },
        {
          icon: 'diamond',
          phase: 'Diamond tip with vacuum suction',
          title: 'Diamond Micro-Dermabrasion Head',
          body: 'Exfoliates the skin surface for deep cleansing, removes dead cells and cutin, refines pores and texture, and prepares skin for better oxygen absorption.',
        },
        {
          icon: 'water_drop',
          phase: 'Water or essence injection',
          title: 'Water Injection Syringe / Port',
          body: 'Deep pore cleansing and hydration; controls oil in oily skin and targets dullness in dry skin.',
        },
        {
          icon: 'lightbulb',
          phase: 'Blue (B) or red (R) light',
          title: 'LED Photon Modules',
          body: 'Blue light shrinks pores and treats acne; red light enhances renewal, radiance and collagen stimulation.',
        },
        {
          icon: 'masks',
          phase: 'Pure oxygen with fragrance-impregnated essence',
          title: 'Oxygen Facial & Nasal Mask',
          body: 'Oxygen inhalation supports respiratory and metabolic functions, induces relaxation and improves overall skin oxygenation.',
        },
      ],
    },
    indications: {
      eyebrow: 'Use Cases',
      title: 'Treatment Applications',
      intro:
        'Working synergistically, these technologies help stimulate cellular activity, enhance skin hydration, improve radiance and skin vitality, support anti-aging benefits, and promote lymphatic detoxification for a healthier, clearer, and more refreshed complexion.',
      items: [
        { icon: 'air', title: 'Facial Rejuvenation', body: 'Oxygen spray, injection and inhalation.' },
        { icon: 'diamond', title: 'Deep Cleansing & Pore Refinement', body: 'Diamond micro-dermabrasion with vacuum.' },
        { icon: 'compress', title: 'Lymphatic Drainage & Detoxification', body: 'Suction pen.' },
        { icon: 'electric_bolt', title: 'Microcurrent Wrinkle Treatment', body: 'BIO electrodes.' },
        { icon: 'lightbulb', title: 'Blue & Red LED Photon Therapy', body: 'Acne, pore shrinkage and skin renewal.' },
        { icon: 'water_drop', title: 'Deep Cleaning & Moisturizing', body: 'Water injection.' },
      ],
    },
    specifications: {
      eyebrow: 'Operating Modes',
      title: 'Treatment Modes & Settings',
      rows: [
        { group: 'BIO Microcurrent', label: 'Mode A (Continuous)', value: 'Continuous microcurrent without interruption, for stronger, more sustained lifting and tightening' },
        { group: 'BIO Microcurrent', label: 'Mode B (Discontinuous)', value: 'Microcurrent in pulses with short rest intervals; gentler stimulation for sensitive or thin skin' },
        { group: 'LED Phototherapy', label: 'Mode R (Red)', value: 'Penetrates deeper into the dermis to stimulate collagen, elastin and tissue repair; for aging, dull or loose skin' },
        { group: 'LED Phototherapy', label: 'Blue Light (B)', value: 'Shrinks pores and treats acne' },
        { group: 'Oxygen Mask', label: 'Settings', value: 'Place the mask, select O2, set 15–30 min, run at 3 LPM oxygen flow' },
      ],
    },
  },
};
