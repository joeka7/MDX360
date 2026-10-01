export interface EnquiryPayload {
  name: string;
  clinic: string;
  email: string;
  phone: string;
  countryCode?: string;
  location?: string;
  timeline?: string;
  /** Product slug, or `portfolio` for multi-product enquiries. */
  device?: string;
  message?: string;
  consent?: boolean;
  /** Where on the site the enquiry was submitted from. */
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
