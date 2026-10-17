export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  /** File name in src/assets/team/ (e.g. 'name.webp') — optional; initials are shown without it */
  photo?: string;
  linkedin?: string;
  email?: string;
  phone?: {
    /** Shown on the page */
    display: string;
    /** E.164 for the tel: link, e.g. +94771234567 */
    e164: string;
  };
}

/**
 * Leadership on the About page, in display order. The section stays hidden while this is empty.
 * Empty or TODO values are not rendered (the matching icon button is hidden).
 */
export const team: TeamMember[] = [
  {
    name: 'Thisara C Prasanga',
    role: 'Co-founder', // TODO: add the second part of the title (e.g. "Co-founder & CTO")
    // bio: '', // TODO: one-line bio
    photo: 'thisara.webp',
    linkedin: 'https://www.linkedin.com/in/thisara-prasanga-55bb77321',
    email: 'thisarachathura1@gmail.com',
    phone: { display: '+94 78 205 9584', e164: '+94782059584' },
  },
  {
    name: 'Induwara Rajapaksha',
    role: 'Co-founder', // TODO: add the second part of the title (e.g. "Co-founder & CEO")
    // bio: '', // TODO: one-line bio
    photo: 'induwara-rajapaksha.webp',
    linkedin: 'https://www.linkedin.com/in/induwara-rajapaksha',
    email: 'dimuthuinduwara32@gmail.com',
    phone: { display: '+94 70 322 1584', e164: '+94703221584' },
  },
];
