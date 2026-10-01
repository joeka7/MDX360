/** Material Symbols ligature name, e.g. `"ac_unit"`. */
export type IconName = string;

export type ProductCategoryId = 'body' | 'face' | 'skin' | 'therapy';

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  /** `contain` for device renders, `cover` for lifestyle photography. */
  fit?: 'contain' | 'cover';
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  intro?: string;
}

/** Headline parameter shown as a micro-card in the product hero. */
export interface KeySpec {
  label: string;
  value: string;
  /** Supporting line below the value. */
  note: string;
  accent?: boolean;
}

export interface GalleryItem extends ProductImage {
  label: string;
}

export interface Mechanism {
  icon: IconName;
  phase: string;
  title: string;
  body: string;
  metric: { label: string; value: string };
}

export interface Indication {
  icon: IconName;
  title: string;
  body: string;
  duration?: string;
}

export interface SpecRow {
  label: string;
  value: string;
  /** Render with tabular/monospace figures. */
  numeric?: boolean;
  accent?: boolean;
}

/**
 * Rich content for the single-product template.
 * Every section is optional; the template only renders what a product provides.
 */
export interface ProductDetail {
  systemRef: string;
  deviceClass?: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  heroBadges?: { primary: string; secondary?: string };
  consoleNote?: string;
  keySpecs?: KeySpec[];
  gallery?: GalleryItem[];
  mechanisms?: SectionIntro & { items: Mechanism[] };
  indications?: SectionIntro & { badge?: string; items: Indication[] };
  specifications?: SectionIntro & {
    rows: SpecRow[];
    deliveryKit?: string[];
    training?: { title: string; body: string };
  };
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategoryId;
  /** Short badge label shown on cards, e.g. "Body Contouring". */
  categoryLabel: string;
  icon: IconName;
  /** Technology family, used on related-product cards. */
  technology: string;
  /** Primary technology line on catalogue cards. */
  technologyDetail: string;
  model: string;
  modelTag: string;
  /** Short highlight shown in card footers. */
  highlight: string;
  /** One-line summary for compact cards. */
  summary: string;
  /** Card / listing description. */
  description: string;
  image: ProductImage;
  /** Descriptor shown next to the product name in enquiry form options. */
  enquiryLabel: string;
  relatedSlugs?: string[];
  detail?: ProductDetail;
}
