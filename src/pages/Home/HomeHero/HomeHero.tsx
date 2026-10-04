import { Link } from 'react-router-dom';
import { Icon } from '@/components/ui';
import { company, routes } from '@/data/site';
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
              Medical and aesthetic systems
            </p>
            <h1 id="home-hero-title" className={styles.title}>
              Clinical-grade aesthetic systems, engineered to perform.
            </h1>
            <p className={styles.lead}>
              {company.name} designs and manufactures energy-based platforms for clinics that measure results in
              precision, reliability and patient trust.
            </p>
            <div className={styles.actions}>
              <Link to={routes.products} className={styles.primaryAction}>
                Explore the portfolio
                <Icon name="arrow_forward" size={18} className={styles.primaryActionIcon} />
              </Link>
              <Link to={routes.contact} className={styles.secondaryAction}>
                Book a clinical demo
              </Link>
            </div>
          </div>

          <HeroDevices devices={heroDevices} />
        </div>

        <dl className={styles.trust}>
          {heroTrust.map((item) => (
            <div key={item.label} className={styles.trustItem}>
              <dt className={styles.trustLabel}>{item.label}</dt>
              <dd className={styles.trustValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
