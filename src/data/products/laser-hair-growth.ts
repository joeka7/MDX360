import type { Product } from '@/types/product';

/**
 * Source: "Multifunctional Laser Hair Growth Machine web.pdf" (English part).
 * NOT PUBLISHED: the only device photo in the Image PDF ("MDX laser hair growth  user manual.pdf")
 * carries the OEM brand "HIO BEAUTY INSTRUMENT", so this product waits for an approved photo. To
 * publish it, import the photo as `image`, type this as `Product`, and add it to the `products` list
 * in `./index.ts`.
 */
export const laserHairGrowth: Omit<Product, 'image'> = {
  slug: 'laser-hair-growth',
  name: 'Multifunctional Laser Hair Growth Machine',
  category: 'skin',
  categoryLabel: 'Hair Restoration',
  icon: 'face',
  technology: 'Diode Laser (LLLT)',
  technologyDetail: '650 nm Diode Laser · Oxygen Jet · Electrotherapy · BIO Ionization',
  modelTag: 'Laser + 4 Handles',
  highlight: '650 nm · 30–90 Hz',
  summary: 'Low-level laser therapy and four scalp handles for non-invasive hair restoration.',
  description:
    'A 650 nm diode laser (low-level laser therapy) system with oxygen jet spray, high-frequency electrotherapy / ozone comb and BIO ionization handles, for accelerating hair growth and thickening.',
  enquiryLabel: 'Laser Hair Restoration',
  relatedSlugs: [],
  detail: {
    eyebrow: 'Precision Hair Restoration System',
    tagline: 'Low-Level Laser Therapy Hair Restoration',
    overview:
      'The Multifunctional Laser Hair Growth Machine is a diode laser (low-level laser therapy, LLLT) system that penetrates the skin surface at 650 nm with no heating effect, to accelerate hair growth and thickening. The visible monochromatic laser increases skin blood flow by up to 55% at radiant exposures of 0.12–0.36 J/cm², bringing essential nutrients (ATP) into follicles while removing harmful waste (DHT). It integrates laser diode technology with four specialized handles: detection, oxygen jet spray, high-frequency electrotherapy / ozone comb and BIO ionization.',
    keySpecs: [
      { label: 'Wavelength', value: '650 nm', note: 'Visible monochromatic laser' },
      { label: 'Laser Power', value: 'Max 10 mW', note: 'Continuous + pulse modes' },
      { label: 'Frequency', value: '30–90 Hz', note: '30, 50, 70 or 90 Hz' },
      { label: 'Treatment Time', value: '1–60 min', note: 'Set via TIME SET' },
    ],
    mechanisms: {
      eyebrow: 'Core Mechanism of Action',
      title: 'Multiple Therapeutic Mechanisms',
      items: [
        {
          icon: 'flare',
          phase: 'Diode laser (LLLT)',
          title: '650 nm Laser',
          body: 'Penetrates the skin without heating, stimulates epidermal stem cells in the follicle bulge and shifts follicles from the dormant to the anagen (growth) phase. Increased blood flow brings ATP into the follicle while removing DHT, transforming weak follicles into healthy ones that produce thick hair.',
          metric: { label: 'Blood flow', value: 'Up to +55%' },
        },
        {
          icon: 'air',
          phase: 'Deep moisturizing + oxygen',
          title: 'Oxygen Jet Spray Gun',
          body: 'Increases scalp water content and oxygen, promotes cell regeneration, heals follicle openings, regenerates collagen and elastin, soothes sensitive scalp, relieves swelling and inflammation, and improves microcirculation.',
        },
        {
          icon: 'bolt',
          phase: 'Sterilization + sebum control',
          title: 'High-Frequency Electrotherapy + Ozone Comb',
          body: 'Sterilization treats follicle cavities and inflammation, promotes healing, reduces excessive sebum, and enhances lymph and blood circulation; electrode vibration gives a calming massage effect.',
        },
        {
          icon: 'spa',
          phase: 'Collagen + elasticity',
          title: 'BIO Ionization Activation',
          body: 'Improves collagen synthesis, strengthens and tightens scalp elasticity, clears toxins and entrapped liquid, eliminates fatigue and restores scalp health.',
        },
      ],
    },
    indications: {
      eyebrow: 'Use Cases',
      title: 'Treatment Applications',
      intro: 'Primary use: energize hair follicles, increase hair growth and decrease hair loss (85% patient success, as stated by the manufacturer).',
      items: [
        { icon: 'face', title: 'Hair Growth & Hair Loss' },
        { icon: 'accessibility_new', title: 'Fat Reduction & Body Slimming' },
        { icon: 'auto_fix_high', title: 'Skin Rejuvenation & Wrinkle Removal' },
        { icon: 'healing', title: 'Chronic Pain Relief', body: 'Musculoskeletal, myofascial.' },
        { icon: 'favorite', title: 'Vascular Disturbances' },
        { icon: 'medical_services', title: 'Wound & Ulcer Healing' },
        { icon: 'water_drop', title: 'Scalp Sebum Regulation', body: 'Dry or oily scalp.' },
        { icon: 'spa', title: 'Itchy Scalp Relief' },
        { icon: 'straighten', title: 'Hair Shaft Repair', body: 'Increases thickness by 25% per hair.' },
        { icon: 'add_circle', title: 'Hair Transplant Recovery' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Laser Diode Technology', label: 'Technology', value: 'Laser diode' },
        { group: 'Laser Diode Technology', label: 'Wavelength', value: '650 nm (visible monochromatic)' },
        { group: 'Laser Diode Technology', label: 'Laser Power', value: 'Max 10 mW' },
        { group: 'Laser Diode Technology', label: 'Working Mode', value: 'Continuous + pulse' },
        { group: 'Laser Diode Technology', label: 'Frequency Modes', value: '30 Hz, 50 Hz, 70 Hz, 90 Hz' },
        { group: 'Laser Diode Technology', label: 'Treatment Time', value: '1–60 minutes' },
        { group: 'Laser Diode Technology', label: 'Radiant Exposure', value: '0.12–0.36 J/cm² (automatic, based on time / power)' },
        { group: 'Laser Diode Technology', label: 'Blood Flow Increase', value: 'Up to 55%' },
        { group: 'Handle Options', label: 'Detection Handle', value: 'Strong secretion detection · diagnostic only' },
        { group: 'Handle Options', label: 'Oxygen Jet Spray', value: 'Deep moisturizing + oxygen activation' },
        { group: 'Handle Options', label: 'High-Frequency + Ozone Comb', value: 'Sterilization, sebum reduction, massage' },
        { group: 'Handle Options', label: 'BIO Ionization', value: 'Collagen synthesis, muscle tightening' },
        { group: 'Handle Options', label: 'Laser Diode (main)', value: 'Hair growth stimulation · 650 nm, 10 mW, 30–90 Hz, 1–60 min' },
        { group: 'Control Interface', label: 'Touch Screen', value: 'Time, mode and frequency in real time; lamp monitor for laser status' },
        { group: 'Control Interface', label: 'Controls', value: 'TIME SET (1–60 min), continuous / pulse, 30 / 50 / 70 / 90 Hz, handle switching' },
        { group: 'Electrical Specifications', label: 'Power Supply', value: 'AC 100–240 V, 50 / 60 Hz' },
        { group: 'Electrical Specifications', label: 'Cooling System', value: 'Air cooling' },
        { group: 'Electrical Specifications', label: 'Gross Weight', value: '38 kg' },
        { group: 'Electrical Specifications', label: 'Dimension', value: '111 × 54 × 60 cm' },
      ],
      kit: {
        title: 'Device Components',
        items: [
          'Main unit: touch screen, lamp monitor, air cooling, 100–240 VAC supply',
          'Detection handle',
          'Oxygen jet spray gun',
          'High-frequency electrotherapy + ozone comb',
          'BIO ionization activation handle',
          'Laser diode (main hair growth treatment)',
          'Accessories: power cord, air cooling fan, touch screen panel',
        ],
      },
      note: {
        title: 'Safety',
        body: 'No UV (650 nm visible laser) and no heating effect; a painless procedure. Turn off the power supply when not in use.',
      },
    },
  },
};
