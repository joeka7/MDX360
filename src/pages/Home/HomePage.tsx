import { CtaStrip, EnquiryForm, FeatureCard, FeatureNote } from '@/components/common';
import { ProductGrid } from '@/components/products';
import { Button, Eyebrow, Icon, Pill, Section, SectionHeading } from '@/components/ui';
import { getProductsBySlugs } from '@/data/products';
import { company, routes } from '@/data/site';
import { capabilities, enquiryBenefits, featuredProductSlugs, heroMetrics, pillars } from './content';
import styles from './HomePage.module.css';

const featuredProducts = getProductsBySlugs(featuredProductSlugs);

export function HomePage() {
  return (
    <>
      <title>MDX360 | Advanced Medical Aesthetics &amp; Clinical Energy Systems</title>

      {/* Hero */}
      <Section
        tone="dark"
        spacing="sm"
        className={styles.hero}
        background={<span className={styles.heroBackdrop} aria-hidden="true" />}
      >
        <div className={styles.heroText}>
          <span className={styles.statusBadge}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusPrimary}>Advanced Medical Technologies</span>
            <span className={styles.statusDivider} aria-hidden="true">
              |
            </span>
            <span>Global ISO 13485</span>
          </span>

          <h1 className={styles.heroTitle}>
            Shaping the Future of <span className={styles.gradientText}>Medical &amp; Aesthetic</span> Technology
          </h1>
          <p className={styles.heroLead}>
            We engineer, develop, and manufacture enterprise-grade clinical energy systems and non-invasive medical
            platforms, delivering micron-level diagnostic precision and transformative treatment outcomes.
          </p>

          <div className={styles.heroActions}>
            <Button href="#featured-devices" trailingIcon="arrow_forward">
              Explore Devices
            </Button>
            <Button href="#enquiry-portal" variant="soft" icon="verified_user" className={styles.softAction}>
              Enquire Now
            </Button>
          </div>

          <dl className={styles.metrics}>
            {heroMetrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <dt className={styles.metricLabel}>{metric.label}</dt>
                <dd className={metric.accent ? styles.metricValueAccent : styles.metricValue}>{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Innovation pillars */}
      <Section tone="low">
        <SectionHeading
          size="xl"
          eyebrow="Clinical Architecture"
          title="Revolutionizing Patient Care with Advanced Medical Devices"
          intro="At MDX360, we are dedicated to pushing the boundaries of healthcare technology. Our innovative devices are designed to enhance diagnostics, streamline treatments, and improve patient outcomes across aesthetic and regenerative medical practices."
        />
        <div className={styles.pillarGrid}>
          {pillars.map((pillar) => (
            <FeatureCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              padding="xl"
              className={styles.pillarCard}
              footer={
                <FeatureNote icon="chevron_right" trailing>
                  {pillar.footer}
                </FeatureNote>
              }
            >
              {pillar.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Device catalogue */}
      <Section tone="lowest" id="featured-devices">
        <SectionHeading
          size="xl"
          eyebrow="Device Catalogue"
          eyebrowDot
          title="Explore Our Innovative Devices for Cutting-Edge Medical Solutions"
          aside={<span className={styles.gradeNote}>Class II Medical Grade</span>}
        />
        <ProductGrid products={featuredProducts} variant="feature" />
        <CtaStrip
          className={styles.portfolioStrip}
          icon="view_in_ar"
          title="Looking for Shock Wave X, Nova Glow, or Slim Wave Pro?"
          description="Review our full engineering portfolio of 12 non-invasive clinical energy devices."
          actions={
            <Button to={routes.products} variant="secondary" size="sm">
              View Complete Product Portfolio →
            </Button>
          }
        />
      </Section>

      {/* Enterprise capabilities */}
      <Section tone="dark" background={<span className={styles.darkGlow} aria-hidden="true" />}>
        <SectionHeading
          size="xl"
          tone="dark"
          eyebrow="Enterprise Partnership"
          title="Engineered for Clinical Excellence & Global Impact"
          intro="MDX360 provides turnkey, white-glove equipment infrastructure for leading dermatology institutes, aesthetic clinics, and regenerative hospital networks worldwide."
          className={styles.capabilitiesHeading}
        />
        <div className={styles.capabilityGrid}>
          {capabilities.map((capability) => (
            <FeatureCard
              key={capability.title}
              tone="dark"
              icon={capability.icon}
              iconSize="md"
              title={capability.title}
              titleStyle="caps"
              bodySize="sm"
              padding="md"
              hover="tint"
              className={styles.capabilityCard}
            >
              {capability.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Enquiry portal */}
      <Section tone="lowest" id="enquiry-portal">
        <div className={styles.enquiryPanel}>
          <div className={styles.enquiryBrief}>
            <Pill tone="high">Direct Clinical Inquiries</Pill>
            <h2 className={styles.enquiryTitle}>Take Your Practice to the Next Level</h2>
            <p className={styles.enquiryLead}>
              Equip your clinic, wellness retreat, or surgical hospital with industry-leading aesthetic and therapeutic
              technologies. Request a private clinical consultation and full technical device specifications.
            </p>
            <ul className={styles.benefits}>
              {enquiryBenefits.map((benefit) => (
                <li key={benefit}>
                  <Icon name="check_circle" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className={styles.fastContacts}>
              <div>
                <Eyebrow>Regional Office</Eyebrow>
                <p>{company.address}</p>
              </div>
              <div>
                <Eyebrow>Corporate Contact</Eyebrow>
                <p>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.enquiryFormCard}>
            <EnquiryForm variant="compact" />
          </div>
        </div>
      </Section>
    </>
  );
}
