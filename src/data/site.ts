import type { CountryCode, NavLink, SocialLink } from '@/types/site';

/**
 * Company-wide contact and brand details.
 * NOTE: phone numbers and email addresses are placeholders from the design reference.
 */
export const company = {
  name: 'MDX360',
  legalName: 'MDX360 Momentum Device',
  tagline:
    'Designing, developing, and manufacturing advanced medical technologies and non-invasive aesthetic devices that enhance clinical precision and patient care worldwide.',
  address: 'Abu Dhabi, United Arab Emirates',
  addressDetail: 'Momentum Medical Devices Tech Park, Clinical Innovation Zone',
  phone: '+971 2 600 0000',
  phoneHref: 'tel:+97126000000',
  email: 'info@mdx360.com',
  contactEmail: 'contact@mdx360.com',
  executiveEmail: 'executive@mdx360.com',
  supportHours: 'Sunday – Thursday: 9:00 AM – 6:00 PM GST',
  certifications: ['ISO 13485 Certified', 'FDA & CE Cleared'],
  promises: [
    { icon: 'verified', label: '12-Month Guarantee' },
    { icon: 'handshake', label: 'Free Installation & Custom Service' },
  ],
} as const;

export const routes = {
  home: '/',
  about: '/about',
  products: '/products',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  product: (slug: string) => `/products/${slug}`,
  /** Products page pre-filtered to a category (read by ProductsPage's `category` param). */
  productCategory: (categoryId: string) => `/products?category=${categoryId}`,
} as const;

export const mainNav: NavLink[] = [
  { label: 'Home', to: routes.home },
  { label: 'Products', to: routes.products },
  { label: 'About', to: routes.about },
  { label: 'Contact Us', to: routes.contact },
];

export const footerNav: NavLink[] = [
  { label: 'Home', to: routes.home },
  { label: 'About Us', to: routes.about },
  { label: 'Products Showcase', to: routes.products },
  { label: 'Contact Us', to: routes.contact },
];

/** Not linked from the footer yet: these routes have no pages in the router. */
export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', to: routes.privacy },
  { label: 'Terms of Service', to: routes.terms },
];

/** Products listed in the footer "Devices" column. */
export const footerProductSlugs = ['shape-master', '7d-hifo', 'ice-gold-rf', 'quantum-lift', 'hydro-plasma'];

/**
 * Social profiles shown in the footer. Only entries with a URL are rendered: add the client's
 * profile URLs here to enable them, never placeholder links.
 */
export const socialLinks: SocialLink[] = [
  { platform: 'linkedin', label: 'LinkedIn', href: '' },
  { platform: 'instagram', label: 'Instagram', href: '' },
  { platform: 'facebook', label: 'Facebook', href: '' },
  { platform: 'x', label: 'X', href: '' },
];

export const countryCodes: CountryCode[] = [
  { code: '+971', label: 'UAE' },
  { code: '+966', label: 'KSA' },
  { code: '+20', label: 'Egypt' },
  { code: '+974', label: 'Qatar' },
  { code: '+973', label: 'Bahrain' },
  { code: '+965', label: 'Kuwait' },
  { code: '+968', label: 'Oman' },
  { code: '+962', label: 'Jordan' },
  { code: '+961', label: 'Lebanon' },
  { code: '+90', label: 'Turkey' },
  { code: '+212', label: 'Morocco' },
  { code: '+216', label: 'Tunisia' },
  { code: '+218', label: 'Libya' },
  { code: '+964', label: 'Iraq' },
  { code: '+970', label: 'Palestine' },
  { code: '+963', label: 'Syria' },
  { code: '+967', label: 'Yemen' },
  { code: '+98', label: 'Iran' },
];

export const acquisitionTimelines = [
  'Immediate (Within 30 Days)',
  'Next Quarter (1-3 Months)',
  'Strategic Evaluation (3-6 Months)',
  'Distributor / Bulk Partnership',
];
