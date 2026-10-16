export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  /** File name in src/assets/team/ (e.g. 'name.webp') — optional */
  photo?: string;
  linkedin?: string;
}

/**
 * TODO: add the founders. The leadership section stays hidden while this is empty.
 *
 * Example:
 * {
 *   name: 'Full name',
 *   role: 'Co-founder',
 *   bio: 'One or two sentences.',
 *   photo: 'full-name.webp',
 *   linkedin: 'https://www.linkedin.com/in/...',
 * },
 */
export const team: TeamMember[] = [];
