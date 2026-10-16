/** Our process — used identically on Home, About and Contact. */

export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description: 'We understand your business, your workflow and your real needs.',
  },
  {
    title: 'Plan & design',
    description: 'We agree the scope, choose the architecture and prototype the UI.',
  },
  {
    title: 'Build & launch',
    description: 'Agile development with regular demos and testing, then a smooth launch.',
  },
  {
    title: 'Support & grow',
    description: 'Maintenance, updates and improvements after launch.',
  },
];
