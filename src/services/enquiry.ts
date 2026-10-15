import type { ContactTopicId, EnquiryTypeId } from '@/types/site';

export interface EnquiryPayload {
  /**
   * `enquiry`: commercial enquiry (Home, Enquire page, product pages).
   * `contact`: general message from the Contact page.
   */
  formType: 'enquiry' | 'contact';
  name: string;
  email: string;
  /** Full international number as typed, country calling code included. Optional on contact messages. */
  phone?: string;
  /** Clinic, hospital or company. Optional on contact messages. */
  clinic?: string;
  /** "City, Country" (also sent separately as `city` and `country`). */
  location?: string;
  city?: string;
  country?: string;
  /** Product slug, or `portfolio` for several devices / not sure yet. */
  device?: string;
  enquiryType?: EnquiryTypeId;
  topic?: ContactTopicId;
  message?: string;
  /** Where on the site it was submitted from: `enquire`, `compact` (Home), `product:<slug>` or `contact`. */
  source: string;
}

const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;

/**
 * Sends an enquiry to the configured endpoint (`VITE_ENQUIRY_ENDPOINT`).
 * Without an endpoint (local development) the request is simulated.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  if (!endpoint) {
    if (import.meta.env.DEV) console.info('[enquiry] No VITE_ENQUIRY_ENDPOINT set; simulating submission', payload);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Enquiry submission failed with status ${response.status}`);
  }
}
