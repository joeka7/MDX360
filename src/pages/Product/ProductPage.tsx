import { useParams } from 'react-router-dom';
import { EnquiryForm, FeatureCard, FeatureMetric, FeatureNote } from '@/components/common';
import { ProductGallery, ProductGrid, ProductSpecTable } from '@/components/products';
import {
  Breadcrumbs,
  Button,
  Container,
  Eyebrow,
  Icon,
  IconTile,
  Pill,
  Section,
  SectionHeading,
  TextLink,
} from '@/components/ui';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { routes } from '@/data/site';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import type { GalleryItem, Product } from '@/types/product';
import { cx } from '@/utils/cx';
import { consultationCommitments } from './content';
import styles from './ProductPage.module.css';

export function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <NotFoundPage />;

  // Keyed so per-product state (gallery selection, form) resets when navigating between products.
  return <ProductTemplate key={product.slug} product={product} />;
}

/** Single-product template, driven entirely by the product's data. */
function ProductTemplate({ product }: { product: Product }) {
  const detail = product.detail;
  const gallery: GalleryItem[] = detail?.gallery ?? [{ ...product.image, label: 'View 01' }];
  const related = getRelatedProducts(product);
  const { mechanisms, indications, specifications } = detail ?? {};

  return (
    <>
      <title>{`${product.name} | MDX360 ${product.categoryLabel}`}</title>
      <meta name="description" content={product.description} />

      {/* Breadcrumb & identity bar */}
      <div className={styles.metaBand}>
        <Container className={styles.metaBar}>
          <Breadcrumbs
            items={[
              { label: 'Home', to: routes.home },
              { label: 'Clinical Systems', to: routes.products },
              { label: product.name },
            ]}
          />
          <div className={styles.identity}>
            <Pill tone="muted" dot="pulse">
              SYS-REF: {detail?.systemRef ?? product.model}
            </Pill>
            {detail?.deviceClass && (
              <span className={styles.deviceClass}>
                <Icon name="verified" size={14} className={styles.deviceClassIcon} />
                {detail.deviceClass}
              </span>
            )}
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Section tone="lowest" spacing="sm">
        <div className={styles.heroGrid}>
          <ProductGallery items={gallery} badges={detail?.heroBadges} note={detail?.consoleNote} />

          <div className={styles.heroText}>
            <Pill tone="muted" dot="static" className={styles.heroBadge}>
              {detail?.eyebrow ?? product.categoryLabel}
            </Pill>
            <div className={styles.heroTitleGroup}>
              <h1 className={styles.heroTitle}>
                {product.name}
                <span className={styles.heroTitleDot}>.</span>
              </h1>
              <p className={styles.heroTagline}>{detail?.tagline ?? product.technology}</p>
            </div>
            <p className={styles.heroLead}>{detail?.overview ?? product.description}</p>

            {detail?.keySpecs && (
              <dl className={styles.keySpecs}>
                {detail.keySpecs.map((spec) => (
                  <div key={spec.label} className={styles.keySpec}>
                    <dt className={styles.keySpecLabel}>{spec.label}</dt>
                    <dd className={cx(styles.keySpecValue, spec.accent && styles.keySpecValueAccent)}>{spec.value}</dd>
                    <dd className={styles.keySpecNote}>{spec.note}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className={styles.heroActions}>
              <Button href="#clinical-enquiry" icon="mark_email_read" size="sm">
                Enquire About This Product
              </Button>
              {specifications && (
                <Button href="#tech-specs" variant="tonal" icon="description" size="sm" className={styles.heroSecondaryAction}>
                  Clinical Protocol Sheet
                </Button>
              )}
            </div>

            <ul className={styles.assurances}>
              <li className={styles.assurance}>
                <Icon name="verified_user" size={16} className={styles.assuranceIcon} />
                12-Month Factory Guarantee
              </li>
              <li className={styles.assurance}>
                <Icon name="flight_takeoff" size={16} className={styles.assuranceIcon} />
                Global Direct Dispatch
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Mechanism of action */}
      {mechanisms && (
        <Section tone="low">
          <SectionHeading eyebrow={mechanisms.eyebrow} title={mechanisms.title} intro={mechanisms.intro} />
          <div className={styles.mechanismGrid}>
            {mechanisms.items.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                iconTone="tint"
                eyebrow={item.phase}
                title={item.title}
                padding="md"
                bodySize="sm"
                className={styles.mechanismCard}
                footer={<FeatureMetric label={item.metric.label} value={item.metric.value} />}
              >
                {item.body}
              </FeatureCard>
            ))}
          </div>
        </Section>
      )}

      {/* Treatment indications */}
      {indications && (
        <Section tone="lowest">
          <SectionHeading
            eyebrow={indications.eyebrow}
            title={indications.title}
            intro={indications.intro}
            aside={indications.badge && <span className={styles.indicationsBadge}>{indications.badge}</span>}
          />
          <div className={cx(styles.indicationGrid, indications.items.length === 3 && styles.indicationGrid3)}>
            {indications.items.map((item) => (
              <FeatureCard
                key={item.title}
                tone="muted"
                icon={item.icon}
                iconSize="md"
                title={item.title}
                padding="md"
                bodySize="sm"
                hover="tint"
                footer={item.duration && <FeatureNote icon="timer">{item.duration}</FeatureNote>}
              >
                {item.body}
              </FeatureCard>
            ))}
          </div>
        </Section>
      )}

      {/* Specifications */}
      {specifications && (
        <Section tone="tinted" id="tech-specs">
          <SectionHeading eyebrow={specifications.eyebrow} title={specifications.title} intro={specifications.intro} />
          <div className={styles.specGrid}>
            <div className={styles.specCard}>
              <ProductSpecTable rows={specifications.rows} />
            </div>
            <div className={styles.specAside}>
              {specifications.deliveryKit && (
                <div className={styles.kitCard}>
                  <h3 className={styles.kitTitle}>Standard Delivery Kit</h3>
                  <ul className={styles.kitList}>
                    {specifications.deliveryKit.map((item) => (
                      <li key={item} className={styles.kitItem}>
                        <Icon name="check_circle" size={18} className={styles.kitItemIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {specifications.training && (
                <div className={styles.trainingCard}>
                  <p className={styles.trainingTitle}>
                    <Icon name="school" size={20} />
                    {specifications.training.title}
                  </p>
                  <p className={styles.trainingText}>{specifications.training.body}</p>
                </div>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Complementary systems */}
      {related.length > 0 && (
        <Section tone="lowest">
          <SectionHeading
            eyebrow="Unified Aesthetics Portfolio"
            title="Complementary Clinical Workstations"
            intro={`Explore synergized medical systems designed to pair seamlessly with ${product.name} protocols.`}
            aside={<TextLink to={routes.products}>View All {products.length} Systems</TextLink>}
          />
          <ProductGrid products={related} variant="related" />
        </Section>
      )}

      {/* Enquiry */}
      <Section tone="dark" id="clinical-enquiry">
        <div className={styles.enquiryGrid}>
          <div className={styles.enquiryBrief}>
            <div className={styles.enquiryHeading}>
              <Pill tone="cyan" dot="static">
                Direct Manufacturer Consultation
              </Pill>
              <h2 className={styles.enquiryTitle}>Bring {product.name} to Your Practice.</h2>
              <p className={styles.enquiryLead}>
                Connect with an MDX360 clinical specialist to receive comprehensive technical dossiers, institutional
                pricing, clinical trial whitepapers, and operational ROI forecasts.
              </p>
            </div>
            <ul className={styles.commitments}>
              {consultationCommitments.map((item) => (
                <li key={item.title} className={styles.commitment}>
                  <IconTile icon={item.icon} size="xs" tone="cyanSoft" round />
                  <div>
                    <h3 className={styles.commitmentTitle}>{item.title}</h3>
                    <p className={styles.commitmentText}>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.enquiryFormCard}>
            <EnquiryForm
              variant="product"
              product={product}
              submitLabel={`Submit ${product.name} Clinical Enquiry`}
              header={
                <div className={styles.enquiryFormHeader}>
                  <Eyebrow>Enquiry Focus</Eyebrow>
                  <h3 className={styles.enquiryFormTitle}>Request Specifications &amp; Live Demo</h3>
                </div>
              }
            />
          </div>
        </div>
      </Section>
    </>
  );
}
