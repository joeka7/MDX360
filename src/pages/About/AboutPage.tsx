import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { company, routes } from '@/data/site';
import { cx } from '@/utils/cx';
import { aboutImages } from './aboutImages';
import { bannerHighlights, engineeringPanels, heroMetrics, operationalPillars, statements } from './content';
import { ImageSlot } from './ImageSlot';
import styles from './AboutPage.module.css';

const lineup = [
  { name: 'Hydro Plasma', image: aboutImages.lineup.hydroPlasma },
  { name: 'Shape Master', image: aboutImages.lineup.shapeMaster, center: true },
  { name: 'Shock Wave X', image: aboutImages.lineup.shockWaveX },
];

function ArrowIcon() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
      <path d="M1 6h15M11 1l5 5-5 5" />
    </svg>
  );
}

const pad = (index: number) => String(index + 1).padStart(2, '0');

/**
 * About: an image-led page paced by large photographs and overlapping text panels. Sections reveal
 * once on scroll; they only start hidden after JS has opted in (`data-motion="ready"`), and never
 * under reduced motion or without IntersectionObserver.
 */
export function AboutPage() {
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
      <title>About MDX360 | Medical Technology with Clinical Precision</title>

      <div ref={rootRef} className={styles.page}>
        {/* Hero */}
        <section className={styles.hero} aria-labelledby="about-title">
          <figure className={styles.heroFigure}>
            <img
              className={styles.heroImg}
              src={aboutImages.hero}
              alt="MDX360 surgical and aesthetic systems in a clinical showroom"
              width={1500}
              height={1500}
              fetchPriority="high"
            />
            <figcaption className={styles.heroCaption}>
              <b>Surgical &amp; Aesthetic Systems</b>
              Non-Invasive High Frequency Tech
            </figcaption>
          </figure>
          <div className={styles.heroPanel}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.crumb}>
                <li>
                  <Link to={routes.home}>Home</Link>
                </li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>
            <p className={styles.label}>About MDX360 Momentum Device</p>
            <h1 id="about-title" className={styles.h1}>
              Advancing Medical Technology with <span className={styles.teal}>Clinical Precision</span> and Unwavering
              Quality.
            </h1>
            <p className={styles.heroText}>
              MDX360 is dedicated to revolutionizing healthcare through innovative medical devices. We specialize in
              designing, developing, and manufacturing advanced medical technologies that enhance patient care and
              clinical outcomes worldwide.
            </p>
          </div>
        </section>

        {/* Key facts */}
        <div className={styles.container}>
          <dl className={styles.facts} data-reveal="">
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <dt className={cx(metric.accent && styles.teal)}>{metric.value}</dt>
                <dd className={styles.caps}>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Architectural band, corporate integrity and engineering principles */}
        <section className={styles.band} aria-labelledby="integrity-title">
          <ImageSlot
            className={styles.bandImage}
            src={aboutImages.architecturalBand}
            alt="MDX360 assembly and calibration environment"
            brief="Wide photograph of the MDX360 assembly and calibration environment: daylight, clean surfaces, equipment in production."
          />
          <div className={styles.container}>
            <div className={styles.overlap}>
              <div className={styles.integrityPanel} data-reveal="">
                <p className={styles.label}>Corporate Integrity</p>
                <h2 id="integrity-title" className={styles.h2}>
                  Engineered from Concept to Production for Global Standards.
                </h2>
                <p className={styles.integrityLead}>
                  Our team of experts combines cutting-edge technology with a deep understanding of clinical needs to
                  create reliable and effective solutions.
                </p>
                <p className={styles.integrityText}>
                  We adhere to rigorous quality control processes and international regulatory standards from concept to
                  production. At MDX360, we aim to improve diagnostic accuracy, streamline treatments, and enhance
                  patient outcomes globally. Join us in pushing the boundaries of medical technology and striving for
                  excellence in healthcare.
                </p>
              </div>
            </div>

            <ol className={styles.principles}>
              {engineeringPanels.map((panel, index) => (
                <li key={panel.title} className={styles.principle} data-reveal="">
                  <span className={styles.numeral} aria-hidden="true">
                    {pad(index)}
                  </span>
                  <h3 className={styles.h3}>{panel.title}</h3>
                  <p>{panel.body}</p>
                  <p className={styles.metric}>
                    <span>{panel.metric.label}</span>
                    <b>{panel.metric.value}</b>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.mission} aria-labelledby="mission-title">
          <ImageSlot
            className={styles.missionImage}
            src={aboutImages.calibrationCloseup}
            alt="Technician calibrating a treatment handpiece"
            brief="Close-up: a technician's hands calibrating a treatment handpiece at a workbench. Shallow depth of field, neutral tones."
          />
          <div className={styles.missionText} data-reveal="">
            <p className={styles.label}>Our Foundation &amp; Future</p>
            <h2 id="mission-title" className={styles.h2}>
              {statements.mission.title}
            </h2>
            <p className={styles.statement}>{statements.mission.lead}</p>
            <p className={styles.support}>{statements.mission.body}</p>
            <p className={styles.closing}>{statements.mission.footer.label}</p>
          </div>
        </section>

        {/* Vision */}
        <section className={styles.vision} aria-labelledby="vision-title">
          <div className={styles.visionText} data-reveal="">
            <p className={styles.label}>{statements.vision.badge.label}</p>
            <h2 id="vision-title" className={styles.h2}>
              {statements.vision.title}
            </h2>
            <p className={styles.statement}>{statements.vision.lead}</p>
            <p className={styles.support}>{statements.vision.body}</p>
            <p className={styles.closing}>{statements.vision.footer.label}</p>
          </div>
          <figure
            className={styles.lineup}
            data-cutout={lineup.every((item) => item.image.isCutout)}
            data-reveal=""
          >
            <div className={styles.lineupStage}>
              {lineup.map((item) => (
                <img
                  key={item.name}
                  className={cx(styles.lineupDevice, item.center && styles.lineupCenter)}
                  src={item.image.src}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <figcaption>{lineup.map((item) => item.name).join(' · ')}</figcaption>
          </figure>
        </section>

        {/* Operational pillars */}
        <section className={styles.pillars} aria-labelledby="pillars-title">
          <div className={styles.container}>
            <div className={styles.pillarsHead}>
              <div>
                <p className={styles.label}>Institutional Foundation</p>
                <h2 id="pillars-title" className={styles.h2}>
                  The Four Operational Pillars
                </h2>
              </div>
              <p className={styles.pillarsNote}>
                Built into every device line—from Shape Master body contouring to 7D HIFO facial restructuring.
              </p>
            </div>
            <ol className={styles.pillarList}>
              {operationalPillars.map((pillar, index) => (
                <li key={pillar.title} className={styles.pillar} data-reveal="">
                  <span className={styles.pillarNum}>{pad(index)}</span>
                  <h3 className={styles.h3}>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                  <span className={styles.pillarTag}>{pillar.check}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing call to action */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <div className={cx(styles.container, styles.ctaGrid)}>
            <div className={styles.ctaText} data-reveal="">
              <p className={styles.label}>Headquartered in {company.address}</p>
              <h2 id="cta-title" className={styles.h2}>
                Revolutionize Your Practice with Our Advanced Devices.
              </h2>
              <p className={styles.ctaLead}>
                Elevate patient care with our cutting-edge, non-invasive medical devices. Address regenerative,
                therapeutic, and diagnostic needs with precision and confidence.
              </p>
              <div className={styles.ctaActions}>
                <Link to={routes.enquire} className={styles.btnPrimary}>
                  Enquire Now
                  <ArrowIcon />
                </Link>
                <Link to={routes.products} className={styles.btnSecondary}>
                  Explore Device Catalog
                </Link>
              </div>
              <ul className={styles.ctaFacts}>
                {bannerHighlights.map((item) => (
                  <li key={item.label}>{item.label}</li>
                ))}
              </ul>
            </div>
            <div
              className={styles.ctaDevice}
              data-cutout={aboutImages.ctaDevice.isCutout}
              aria-hidden="true"
              data-reveal=""
            >
              <img src={aboutImages.ctaDevice.src} alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
