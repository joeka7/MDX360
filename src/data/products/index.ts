import type { Product, ProductCategoryId } from '@/types/product';
import { sevenDHifo } from './7d-hifo';
import { hairRegain3 } from './hair-regain-3';
import { hydroPlasma } from './hydro-plasma';
import { iceGoldRf } from './ice-gold-rf';
import { iceHifo } from './ice-hifo';
import { novaGlow } from './nova-glow';
import { oxyMist } from './oxy-mist';
import { quantumLift } from './quantum-lift';
import { revitaHeal } from './revita-heal';
import { shapeMaster } from './shape-master';
import { shockWaveX } from './shock-wave-x';
import { slimWavePro } from './slim-wave-pro';

export { productCategories } from './categories';

/**
 * The product catalogue, in display order.
 * To add a product: create a data file in this folder and add it to this list.
 */
export const products: Product[] = [
  shapeMaster,
  sevenDHifo,
  iceHifo,
  iceGoldRf,
  quantumLift,
  hydroPlasma,
  novaGlow,
  slimWavePro,
  shockWaveX,
  hairRegain3,
  revitaHeal,
  oxyMist,
];

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
