import { Fragment, useId, useState, type FormEvent, type ReactNode } from 'react';
import { getProductsBySlugs, products } from '@/data/products';
import { countryCodes } from '@/data/site';
import { submitEnquiry } from '@/services/enquiry';
import { cx } from '@/utils/cx';
import { ArrowIcon, ChevronIcon, LockIcon } from './icons';
import styles from './ContactEnquiryForm.module.css';

/*
 * Page-local skin of the shared EnquiryForm's `general` variant. Fields, ids, attributes, options,
 * state, handlers and the submitted payload are carried over unchanged; only the markup and styles
 * differ. The shared component is untouched (Home and Product still use it).
 */

const PORTFOLIO_VALUE = 'portfolio';

interface ContactEnquiryFormProps {
  /** Controlled device selection (slug). */
  device: string;
  onDeviceChange: (slug: string) => void;
  /** Product slugs offered as one-click options. */
  quickSelectSlugs: string[];
  submitLabel?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialValues = {
  name: '',
  clinic: '',
  email: '',
  countryCode: countryCodes[0].code,
  phone: '',
  message: '',
  consent: false,
};

export function ContactEnquiryForm({
  device,
  onDeviceChange,
  quickSelectSlugs,
  submitLabel = 'Submit Clinical Enquiry',
}: ContactEnquiryFormProps) {
  const id = useId();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>('idle');
  /** Bumped after a successful send to remount the fields (see below). */
  const [fieldsKey, setFieldsKey] = useState(0);

  const setDevice = (slug: string) => onDeviceChange(slug);

  const setField =
    <K extends keyof typeof initialValues>(key: K) =>
    (value: (typeof initialValues)[K]) =>
      setValues((current) => ({ ...current, [key]: value }));

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
        countryCode: values.countryCode,
        location: undefined,
        timeline: undefined,
        device: device || undefined,
        message: values.message || undefined,
        consent: values.consent,
        source: 'general',
      });
      setStatus('success');
      setValues(initialValues);
      setFieldsKey((key) => key + 1);
    } catch {
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-labelledby="form-title" data-reveal="">
      <p className={styles.label}>Direct Practitioner Portal</p>
      <h2 id="form-title" className={styles.title}>
        Send a Direct Clinical Enquiry
      </h2>

      {/*
       * Remounted after a successful send: the browser keeps :user-invalid on fields the user has
       * touched, so clearing their values alone would leave every required field underlined in red.
       */}
      <Fragment key={fieldsKey}>
        <fieldset className={styles.group}>
          <legend className={styles.legend}>
            <span className={styles.legendNum}>01</span> Your details
          </legend>
          <div className={styles.grid}>
            <Field label="Full Name" htmlFor={fieldId('name')} required>
              <input
                id={fieldId('name')}
                className={styles.input}
                placeholder="Dr. Sarah Al-Mansoor"
                autoComplete="name"
                required
                value={values.name}
                onChange={(e) => setField('name')(e.target.value)}
              />
            </Field>
            <Field label="Clinic / Hospital Name" htmlFor={fieldId('clinic')} required>
              <input
                id={fieldId('clinic')}
                className={styles.input}
                placeholder="Apex Derma Center"
                autoComplete="organization"
                required
                value={values.clinic}
                onChange={(e) => setField('clinic')(e.target.value)}
              />
            </Field>
            <Field label="Contact Phone Number" htmlFor={fieldId('phone')} required>
              <div className={styles.phone}>
                <div className={styles.selectWrap}>
                  <select
                    aria-label="Country code"
                    className={styles.select}
                    value={values.countryCode}
                    onChange={(e) => setField('countryCode')(e.target.value)}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        ({country.code}) {country.label}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
                <input
                  id={fieldId('phone')}
                  className={styles.input}
                  type="tel"
                  placeholder="50 000 0000"
                  autoComplete="tel-national"
                  required
                  value={values.phone}
                  onChange={(e) => setField('phone')(e.target.value)}
                />
              </div>
            </Field>
            <Field label="Professional Email" htmlFor={fieldId('email')} required>
              <input
                id={fieldId('email')}
                className={styles.input}
                type="email"
                placeholder="sarah@apexderma.ae"
                autoComplete="email"
                required
                value={values.email}
                onChange={(e) => setField('email')(e.target.value)}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>
            <span className={styles.legendNum}>02</span> Your enquiry
          </legend>
          <div className={styles.grid}>
            <Field label="Primary Device of Interest" htmlFor={fieldId('device')} required full>
              <div className={styles.selectWrap}>
                <select
                  id={fieldId('device')}
                  className={styles.select}
                  required
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                >
                  <option value="" disabled>
                    Select an MDX360 Clinical Platform
                  </option>
                  {products.map((option) => (
                    <option key={option.slug} value={option.slug}>
                      {option.name} ({option.enquiryLabel})
                    </option>
                  ))}
                  <option value={PORTFOLIO_VALUE}>Portfolio Consultation (Multiple Clinical Platforms)</option>
                </select>
                <ChevronIcon />
              </div>
              {quickSelectSlugs.length > 0 && (
                <div className={styles.quick}>
                  <span className={styles.caps}>Popular Inquiries Quick Select</span>
                  {getProductsBySlugs(quickSelectSlugs).map((option) => (
                    <button
                      key={option.slug}
                      type="button"
                      className={styles.quickBtn}
                      aria-pressed={device === option.slug}
                      onClick={() => setDevice(option.slug)}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </Field>
            <Field label="Clinical Requirements & Trial Specifications" htmlFor={fieldId('message')} full>
              <textarea
                id={fieldId('message')}
                className={styles.textarea}
                rows={4}
                placeholder="Detail your clinical caseload, facility location, and desired demonstration timeline..."
                value={values.message}
                onChange={(e) => setField('message')(e.target.value)}
              />
            </Field>
          </div>
        </fieldset>

        <div className={styles.consent}>
          <input
            type="checkbox"
            id={fieldId('consent')}
            required
            checked={values.consent}
            onChange={(e) => setField('consent')(e.target.checked)}
          />
          <label htmlFor={fieldId('consent')}>
            I agree to the processing of contact details for clinical support, device specifications transmission, and
            authorized medical representative consultation.
          </label>
        </div>
      </Fragment>

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting && <span className={styles.spinner} aria-hidden="true" />}
          {submitting ? 'Sending Enquiry…' : submitLabel}
          {!submitting && <ArrowIcon />}
        </button>
        <small className={styles.secure}>
          <LockIcon />
          Encrypted 256-Bit Transmission
        </small>
      </div>

      {status === 'success' && (
        <div className={styles.success} role="status">
          <p className={styles.successTitle}>Enquiry Logged Successfully</p>
          <p className={styles.feedbackText}>
            Your enquiry has been assigned to our UAE biomedical engineering office. A clinical liaison will be in
            touch shortly.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className={styles.error} role="alert">
          <p className={styles.feedbackText}>
            We couldn&apos;t send your enquiry. Please try again or contact us directly by phone or email.
          </p>
        </div>
      )}
    </form>
  );
}

interface FieldProps {
  label: ReactNode;
  htmlFor: string;
  required?: boolean;
  /** Span both grid columns. */
  full?: boolean;
  children: ReactNode;
}

/** Label + underlined control. */
function Field({ label, htmlFor, required, full, children }: FieldProps) {
  return (
    <div className={cx(styles.field, full && styles.full)}>
      <label className={styles.fieldLabel} htmlFor={htmlFor}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
