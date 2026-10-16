export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  /** File name in src/assets/team/ (e.g. 'name.webp') — optional; initials are shown without it */
  photo?: string;
  linkedin?: string;
}

/**
 * Leadership on the About page. The section stays hidden while this is empty.
 *
 * Example:
 * {
 *   name: 'Full name',
 *   role: 'Co-founder & CTO',
 *   bio: 'One or two sentences.',
 *   photo: 'full-name.webp',
 *   linkedin: 'https://www.linkedin.com/in/...',
 * },
 */
export const team: TeamMember[] = [
  {
    name: 'Induwara Rajapaksha',
    role: 'Co-founder', // TODO: add the second part of the title (e.g. "Co-founder & CEO")
    // bio: '', // TODO: one-line bio
    // photo: 'induwara.webp', // TODO: add photo to src/assets/team/
    linkedin: 'https://www.linkedin.com/in/induwara-rajapaksha-249a65333',
  },
  // TODO: add the second co-founder (name, role, bio, LinkedIn, photo)
];
