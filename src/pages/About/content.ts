import type { IconName } from '@/types/product';

export const heroMetrics = [
  { value: '100%', label: 'Clinical Precision' },
  { value: 'ISO 13485', label: 'Certified Standard', accent: true },
  { value: '360°', label: 'Comprehensive Care' },
];

export const engineeringPanels: Array<{
  icon: IconName;
  title: string;
  body: string;
  metric: { label: string; value: string };
}> = [
  {
    icon: 'precision_manufacturing',
    title: 'Micro-Tolerance Engineering',
    body: 'Every capacitor, optical crystal, and frequency emitter is calibrated against micro-level thresholds to guarantee unwavering energy delivery in every clinical session.',
    metric: { label: 'Accuracy Tolerance', value: '±0.02%' },
  },
  {
    icon: 'upload_file',
    title: 'Clinical Diagnostic Synergy',
    body: 'Bridging the crucial gap between clinical diagnostic precision and practitioner usability, our devices streamline procedural workflow for physicians worldwide.',
    metric: { label: 'Workflow Efficiency', value: '+45% Speed' },
  },
  {
    icon: 'verified',
    title: 'Rigorous Certification',
    body: 'Standardized production lines audited continuously for biocompatibility, RF containment, and photonic stability under full CE Medical and international directives.',
    metric: { label: 'Quality Compliance', value: 'Global Tier 1' },
  },
];

export const statements = {
  mission: {
    badge: { icon: 'flag', label: 'Our Commitment' },
    title: 'Our Mission',
    lead: 'Our mission is to advance healthcare by developing and manufacturing innovative medical devices that improve patient outcomes and enhance the quality of care.',
    body: 'We are committed to providing healthcare professionals with reliable, cutting-edge solutions that enable them to deliver the best possible care to their patients.',
    footer: { icon: 'check', label: 'Targeting zero clinical downtime across all clinics.' },
  },
  vision: {
    badge: { icon: 'visibility', label: 'Global Trajectory' },
    title: 'Our Vision',
    lead: 'Our vision is to be a global leader in the medical device industry, known for our unwavering commitment to quality, innovation, and patient safety.',
    body: "We aspire to set new standards in healthcare technology, continuously pushing the boundaries of what is possible to improve patients' lives worldwide.",
    footer: { icon: 'trending_up', label: "Pioneering tomorrow's non-invasive energy wavelengths today." },
  },
} as const;

export const operationalPillars: Array<{ icon: IconName; title: string; body: string; check: string }> = [
  {
    icon: 'policy',
    title: 'International Quality & Safety',
    body: 'Uncompromising adherence to medical directives and rigorous quality management ensuring patient-first execution.',
    check: 'ISO 13485 Cleared',
  },
  {
    icon: 'clinical_notes',
    title: 'Clinician-Centric Innovation',
    body: 'Co-designed with active aesthetic practitioners to ensure ergonomic handpieces, responsive GUI, and rapid protocols.',
    check: 'Ergonomic Handpieces',
  },
  {
    icon: 'vital_signs',
    title: 'Non-Invasive Efficacy',
    body: 'Maximum patient comfort and minimal post-treatment downtime through focused acoustic, RF, and optical wavelength matrices.',
    check: 'Zero Thermal Trauma',
  },
  {
    icon: 'handshake',
    title: 'Full Partner Ecosystem',
    body: 'Complimentary on-site installation, custom clinic OEM branding, continuous clinical staff training, and full 12-month manufacturer guarantee.',
    check: '12-Mo Warranty Standard',
  },
];

export const bannerHighlights: Array<{ icon: IconName; label: string }> = [
  { icon: 'public', label: 'EMEA & Global Distribution' },
  { icon: 'verified', label: 'Direct OEM Manufacturer Support' },
  { icon: 'support_agent', label: '24/7 Technical Response' },
];
