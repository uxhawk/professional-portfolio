export const SITE = {
  title: "David Hawkins | Product Design",
  description:
    "David Hawkins is a Principal Product Designer who creates end-to-end workflows and builds design systems.",
  url: "https://uxhawk.com",
  author: "David Hawkins",
  linkedin: "https://linkedin.com/in/uxhawk",
  /**
   * Formspree endpoint for the contact form.
   * Create a free form at https://formspree.io (deliver to uxhawk@gmail.com),
   * then replace YOUR_FORM_ID with the id from the form's endpoint URL.
   */
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects/" },
  { label: "Articles", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;
