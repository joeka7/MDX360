import { Icon } from '@/components/ui';
import { cx } from '@/utils/cx';
import { heroDevices, heroTrust } from '../content';
import { HeroDevices } from './HeroDevices';
import styles from './HomeHero.module.css';

/** Home page hero: copy and CTAs beside the device composition, with a trust strip below. */
export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
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
              <a href="#featured-devices" className={styles.primaryAction}>
                Explore Our Devices
                <Icon name="arrow_forward" size={18} className={styles.primaryActionIcon} />
              </a>
              <a href="https://mdx360.com/enquire-now/" className={styles.secondaryAction}>
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
