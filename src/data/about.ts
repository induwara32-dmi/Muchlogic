/** Content for the About page. Keep claims honest and verifiable. */

export interface AboutCard {
  title: string;
  description: string;
  icon: 'zap' | 'lightbulb' | 'trending-up' | 'shield-check';
}

/** "Our mission" cards */
export const missionCards: AboutCard[] = [
  {
    title: 'Faster work',
    description: 'Software that removes busywork, so your team gets more done every day.',
    icon: 'zap',
  },
  {
    title: 'Smarter decisions',
    description: 'Clear reports and data that help you decide your next move.',
    icon: 'lightbulb',
  },
  {
    title: 'Room to grow',
    description: 'Scalable architecture that’s ready for your future goals.',
    icon: 'trending-up',
  },
  {
    title: 'Safe and reliable',
    description: 'Security best practices built in, and systems you can depend on.',
    icon: 'shield-check',
  },
];

export interface Reason {
  title: string;
  description: string;
}

/** "Why businesses choose MuchLogic" */
export const reasons: Reason[] = [
  {
    title: 'Clear goals',
    description: 'We agree what success looks like before we write any code.',
  },
  {
    title: 'Security first',
    description: 'Security best practices are built into everything we ship.',
  },
  {
    title: 'Visible progress',
    description: 'Regular demos, so you always know where your project stands.',
  },
  {
    title: 'One team',
    description: 'Planning, design, development and support, all in one place.',
  },
  {
    title: 'Support after launch',
    description: 'Maintenance, updates and improvements once you’re live.',
  },
  {
    title: 'Built for real use',
    description: 'Software designed around how your business actually works.',
  },
];
