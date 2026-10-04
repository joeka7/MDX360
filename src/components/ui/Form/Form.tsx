import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import type { IconName } from '@/types/product';
import { cx } from '@/utils/cx';
import { Icon } from '../Icon/Icon';
import styles from './Form.module.css';

interface FieldProps {
  label: ReactNode;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

/** Label + control wrapper. */
export function Field({ label, htmlFor, required, children, className }: FieldProps) {
  return (
    <div className={cx(styles.field, className)}>
      <label className={styles.label} htmlFor={htmlFor}>
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

type InputProps = InputHTMLAttributes<HTMLInputElement> & { icon?: IconName };

export function Input({ icon, className, ...props }: InputProps) {
  if (!icon) return <input className={cx(styles.control, className)} {...props} />;
  return (
    <div className={styles.controlGroup}>
      <Icon name={icon} size={18} className={styles.leadingIcon} />
      <input className={cx(styles.control, styles.controlWithIcon, className)} {...props} />
    </div>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { icon?: IconName };

export function Select({ icon, className, children, ...props }: SelectProps) {
  return (
    <div className={styles.controlGroup}>
      {icon && <Icon name={icon} size={18} className={styles.leadingIcon} />}
      <select className={cx(styles.control, styles.select, icon && styles.controlWithIcon, className)} {...props}>
        {children}
      </select>
      <Icon name="expand_more" size={18} className={styles.trailingIcon} />
    </div>
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cx(styles.control, styles.textarea, className)} {...props} />;
}

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: ReactNode };

export function Checkbox({ label, id, className, ...props }: CheckboxProps) {
  return (
    <div className={cx(styles.checkboxRow, className)}>
      <input type="checkbox" id={id} className={styles.checkbox} {...props} />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
}
