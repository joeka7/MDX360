import type { ProductCategory } from '@/types/product';

/** Every category a product can belong to; `productCategories` in `./index.ts` lists the ones in use. */
export const allProductCategories: ProductCategory[] = [
  { id: 'body', label: 'Body Contouring & Slimming' },
  { id: 'face', label: 'Facial Rejuvenation & HIFU' },
  { id: 'skin', label: 'Skin Revitalization' },
  { id: 'therapy', label: 'Therapeutic & Wellness' },
];
