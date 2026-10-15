export interface NavLink {
  label: string;
  to: string;
}

/** Commercial purpose chosen on the full enquiry form; sent as `enquiryType`. */
export type EnquiryTypeId = 'pricing' | 'information' | 'demonstration' | 'distribution';

/** Subject of a general Contact page message; sent as `topic`. */
export type ContactTopicId = 'general' | 'support' | 'partnership' | 'other';

export interface FormOption<Id extends string> {
  id: Id;
  label: string;
}

export type SocialPlatform = 'linkedin' | 'instagram' | 'facebook' | 'x';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Profile URL. Leave empty until the real URL is known; empty entries are not rendered. */
  href: string;
}
