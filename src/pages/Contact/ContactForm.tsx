import { Fragment, useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PhoneInput } from '@/components/ui';
import { products } from '@/data/products';
import { contactTopics, routes } from '@/data/site';
import { describedBy, useFieldErrors } from '@/hooks/useFieldErrors';
import { submitEnquiry } from '@/services/enquiry';
import type { ContactTopicId } from '@/types/site';
import { cx } from '@/utils/cx';
import { PHONE_HINT } from '@/utils/phone';
import { ArrowIcon, ChevronIcon } from './icons';
import styles from './ContactForm.module.css';

/*
 * General Contact page form: questions, support, partnerships and media. Commercial enquiries
 * about devices are pointed to the Enquire page instead. It is sent through the same enquiry
 * service as the commercial forms, marked `formType: 'contact'`.
 */

type FieldName = 'name' | 'email' | 'phone' | 'organization' | 'topic' | 'device' | 'message';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type ControlEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const initialValues: Record<FieldName, string> = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  topic: '',
  device: '',
  message: '',
};

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>('idle');
  /** Bumped after a successful send to remount the fields (see below). */
  const [fieldsKey, setFieldsKey] = useState(0);
  const { errors, validate, handleChange, clearErrors } = useFieldErrors();
  const pending = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so it is announced.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const isSupport = values.topic === 'support';
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
    try {
      await submitEnquiry({
        formType: 'contact',
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || undefined,
        clinic: values.organization.trim() || undefined,
        topic: values.topic as ContactTopicId,
        device: isSupport && values.device ? values.device : undefined,
        message: values.message.trim(),
        source: 'contact',
      });
      setStatus('success');
      setValues(initialValues);
      clearErrors();
      setFieldsKey((key) => key + 1);
    } catch {
      // Entered values are kept so the visitor can simply try again.
      setStatus('error');
    } finally {
      pending.current = false;
    }
  }

  const submitting = status === 'submitting';

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={handleChange}
      noValidate
      aria-labelledby="form-title"
      aria-busy={submitting || undefined}
      data-reveal=""
    >
      <p className={styles.label}>General Enquiries</p>
      <h2 id="form-title" className={styles.title}>
        Send Us a Message
      </h2>
      <p className={styles.redirect}>
        Looking for pricing, a quotation or a demo?{' '}
        <Link to={routes.enquire} className={styles.redirectLink}>
          Enquire Now
          <ArrowIcon />
        </Link>
      </p>

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
            <Field label="Full Name" htmlFor={fieldId('name')} required error={errors.name}>
              <input
                {...control('name')}
                className={styles.input}
                placeholder="Dr. Sarah Al-Mansoor"
                autoComplete="name"
                required
              />
            </Field>
            <Field label="Email" htmlFor={fieldId('email')} required error={errors.email}>
              <input
                {...control('email')}
                className={styles.input}
                type="email"
                placeholder="sarah@apexderma.ae"
                autoComplete="email"
                required
              />
            </Field>
            <Field label="Phone / WhatsApp" htmlFor={fieldId('phone')} optional hint={PHONE_HINT} error={errors.phone}>
              <PhoneInput {...control('phone', true)} className={styles.input} />
            </Field>
            <Field label="Organization" htmlFor={fieldId('organization')} optional error={errors.organization}>
              <input
                {...control('organization')}
                className={styles.input}
                placeholder="Apex Derma Center"
                autoComplete="organization"
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>
            <span className={styles.legendNum}>02</span> Your message
          </legend>
          <div className={styles.grid}>
            <Field label="Topic" htmlFor={fieldId('topic')} required full={!isSupport} error={errors.topic}>
              <div className={styles.selectWrap}>
                <select
                  {...control('topic')}
                  className={cx(styles.select, !values.topic && styles.selectEmpty)}
                  required
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {contactTopics.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.label}
                    </option>
                  ))}
                </select>
                <ChevronIcon />
              </div>
            </Field>
            {isSupport && (
              <Field label="Device" htmlFor={fieldId('device')} optional error={errors.device}>
                <div className={styles.selectWrap}>
                  <select
                    {...control('device')}
                    className={cx(styles.select, !values.device && styles.selectEmpty)}
                  >
                    <option value="">Select your device</option>
                    {products.map((option) => (
                      <option key={option.slug} value={option.slug}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
              </Field>
            )}
            <Field label="Message" htmlFor={fieldId('message')} required full error={errors.message}>
              <textarea
                {...control('message')}
                className={styles.textarea}
                rows={4}
                placeholder="How can we help?"
                required
              />
            </Field>
          </div>
        </fieldset>
      </Fragment>

      {status === 'error' && (
        <div className={styles.error} role="alert">
          <p className={styles.feedbackText}>
            We couldn&apos;t send your message. Please try again or contact us directly by phone or email.
          </p>
        </div>
      )}

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting && <span className={styles.spinner} aria-hidden="true" />}
          {submitting ? 'Sending Message…' : 'Send Message'}
          {!submitting && <ArrowIcon />}
        </button>
        <small className={styles.requiredNote}>
          <span className={styles.required} aria-hidden="true">
            *
          </span>{' '}
          Required fields
        </small>
      </div>

      {status === 'success' && (
        <div ref={successRef} className={styles.success} role="status" tabIndex={-1}>
          <p className={styles.successTitle}>Message Sent</p>
          <p className={styles.feedbackText}>
            Thank you for getting in touch. A member of the MDX360 team will reply by email.
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
  /** Display-only "Optional" tag; does not affect validation. */
  optional?: boolean;
  /** Span both grid columns. */
  full?: boolean;
  /** Helper text under the control (`<htmlFor>-hint`). */
  hint?: string;
  /** Validation message under the control (`<htmlFor>-error`). */
  error?: string;
  children: ReactNode;
}

/** Label + underlined control, with optional helper text and error message. */
function Field({ label, htmlFor, required, optional, full, hint, error, children }: FieldProps) {
  return (
    <div className={cx(styles.field, full && styles.full)}>
      <label className={styles.fieldLabel} htmlFor={htmlFor}>
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
      {children}
      {hint && (
        <p id={`${htmlFor}-hint`} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={`${htmlFor}-error`} className={styles.fieldError}>
          {error}
        </p>
      )}
    </div>
  );
}
