export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Case study (or other page) the company name links to */
  projectHref?: string;
  /**
   * Only approved testimonials are shown. Set to true once the client has confirmed the
   * exact wording and agreed to be quoted.
   */
  approved: boolean;
}

/**
 * Client testimonials for the Home page. The section stays hidden while none are approved.
 * TODO: switch each `approved` to true after the client confirms their quote.
 */
export const testimonials: Testimonial[] = [
  {
    name: 'Dineth Pabasara',
    role: 'CEO',
    company: 'Designkoolama Pvt Ltd',
    projectHref: '/work/designkoolama',
    quote:
      'As a design agency, our own website had to look as good as the work we show. MuchLogic rebuilt it from the ground up, kept every detail of our style, and made it noticeably faster. Clients now reach us on WhatsApp straight from our portfolio.',
    approved: false, // TODO: confirm with client
  },
  {
    name: 'Rawindu Rashan',
    role: 'Owner',
    company: 'Wikrama Super City',
    projectHref: '/work/muchlogic-pos',
    quote:
      'Our wholesale counter gets very busy, and billing used to slow everything down. With MuchLogic’s POS system, bills are quick, stock updates on its own, and it keeps working even when the internet drops. They set it up around how we actually sell.',
    approved: false, // TODO: confirm with client
  },
  {
    name: 'Shanusha Aththanayaka',
    role: 'Owner',
    company: 'Shanu Ceylon Tours',
    projectHref: '/work/shanu-ceylon-tours',
    quote:
      'I wanted a website that travellers would trust at first glance. MuchLogic understood what my tour business needed, explained every step in simple terms, and delivered a site I’m proud to share with guests from around the world.',
    approved: false, // TODO: confirm with client
  },
  {
    name: 'Chamath Perera',
    role: 'Owner',
    company: 'I Mart Solutions',
    projectHref: '/work/muchlogic-pos',
    quote:
      'A computer shop means hundreds of small items and accessories. The POS system makes finding and billing any of them easy, and the daily reports show exactly where we stand. What I value most is the support: whenever we have a question, they answer quickly.',
    approved: false, // TODO: confirm with client
  },
];

/** The testimonials that may be shown */
export const approvedTestimonials = testimonials.filter((t) => t.approved);
