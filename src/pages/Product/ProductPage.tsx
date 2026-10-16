import { useEffect, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EnquiryForm } from '@/components/common';
import { Breadcrumbs, Icon } from '@/components/ui';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { routes } from '@/data/site';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import type { GalleryItem, Product, ProductImage } from '@/types/product';
import { cx } from '@/utils/cx';
import { consultationCommitments, heroAssurances } from './content';
import styles from './ProductPage.module.css';

/** Anchor ids. `tech-specs` and `clinical-enquiry` predate this layout and may be linked from elsewhere. */
const sectionIds = {
  mechanism: 'mechanism',
  indications: 'indications',
  specifications: 'tech-specs',
  related: 'related',
  enquiry: 'clinical-enquiry',
} as const;

export function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <NotFoundPage />;

  // Keyed so per-product state (gallery selection, form) resets when navigating between products.
  return <ProductTemplate key={product.slug} product={product} />;
}

/** Single-product template ("Immersive Device Showcase"), driven entirely by the product's data. */
function ProductTemplate({ product }: { product: Product }) {
  const detail = product.detail;
  const gallery: GalleryItem[] = detail?.gallery ?? [{ ...product.image, label: 'View 01' }];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = gallery[activeIndex] ?? gallery[0];
  const hasRail = gallery.length > 1;

  const related = getRelatedProducts(product);
  const { mechanisms, indications, specifications, keySpecs } = detail ?? {};
  const modulesImage = findImage(gallery, 'modules');
  const clinicalImage =
    findImage(gallery, 'clinical') ?? (gallery[1] && gallery[1] !== modulesImage ? gallery[1] : undefined);

  const badges = [detail?.heroBadges?.primary, detail?.heroBadges?.secondary, detail?.consoleNote].filter(isText);
  const reference = [`SYS-REF: ${detail?.systemRef ?? product.model}`, detail?.deviceClass, detail?.heroBadges?.primary]
    .filter(isText)
    .join(' · ');

  const hasKit = Boolean(modulesImage || specifications?.deliveryKit?.length || specifications?.training);

  const jumpLinks: Array<{ id: string; label: string }> = [];
  if (mechanisms?.items.length) jumpLinks.push({ id: sectionIds.mechanism, label: 'Mechanism' });
  if (indications?.items.length) jumpLinks.push({ id: sectionIds.indications, label: 'Indications' });
  if (specifications?.rows.length) jumpLinks.push({ id: sectionIds.specifications, label: 'Specifications' });
  if (related.length) jumpLinks.push({ id: sectionIds.related, label: 'Related Systems' });

  const activeSection = useScrollSpy([...jumpLinks.map((link) => link.id), sectionIds.enquiry]);

  return (
    <div className={styles.page}>
      <title>{`${product.name} | MDX360 ${product.categoryLabel}`}</title>
      <meta name="description" content={product.description} />

      {/* Hero stage */}
      <section className={cx(styles.hero, !keySpecs?.length && styles.heroPlain)} aria-labelledby="product-title">
        <div className={styles.container}>
          <div className={styles.crumb}>
            <Breadcrumbs
              variant="tech"
              items={[
                { label: 'Home', to: routes.home },
                { label: 'Clinical Systems', to: routes.products },
                { label: product.name },
              ]}
            />
          </div>

          <div className={cx(styles.heroGrid, !hasRail && styles.heroSingle)}>
            {hasRail && (
              <div className={styles.rail} role="group" aria-label="Product images">
                {gallery.map((item, index) => (
                  <button
                    key={`${item.src}-${item.label}`}
                    type="button"
                    className={styles.thumb}
                    aria-pressed={index === activeIndex}
                    aria-label={`${item.label}: ${item.alt}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={item.src} alt="" loading="lazy" className={styles.thumbImage} />
                    <span className={styles.thumbLabel}>{item.label}</span>
                  </button>
                ))}
              </div>
            )}

            <div className={styles.stage} data-cutout={isCutout(activeImage)}>
              <img key={activeImage.src} src={activeImage.src} alt={activeImage.alt} className={styles.stageImage} />
              {badges.length > 0 && (
                <ul className={styles.badges}>
                  {badges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className={styles.info}>
              <p className={cx(styles.eyebrow, styles.eyebrowDark)}>{detail?.eyebrow ?? product.categoryLabel}</p>
              <h1 id="product-title" className={styles.title}>
                {product.name}
                <span className={styles.titleDot}>.</span>
              </h1>
              <p className={styles.subtitle}>{detail?.tagline ?? product.technology}</p>
              <p className={styles.reference}>{reference}</p>
              <p className={styles.description}>{detail?.overview ?? product.description}</p>

              <div className={styles.actions}>
                <a href={`#${sectionIds.enquiry}`} className={styles.buttonPrimary}>
                  <Icon name="mark_email_read" size={18} />
                  Enquire About This Product
                </a>
                {specifications && (
                  <a href={`#${sectionIds.specifications}`} className={styles.buttonGhost}>
                    <Icon name="description" size={18} />
                    Clinical Protocol Sheet
                  </a>
                )}
              </div>

              <ul className={styles.assurances}>
                {heroAssurances.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights, overlapping the stage */}
      {keySpecs && keySpecs.length > 0 && (
        <div className={styles.container}>
          <dl className={styles.highlights}>
            {keySpecs.map((spec) => (
              <div key={spec.label} className={styles.highlight}>
                <dt className={styles.highlightLabel}>{spec.label}</dt>
                <dd className={styles.highlightValue}>{spec.value}</dd>
                <dd className={styles.highlightNote}>{spec.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Sticky section nav */}
      <nav className={styles.jump} aria-label="On this page">
        <div className={cx(styles.container, styles.jumpInner)}>
          {jumpLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={styles.jumpLink}
              aria-current={activeSection === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`#${sectionIds.enquiry}`}
            className={cx(styles.jumpLink, styles.jumpEnquire)}
            aria-current={activeSection === sectionIds.enquiry ? 'true' : undefined}
          >
            Enquire <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>

      {/* Mechanism of action: numbered stations */}
      {mechanisms && mechanisms.items.length > 0 && (
        <section id={sectionIds.mechanism} className={styles.section} aria-labelledby="mechanism-title">
          <div className={styles.container}>
            <SectionHeader
              id="mechanism-title"
              eyebrow={mechanisms.eyebrow}
              title={mechanisms.title}
              intro={mechanisms.intro}
            />
            <ol className={styles.stations}>
              {mechanisms.items.map((item, index) => (
                <li key={item.title} className={styles.station}>
                  <span className={styles.stationNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className={styles.stationPhase}>{item.phase}</p>
                  <h3 className={styles.stationTitle}>{item.title}</h3>
                  <p className={styles.stationText}>{item.body}</p>
                  <dl className={styles.stationMetric}>
                    <dt>{item.metric.label}</dt>
                    <dd>{item.metric.value}</dd>
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Treatment indications: clinical image + list */}
      {indications && indications.items.length > 0 && (
        <section id={sectionIds.indications} className={styles.section} aria-labelledby="indications-title">
          <div className={styles.container}>
            <SectionHeader
              id="indications-title"
              eyebrow={indications.eyebrow}
              title={indications.title}
              intro={indications.intro}
              aside={
                !clinicalImage && indications.badge && <p className={styles.indicationBadge}>{indications.badge}</p>
              }
            />
            <div className={cx(styles.indicationGrid, !clinicalImage && styles.gridFull)}>
              {clinicalImage && (
                <figure className={styles.indicationFigure}>
                  <img src={clinicalImage.src} alt={clinicalImage.alt} loading="lazy" />
                  {indications.badge && (
                    <figcaption className={styles.indicationBadge}>{indications.badge}</figcaption>
                  )}
                </figure>
              )}
              <ol className={styles.indicationList}>
                {indications.items.map((item) => (
                  <li key={item.title} className={styles.indication}>
                    <h3 className={styles.indicationTitle}>{item.title}</h3>
                    {item.duration && (
                      <p className={styles.indicationProtocol}>
                        <Icon name="timer" size={16} />
                        {item.duration}
                      </p>
                    )}
                    <p className={styles.indicationText}>{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Specifications + delivery kit */}
      {specifications && specifications.rows.length > 0 && (
        <section id={sectionIds.specifications} className={styles.section} aria-labelledby="specifications-title">
          <div className={styles.container}>
            <SectionHeader
              id="specifications-title"
              eyebrow={specifications.eyebrow}
              title={specifications.title}
              intro={specifications.intro}
            />
            <div className={cx(styles.specGrid, !hasKit && styles.gridFull)}>
              <dl className={styles.specTable}>
                {specifications.rows.map((row) => (
                  <div key={row.label} className={styles.specRow}>
                    <dt className={styles.specLabel}>{row.label}</dt>
                    <dd className={styles.specValue}>{row.value}</dd>
                  </div>
                ))}
              </dl>

              {hasKit && (
                <aside className={styles.kit}>
                  {modulesImage && (
                    <img src={modulesImage.src} alt={modulesImage.alt} loading="lazy" className={styles.kitImage} />
                  )}
                  {specifications.deliveryKit && specifications.deliveryKit.length > 0 && (
                    <>
                      <h3 className={styles.kitTitle}>Standard Delivery Kit</h3>
                      <ul className={styles.kitList}>
                        {specifications.deliveryKit.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {specifications.training && (
                    <div className={styles.certification}>
                      <p className={styles.certificationTitle}>{specifications.training.title}</p>
                      <p className={styles.certificationText}>{specifications.training.body}</p>
                    </div>
                  )}
                </aside>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Complementary systems on a floor line-up */}
      {related.length > 0 && (
        <section id={sectionIds.related} className={styles.section} aria-labelledby="related-title">
          <div className={styles.container}>
            <SectionHeader
              id="related-title"
              eyebrow="Unified Aesthetics Portfolio"
              title="Complementary Clinical Workstations"
              intro={`Explore synergized medical systems designed to pair seamlessly with ${product.name} protocols.`}
              aside={
                <Link to={routes.products} className={styles.viewAll}>
                  View All {products.length} Systems
                  <Icon name="arrow_forward" size={18} />
                </Link>
              }
            />
            <ul className={styles.lineup} data-floor={related.some((item) => isCutout(item.image))}>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={routes.product(item.slug)}
                    className={styles.lineupCard}
                    data-cutout={isCutout(item.image)}
                  >
                    <span className={styles.lineupMedia}>
                      <img src={item.image.src} alt="" loading="lazy" className={styles.lineupImage} />
                    </span>
                    <span className={styles.lineupBody}>
                      <span className={styles.lineupTag}>{item.technology}</span>
                      <h3 className={styles.lineupName}>{item.name}</h3>
                      <span className={styles.lineupText}>{item.summary}</span>
                      <span className={styles.lineupAction}>
                        Explore {item.name}
                        <Icon name="arrow_forward" size={16} />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Enquiry */}
      <section id={sectionIds.enquiry} className={styles.enquiry} aria-labelledby="enquiry-title">
        <div className={cx(styles.container, styles.enquiryGrid)}>
          <div className={styles.enquiryIntro}>
            <p className={styles.eyebrow}>Direct Manufacturer Consultation</p>
            <h2 id="enquiry-title" className={styles.enquiryTitle}>
              Bring {product.name} to Your Practice.
            </h2>
            <p className={styles.enquiryLead}>
              Connect with an MDX360 clinical specialist to receive comprehensive technical dossiers, institutional
              pricing, clinical trial whitepapers, and operational ROI forecasts.
            </p>
            <ul className={styles.benefits}>
              {consultationCommitments.map((item) => (
                <li key={item.title} className={styles.benefit}>
                  <span className={styles.benefitIcon}>
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <h3 className={styles.benefitTitle}>{item.title}</h3>
                    <p className={styles.benefitText}>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.formCard}>
            <EnquiryForm
              variant="product"
              product={product}
              className={styles.form}
              header={
                <div className={styles.formHeader}>
                  <p className={styles.formCaption}>Enquiry Focus</p>
                  <h3 className={styles.formTitle}>Request Specifications &amp; Live Demo</h3>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** Right-aligned on wide screens, e.g. a "View all" link. */
  aside?: ReactNode;
}

function SectionHeader({ id, eyebrow, title, intro, aside }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={id} className={styles.sectionTitle}>
          {title}
        </h2>
        {intro && <p className={styles.sectionIntro}>{intro}</p>}
      </div>
      {aside}
    </div>
  );
}

/**
 * Tracks which of the given sections sits in the band 30–40% down the viewport.
 * Nothing is active above the first section; the last one stays active below the last.
 */
function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState<string>();
  const key = ids.join(' ');

  useEffect(() => {
    const targets = key
      .split(' ')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (!targets.length || typeof IntersectionObserver === 'undefined') return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        const current = targets.find((target) => visible.has(target));
        if (current) setActive(current.id);
        else if (targets[0].getBoundingClientRect().top > window.innerHeight * 0.3) setActive(undefined);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

/** First gallery image whose label names `kind`, e.g. "Clinical" or "Modules". */
function findImage(gallery: GalleryItem[], kind: string) {
  return gallery.find((item) => item.label.toLowerCase().includes(kind));
}

/**
 * Transparent device cutouts are staged on the light pool and floor; anything else is framed as a
 * photo. Images are photos unless the file is named `*-cutout.png` / `*-cutout.webp` (the build may
 * append a content hash: `*-cutout-<hash>.webp`).
 */
function isCutout(image: ProductImage) {
  return /-cutout(-[\w-]{8})?\.(png|webp)(\?.*)?$/i.test(image.src);
}

function isText(value: string | undefined): value is string {
  return Boolean(value);
}
