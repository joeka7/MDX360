/** Helper text shown under every phone field. */
export const PHONE_HINT = 'Include your country code, e.g. +44 for the UK.';

/** Example shown as the phone field's placeholder. */
export const PHONE_PLACEHOLDER = '+971 50 123 4567';

const PHONE_CHARACTERS = /^\+?[\d\s().-]+$/;

/**
 * Validation message for an international phone number, or '' when it is acceptable. An empty
 * value is left to `required`. Accepts any country: digits with an optional leading `+` (or `00`)
 * and common separators, 7 to 15 digits long (the international maximum).
 */
export function phoneNumberError(value: string): string {
  const number = value.trim();
  if (!number) return '';
  if (!PHONE_CHARACTERS.test(number)) {
    return 'Use digits, spaces and an optional leading +, e.g. +971 50 123 4567.';
  }
  const digits = number.replace(/\D/g, '').replace(/^00/, '');
  if (digits.length < 7 || digits.length > 15) {
    return 'Enter the full number, including the country code (7 to 15 digits).';
  }
  return '';
}
