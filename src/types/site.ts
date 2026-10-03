export interface NavLink {
  label: string;
  to: string;
}

export interface CountryCode {
  code: string;
  label: string;
}

export type SocialPlatform = 'linkedin' | 'instagram' | 'facebook' | 'x';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Profile URL. Leave empty until the real URL is known; empty entries are not rendered. */
  href: string;
}
