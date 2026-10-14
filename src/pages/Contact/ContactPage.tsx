import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsBySlugs, products } from '@/data/products';
import { company, routes } from '@/data/site';
import type { Product } from '@/types/product';
import { cx } from '@/utils/cx';
import { ContactEnquiryForm } from './ContactEnquiryForm';
import { clinicalCommitments, contactMetrics, quickSelectSlugs, showcaseSlugs, trustBlocks } from './content';
import { ArrowIcon, ExternalIcon, MailIcon } from './icons';
import styles from './ContactPage.module.css';

/**
 * Transparent-background cut-outs, named by product slug (e.g. `shape-master.webp`) — the same
 * folder the home Device Catalogue reads. A device without one falls back to its product photo.
 */
const cutouts = import.meta.glob<string>('/src/assets/images/catalogue/*.webp', { eager: true, import: 'default' });

const showcaseDevices = getProductsBySlugs(showcaseSlugs).map((product) => {
  const cutout = cutouts[`/src/assets/images/catalogue/${product.slug}.webp`];
  return { product, image: cutout ?? product.image.src, isCutout: !!cutout };
});

const mapQuery = encodeURIComponent(company.address);
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapLink = `https://www.google.com/maps?q=${mapQuery}`;

/** The consultation commitment followed by the three enterprise guarantees, as one numbered list. */
const inclusions = [
  { title: clinicalCommitments[0].title, body: clinicalCommitments[0].body, tag: undefined },
  ...trustBlocks.map((block) => ({ title: block.title, body: block.body, tag: block.check })),
];

const pad = (index: number) => String(index + 1).padStart(2, '0');

/**
 * Contact: "Premium Editorial Contact". A compact hero, a headquarters column beside an open
 * enquiry form, then inclusions, a device index and a tender line. Sections reveal once on scroll;
 * they only start hidden after JS has opted in (`data-motion="ready"`), and never under reduced
 * motion or without IntersectionObserver.
 */
export function ContactPage() {
  const [device, setDevice] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleEnquire = (product: Product) => {
    setDevice(product.slug);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;
    root.dataset.motion = 'ready';
    return () => {
      delete root.dataset.motion;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || root.dataset.motion !== 'ready') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    root.querySelectorAll('[data-reveal]').forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <title>Contact MDX360 | Clinical Enquiries &amp; Global Headquarters</title>

      <div ref={rootRef} className={styles.page}>
        <div className={styles.container}>
          {/* 1. Hero */}
          <section className={styles.hero} aria-labelledby="contact-title">
            <nav aria-label="Breadcrumb">
              <ol className={styles.crumb}>
                <li>
                  <Link to={routes.home}>Home</Link>
                </li>
                <li aria-current="page">Contact Us</li>
              </ol>
            </nav>
            <p className={styles.label}>Global Headquarters &amp; Clinical Inquiries</p>
            <div className={styles.heroGrid} data-reveal="">
              <h1 id="contact-title" className={styles.h1}>
                Get in Touch with Our <span className={styles.teal}>Medical Technology</span> Team
              </h1>
              <p className={styles.heroText}>
                Whether you are evaluating clinical energy systems for hospital deployment, requesting certified
                clinical trials data, or booking an on-site surgical demonstration, our biomedical specialists provide
                direct consultative support.
              </p>
            </div>
            <dl className={styles.facts} data-reveal="">
              {contactMetrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 2. Headquarters & enquiry form */}
          <div className={styles.main}>
            <aside className={styles.hq} aria-labelledby="hq-title" data-reveal="">
              <p className={styles.label}>MENA Command</p>
              <h2 id="hq-title" className={styles.h2Small}>
                Regional Headquarters
              </h2>
              <dl className={styles.channels}>
                <div>
                  <dt>Operating Base</dt>
                  <dd>
                    <span className={styles.channelValue}>{company.address}</span>
                    <span className={styles.note}>{company.addressDetail}</span>
                  </dd>
                </div>
                <div>
                  <dt>Direct Clinical Line</dt>
                  <dd>
                    <a href={company.phoneHref} className={styles.channelLink}>
                      {company.phone}
                    </a>
                    <span className={styles.note}>Toll-free across UAE healthcare facilities</span>
                  </dd>
                </div>
                <div>
                  <dt>Official Correspondence</dt>
                  <dd>
                    <a href={`mailto:${company.contactEmail}`} className={styles.channelLink}>
                      {company.contactEmail}
                    </a>
                    <span className={styles.note}>PGP encrypted clinical data channels available</span>
                  </dd>
                </div>
                <div>
                  <dt>Clinical Support Hours</dt>
                  <dd>
                    <span className={styles.channelValue}>{company.supportHours}</span>
                    <span className={styles.note}>24/7 on-call biomedical emergency dispatch</span>
                  </dd>
                </div>
              </dl>
              <figure className={styles.map}>
                <iframe
                  title={`Map of ${company.address}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapFrame}
                />
                <figcaption className={styles.mapCaption}>
                  <span className={styles.caps}>Regional Engineering Campus · Abu Dhabi, UAE</span>
                  <a href={mapLink} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                    Open in Maps
                    <span className="visually-hidden"> (opens in a new tab)</span>
                    <ExternalIcon />
                  </a>
                </figcaption>
              </figure>
            </aside>

            <div ref={formRef} className={styles.formSlot}>
              <ContactEnquiryForm device={device} onDeviceChange={setDevice} quickSelectSlugs={quickSelectSlugs} />
            </div>
          </div>

          {/* 3. Enterprise inclusions */}
          <section className={styles.inclusions} aria-labelledby="inc-title">
            <div className={styles.incHead} data-reveal="">
              <div>
                <p className={styles.label}>Institutional Reliability</p>
                <h2 id="inc-title" className={styles.h2}>
                  Enterprise Guarantee &amp; Lifetime Technical Backing
                </h2>
              </div>
              <p className={styles.incIntro}>
                Every MDX360 clinical system is deployed with full regulatory conformity, validated protocol handbooks,
                and direct biomedical engineer oversight.
              </p>
            </div>
            <ol className={styles.incList}>
              {inclusions.map((item, index) => (
                <li key={item.title} data-reveal="">
                  <span className={styles.incNum}>{pad(index)}</span>
                  <h3 className={styles.h3}>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.tag && <span className={styles.incTag}>{item.tag}</span>}
                </li>
              ))}
            </ol>
          </section>

          {/* 4. Featured devices */}
          <section className={styles.devices} aria-labelledby="dev-title">
            <div className={styles.devHead}>
              <div>
                <p className={styles.label}>Engineered For Exceptional Patient Outcomes</p>
                <h2 id="dev-title" className={styles.h2Mid}>
                  Active Clinical Systems in High Demand
                </h2>
              </div>
              <Link to={routes.products} className={styles.textLink}>
                Explore All {products.length} Platforms
                <ArrowIcon />
              </Link>
            </div>
            <ul className={styles.devList}>
              {showcaseDevices.map(({ product, image, isCutout }) => (
                <li key={product.slug} data-reveal="">
                  <img
                    src={image}
                    alt={product.image.alt}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className={cx(styles.devImg, !isCutout && styles.devImgPhoto)}
                  />
                  <span className={cx(styles.caps, styles.devCat)}>{product.categoryLabel}</span>
                  <h3 className={styles.h3}>
                    <Link to={routes.product(product.slug)} className={styles.devName}>
                      {product.name}
                    </Link>
                  </h3>
                  <p>{product.summary}</p>
                  <div className={styles.devRow}>
                    <span>{product.highlight}</span>
                    <button
                      type="button"
                      className={styles.devEnquire}
                      aria-label={`Enquire about ${product.name}`}
                      onClick={() => handleEnquire(product)}
                    >
                      Enquire
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Tender line */}
          <section className={styles.tender} aria-labelledby="tender-title" data-reveal="">
            <div>
              <h2 id="tender-title" className={styles.h2Tender}>
                Have custom clinical tender or distributorship inquiries?
              </h2>
              <p>Our executive biomedical board manages OEM configurations and regional distributorships.</p>
            </div>
            <a href={`mailto:${company.executiveEmail}`} className={styles.outlineBtn}>
              Contact Executive Board
              <MailIcon />
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
