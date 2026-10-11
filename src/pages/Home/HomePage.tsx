import { FeatureCard } from '@/components/common';
import { Section, SectionHeading } from '@/components/ui';
import { ClinicalArchitectureSection } from './ClinicalArchitectureSection/ClinicalArchitectureSection';
import { capabilities } from './content';
import { DeviceCatalogueSection } from './DeviceCatalogueSection/DeviceCatalogueSection';
import { EnquiryPortalSection } from './EnquiryPortalSection/EnquiryPortalSection';
import { HomeHero } from './HomeHero/HomeHero';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <title>MDX360 | Advanced Medical Aesthetics &amp; Clinical Energy Systems</title>

      <HomeHero />

      {/* Innovation pillars */}
      <ClinicalArchitectureSection />

      {/* Device catalogue */}
      <DeviceCatalogueSection />

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
      <EnquiryPortalSection />
    </>
  );
}
