import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { company, routes } from '@/data/site';
import { ContactForm } from './ContactForm';
import { contactMetrics } from './content';
import { ArrowIcon, ExternalIcon } from './icons';
import styles from './ContactPage.module.css';

const mapQuery = encodeURIComponent(company.address);
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapLink = `https://www.google.com/maps?q=${mapQuery}`;

/**
 * Contact: "Premium Editorial Contact", for general communication. A compact hero, a headquarters
 * column beside the contact form, then a line pointing commercial enquiries to the Enquire page.
 * Sections reveal once on scroll; they only start hidden after JS has opted in
 * (`data-motion="ready"`), and never under reduced motion or without IntersectionObserver.
 */
export function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);

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
      <title>Contact MDX360 | Global Headquarters</title>

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
            <p className={styles.label}>Global Headquarters</p>
            <div className={styles.heroGrid} data-reveal="">
              <h1 id="contact-title" className={styles.h1}>
                Get in Touch with Our <span className={styles.teal}>Medical Technology</span> Team
              </h1>
              <p className={styles.heroText}>
                Questions about MDX360, support for a device already in your practice, or a partnership or media
                request: send us a message and the right member of our team will reply.
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

          {/* 2. Headquarters & contact form */}
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
                  <dt>Direct Line</dt>
                  <dd>
                    <a href={company.phoneHref} className={styles.channelLink}>
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Official Correspondence</dt>
                  <dd>
                    <a href={`mailto:${company.contactEmail}`} className={styles.channelLink}>
                      {company.contactEmail}
                    </a>
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

            <div className={styles.formSlot}>
              <ContactForm />
            </div>
          </div>

          {/* 3. Commercial enquiries */}
          <section className={styles.commercial} aria-labelledby="commercial-title" data-reveal="">
            <div>
              <h2 id="commercial-title" className={styles.h2Commercial}>
                Enquiring about devices, pricing or distribution?
              </h2>
              <p>
                Request a quotation, a product demonstration or distribution terms through our enquiry form. For
                tenders and OEM configurations you can also write to our executive board at{' '}
                <a href={`mailto:${company.executiveEmail}`} className={styles.inlineLink}>
                  {company.executiveEmail}
                </a>
                .
              </p>
            </div>
            <Link to={routes.enquire} className={styles.outlineBtn}>
              Enquire Now
              <ArrowIcon />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
