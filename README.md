# MDX360 Website

Marketing website for MDX360, built with React, TypeScript and Vite.

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
npm run lint       # ESLint
```

Requires Node.js 20+.

### Environment

Copy `.env.example` to `.env` and set `VITE_ENQUIRY_ENDPOINT` to the URL that should receive enquiry form
submissions (JSON `POST`). When it is unset, submissions are simulated so the forms can be used locally.

## Project structure

```text
src/
├── assets/images/        # brand, people and product imagery (WebP)
├── components/
│   ├── layout/           # Header, Footer, Logo, Layout (app shell)
│   ├── ui/               # design-system primitives: Button, Pill, Icon, Section, SectionHeading, form fields…
│   ├── common/           # composed blocks reused across pages: FeatureCard, CtaStrip, CtaBanner, EnquiryForm
│   └── products/         # ProductCard, ProductGrid, ProductCategoryFilter, ProductGallery, ProductSpecTable
├── data/
│   ├── site.ts           # company details, navigation, routes, form options
│   └── products/         # one file per product + categories, shared helpers and lookup functions
├── pages/                # Home, About, Products, Product (single-product template), Contact, NotFound
├── services/enquiry.ts   # enquiry form submission
├── styles/               # design tokens (tokens.css) and base styles
├── types/                # shared TypeScript types (Product, NavLink…)
├── router.tsx            # route table
└── main.tsx
```

Each component keeps its styles in a co-located CSS Module. Design tokens (colours, type scale, spacing, radii,
shadows) live in `src/styles/tokens.css` as CSS custom properties and are the only source of raw values.

## Products

Every product is a typed data object in `src/data/products/<slug>.ts` and is rendered by the single
`ProductPage` template at `/products/:slug`.

**To add a product**

1. Add its image to `src/assets/images/products/`.
2. Create `src/data/products/<slug>.ts` exporting a `Product` (see `src/types/product.ts`).
3. Add it to the `products` array in `src/data/products/index.ts` (array order is display order).

**To remove a product**, delete it from the `products` array (and any `relatedSlugs` / featured lists that
reference it — unknown slugs are ignored).

The `detail` object drives the product page. All of its sections — key specs, gallery, mechanisms of action,
treatment indications, specifications, delivery kit — are optional; the template only renders what a product
provides.

## Design reference

The visual source of truth is the Stitch export (`stitch_mdx360_website_redesign`), including `DESIGN.md`
("Clinical Precision Tech" design system). Token values mirror that export.
