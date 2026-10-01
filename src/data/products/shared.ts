import type { SectionIntro, SpecRow } from '@/types/product';

/** Service terms that apply to every MDX360 system. */
export const standardSpecRows: SpecRow[] = [
  { label: 'Manufacturer Guarantee', value: '12-Month Comprehensive Warranty', accent: true },
  { label: 'Installation', value: 'Free On-Site Installation & Calibration' },
  { label: 'Customisation', value: 'Free Custom Service & Configuration' },
];

export const standardTraining = {
  title: 'Included Operator Certification',
  body: 'Every system acquisition includes complete remote or on-site operational clinical training and doctor certification modules by MDX360 clinical engineers.',
};

export const specificationsIntro: SectionIntro = {
  eyebrow: 'Micro-Tolerance Engineering',
  title: 'System Specifications & Parameters',
  intro:
    'Built to the highest medical-device manufacturing tolerances with medical-grade insulation and real-time sensor loops.',
};

export const applicationsIntro = (name: string): SectionIntro => ({
  eyebrow: 'Clinical Applications',
  title: 'Targeted Treatment Indications',
  intro: `The treatment areas and clinical outcomes ${name} is engineered to deliver for your patients.`,
});
