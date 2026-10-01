import { useRef, useState, type ReactNode } from 'react';
import { CtaStrip, EnquiryForm, FeatureCard, FeatureCheck } from '@/components/common';
import { ProductGrid } from '@/components/products';
import {
  Breadcrumbs,
  Button,
  Eyebrow,
  Icon,
  IconTile,
  Pill,
  Section,
  SectionHeading,
  TextLink,
} from '@/components/ui';
import { getProductsBySlugs, products } from '@/data/products';
import { company, routes } from '@/data/site';
import type { IconName, Product } from '@/types/product';
import { clinicalCommitments, contactMetrics, quickSelectSlugs, showcaseSlugs, trustBlocks } from './content';
import styles from './ContactPage.module.css';

const showcaseProducts = getProductsBySlugs(showcaseSlugs);
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`;

export function ContactPage() {
  const [device, setDevice] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  const handleEnquire = (product: Product) => {
    setDevice(product.slug);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <title>Contact MDX360 | Clinical Enquiries &amp; Global Headquarters</title>

      {/* Header */}
      <Section tone="lowest" spacing="none" className={styles.header}>
        <Breadcrumbs
          separator="slash"
          homeIcon
          items={[{ label: 'Home', to: routes.home }, { label: 'Contact Us' }]}
          className={styles.breadcrumbs}
        />
        <div className={styles.intro}>
          <Pill tone="muted" dot="ping">
            Global Headquarters &amp; Clinical Inquiries
          </Pill>
          <h1 className={styles.title}>
            Get in Touch with Our <span className={styles.accent}>Medical Technology</span> Team
          </h1>
          <p className={styles.lead}>
            Whether you are evaluating clinical energy systems for hospital deployment, requesting certified clinical
            trials data, or booking an on-site surgical demonstration, our biomedical specialists provide direct
            consultative support.
          </p>
        </div>
        <dl className={styles.metrics}>
          {contactMetrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <IconTile icon={metric.icon} size="md" tone="white" />
              <div className={styles.metricText}>
                <dt className={styles.metricLabel}>{metric.label}</dt>
                <dd className={styles.metricValue}>{metric.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </Section>

      {/* Contact details & enquiry form */}
      <Section tone="surface">
        <div className={styles.mainGrid}>
          <div className={styles.infoColumn}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardHeading}>
                  <Icon name="corporate_fare" size={22} />
                  <h2>Regional Headquarters</h2>
                </span>
                <Pill tone="cyan" className={styles.regionPill}>
                  MENA Command
                </Pill>
              </div>
              <ul className={styles.details}>
                <ContactDetail icon="location_on" label="Operating Base" note={company.addressDetail}>
                  {company.address}
                </ContactDetail>
                <ContactDetail icon="call" label="Direct Clinical Line" note="Toll-free across UAE healthcare facilities">
                  <a href={company.phoneHref} className={styles.detailLink}>
                    {company.phone}
                  </a>
                </ContactDetail>
                <ContactDetail
                  icon="mail"
                  label="Official Correspondence"
                  note="PGP encrypted clinical data channels available"
                >
                  <a href={`mailto:${company.contactEmail}`} className={styles.detailLink}>
                    {company.contactEmail}
                  </a>
                </ContactDetail>
                <ContactDetail icon="schedule" label="Clinical Support Hours" note="24/7 on-call biomedical emergency dispatch">
                  {company.supportHours}
                </ContactDetail>
              </ul>
            </div>

            <div className={styles.commitments}>
              <span className={styles.commitmentsGlow} aria-hidden="true" />
              <Eyebrow tone="dark">Standard Enterprise Inclusions</Eyebrow>
              <h2 className={styles.commitmentsTitle}>Our Clinical Commitments</h2>
              <ul className={styles.commitmentList}>
                {clinicalCommitments.map((item) => (
                  <li key={item.title}>
                    <IconTile icon={item.icon} size="xs" tone="glassDark" round />
                    <div>
                      <p className={styles.commitmentTitle}>{item.title}</p>
                      <p className={styles.commitmentText}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.mapCard}>
              <div className={styles.mapHeader}>
                <span className={styles.mapTitle}>
                  <Icon name="explore" size={18} />
                  Regional Engineering Campus
                </span>
                <span className={styles.mapLocation}>Abu Dhabi, UAE</span>
              </div>
              <div className={styles.map}>
                <iframe
                  title={`Map of ${company.address}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapFrame}
                />
                <Pill tone="glass" dot="pulse" className={styles.mapBadge}>
                  Live HQ Terminal Active
                </Pill>
              </div>
            </div>
          </div>

          <div ref={formRef} className={styles.formCard}>
            <EnquiryForm
              variant="general"
              device={device}
              onDeviceChange={setDevice}
              quickSelectSlugs={quickSelectSlugs}
              header={
                <div className={styles.formHeader}>
                  <div>
                    <Eyebrow>Direct Practitioner Portal</Eyebrow>
                    <h2 className={styles.formTitle}>Send a Direct Clinical Enquiry</h2>
                  </div>
                  <Pill tone="solid" icon="bolt">
                    Priority Routing
                  </Pill>
                </div>
              }
            />
          </div>
        </div>
      </Section>

      {/* Device showcase */}
      <Section tone="low" spacing="sm">
        <SectionHeading
          eyebrow="Engineered For Exceptional Patient Outcomes"
          title="Active Clinical Systems in High Demand"
          aside={<TextLink to={routes.products}>Explore All {products.length} Platforms</TextLink>}
          className={styles.showcaseHeading}
        />
        <ProductGrid products={showcaseProducts} variant="showcase" columns={4} onEnquire={handleEnquire} />
      </Section>

      {/* Guarantee & trust */}
      <Section tone="dark" background={<span className={styles.trustGlow} aria-hidden="true" />}>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="Institutional Reliability"
          title="Enterprise Guarantee & Lifetime Technical Backing"
          intro="Every MDX360 clinical system is deployed with full regulatory conformity, validated protocol handbooks, and direct biomedical engineer oversight."
        />
        <div className={styles.trustGrid}>
          {trustBlocks.map((block) => (
            <FeatureCard
              key={block.title}
              tone="dark"
              icon={block.icon}
              title={block.title}
              padding="md"
              hover="tint"
              className={styles.trustCard}
              footer={
                <FeatureCheck tone="dark" divider={false}>
                  {block.check}
                </FeatureCheck>
              }
            >
              {block.body}
            </FeatureCard>
          ))}
        </div>
        <CtaStrip
          tone="dark"
          icon="help_outline"
          iconTone="cyan"
          iconRound
          className={styles.tenderStrip}
          title="Have custom clinical tender or distributorship inquiries?"
          description="Our executive biomedical board manages OEM configurations and regional distributorships."
          actions={
            <Button href={`mailto:${company.executiveEmail}`} variant="light" size="sm" trailingIcon="mail">
              Contact Executive Board
            </Button>
          }
        />
      </Section>
    </>
  );
}

interface ContactDetailProps {
  icon: IconName;
  label: string;
  note: string;
  children: ReactNode;
}

function ContactDetail({ icon, label, note, children }: ContactDetailProps) {
  return (
    <li className={styles.detail}>
      <IconTile icon={icon} size="sm" tone="low" />
      <div>
        <p className={styles.detailLabel}>{label}</p>
        <p className={styles.detailValue}>{children}</p>
        <p className={styles.detailNote}>{note}</p>
      </div>
    </li>
  );
}
