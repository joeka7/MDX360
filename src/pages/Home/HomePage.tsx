import { CtaStrip, EnquiryForm, FeatureCard, FeatureNote } from '@/components/common';
import { ProductGrid } from '@/components/products';
import { Button, Eyebrow, Icon, Pill, Section, SectionHeading } from '@/components/ui';
import { getProductsBySlugs } from '@/data/products';
import { company, routes } from '@/data/site';
import { useInView } from '@/hooks/useInView';
import { cx } from '@/utils/cx';
import { capabilities, enquiryBenefits, featuredProductSlugs, pillars } from './content';
import { HomeHero } from './HomeHero/HomeHero';
import styles from './HomePage.module.css';

const featuredProducts = getProductsBySlugs(featuredProductSlugs);

export function HomePage() {
  const [pillarGridRef, pillarGridInView] = useInView<HTMLDivElement>(0.2);

  return (
    <>
      <title>MDX360 | Advanced Medical Aesthetics &amp; Clinical Energy Systems</title>

      <HomeHero />

      {/* Innovation pillars */}
      <Section tone="low">
        <SectionHeading
          size="xl"
          eyebrow="Clinical Architecture"
          title="Revolutionizing Patient Care with Advanced Medical Devices"
          intro="At MDX360, we are dedicated to pushing the boundaries of healthcare technology. Our innovative devices are designed to enhance diagnostics, streamline treatments, and improve patient outcomes across aesthetic and regenerative medical practices."
        />
        <div
          ref={pillarGridRef}
          className={cx(styles.pillarGrid, styles.reveal, pillarGridInView && styles.revealInView)}
        >
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
      <Section tone="dark" background={<span className={styles.capabilitiesGlow} aria-hidden="true" />}>
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
                <li key={benefit} className={styles.benefit}>
                  <Icon name="check_circle" size={20} className={styles.benefitIcon} />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className={styles.enquiryContacts}>
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
