import type { Product } from '@/types/product';

/**
 * Source: "308nm Excimer Phototherapy Device web.pdf".
 * NOT PUBLISHED: the Image PDF ("308nm_Manual_Enlarged.pdf") is a scanned manual with line drawings
 * only, so this product waits for an approved photo. To publish it, import the photo as `image`,
 * type this as `Product`, and add it to the `products` list in `./index.ts`.
 */
export const excimer308nm: Omit<Product, 'image'> = {
  slug: '308nm-excimer',
  name: '308nm Excimer Phototherapy Device',
  category: 'therapy',
  categoryLabel: 'Phototherapy',
  icon: 'light_mode',
  technology: 'XeCl Excimer UVB',
  technologyDetail: 'Monochromatic 308nm ± 2nm UVB',
  modelTag: 'C & D Models',
  highlight: '308nm ± 2nm · ≤200 mW/cm²',
  summary: 'Targeted excimer UVB phototherapy for psoriasis and vitiligo.',
  description:
    'Treats dermatological conditions such as psoriasis and vitiligo through monochromatic UVB emission at 308nm ± 2nm, powered by Xenon Chloride (XeCl) excimer technology with advanced dose control.',
  enquiryLabel: 'Psoriasis & Vitiligo Phototherapy',
  relatedSlugs: [],
  detail: {
    eyebrow: 'Precision Skin Disease Treatment',
    tagline: 'Targeted XeCl Excimer UVB Phototherapy',
    overview:
      'The 308nm Excimer Phototherapy Device treats dermatological conditions such as psoriasis and vitiligo through monochromatic UVB emission at a precise 308nm ± 2nm wavelength, powered by Xenon Chloride (XeCl) excimer technology. It combines the excimer light source with advanced dose control for greater therapeutic accuracy than traditional broadband systems.',
    keySpecs: [
      { label: 'Peak Wavelength', value: '308nm ± 2nm', note: 'Monochromatic UVB' },
      { label: 'Max Intensity', value: '≤200 mW/cm²', note: 'Intensity stability ≤5% variation' },
      { label: 'Irradiation Area', value: '20 cm² ± 10%', note: '45 × 45 mm field, six hoods' },
      { label: 'Dose Range', value: '0–5000 mJ/cm²', note: 'Time or dose mode' },
    ],
    mechanisms: {
      eyebrow: 'Core Mechanism of Action',
      title: 'Excimer Light Source Technology',
      intro:
        'The device generates narrow-band, quasi-monochromatic UVB radiation via excited dimer molecular transitions, precisely targeting skin lesions while sparing healthy tissue and minimizing unnecessary UV exposure compared to conventional systems.',
      items: [
        {
          icon: 'light_mode',
          phase: 'Light source',
          title: 'XeCl Excimer Emission',
          body: 'The XeCl excimer mechanism produces 308nm therapeutic emission, eliminating the broadband UV output of mercury lamps.',
          metric: { label: 'Spectrum', value: 'UVB (280–320nm)' },
        },
        {
          icon: 'healing',
          phase: 'Psoriasis',
          title: 'T-Cell Apoptosis',
          body: 'At 308nm, the radiation induces T-cell apoptosis in psoriasis.',
        },
        {
          icon: 'palette',
          phase: 'Vitiligo',
          title: 'Melanocyte Reactivation',
          body: 'At 308nm, the radiation reactivates melanocyte activity in vitiligo.',
        },
      ],
    },
    indications: {
      eyebrow: 'Use Cases',
      title: 'Treatment Indications',
      items: [
        { icon: 'healing', title: 'Psoriasis Plaques' },
        { icon: 'palette', title: 'Vitiligo Patches' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Excimer Light Source', label: 'Light Source Type', value: 'Xenon Chloride (XeCl) Excimer' },
        { group: 'Excimer Light Source', label: 'Peak Wavelength', value: '308nm ± 2nm' },
        { group: 'Excimer Light Source', label: 'Spectrum', value: 'Monochromatic UVB (280–320nm)' },
        { group: 'Excimer Light Source', label: 'Operation Mode', value: 'Non-continuous (≤30 min on, ≥10 min off)' },
        { group: 'Optical Delivery System', label: 'Irradiation Area', value: '20 cm² ± 10%' },
        { group: 'Optical Delivery System', label: 'Max Intensity', value: '≤200 mW/cm²' },
        { group: 'Optical Delivery System', label: 'Intensity Accuracy', value: '±20% of nominal' },
        { group: 'Optical Delivery System', label: 'Intensity Stability', value: '≤5% variation' },
        { group: 'Optical Delivery System', label: 'Uniformity', value: '±25% across field' },
        { group: 'Optical Delivery System', label: 'Standard UVB Intensity', value: '5.5 mW/cm²' },
        { group: 'Dosimetry Control', label: 'Time-Based Mode', value: 'Programmable, ≤2 minutes' },
        { group: 'Dosimetry Control', label: 'Dose-Based Mode', value: 'Up to 5000 mJ/cm²' },
        { group: 'Dosimetry Control', label: 'Precision', value: 'Dose ±20% (UVB), timing ±2%, max single dose 5 J/cm²' },
        { group: 'Dosimetry Control', label: 'MED Testing', value: 'Automated Fitzpatrick I–VI protocols; manual 80–600 mJ/cm²' },
        { group: 'Light Source Lifecycle', label: 'Green Status', value: '≤300 hours (full performance)' },
        { group: 'Light Source Lifecycle', label: 'Yellow Status', value: '300–500 hours (measurable attenuation, replacement advised)' },
        { group: 'Light Source Lifecycle', label: 'Red Status', value: '>500 hours (end of service life, replacement mandatory)' },
        { group: 'Light Source Lifecycle', label: 'Intensity Recalibration', value: 'Every 100 operational hours, or when output reduction is observed' },
        { group: 'Electrical Specifications', label: 'Input Voltage', value: 'AC 100–240 V, 50/60 Hz' },
        { group: 'Electrical Specifications', label: 'Power (C Model)', value: '160 VA' },
        { group: 'Electrical Specifications', label: 'Power (D Model)', value: '200 VA' },
        { group: 'Electrical Specifications', label: 'Fuse', value: 'T3.15AL/250V' },
        { group: 'Electrical Specifications', label: 'Classification', value: 'Class II, Type B' },
        { group: 'Thermal Management', label: 'Max Surface Temperature', value: '45 °C at UV aperture' },
        { group: 'Thermal Management', label: 'Safe Contact', value: '≤10 min per session' },
        { group: 'Thermal Management', label: 'Cooling', value: 'Active fan cooling with auto-shutdown on overheat; 10 s post-operation fan delay' },
      ],
      kit: {
        title: 'Device Components',
        items: [
          'Treatment applicator: 45 × 45 mm primary aperture',
          'Six hoods, including φ16mm for MED testing',
          'C model: timing card, 1 goggle, 160 VA',
          'D model: fingerprint user management, 3 goggles, 200 VA',
        ],
      },
      note: {
        title: 'Safety Systems',
        body: 'UV protection with goggles (≤0.1% UVB transmittance), dead-man switch and indicators. EMC compliant, with minimal ozone; not for use in explosive atmospheres.',
      },
    },
  },
};
