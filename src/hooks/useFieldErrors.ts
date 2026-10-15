import { useState, type FormEvent } from 'react';

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function isNamedControl(element: EventTarget | Element | null): element is FormControl {
  return (
    (element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement) &&
    element.name !== ''
  );
}

/** `aria-describedby` for a control whose hint and error use the ids `<id>-hint` and `<id>-error`. */
export function describedBy(id: string, hasHint: boolean, error: string | undefined) {
  return [hasHint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
}

/**
 * Inline field errors driven by the browser's own constraint validation (`required`, `type`,
 * custom validity), keyed by each control's `name`. Messages appear when the visitor submits;
 * after that, an erroring field updates as it is edited. Forms using this set `noValidate` so the
 * browser's own bubbles don't show as well.
 */
export function useFieldErrors() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  /** Checks every named control, shows their messages and focuses the first invalid one. */
  const validate = (form: HTMLFormElement) => {
    const next: Record<string, string> = {};
    let firstInvalid: FormControl | undefined;
    for (const element of Array.from(form.elements)) {
      if (!isNamedControl(element) || element.validity.valid) continue;
      next[element.name] = element.validationMessage;
      firstInvalid ??= element;
    }
    setErrors(next);
    firstInvalid?.focus();
    return !firstInvalid;
  };

  /** Form-level `onChange`: re-checks an edited control that is currently showing an error. */
  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const control = event.target;
    if (!isNamedControl(control)) return;
    const { name, validity, validationMessage } = control;
    const valid = validity.valid;
    setErrors((current) => {
      if (!(name in current)) return current;
      const next = { ...current };
      if (valid) delete next[name];
      else next[name] = validationMessage;
      return next;
    });
  };

  const clearErrors = () => setErrors({});

  return { errors, validate, handleChange, clearErrors };
}
