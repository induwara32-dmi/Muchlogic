export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How long does a typical project take?',
    // TODO: confirm typical timelines
    answer:
      'It depends on the scope. A company website usually takes a few weeks, while custom software or a mobile app takes longer. After our discovery call we give you a timeline with clear milestones, so you always know what’s coming next.',
  },
  {
    question: 'How much does a project cost?',
    // TODO: confirm pricing approach
    answer:
      'Every project is different, so we quote after we understand what you need. You’ll get a written proposal with the scope, timeline and price before any work starts. If you have a budget in mind, tell us and we’ll suggest what fits.',
  },
  {
    question: 'Does MuchLogic POS work without internet?',
    answer:
      'Yes. MuchLogic POS is offline-first, so you can keep billing and managing stock when the connection drops. Book a demo and we’ll show you how it works in a shop like yours.',
  },
  {
    question: 'Do you provide support after launch?',
    // TODO: confirm support/maintenance terms
    answer:
      'Yes. We fix issues, keep your software up to date and add improvements as your business grows. We’ll agree a support arrangement that suits you before launch.',
  },
  {
    question: 'Can you work with our existing system?',
    answer:
      'Often, yes. We can extend, integrate with or gradually replace existing software. In the discovery call we look at what you have and recommend the simplest path forward.',
  },
];
