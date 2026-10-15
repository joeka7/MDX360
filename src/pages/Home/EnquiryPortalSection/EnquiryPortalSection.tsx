import { useLayoutEffect, useRef } from 'react';
import { EnquiryForm } from '@/components/common';
import { company, enquiryBenefits } from '@/data/site';
import { REVEAL_OBSERVER_OPTIONS } from '@/utils/reveal';
import styles from './EnquiryPortalSection.module.css';

/**
 * Home enquiry portal ("Editorial Split"): a navy editorial panel joined to a white form panel.
 * The panels slide in once on first view; they only start hidden after JS has opted in
 * (`data-motion="ready"`), and never under reduced motion.
 */
export function EnquiryPortalSection() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return;

    root.dataset.motion = 'ready';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      REVEAL_OBSERVER_OPTIONS,
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      delete root.dataset.motion;
    };
  }, []);

  return (
    <section id="enquiry-portal" ref={rootRef} className={styles.section} aria-labelledby="enquiry-portal-title">
      <div className={styles.inner}>
        <div className={styles.split}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Enquire</p>
            <h2 id="enquiry-portal-title" className={styles.title}>
              Take Your Practice to the Next Level
            </h2>
            <p className={styles.lead}>
              Equip your clinic, wellness retreat, or surgical hospital with industry-leading aesthetic and therapeutic
              technologies. Request a private clinical consultation and full technical device specifications.
            </p>
            <ol className={styles.benefits}>
              {enquiryBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ol>
            <dl className={styles.contact}>
              <div>
                <dt>Regional Office</dt>
                <dd>{company.address}</dd>
              </div>
              <div>
                <dt>Corporate Contact</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className={styles.formPanel}>
            <EnquiryForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
