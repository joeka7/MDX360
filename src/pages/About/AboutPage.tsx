import modelsDuo from '@/assets/images/people/models-duo.webp';
import modelsGroup from '@/assets/images/people/models-group.webp';
import { CtaBanner, FeatureCard, FeatureCheck, FeatureMeta } from '@/components/common';
import { Breadcrumbs, Button, Eyebrow, Icon, Pill, Section, SectionHeading } from '@/components/ui';
import { company, routes } from '@/data/site';
import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import { bannerHighlights, engineeringPanels, heroMetrics, operationalPillars, statements } from './content';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <>
      <title>About MDX360 | Medical Technology with Clinical Precision</title>

      {/* Hero */}
      <Section
        tone="lowest"
        spacing="none"
        className={styles.hero}
        background={
          <>
            <span className={styles.glowTop} aria-hidden="true" />
            <span className={styles.glowSide} aria-hidden="true" />
          </>
        }
      >
        <div className={styles.metaBar}>
          <Breadcrumbs variant="tech" items={[{ label: 'Home', to: routes.home }, { label: 'About Us' }]} />
          <Pill tone="soft" dot="ping">
            Momentum Device Enterprise Profile
          </Pill>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <Pill tone="secondary" icon="verified_user" className={styles.heroBadge}>
              About MDX360 Momentum Device
            </Pill>
            <h1 className={styles.heroTitle}>
              Advancing Medical Technology with <span className={styles.accent}>Clinical Precision</span> and
              Unwavering Quality.
            </h1>
            <p className={styles.heroLead}>
              MDX360 is dedicated to revolutionizing healthcare through innovative medical devices. We specialize in
              designing, developing, and manufacturing advanced medical technologies that enhance patient care and
              clinical outcomes worldwide.
            </p>
            <dl className={styles.metrics}>
              {heroMetrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <dt className={styles.metricLabel}>{metric.label}</dt>
                  <dd className={cx(styles.metricValue, metric.accent && styles.accent)}>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.heroMedia}>
            <figure className={styles.frame}>
              <img
                src={modelsGroup}
                alt="MDX360 clinical and aesthetic specialists"
                width={1000}
                height={824}
                fetchPriority="high"
                className={styles.frameImage}
              />
              <figcaption className={styles.specBanner}>
                <span className={styles.specIcon} aria-hidden="true">
                  <Icon name="medical_services" size={22} />
                </span>
                <span className={styles.specText}>
                  <span className={styles.specTitle}>Surgical &amp; Aesthetic Systems</span>
                  <span className={styles.specSubtitle}>Non-Invasive High Frequency Tech</span>
                </span>
                <span className={styles.specDot} aria-hidden="true" />
              </figcaption>
            </figure>
            <div className={styles.floatingCard}>
              <img src={modelsDuo} alt="" width={674} height={1000} className={styles.floatingImage} />
              <div>
                <Eyebrow className={styles.floatingLabel}>Certified Care</Eyebrow>
                <p className={styles.floatingTitle}>Patient Safety Benchmark</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Corporate integrity */}
      <Section tone="low" spacing="lg">
        <div className={styles.integrityHeader}>
          <div className={styles.integrityTitle}>
            <Eyebrow tone="muted" dot>
              Corporate Integrity
            </Eyebrow>
            <h2>Engineered from Concept to Production for Global Standards.</h2>
          </div>
          <div className={styles.integrityCopy}>
            <p className={styles.integrityLead}>
              Our team of experts combines cutting-edge technology with a deep understanding of clinical needs to create
              reliable and effective solutions.
            </p>
            <p className={styles.integrityBody}>
              We adhere to rigorous quality control processes and international regulatory standards from concept to
              production. At MDX360, we aim to improve diagnostic accuracy, streamline treatments, and enhance patient
              outcomes globally. Join us in pushing the boundaries of medical technology and striving for excellence in
              healthcare.
            </p>
          </div>
        </div>
        <div className={styles.threeCol}>
          {engineeringPanels.map((panel) => (
            <FeatureCard
              key={panel.title}
              icon={panel.icon}
              title={panel.title}
              footer={<FeatureMeta label={panel.metric.label} value={panel.metric.value} />}
            >
              {panel.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Mission & vision */}
      <Section tone="lowest" spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="Strategic Horizon"
          title="Our Foundation & Future"
          intro="The core guiding principles shaping every device that leaves our research facilities."
          className={styles.centeredHeading}
        />
        <div className={styles.statements}>
          <StatementCard {...statements.mission} tone="light" />
          <StatementCard {...statements.vision} tone="dark" />
        </div>
      </Section>

      {/* Operational pillars */}
      <Section tone="low" spacing="lg">
        <SectionHeading
          eyebrow="Institutional Foundation"
          title="The Four Operational Pillars"
          aside={
            <p className={styles.pillarsNote}>
              Built into every device line—from Shape Master body contouring to 7D HIFO facial restructuring.
            </p>
          }
          className={styles.pillarsHeading}
        />
        <div className={styles.fourCol}>
          {operationalPillars.map((pillar, index) => (
            <FeatureCard
              key={pillar.title}
              icon={pillar.icon}
              iconSize="md"
              index={String(index + 1).padStart(2, '0')}
              title={pillar.title}
              headingLevel="h3"
              padding="md"
              bodySize="sm"
              hover="lift"
              footer={<FeatureCheck>{pillar.check}</FeatureCheck>}
            >
              {pillar.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Partnership banner */}
      <Section tone="lowest" spacing="lg">
        <CtaBanner
          badge={{ icon: 'location_on', label: `Headquartered in ${company.address}` }}
          title="Revolutionize Your Practice with Our Advanced Devices."
          description="Elevate patient care with our cutting-edge, non-invasive medical devices. Address regenerative, therapeutic, and diagnostic needs with precision and confidence."
          highlights={bannerHighlights}
          actions={
            <>
              <Button to={routes.contact} size="lg" trailingIcon="arrow_forward">
                Enquire Now
              </Button>
              <Button to={routes.products} variant="ghostDark" icon="view_in_ar">
                Explore Device Catalog
              </Button>
            </>
          }
        />
      </Section>
    </>
  );
}

interface StatementCardProps {
  badge: { icon: IconName; label: string };
  title: string;
  lead: string;
  body: string;
  footer: { icon: IconName; label: string };
  tone: 'light' | 'dark';
}

/** Mission / vision statement card. */
function StatementCard({ badge, title, lead, body, footer, tone }: StatementCardProps) {
  return (
    <article className={cx(styles.statement, tone === 'dark' ? styles.statementDark : styles.statementLight)}>
      <span className={styles.statementOrb} aria-hidden="true" />
      <div className={styles.statementBody}>
        <Pill tone={tone === 'dark' ? 'cyan' : 'high'} icon={badge.icon} className={styles.statementBadge}>
          {badge.label}
        </Pill>
        <h3 className={styles.statementTitle}>{title}</h3>
        <p className={styles.statementLead}>{lead}</p>
        <p className={styles.statementText}>{body}</p>
      </div>
      <div className={styles.statementFooter}>
        <span className={styles.statementIcon} aria-hidden="true">
          <Icon name={footer.icon} size={16} />
        </span>
        <span>{footer.label}</span>
      </div>
    </article>
  );
}
