import { Link, useSearchParams } from 'react-router-dom';
import { EnquiryForm } from '@/components/common';
import { Icon } from '@/components/ui';
import { getProductBySlug } from '@/data/products';
import { company, enquiryBenefits, enquiryTypes, routes } from '@/data/site';
import styles from './EnquirePage.module.css';

/**
 * Enquire: the commercial enquiry page. A compact hero, then the full enquiry form beside a navy
 * panel of what an enquiry returns. Optional presets from the URL, each checked and otherwise
 * ignored: `?product=<slug>` (a catalogue product) and `?type=<id>` (an enquiry type).
 */
export function EnquirePage() {
  const [searchParams] = useSearchParams();
  const initialDevice = getProductBySlug(searchParams.get('product') ?? undefined)?.slug;
  const initialEnquiryType = enquiryTypes.find((type) => type.id === searchParams.get('type'))?.id;

  return (
    <>
      <title>Enquire | MDX360 Equipment, Pricing &amp; Demonstrations</title>
      <meta
        name="description"
        content="Enquire about MDX360 medical and aesthetic devices: pricing and quotations, product information, demonstrations, and distribution or bulk purchasing."
      />

      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="enquire-title">
          <div className={styles.container}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.crumb}>
                <li>
                  <Link to={routes.home}>Home</Link>
                </li>
                <li aria-current="page">Enquire</li>
              </ol>
            </nav>
            <p className={styles.label}>Commercial Enquiries</p>
            <div className={styles.heroGrid}>
              <h1 id="enquire-title" className={styles.h1}>
                Enquire About MDX360 <span className={styles.teal}>Equipment</span>
              </h1>
              <p className={styles.heroText}>
                Ask about a specific device, request pricing or a quotation, book a product demonstration, or discuss
                distribution and bulk purchasing. Tell us what you need and our team will reply with the
                specifications and commercial details.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.band}>
          <div className={styles.bandInner}>
            <div className={styles.split}>
              <div className={styles.formPanel}>
                {/* Keyed so following a new preset link while on the page starts the form afresh. */}
                <EnquiryForm
                  key={`${initialDevice ?? ''}|${initialEnquiryType ?? ''}`}
                  variant="enquire"
                  initialDevice={initialDevice}
                  initialEnquiryType={initialEnquiryType}
                />
              </div>

              <aside className={styles.aside} aria-labelledby="enquire-aside-title">
                <p className={styles.eyebrow}>Direct From MDX360</p>
                <h2 id="enquire-aside-title" className={styles.asideTitle}>
                  What You Can Request
                </h2>
                <ol className={styles.benefits}>
                  {enquiryBenefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ol>
                <ul className={styles.promises}>
                  {company.promises.map((promise) => (
                    <li key={promise.label}>
                      <Icon name={promise.icon} size={20} className={styles.promiseIcon} />
                      {promise.label}
                    </li>
                  ))}
                </ul>
                <dl className={styles.contact}>
                  <div>
                    <dt>Prefer to Talk?</dt>
                    <dd>
                      <a href={company.phoneHref}>{company.phone}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Corporate Contact</dt>
                    <dd>
                      <a href={`mailto:${company.email}`}>{company.email}</a>
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
