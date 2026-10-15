import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowFillButton, Icon, PhoneInput } from '@/components/ui';
import { products } from '@/data/products';
import { enquiryTypes, routes } from '@/data/site';
import { describedBy, useFieldErrors } from '@/hooks/useFieldErrors';
import { submitEnquiry } from '@/services/enquiry';
import type { Product } from '@/types/product';
import type { EnquiryTypeId } from '@/types/site';
import { cx } from '@/utils/cx';
import { PHONE_HINT } from '@/utils/phone';
import styles from './EnquiryForm.module.css';

/**
 * The commercial enquiry form: one set of fields, validation and submission, in three lengths.
 * - `enquire`: the full form on the Enquire page. Adds city, country and enquiry type; the device is required.
 * - `compact`: the Home enquiry section. Contact details, an optional device and a message.
 * - `product`: a product page. The full form, with the device fixed to that product.
 */
export type EnquiryFormVariant = 'enquire' | 'compact' | 'product';

/** Device option for several devices or a visitor who hasn't decided. */
const PORTFOLIO_VALUE = 'portfolio';

type EnquiryFormProps = {
  /** Device slug to start with, already checked against the catalogue. Ignored by `product`. */
  initialDevice?: string;
  /** Enquiry type to start with. Ignored by `compact`, which has no enquiry type. */
  initialEnquiryType?: EnquiryTypeId;
  /** Content rendered above the fields, inside the form. */
  header?: ReactNode;
  className?: string;
} & ({ variant: 'product'; product: Product } | { variant: 'enquire' | 'compact'; product?: undefined });

type FieldName =
  | 'name'
  | 'email'
  | 'phone'
  | 'organization'
  | 'city'
  | 'country'
  | 'device'
  | 'enquiryType'
  | 'message';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type ControlEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export function EnquiryForm({
  variant,
  product,
  initialDevice,
  initialEnquiryType,
  header,
  className,
}: EnquiryFormProps) {
  const id = useId();
  const isCompact = variant === 'compact';
  /** City, country and enquiry type: the full form only (Enquire and product pages). */
  const isFull = !isCompact;

  const initialValues: Record<FieldName, string> = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    city: '',
    country: '',
    device: product?.slug ?? initialDevice ?? '',
    enquiryType: (isFull && initialEnquiryType) || '',
    message: '',
  };

  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>('idle');
  const { errors, validate, handleChange, clearErrors } = useFieldErrors();
  const pending = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so it is announced and keyboard users aren't left on a removed button.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const fieldId = (name: FieldName) => `${id}-${name}`;

  /** Shared props for a control: identity, value, change handler and error wiring. */
  const control = (name: FieldName, hasHint = false) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: (event: ControlEvent) => setValues((current) => ({ ...current, [name]: event.target.value })),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': describedBy(fieldId(name), hasHint, errors[name]),
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current || !validate(event.currentTarget)) return;

    pending.current = true;
    setStatus('submitting');
    const city = values.city.trim();
    const country = values.country.trim();
    try {
      await submitEnquiry({
        formType: 'enquiry',
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        clinic: values.organization.trim(),
        location: isFull ? `${city}, ${country}` : undefined,
        city: isFull ? city : undefined,
        country: isFull ? country : undefined,
        device: values.device || undefined,
        enquiryType: isFull ? (values.enquiryType as EnquiryTypeId) : undefined,
        message: values.message.trim() || undefined,
        source: product ? `product:${product.slug}` : variant,
      });
      setStatus('success');
    } catch {
      // Entered values are kept so the visitor can simply try again.
      setStatus('error');
    } finally {
      pending.current = false;
    }
  }

  const startOver = () => {
    setValues(initialValues);
    clearErrors();
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div ref={successRef} className={cx(styles.success, className)} role="status" tabIndex={-1}>
        <span className={styles.successIcon}>
          <Icon name="check" size={36} />
        </span>
        <p className={styles.successTitle}>Enquiry Sent</p>
        <p className={styles.successText}>
          Thank you. Your enquiry{product ? ` about ${product.name}` : ''} has been sent to the MDX360 team, who will
          reply by email or phone.
        </p>
        <button type="button" className={styles.startOver} onClick={startOver}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';
  const legend = (index: number, title: string) => (
    <legend className={styles.legend}>
      <span className={styles.legendIndex} aria-hidden="true">
        {String(index).padStart(2, '0')}
      </span>{' '}
      {title}
    </legend>
  );

  return (
    <form
      className={cx(styles.form, className)}
      onSubmit={handleSubmit}
      onChange={handleChange}
      noValidate
      aria-busy={submitting || undefined}
    >
      {header}

      <fieldset className={styles.group}>
        {legend(1, 'Your details')}
        <div className={styles.grid}>
          <Field label="Full Name" htmlFor={fieldId('name')} required error={errors.name}>
            <input
              {...control('name')}
              className={styles.input}
              placeholder="Dr. Sarah Al-Mansoor"
              autoComplete="name"
              required
            />
          </Field>
          <Field label="Work Email" htmlFor={fieldId('email')} required error={errors.email}>
            <input
              {...control('email')}
              className={styles.input}
              type="email"
              placeholder="sarah@apexderma.ae"
              autoComplete="email"
              required
            />
          </Field>
          <Field label="Phone / WhatsApp" htmlFor={fieldId('phone')} required hint={PHONE_HINT} error={errors.phone}>
            <PhoneInput {...control('phone', true)} className={styles.input} required />
          </Field>
          <Field label="Clinic, Hospital or Company" htmlFor={fieldId('organization')} required error={errors.organization}>
            <input
              {...control('organization')}
              className={styles.input}
              placeholder="Apex Derma Center"
              autoComplete="organization"
              required
            />
          </Field>
        </div>
      </fieldset>

      {isFull && (
        <fieldset className={styles.group}>
          {legend(2, 'Your location')}
          <div className={styles.grid}>
            <Field label="City" htmlFor={fieldId('city')} required error={errors.city}>
              <input
                {...control('city')}
                className={styles.input}
                placeholder="Dubai"
                autoComplete="address-level2"
                required
              />
            </Field>
            <Field label="Country" htmlFor={fieldId('country')} required error={errors.country}>
              <input
                {...control('country')}
                className={styles.input}
                placeholder="United Arab Emirates"
                autoComplete="country-name"
                required
              />
            </Field>
          </div>
        </fieldset>
      )}

      <fieldset className={styles.group}>
        {legend(isFull ? 3 : 2, 'Your enquiry')}
        <div className={styles.grid}>
          {product ? (
            <div className={styles.field}>
              <span className={styles.label}>Device of Interest</span>
              <p className={styles.fixedDevice}>
                {product.name}
                <span className={styles.fixedDeviceNote}>{product.enquiryLabel}</span>
              </p>
            </div>
          ) : (
            <Field
              label="Device of Interest"
              htmlFor={fieldId('device')}
              required={!isCompact}
              optional={isCompact}
              full={isCompact}
              error={errors.device}
            >
              <select
                {...control('device')}
                className={cx(styles.select, !values.device && styles.selectEmpty)}
                required={!isCompact}
              >
                <option value="" disabled={!isCompact}>
                  Select a device
                </option>
                {products.map((option) => (
                  <option key={option.slug} value={option.slug}>
                    {option.name} ({option.enquiryLabel})
                  </option>
                ))}
                <option value={PORTFOLIO_VALUE}>Several devices / Not sure yet</option>
              </select>
              <Chevron />
            </Field>
          )}

          {isFull && (
            <Field label="Enquiry Type" htmlFor={fieldId('enquiryType')} required error={errors.enquiryType}>
              <select
                {...control('enquiryType')}
                className={cx(styles.select, !values.enquiryType && styles.selectEmpty)}
                required
              >
                <option value="" disabled>
                  Select an enquiry type
                </option>
                {enquiryTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
              <Chevron />
            </Field>
          )}

          <Field label="Message" htmlFor={fieldId('message')} optional full error={errors.message}>
            <textarea
              {...control('message')}
              className={styles.textarea}
              rows={3}
              placeholder="Quantities, preferred configuration, timing, or any questions about the device..."
            />
          </Field>
        </div>
      </fieldset>

      {status === 'error' && (
        <p className={styles.formError} role="alert">
          We couldn&apos;t send your enquiry. Please try again or contact us directly by phone or email.
        </p>
      )}

      <ArrowFillButton
        type="submit"
        btnText={submitting ? 'Sending Enquiry…' : 'Send Enquiry'}
        fillColor="#2d3038"
        hoverTextColor="#ffffff"
        circleColor="#2d3038"
        hoverCircleColor="#ffffff"
        arrowColor="#ffffff"
        hoverArrowColor="#0dc2ff"
        disabled={submitting}
        className={styles.submit}
      />
      <p className={styles.requiredNote}>
        <span className={styles.required} aria-hidden="true">
          *
        </span>{' '}
        Required fields
      </p>

      {isCompact && (
        <p className={styles.fullForm}>
          Need a quotation for several devices or distribution terms?{' '}
          <Link to={routes.enquire} className={styles.fullFormLink}>
            Use the full enquiry form
            <ArrowIcon />
          </Link>
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  label: ReactNode;
  htmlFor: string;
  required?: boolean;
  /** Display-only "Optional" tag; does not affect validation. */
  optional?: boolean;
  /** Span both grid columns. */
  full?: boolean;
  /** Helper text under the control, read as part of its description (`<htmlFor>-hint`). */
  hint?: string;
  /** Validation message under the control (`<htmlFor>-error`). */
  error?: string;
  children: ReactNode;
}

/** Label + filled control wrapper, with optional helper text and error message. */
function Field({ label, htmlFor, required, optional, full, hint, error, children }: FieldProps) {
  return (
    <div className={cx(styles.field, full && styles.full)}>
      <label className={styles.label} htmlFor={htmlFor}>
        <span>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </span>
        {optional && (
          <>
            {' '}
            <span className={styles.optional}>Optional</span>
          </>
        )}
      </label>
      <div className={styles.control}>{children}</div>
      {hint && (
        <p id={`${htmlFor}-hint`} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={`${htmlFor}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}

function Chevron() {
  return (
    <svg
      className={styles.selectIcon}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 1.5l5 5 5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 6h15M11 1l5 5-5 5" />
    </svg>
  );
}
