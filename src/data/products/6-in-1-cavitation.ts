import image from '@/assets/images/products/standardized/6-in-1-cavitation.webp';
import type { Product } from '@/types/product';

/** Source: "6 IN 1 Body Slimming Cavitation Machine web.pdf". Image: "MDX360 6 in 1 Cavitation New.pdf", page 1. */
export const sixInOneCavitation: Product = {
  slug: '6-in-1-cavitation',
  name: '6 IN 1 Body Slimming Cavitation Machine',
  category: 'body',
  categoryLabel: 'Body Slimming',
  icon: 'graphic_eq',
  technology: 'Cavitation, RF, Vacuum & Lipo Laser',
  technologyDetail: '40 kHz Cavitation + Multipolar RF + Vacuum + Lipo Laser',
  modelTag: 'Six Specialized Handles',
  highlight: '40 kHz cavitation · 450 kHz facial RF',
  summary: 'Six handles for fat reduction, body shaping, skin tightening and facial RF.',
  description:
    'Non-surgical body contouring device combining 40 kHz ultrasonic cavitation, multipolar RF, RF with vacuum negative pressure and diode laser lipolysis for fat reduction and body shaping.',
  image: {
    src: image,
    alt: '6 IN 1 Body Slimming Cavitation Machine with its cavitation and RF handles and lipo laser pads',
    fit: 'contain',
  },
  enquiryLabel: 'Fat Reduction & Body Shaping',
  relatedSlugs: ['vertical-5-in-1-velashape', 'five-in-one', '9-in-1-oxygen'],
  detail: {
    eyebrow: 'Precision Fat Reduction & Body Shaping',
    tagline: 'Multi-Functional Non-Surgical Body Contouring',
    overview:
      'Combines 40 kHz ultrasonic cavitation, sextupole RF, tripole facial RF, quadrupole facial RF, RF + vacuum negative pressure and diode laser lipolysis for fat reduction and body shaping. High-energy ultrasonic waves generate vacuum air pockets inside and outside fat cells, disintegrating triglycerides into glycerol and free fatty acids, which are exhausted through hepatoenteral circulation with 1 MHz RF.',
    keySpecs: [
      { label: 'Cavitation', value: '40 kHz', note: 'Four pulse modes, A–D' },
      { label: 'Facial RF', value: '450 kHz', note: 'Quadrupole capacitive coupling' },
      { label: 'Lipo Laser', value: '5 mW', note: 'Diode laser lipolysis, four modes' },
      { label: 'Mains Power', value: '100 VA', note: 'Air cooled, Class 1, Type B' },
    ],
    mechanisms: {
      eyebrow: 'Core Mechanism of Action',
      title: 'Six Specialized Handles',
      intro:
        'Each handle reduces fat or tightens skin through a different therapeutic mechanism, with time and intensity set on the touch panel.',
      items: [
        {
          icon: 'graphic_eq',
          phase: 'Fat reduction',
          title: '40 kHz Ultrasonic Cavitation',
          body: 'A strong 40 kHz sound wave vibrates fat cells at high speed, producing vacuum air pockets inside and outside the cells that disintegrate triglycerides into glycerol and free fatty acids.',
          metric: { label: 'Treatment time', value: '15–20 min' },
        },
        {
          icon: 'blur_circular',
          phase: 'Deep fat dissolution',
          title: 'Sextupole Body RF',
          body: 'Six-pole RF reaches deep-seated fat cells to generate friction heat and raise local temperature, while strong negative pressure helps break down thick fat, enhance blood circulation and accelerate fat decomposition.',
          metric: { label: 'Treatment time', value: '15–20 min' },
        },
        {
          icon: 'face',
          phase: 'Face rejuvenation',
          title: 'Tripole Facial RF',
          body: 'Positive and negative micro-current activates skin cells to accelerate collagen synthesis by fibroblasts, for anti-aging, lifting, tightening and wrinkle removal.',
          metric: { label: 'Energy', value: '3–6' },
        },
        {
          icon: 'electric_bolt',
          phase: 'Skin tightening',
          title: 'Quadrupole Facial RF',
          body: 'A capacitive coupling electrode changes polarity 450,000 times per second, generating heat in subcutaneous tissue. Papillary dermis collagen contracts at 60–70 °C, so tightening is visible right after treatment.',
          metric: { label: 'Frequency', value: '450 kHz' },
        },
        {
          icon: 'compress',
          phase: 'Fat & lymphatic drainage',
          title: 'RF + Vacuum',
          body: 'High-speed turbine negative pressure and a roller axis massage tissue to break down subcutaneous fat, release micro-vascular lymphatic vessels and promote metabolism, while firming skin and improving elasticity.',
          metric: { label: 'Control', value: 'RF and vacuum intensity' },
        },
        {
          icon: 'flare',
          phase: 'Chemical fat breakdown',
          title: 'Laser Lipolysis',
          body: 'Low-level diode laser energy creates a chemical signal in the fat cell, releasing stored triglycerides as free fatty acids and glycerol for the body to use in metabolism. Exercise after treatment supports their elimination.',
          metric: { label: 'Treatment time', value: '20 min per site' },
        },
      ],
    },
    indications: {
      eyebrow: 'Clinical Features',
      title: 'Treatment Protocols',
      intro:
        'Suitable for all skin types and multiple body areas, including the neck, breasts, back, knees, hips, thighs and arms, for fat reduction, lymphatic drainage, skin tightening and elasticity.',
      items: [
        { icon: 'straighten', title: 'Thigh Fat', body: 'Circular massage.', duration: '15–20 min · every 2–3 days' },
        { icon: 'accessibility_new', title: 'Waist & Abdomen', body: 'Spiral movement outward from the navel.', duration: '25 min · every 2–3 days' },
        { icon: 'accessibility_new', title: 'Lower Body & Hips', body: 'Circular or straight strokes toward the groin.', duration: '30 min · every 2–3 days' },
        { icon: 'face', title: 'Face', body: 'Spiral movement on the face and around the eyes.', duration: '15–20 min' },
        { icon: 'spa', title: 'Beautifying Massage', body: 'Circular massage on specific areas.', duration: '30–40 min' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Electrical Specifications', label: 'Energy Output', value: '56 × 180 mW' },
        { group: 'Electrical Specifications', label: 'Mains Power', value: '100 VA' },
        { group: 'Electrical Specifications', label: 'Safety', value: 'On-board diagnostics' },
        { group: 'Electrical Specifications', label: 'Classification', value: 'Electrical Class 1, Type B applied part' },
        { group: 'Electrical Specifications', label: 'Cooling System', value: 'Air cooling; pause 10 min after 1 h of continuous use' },
        { group: 'Electrical Specifications', label: 'Operation Mode', value: 'Continuous' },
        { group: 'Frequencies & Output', label: 'Ultrasonic Frequency', value: '40 kHz' },
        { group: 'Frequencies & Output', label: 'RF Frequency', value: '1 MHz (body), 450 kHz (facial)' },
        { group: 'Frequencies & Output', label: 'Laser Power', value: '5 mW' },
        { group: 'Frequencies & Output', label: 'Treatment Time', value: '15–40 min per handle' },
        { group: 'Frequencies & Output', label: 'Energy Range', value: '3–6 (RF); adjustable strength (ultrasonic, laser)' },
        { group: 'Cavitation Modes', label: 'Mode A', value: '3 s on, 3 s off' },
        { group: 'Cavitation Modes', label: 'Mode B', value: '2 s on, 2 s off' },
        { group: 'Cavitation Modes', label: 'Mode C', value: '1 s on, 1 s off' },
        { group: 'Cavitation Modes', label: 'Mode D', value: '0.5 s on, 0.5 s off' },
        { group: 'Laser Lipolysis Modes', label: 'Mode A', value: 'Continuous' },
        { group: 'Laser Lipolysis Modes', label: 'Mode B', value: '1 s on, 1 s pause' },
        { group: 'Laser Lipolysis Modes', label: 'Mode C', value: '0.5 s on, 0.5 s pause' },
        { group: 'Laser Lipolysis Modes', label: 'Mode D', value: '0.2 s on, 0.2 s pause' },
      ],
      kit: {
        title: 'Handles (6 in 1)',
        items: [
          '40 kHz ultrasonic cavitation head',
          'Sextupole body RF handle with negative pressure',
          'Tripole facial RF handle',
          'Quadrupole facial RF handle',
          'RF + vacuum roller handle',
          'Laser lipolysis diode board band',
        ],
      },
      note: {
        title: 'Safety',
        body: 'Keep RF electrodes moving slowly on the skin and reduce intensity around the eyes and forehead. The operator wears insulated gloves, and neither operator nor client wears metal accessories. Do not irradiate the eyes directly with laser light.',
      },
    },
  },
};
