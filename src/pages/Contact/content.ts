import type { IconName } from '@/types/product';

export const contactMetrics: Array<{ icon: IconName; value: string; label: string }> = [
  { icon: 'timer', value: '< 4 Hours', label: 'Clinical Response Time' },
  { icon: 'public', value: '38+ Countries', label: 'Global Distribution Hubs' },
  { icon: 'verified_user', value: 'ISO 13485', label: 'Medical Device Standard' },
  { icon: 'support_agent', value: 'Direct UAE', label: 'Technical Dispatch Base' },
];

export const clinicalCommitments: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'verified',
    title: 'Free Custom Device Consultation',
    body: "Biomedical audit and ROI model formulated for your practice's volume.",
  },
  {
    icon: 'precision_manufacturing',
    title: 'Turnkey Clinical Installation',
    body: 'On-site parameter calibration and rigorous room compliance inspection.',
  },
  {
    icon: 'shield',
    title: '12-Month Comprehensive Guarantee',
    body: 'Factory-certified replacement guarantee with loaner systems during maintenance.',
  },
];

export const quickSelectSlugs = ['shape-master', '7d-hifo', 'ice-gold-rf', 'quantum-lift', 'shock-wave-x'];

export const showcaseSlugs = ['shape-master', '7d-hifo', 'ice-gold-rf', 'shock-wave-x'];

export const trustBlocks: Array<{ icon: IconName; title: string; body: string; check: string }> = [
  {
    icon: 'handshake',
    title: 'Free Certified Installation',
    body: 'Our certified biomedical engineers physically configure, calibrate, and verify electrical safety parameters inside your clinical environment at no supplemental cost.',
    check: 'Turnkey On-Site Calibration',
  },
  {
    icon: 'verified_user',
    title: '12-Month Full Guarantee',
    body: 'Comprehensive parts and labor coverage against manufacturing tolerances. Rapid-swap hardware support minimizes clinic treatment downtime.',
    check: 'Factory Direct Component Supply',
  },
  {
    icon: 'school',
    title: 'Hands-on Clinical Training',
    body: 'Medical staff receive authorized operator certification, patient selection algorithms, customized treatment presets, and safety mastery modules.',
    check: 'Accredited Operator Syllabus',
  },
];
