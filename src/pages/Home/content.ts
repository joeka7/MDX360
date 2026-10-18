import aestheticPrecisionImage from '@/assets/images/Non-Invasive Aesthetic Precision.webp';
import diagnosticImage from '@/assets/images/Unrivaled Diagnostic Confidence.webp';
import regenerativeImage from '@/assets/images/Regenerative & Therapeutic Power.webp';
import excimerImage from '@/assets/images/products/308nm_Excimer.webp';
import flagshipImage from '@/assets/images/products/five-in-one.webp';
import magnetoImage from '@/assets/images/products/A0271 Physio Magneto.webp';
import hifuImage from '@/assets/images/products/MDX 9D Hifu Manual.webp';
import shockwaveImage from '@/assets/images/products/MDX360 -SW25 Professional Shockwave.webp';
import type { IconName } from '@/types/product';
import type { Pillar } from './ClinicalArchitectureSection/ClinicalArchitectureSection';
import type { CatalogueDevice } from './DeviceCatalogueSection/DeviceCatalogueSection';
import type { HeroDevice } from './HomeHero/HeroDevices';

/** Hero trust strip. */
export const heroTrust = ['Free Installation', 'Free Custom Service', '12-Month Guarantee'];

/**
 * Hero device composition. The first entry is the flagship and starts in front.
 * `crop` is the measured device silhouette inside each square cut-out (percent of the canvas).
 */
export const heroDevices: HeroDevice[] = [
  {
    name: '5-in-1 7D Platform',
    image: flagshipImage,
    alt: '5-in-1 7D platform with microneedle RF, Vmax, vaginal and Liposonix handpieces',
    crop: { x: 7.4, y: -21.3, width: 84.6, height: 99.6 },
  },
  {
    name: '308nm Excimer',
    image: excimerImage,
    alt: '308nm excimer phototherapy system with a single handpiece',
    crop: { x: 15.1, y: -5.7, width: 71.7, height: 84.4 },
  },
  {
    name: 'A0271 Physio Magneto',
    image: magnetoImage,
    alt: 'A0271 Physio Magneto therapy system with an articulated treatment head',
    crop: { x: 24.0, y: 4.9, width: 52.3, height: 88.4 },
  },
  {
    name: 'MDX 9D HIFU',
    image: hifuImage,
    alt: 'MDX 9D HIFU system with a touchscreen console, handpiece and interchangeable cartridges',
    crop: { x: 15.3, y: 5.2, width: 70.5, height: 82.9 },
  },
  {
    name: 'MDX360 SW25 Shockwave',
    image: shockwaveImage,
    alt: 'MDX360 SW25 professional shockwave system with a touchscreen console and a holstered applicator',
    crop: { x: 24.5, y: 8.6, width: 47.8, height: 83.2 },
  },
];

/**
 * Clinical Architecture pillars: three informational concepts (not links). The first entry is the
 * featured card. Images are cropped with object-fit: cover (the secondary panels are 16:9, all panels
 * are square on phones); use `focus` and `zoom` to keep the subject in frame, and `mobile` to
 * re-frame it for the square.
 */
export const pillars: Pillar[] = [
  {
    id: 'ca-aesthetic',
    index: '01',
    category: 'Aesthetic',
    title: 'Non-Invasive Aesthetic Precision',
    body: 'Targeting subcutaneous tissue matrices and stimulating endogenous collagen remodeling with zero epidermal disruption, delivering immediate contour clarity.',
    image: {
      src: aestheticPrecisionImage,
      alt: 'A line-up of white aesthetic treatment devices with touchscreen consoles and handpieces',
      focus: 'right center',
      mobile: { focus: '100% 52%', zoom: 1.1 },
    },
  },
  {
    id: 'ca-regenerative',
    index: '02',
    category: 'Regenerative',
    title: 'Regenerative & Therapeutic Power',
    body: 'Harnessing micro-current bio-stimulation and shockwave dynamics to accelerate clinical tissue repair, soothe cellular inflammation, and restore vascular vitality.',
    image: {
      src: regenerativeImage,
      alt: 'Two white therapy devices on wheeled stands with touchscreen and cabled handpieces',
      focus: '92% 68%',
      zoom: 1.2,
      mobile: { focus: '100% 53%', zoom: 1.05 },
    },
  },
  {
    id: 'ca-diagnostic',
    index: '03',
    category: 'Diagnostic',
    title: 'Unrivaled Diagnostic Confidence',
    body: 'Equipped with intuitive, high-resolution visual interfaces, algorithmic impedance sensors, and automated energy metering to guarantee practitioner certainty.',
    image: {
      src: diagnosticImage,
      alt: 'Two diagnostic consoles on wheeled stands with data-display touchscreens and probe handpieces',
      focus: '82% 73%',
      zoom: 1.1,
      mobile: { focus: '92% 52%', zoom: 1 },
    },
  },
];

/**
 * Products featured in the home page device catalogue. The desktop bento needs exactly six devices
 * (tall, wide, wide, wide, tall, wide); any other count uses the two-column grid. `ghostWord` is the
 * large decorative word behind each device.
 */
export const catalogueDevices: CatalogueDevice[] = [
  { slug: 'morpheus-8', ghostWord: 'RF' },
  { slug: 'five-in-one', ghostWord: 'FIVE' },
  { slug: '9d-hifu', ghostWord: 'HIFU' },
  { slug: 'vertical-5-in-1-velashape', ghostWord: 'SHAPE' },
  { slug: '9-in-1-hydro-facial', ghostWord: 'HYDRA' },
  { slug: '6-in-1-cavitation', ghostWord: 'SLIM' },
];

/** Intro line in the device catalogue header, beside the title. */
export const catalogueIntro =
  'Six flagship platforms, each engineered for a distinct clinical outcome, from RF microneedling and HIFU to body contouring and hydra facial care.';

/** Closing banner of the device catalogue, pointing to the full products page. */
export const portfolioTeaser = {
  names: ['Oxygen Facial', 'RF Microneedling', 'Shockwave Therapy'],
  title: 'Need the full technical detail?',
  text: 'Review complete specifications, treatment parameters and components for every device in the portfolio.',
  ctaLabel: 'View Complete Product Portfolio',
};

/** Enterprise partnership services, in journey order (the timeline assumes four). */
export const capabilities: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'tune',
    title: 'Free Custom Service',
    body: 'Tailored device ergonomics, branded interface presets, and personalized multi-stage treatment configuration for your specialized medical workflow.',
  },
  {
    icon: 'rocket_launch',
    title: 'Free Expert Installation',
    body: 'Turnkey international delivery followed by on-premise installation and comprehensive hands-on operational training by certified clinical engineers.',
  },
  {
    icon: 'verified',
    title: '12-Month Guarantee',
    body: 'Uncompromising manufacturer warranty covering internal micro-components, power supplies, optical waveguides, and rapid replacement guarantees.',
  },
  {
    icon: 'headset_mic',
    title: 'Dedicated Clinical Support',
    body: 'Direct 24/7 access to biomedical engineering desks, ongoing clinical updates, and software firmware calibration over the entire hardware lifecycle.',
  },
];
