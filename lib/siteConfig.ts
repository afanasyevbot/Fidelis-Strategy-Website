export const siteConfig = {
  name: "Fidelis Strategy",
  tagline: "Faithful. Loyal. Trustworthy.",
  url: "https://fidelisstrategy.net",

  // Contact
  email: "mafanasiev@fidelisstrategy.net",
  phone: "651-468-1408",
  linkedinUrl: "https://www.linkedin.com/in/matthewafanasiev/",
  bookingUrl: "https://calendly.com/mafanasiev-fidelisstrategy/30min",

  // Analytics | replace with real GA4 measurement ID when ready
  gaId: "G-YTNMFSRD8L",

  // Web3Forms access key | powers the checklist + contact forms on this
  // static site (no server). Safe to expose publicly. Get yours free at
  // web3forms.com. Until this is set, forms fall back to opening a mail client.
  web3formsKey: "2591fd46-1309-4746-afa8-94474da37113",

  nav: [
    { label: "How I Help", href: "/what-we-build/" },
    { label: "Process", href: "/process/" },
    { label: "Work", href: "/case-studies/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ] as Array<{ label: string; href: string; external?: boolean; secondary?: boolean }>,

  primaryCta: {
    label: "Find where AI could help",
    href: "/brief/",
    mobileLabel: "Get started",
    mobileAriaLabel: "Get started: find where AI could help",
  },

  secondaryCta: {
    label: "See the work",
    href: "/case-studies/",
  },

  footerDescription:
    "Growth strategy, AI implementation, and custom systems built around your business. Work directly with Matthew from discovery through the agreed implementation and next improvements.",
};
