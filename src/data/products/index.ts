import type { Product, ProductCategoryId } from '@/types/product';
import { sixInOneCavitation } from './6-in-1-cavitation';
import { nineInOneHydroFacial } from './9-in-1-hydro-facial';
import { nineInOneOxygen } from './9-in-1-oxygen';
import { nineDHifu } from './9d-hifu';
import { allProductCategories } from './categories';
import { fiveInOne } from './five-in-one';
import { morpheus8 } from './morpheus-8';
import { vertical5in1Velashape } from './vertical-5-in-1-velashape';
import { verticalCo2Oxygen } from './vertical-co2-oxygen';

/**
 * The published catalogue, in display order. Each product is written from its Web PDF and pictured
 * from its Image PDF (see the source note at the top of each data file).
 * To add a product: create a data file in this folder and add it to this list.
 */
export const products: Product[] = [
  vertical5in1Velashape,
  fiveInOne,
  morpheus8,
  nineDHifu,
  sixInOneCavitation,
  nineInOneHydroFacial,
  verticalCo2Oxygen,
  nineInOneOxygen,
];

/** Categories that have at least one published product, so filters and links never lead to an empty list. */
export const productCategories = allProductCategories.filter((category) =>
  products.some((product) => product.category === category.id),
);

const productsBySlug = new Map(products.map((product) => [product.slug, product]));

export function getProductBySlug(slug: string | undefined): Product | undefined {
  return slug ? productsBySlug.get(slug) : undefined;
}

export function getProductsBySlugs(slugs: readonly string[]): Product[] {
  return slugs.map((slug) => productsBySlug.get(slug)).filter((product): product is Product => !!product);
}

export function getProductsByCategory(category: ProductCategoryId): Product[] {
  return products.filter((product) => product.category === category);
}

/** Related products for a product page, falling back to same-category products. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const related = product.relatedSlugs ? getProductsBySlugs(product.relatedSlugs) : [];
  if (related.length >= limit) return related.slice(0, limit);

  const fallback = products.filter(
    (candidate) => candidate.slug !== product.slug && !related.includes(candidate),
  );
  fallback.sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category));
  return [...related, ...fallback].slice(0, limit);
}
