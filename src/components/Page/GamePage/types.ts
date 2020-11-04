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

interface HeadShot {
  alt: string;
  height: number;
  id: string;
  mimeType: string;
  type: string;
  url: string;
  width: 340;
}

interface SocialLink {
  callToAction: string;
  type: string;
  url: string;
}
