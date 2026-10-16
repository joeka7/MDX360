import type { IconName } from '@/types/product';

/** Assurances listed under every product hero's actions. */
export const heroAssurances: string[] = ['12-Month Factory Guarantee', 'Global Direct Dispatch'];

/** Commitments shown in every product page's enquiry module. */
export const consultationCommitments: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'verified',
    title: '12-Month Global Comprehensive Warranty',
    body: 'Immediate modular parts replacement and factory-authorized technical support.',
  },
  {
    icon: 'clinical_notes',
    title: 'Full Clinical Protocol Training Included',
    body: 'Accreditation training provided for your clinic doctors and operational technicians.',
  },
  {
    icon: 'schedule',
    title: 'Guaranteed 24-Hour Clinical Engineering Response',
    body: 'Direct liaison with our Abu Dhabi headquarters and European technical hubs.',
  },
];
