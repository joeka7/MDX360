import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { Button, Checkbox, Field, Icon, Input, Select, Textarea } from '@/components/ui';
import { getProductsBySlugs, products } from '@/data/products';
import { acquisitionTimelines, countryCodes } from '@/data/site';
import { submitEnquiry } from '@/services/enquiry';
import type { Product } from '@/types/product';
import { cx } from '@/utils/cx';
import styles from './EnquiryForm.module.css';

/**
 * - `general`: full contact-page form (country code, device picker, quick select, consent).
 * - `compact`: shorter form with a device picker.
 * - `product`: enquiry scoped to a single product (location + acquisition timeline).
 */
export type EnquiryFormVariant = 'general' | 'compact' | 'product';

const PORTFOLIO_VALUE = 'portfolio';

interface EnquiryFormProps {
  variant?: EnquiryFormVariant;
  /** Required for the `product` variant. */
  product?: Product;
  /** Controlled device selection (slug). Leave unset for the form to manage it. */
  device?: string;
  onDeviceChange?: (slug: string) => void;
  /** Product slugs offered as one-click chips (general variant). */
  quickSelectSlugs?: string[];
  /** Content rendered above the fields, inside the form. */
  header?: ReactNode;
  submitLabel?: string;
  className?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialValues = {
  name: '',
  clinic: '',
  email: '',
  countryCode: countryCodes[0].code,
  phone: '',
  location: '',
  timeline: acquisitionTimelines[0],
  message: '',
  consent: false,
};

export function EnquiryForm({
  variant = 'general',
  product,
  device: controlledDevice,
  onDeviceChange,
  quickSelectSlugs = [],
  header,
  submitLabel = 'Submit Clinical Enquiry',
  className,
}: EnquiryFormProps) {
  const id = useId();
  const [values, setValues] = useState(initialValues);
  const [internalDevice, setInternalDevice] = useState(variant === 'compact' ? products[0].slug : '');
  const [status, setStatus] = useState<Status>('idle');

  const device = product?.slug ?? controlledDevice ?? internalDevice;
  const setDevice = (slug: string) => {
    setInternalDevice(slug);
    onDeviceChange?.(slug);
  };

  const setField =
    <K extends keyof typeof initialValues>(key: K) =>
    (value: (typeof initialValues)[K]) =>
      setValues((current) => ({ ...current, [key]: value }));

  const isGeneral = variant === 'general';
  const isProduct = variant === 'product';
  const fieldId = (name: string) => `${id}-${name}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    try {
      await submitEnquiry({
        name: values.name,
        clinic: values.clinic,
        email: values.email,
        phone: values.phone,
        countryCode: isGeneral ? values.countryCode : undefined,
        location: isProduct ? values.location : undefined,
        timeline: isProduct ? values.timeline : undefined,
        device: device || undefined,
        message: values.message || undefined,
        consent: isGeneral ? values.consent : undefined,
        source: product ? `product:${product.slug}` : variant,
      });
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success' && variant === 'compact') {
    return (
      <div className={cx(styles.successPanel, className)} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={36} />
        </span>
        <h3 className={styles.successTitle}>Enquiry Registered</h3>
        <p className={styles.successText}>
          Thank you. An MDX360 clinical director has received your inquiry and will furnish device dossiers and
          commercial specs within 24 hours.
        </p>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form className={cx(styles.form, className)} onSubmit={handleSubmit}>
      {header}

      <div className={styles.row}>
        <Field label={isGeneral ? 'Full Name' : 'Practitioner / Full Name'} htmlFor={fieldId('name')} required>
          <Input
            id={fieldId('name')}
            icon={isGeneral ? 'badge' : undefined}
            placeholder="Dr. Sarah Al-Mansoor"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => setField('name')(e.target.value)}
          />
        </Field>
        <Field label={isGeneral ? 'Clinic / Hospital Name' : 'Clinic or Facility Name'} htmlFor={fieldId('clinic')} required>
          <Input
            id={fieldId('clinic')}
            icon={isGeneral ? 'local_hospital' : undefined}
            placeholder="Apex Derma Center"
            autoComplete="organization"
            required
            value={values.clinic}
            onChange={(e) => setField('clinic')(e.target.value)}
          />
        </Field>
      </div>

      <div className={styles.row}>
        <Field
          label={isProduct ? 'Direct Phone / WhatsApp' : 'Contact Phone Number'}
          htmlFor={fieldId('phone')}
          required
        >
          {isGeneral ? (
            <div className={styles.phoneGroup}>
              <Select
                aria-label="Country code"
                className={styles.countryCode}
                value={values.countryCode}
                onChange={(e) => setField('countryCode')(e.target.value)}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    ({country.code}) {country.label}
                  </option>
                ))}
              </Select>
              <Input
                id={fieldId('phone')}
                type="tel"
                placeholder="50 000 0000"
                autoComplete="tel-national"
                required
                value={values.phone}
                onChange={(e) => setField('phone')(e.target.value)}
              />
            </div>
          ) : (
            <Input
              id={fieldId('phone')}
              type="tel"
              placeholder="+971 50 000 0000"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={(e) => setField('phone')(e.target.value)}
            />
          )}
        </Field>
        <Field label="Professional Email" htmlFor={fieldId('email')} required>
          <Input
            id={fieldId('email')}
            type="email"
            icon={isGeneral ? 'alternate_email' : undefined}
            placeholder="sarah@apexderma.ae"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => setField('email')(e.target.value)}
          />
        </Field>
      </div>

      {isProduct && (
        <div className={styles.row}>
          <Field label="Clinic Location (City, Country)" htmlFor={fieldId('location')} required>
            <Input
              id={fieldId('location')}
              placeholder="Dubai, UAE"
              autoComplete="address-level2"
              required
              value={values.location}
              onChange={(e) => setField('location')(e.target.value)}
            />
          </Field>
          <Field label="Anticipated Acquisition Timeline" htmlFor={fieldId('timeline')}>
            <Select
              id={fieldId('timeline')}
              value={values.timeline}
              onChange={(e) => setField('timeline')(e.target.value)}
            >
              {acquisitionTimelines.map((timeline) => (
                <option key={timeline}>{timeline}</option>
              ))}
            </Select>
          </Field>
        </div>
      )}

      {!isProduct && (
        <Field label="Primary Device of Interest" htmlFor={fieldId('device')} required={isGeneral}>
          <Select
            id={fieldId('device')}
            icon={isGeneral ? 'medical_services' : undefined}
            required={isGeneral}
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          >
            {isGeneral && (
              <option value="" disabled>
                Select an MDX360 Clinical Platform
              </option>
            )}
            {products.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.name} ({option.enquiryLabel})
              </option>
            ))}
            <option value={PORTFOLIO_VALUE}>Portfolio Consultation (Multiple Clinical Platforms)</option>
          </Select>
        </Field>
      )}

      {isGeneral && quickSelectSlugs.length > 0 && (
        <div className={styles.quickSelect}>
          <span className={styles.quickSelectLabel}>Popular Inquiries Quick Select</span>
          <div className={styles.chips}>
            {getProductsBySlugs(quickSelectSlugs).map((option) => (
              <button
                key={option.slug}
                type="button"
                className={cx(styles.chip, device === option.slug && styles.chipActive)}
                aria-pressed={device === option.slug}
                onClick={() => setDevice(option.slug)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <Field
        label={isGeneral ? 'Clinical Requirements & Trial Specifications' : 'Clinical Requirements & Special Inquiries'}
        htmlFor={fieldId('message')}
      >
        <Textarea
          id={fieldId('message')}
          rows={isGeneral ? 4 : 3}
          placeholder={
            isProduct
              ? 'Please include questions regarding applicator dimensions, regional certifications, or scheduled clinical demonstrations...'
              : 'Detail your clinical caseload, facility location, and desired demonstration timeline...'
          }
          value={values.message}
          onChange={(e) => setField('message')(e.target.value)}
        />
      </Field>

      {isGeneral && (
        <Checkbox
          id={fieldId('consent')}
          required
          checked={values.consent}
          onChange={(e) => setField('consent')(e.target.checked)}
          label="I agree to the processing of contact details for clinical support, device specifications transmission, and authorized medical representative consultation."
        />
      )}

      <div className={cx(styles.submitRow, isGeneral && styles.submitRowInline)}>
        <Button
          type="submit"
          fullWidth={!isGeneral}
          disabled={submitting}
          icon={submitting ? 'progress_activity' : isProduct ? 'send' : undefined}
          trailingIcon={isGeneral && !submitting ? 'send' : undefined}
          className={cx(submitting && styles.submitPending, variant === 'compact' && styles.submitCompact)}
        >
          {submitting ? 'Sending Enquiry…' : submitLabel}
        </Button>
        {isGeneral && (
          <span className={styles.secureNote}>
            <Icon name="lock" size={16} className={styles.secureNoteIcon} />
            Encrypted 256-Bit Transmission
          </span>
        )}
      </div>

      {status === 'success' && (
        <div className={styles.feedback} role="status">
          <Icon name="task_alt" size={24} />
          <div>
            <p className={styles.feedbackTitle}>Enquiry Logged Successfully</p>
            <p className={styles.feedbackText}>
              {product
                ? `Thank you. Your enquiry for ${product.name} has been dispatched to our engineering desk. A specialist will follow up within 24 hours.`
                : 'Your enquiry has been assigned to our UAE biomedical engineering office. A clinical liaison will be in touch shortly.'}
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className={cx(styles.feedback, styles.feedbackError)} role="alert">
          <Icon name="error" size={24} />
          <p className={styles.feedbackText}>
            We couldn&apos;t send your enquiry. Please try again or contact us directly by phone or email.
          </p>
        </div>
      )}

      {isProduct && (
        <p className={styles.privacy}>
          We respect institutional privacy. Information submitted is treated under strict medical device
          non-disclosure protocols.
        </p>
      )}
    </form>
  );
}
