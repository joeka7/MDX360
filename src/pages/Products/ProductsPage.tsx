import { useSearchParams } from 'react-router-dom';
import { CtaStrip, FeatureCard } from '@/components/common';
import { ProductCategoryFilter, ProductGrid, type CategoryFilterValue } from '@/components/products';
import { Breadcrumbs, Button, Pill, Section, SectionHeading } from '@/components/ui';
import { productCategories, products } from '@/data/products';
import { routes } from '@/data/site';
import { cx } from '@/utils/cx';
import { catalogueFacts, supportPillars } from './content';
import styles from './ProductsPage.module.css';

const CATEGORY_PARAM = 'category';

function parseCategory(value: string | null): CategoryFilterValue {
  return productCategories.some((category) => category.id === value) ? (value as CategoryFilterValue) : 'all';
}

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = parseCategory(searchParams.get(CATEGORY_PARAM));
  const visibleProducts = category === 'all' ? products : products.filter((product) => product.category === category);

  const handleCategoryChange = (value: CategoryFilterValue) => {
    setSearchParams(value === 'all' ? {} : { [CATEGORY_PARAM]: value }, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <title>Products | MDX360 Medical &amp; Aesthetic Systems</title>

      {/* Hero */}
      <Section tone="lowest" spacing="sm">
        <div className={styles.hero}>
          <div className={styles.metaBar}>
            <Breadcrumbs items={[{ label: 'Home', to: routes.home }, { label: 'Products Portfolio' }]} />
            <Pill tone="muted" dot="ping" className={styles.platformCountBadge}>
              {products.length} Clinical Energy Platforms Active
            </Pill>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className={styles.heroBadge}>Enterprise Medical Systems</span>
              <h1 className={styles.heroTitle}>Medical &amp; Aesthetic Systems</h1>
              <p className={styles.heroLead}>
                Explore our complete portfolio of advanced non-invasive medical technologies, body sculpting platforms,
                facial rejuvenation systems, and therapeutic bio-stimulation devices engineered for clinical efficacy
                and exceptional patient outcomes.
              </p>
            </div>
            <dl className={styles.facts}>
              {catalogueFacts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd className={cx(styles.factValue, fact.accent && styles.factValueAccent)}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ProductCategoryFilter
            categories={productCategories}
            value={category}
            onChange={handleCategoryChange}
            totalCount={products.length}
          />
        </div>
      </Section>

      {/* Catalogue */}
      <Section tone="surface">
        <ProductGrid products={visibleProducts} variant="catalog" headingLevel="h2" />
      </Section>

      {/* Support & partnership */}
      <Section tone="dark" background={<span className={styles.supportGlow} aria-hidden="true" />}>
        <SectionHeading
          tone="dark"
          eyebrow="Enterprise Partnership Program"
          title="Engineering Precision Meets White-Glove Clinical Support"
          intro="Every MDX360 installation includes end-to-end operational onboarding, ISO-compliant safety validation, and priority direct factory servicing across Middle East and worldwide clinics."
        />
        <div className={styles.supportGrid}>
          {supportPillars.map((pillar) => (
            <FeatureCard
              key={pillar.title}
              tone="dark"
              icon={pillar.icon}
              title={pillar.title}
              bodySize="sm"
              padding="md"
              hover="tint"
              className={styles.supportCard}
            >
              {pillar.body}
            </FeatureCard>
          ))}
        </div>
        <CtaStrip
          tone="dark"
          title="Need Technical Data Sheets or Clinical Dossiers?"
          description="Our biomedical specialists are available for clinic layout evaluations and volume quotations."
          actions={
            <>
              <Button to={routes.contact} size="sm" trailingIcon="arrow_forward">
                Enquire for Clinic Pricing &amp; Supply
              </Button>
              <Button to={routes.contact} variant="ghostDark" size="sm" icon="download">
                Download Full Catalogue
              </Button>
            </>
          }
        />
      </Section>
    </>
  );
}
