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

export interface HeadShot {
  alt: string;
  height: number;
  id: string;
  mimeType: string;
  type: string;
  url: string;
  width: number;
}

export interface SocialLink {
  callToAction: string;
  type: string;
  url: string;
}
