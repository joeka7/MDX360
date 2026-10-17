import type { Product } from '@/types/product';

/**
 * Source: "Physio Magneto    web.pdf" (contraindications from its Arabic section, which the English
 * section omits).
 * NOT PUBLISHED: the only device photo in the Image PDF ("A0271 Physio Magneto Use manual.pdf")
 * carries the OEM brand "SHEFMON", so this product waits for an approved photo. To publish it, import
 * the photo as `image`, type this as `Product`, and add it to the `products` list in `./index.ts`.
 */
export const physioMagneto: Omit<Product, 'image'> = {
  slug: 'physio-magneto',
  name: 'Physio Magneto',
  category: 'therapy',
  categoryLabel: 'Magnetic Therapy',
  icon: 'healing',
  technology: 'Pulsed Magnetic Therapy',
  technologyDetail: 'Dual-Mode ST + MT · 4T Energy Focusing · 1 kHz',
  model: 'PMST NEO',
  modelTag: 'Dual-Mode ST + MT',
  highlight: '5–18 cm penetration · 4T',
  summary: 'Non-invasive magnetic therapy for pain management, rehabilitation and tissue recovery.',
  description:
    'A non-invasive magnetic therapy device that introduces magnetic field pulses into the body, penetrating 5–18 cm to reach bone, fascia, ligaments and muscles without heat or pain.',
  enquiryLabel: 'Magnetic Therapy & Pain Recovery',
  relatedSlugs: [],
  detail: {
    eyebrow: 'Precision Magnetic Therapy & Pain Recovery',
    tagline: 'Precision Magnetic Therapy & Pain Recovery System',
    overview:
      'The Physio Magneto (PMST NEO) is a non-invasive magnetic therapy device that introduces magnetic field pulses into the body to increase cellular charge, producing alternating pulse dynamic magnetic fields with adjustable intensity. Its non-thermal, distal and cumulative effects support deep recovery without heat, pain or stimulation: accelerating cell metabolism, reducing inflammation, promoting wound healing and penetrating 5–18 cm to bone, fascia, ligaments and muscles. It integrates dual-mode treatment (ST high-frequency superconducting + MT low-frequency repair), 4T energy focusing, a 1 kHz ultra-fast frequency, air cooling and an adjustable support arm.',
    keySpecs: [
      { label: 'Penetration', value: '5–18 cm', note: 'Bone, fascia, ligaments, muscles' },
      { label: 'Energy Focusing', value: '4T', note: 'Damped oscillation waveform' },
      { label: 'Output Power', value: '1200 W', note: '100–240 V AC' },
      { label: 'Session', value: '15–20 min', note: 'Clothing can be worn' },
    ],
    mechanisms: {
      eyebrow: 'Core Mechanism of Action',
      title: 'Magnetic Field Mechanisms',
      items: [
        {
          icon: 'bolt',
          phase: 'Magnetic field pulse effect',
          title: 'Cellular Charge',
          body: 'Magnetic field pulses increase the charge in cells, using electromagnetic field biological effects at different strengths and frequencies to produce alternating pulse dynamic magnetic fields with adjustable intensity.',
        },
        {
          icon: 'layers',
          phase: 'Non-thermal deep penetration',
          title: 'Deep Recovery',
          body: 'Non-thermal, distal and cumulative effects achieve deep recovery without heat, pain or stimulation, penetrating 5–18 cm into bone, fascia, ligaments and muscles.',
          metric: { label: 'Depth', value: '5–18 cm' },
        },
        {
          icon: 'favorite',
          phase: 'Cell metabolism acceleration',
          title: 'Muscle & Nerve Stimulation',
          body: 'Stimulates deeper muscle and nerve tissue, inducing muscle contraction and neuromodulation; increases cell metabolism, regenerates blood cells, improves blood circulation and increases oxygen absorption by 200%.',
        },
        {
          icon: 'tune',
          phase: 'Dual-mode treatment',
          title: 'ST + MT Modes',
          body: 'ST mode (high-frequency superconducting) offers deeper penetration with weaker pain for deep analgesia and bone healing; MT mode (low-frequency repair) targets superficial muscle contraction and muscle tissue recovery. Combined, deep and shallow treatment achieves a 1+1>2 effect.',
          metric: { label: 'Oscillation', value: '150 Hz' },
        },
      ],
    },
    indications: {
      eyebrow: 'Use Cases',
      title: 'Treatment Indications',
      items: [
        { icon: 'healing', title: 'Pain Reduction', body: 'Muscular pathologies: contracture, muscle tears, bruises, swelling.' },
        { icon: 'favorite', title: 'Blood Circulation Improvement', body: 'Superficial and deep circulation.' },
        { icon: 'spa', title: 'Tissue Regeneration', body: 'Accelerating cell metabolism and wound healing.' },
        { icon: 'water_drop', title: 'Venous & Lymphatic Drainage', body: 'Stimulating drainage systems.' },
        { icon: 'balance', title: 'Metabolic Balance Restoration', body: 'Affecting metabolic balance activity.' },
        { icon: 'accessibility_new', title: 'Joint Injuries', body: 'Osteoarticular distractions and wear: shoulder, hip, knee, ankle.' },
        { icon: 'back_hand', title: 'Elbow, Wrist & Arm Pathology', body: 'Epicondylitis, tendinitis, carpal tunnel syndrome.' },
        { icon: 'straighten', title: 'Cervical, Thoracic & Lumbar Pathology', body: 'Back and spine pain.' },
        { icon: 'directions_walk', title: 'Tendon Inflammation', body: 'Achilles tendon, patellar ligament damage.' },
        { icon: 'fitness_center', title: 'Shoulder Joint Issues', body: 'Tendinitis and calcination.' },
        { icon: 'water', title: 'Edema Treatment', body: 'Acute and chronic edema.' },
        { icon: 'sports_gymnastics', title: 'Muscle Building', body: 'Abdominal training, butt / thigh firming.' },
        { icon: 'self_improvement', title: 'Pelvic Floor Strengthening', body: 'Rehabilitation applications.' },
        { icon: 'sports', title: 'Sports Injuries', body: 'Medical field applications.' },
      ],
    },
    specifications: {
      eyebrow: 'Technical Data',
      title: 'System Specifications & Parameters',
      rows: [
        { group: 'Magnetic Ring Handle', label: 'Waveform', value: 'Damped oscillation waveform' },
        { group: 'Magnetic Ring Handle', label: 'Frequency', value: 'Ultra-fast 1 kHz' },
        { group: 'Magnetic Ring Handle', label: 'Energy Focusing', value: '4T' },
        { group: 'Magnetic Ring Handle', label: 'Penetration Depth', value: '5–18 cm under the skin' },
        { group: 'Magnetic Ring Handle', label: 'Operation', value: 'No direct skin contact required (clothing can be worn)' },
        { group: 'Support Arm', label: 'Adjustment', value: 'Any direction and angle, fatigue-free, both hands free' },
        { group: 'Support Arm', label: 'Knob', value: 'Counterclockwise to loosen and adjust; clockwise to tighten and lock' },
        { group: 'Treatment Modes', label: 'ST Mode', value: '150 Hz · deep penetration, weaker pain · deep analgesia, bone healing' },
        { group: 'Treatment Modes', label: 'MT Mode', value: '150 Hz · superficial, higher pain level · muscle contraction, tissue recovery' },
        { group: 'Treatment Modes', label: 'Combined', value: '1 kHz ultra-fast · deep + shallow, painless · 1+1>2 effect' },
        { group: 'Treatment Modes', label: 'Auto / Manual', value: 'ST: auto mode with presets for 10 treatment areas; MT: manual mode' },
        { group: 'Dosimetry Control', label: 'Energy', value: '1–12 (weak to strong); start at 3 and increase per client feeling' },
        { group: 'Dosimetry Control', label: 'Time', value: '15–20 minutes per treatment, adjustable' },
        { group: 'Dosimetry Control', label: 'Frequency', value: 'Adjustable per ST / MT mode parameter form' },
        { group: 'Dosimetry Control', label: 'Monitoring', value: 'Touchscreen shows body part, energy, time, frequency; "PAUSE" starts / stops' },
        { group: 'Electrical Specifications', label: 'Voltage', value: '100–240 V AC' },
        { group: 'Electrical Specifications', label: 'Output Power', value: '1200 W' },
        { group: 'Electrical Specifications', label: 'Cooling System', value: 'Air cooling' },
        { group: 'Electrical Specifications', label: 'Near Infrared (option)', value: '940 nm / 660 nm / 620 nm' },
        { group: 'Electrical Specifications', label: 'Package Size', value: '63 × 48 × 64 cm' },
        { group: 'Electrical Specifications', label: 'Gross Weight', value: '39 kg' },
        { group: 'Treatment Protocol', label: 'Session Time', value: '15–20 minutes' },
        { group: 'Treatment Protocol', label: 'Course', value: '6–8 courses, 3–5 days apart' },
        { group: 'Treatment Protocol', label: 'Process', value: 'Treatment ring placed on the painful area over clothing; high-energy magnetic pulses delivered to muscle and nerve tissue' },
        { group: 'Safety', label: 'Possible Side Effects', value: 'Temporary erythema or swelling; temporary loss of sensation or itching; skin damage after previous corticoid therapy; shockwave application may cause undesirable heart activity' },
        { group: 'Safety', label: 'Emergency Stop', value: '"PAUSE" button' },
      ],
      kit: {
        title: 'Device Components',
        items: [
          'Main unit: touchscreen, power switch, power socket and handle socket (back), air cooling',
          'Treatment handle: magnetic ring handle with socket',
          'Support arm: adjustable direction and angle, locks clockwise',
          'Accessories: power cord, flight box package, user manual',
        ],
      },
      note: {
        title: 'Contraindications',
        body: 'Metal in the body; ulcerated, unhealed wounds; the brain and heart; children and special groups; the eyes and surrounding area, myocardium, spinal cord, gonads, kidneys and liver; blood or coagulation disorders and anticoagulants; polyps in the treatment area; thrombosis; tumor diseases; polyneuropathy; growing cartilage in children; corticoid therapy; areas near large nerve bundles, blood vessels, the spinal cord and the head.',
      },
    },
  },
};
