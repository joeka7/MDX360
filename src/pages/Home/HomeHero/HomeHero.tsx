import { useLayoutEffect, useRef } from 'react';
import { ArrowFillButton } from '@/components/ui';
import { cx } from '@/utils/cx';
import { heroDevices, heroTrust } from '../content';
import { HeroDevices } from './HeroDevices';
import styles from './HomeHero.module.css';

/** Faces the hero copy is set in; the copy waits for them so the headline never reflows mid-reveal. */
const HERO_FONTS = ['700 1em "Plus Jakarta Sans"', '400 1em Inter', '600 1em Inter', '700 1em Inter'];
/** Longest the copy waits for its fonts, and the stage for its device images, before revealing anyway. */
const FONT_WAIT = 450;
const IMAGE_WAIT = 1200;
/** Once the stage starts, every entrance animation has finished well within this (see the CSS timeline). */
const ENTRANCE_DURATION = 2000;

/** Resolves when `promise` settles or after `ms`, whichever comes first; never rejects. */
function settleWithin(promise: Promise<unknown>, ms: number, timers: number[]) {
  return Promise.race([
    promise.catch(() => undefined),
    new Promise((resolve) => timers.push(window.setTimeout(resolve, ms))),
  ]);
}

/** Home page hero: copy and CTAs beside the device composition, with a trust strip below. */
export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  // One-shot entrance. Armed before first paint (`data-motion="ready"` hides the parts), then the
  // copy plays once its fonts are in (`data-revealed`) and the stage once its images have decoded
  // (`data-devices`), each capped so a slow asset never holds the hero back. Once everything has
  // played the attributes are cleared, leaving no entrance styles behind for the carousel's own
  // transitions. Nothing is armed under reduced motion, and the CSS only acts without it as well.
  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    const timers: number[] = [];
    hero.dataset.motion = 'ready';

    const fonts = settleWithin(
      'fonts' in document ? Promise.all(HERO_FONTS.map((font) => document.fonts.load(font))) : Promise.resolve(),
      FONT_WAIT,
      timers,
    );
    const images = settleWithin(
      Promise.all(Array.from(hero.querySelectorAll('img'), (image) => image.decode().catch(() => undefined))),
      IMAGE_WAIT,
      timers,
    );

    fonts.then(() => {
      if (!cancelled) hero.dataset.revealed = 'true';
    });
    Promise.all([fonts, images]).then(() => {
      if (cancelled) return;
      hero.dataset.devices = 'ready';
      timers.push(
        window.setTimeout(() => {
          delete hero.dataset.motion;
          delete hero.dataset.revealed;
          delete hero.dataset.devices;
        }, ENTRANCE_DURATION),
      );
    });

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
      delete hero.dataset.motion;
      delete hero.dataset.revealed;
      delete hero.dataset.devices;
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              MDX360 · The Secret of Confidence
            </p>
            <h1 id="home-hero-title" className={styles.title}>
              Advanced Aesthetic Technology That Delivers Visible Results
            </h1>
            <p className={styles.lead}>
              From skin tightening to body contouring, our non-invasive devices give your clinic the precision, safety,
              and performance your clients expect.
            </p>
            <div className={styles.actions}>
              <ArrowFillButton btnText="Explore Our Devices" href="#featured-devices" className={styles.primaryAction} />
              <a href="#enquiry-portal" className={styles.secondaryAction}>
                Enquire Now
              </a>
            </div>
          </div>

          <HeroDevices devices={heroDevices} />
        </div>

        <ul className={styles.trust}>
          {heroTrust.map((item) => (
            <li key={item} className={cx(styles.trustItem, styles.trustValue)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
