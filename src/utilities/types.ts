/**
 * Data model of an Employee after fetching from api
 */
export interface Employee {
  firstName: string;
  headShot: HeadShot;
  id: string;
  jobTitle: string;
  lastName: string;
  slug: string;
  socialLinks: SocialLink[];
  type: string;
}

/**
 * Data model of a HeadShot of an Employee after
 * fetching from api
 */
export interface HeadShot {
  alt: string;
  height: number;
  id: string;
  mimeType: string;
  type: string;
  url: string;
  width: number;
}

/**
 * Data model of a Social Link from an Employee's
 * list of social links after fetching from api
 */
export interface SocialLink {
  callToAction: string;
  type: string;
  url: string;
}
