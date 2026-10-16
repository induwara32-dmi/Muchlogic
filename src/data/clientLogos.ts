export interface ClientLogo {
  name: string;
  /** File name in src/assets/clients/ */
  logo: string;
  url?: string;
}

/**
 * TODO: add logos only for real clients who agreed to be listed.
 * The "Trusted by" strip stays hidden while this is empty.
 *
 * Example:
 * { name: 'Client name', logo: 'client-name.svg', url: 'https://example.lk' },
 */
export const clientLogos: ClientLogo[] = [];
