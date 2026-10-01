import type { IconName } from '@/types/product';

export const catalogueFacts = [
  { label: 'Clinical Standards', value: 'ISO 13485 / FDA / CE', accent: true },
  { label: 'Deployment Coverage', value: 'GCC & International' },
  { label: 'Manufacturer Guarantee', value: '12-Month Extended', accent: true },
];

export const supportPillars: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'handshake',
    title: 'Free Installation & Training',
    body: 'Certified biomedical field engineers handle on-site setup, clinical calibration, and staff protocol certification at no supplementary cost.',
  },
  {
    icon: 'verified_user',
    title: '12-Month Guarantee',
    body: 'Full manufacturer replacement and mechanical warranty ensuring uninterrupted clinical uptime with zero unexpected maintenance overhead.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Direct Parts & Consumables',
    body: 'Regional distribution center located in Abu Dhabi guarantees 48-hour delivery on specialized transducers, handpieces, and cartridge components.',
  },
];
