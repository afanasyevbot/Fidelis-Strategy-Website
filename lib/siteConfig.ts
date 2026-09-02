export const siteConfig = {
  name: "Fidelis Strategy",
  tagline: "Faithful. Loyal. Trustworthy.",
  url: "https://fidelisstrategy.net",

  // Contact
  email: "mafanasiev@fidelisstrategy.net",
  phone: "651-468-1408",
  linkedinUrl: "https://www.linkedin.com/in/matthewafanasiev/",
  bookingUrl: "https://calendly.com/mafanasiev-fidelisstrategy/30min",

  // Analytics — replace with real GA4 measurement ID when ready
  gaId: "G-YTNMFSRD8L",

  // Web3Forms access key — powers the checklist + contact forms on this
  // static site (no server). Safe to expose publicly. Get yours free at
  // web3forms.com. Until this is set, forms fall back to opening a mail client.
  web3formsKey: "2591fd46-1309-4746-afa8-94474da37113",

  // Pricing band — INTERNAL reference only. Hidden from public site
  // to preserve anchor flexibility per-deal. Do not surface in copy.
  pricingBand: "Engagements typically $25K – $150K · 30–90 day delivery",

  // Proof line — promoted from case study, shown in hero/footer.
  heroProof: "+30% referral pipeline. +$2M projected revenue. Built for Paradise Capital.",

  nav: [
    { label: "Process",        href: "/process" },
    { label: "What We Build", href: "/what-we-build" },
    { label: "About",         href: "/about" },
    { label: "Case Studies",  href: "/case-studies" },
    { label: "Contact",       href: "/contact" },
    { label: "Pulse",         href: "/pulse", secondary: true },
  ] as Array<{ label: string; href: string; external?: boolean; secondary?: boolean }>,
};
