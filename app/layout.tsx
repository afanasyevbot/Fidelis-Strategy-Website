import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cinzel } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fidelis Strategy — Grow the top line, with AI.",
    template: "%s · Fidelis Strategy",
  },
  description:
    "Growth strategy + AI execution for owner-operated businesses. We design the plan and build the AI-powered systems that run it — lead engines, outreach agents, operator dashboards.",
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Fidelis Strategy",
    title: "Fidelis Strategy — Grow the top line, with AI.",
    description:
      "Growth strategy + AI execution for owner-operated businesses. One partner, strategy through launch.",
    url: siteConfig.url,
    locale: "en_US",
    // OG image is generated at build time by app/opengraph-image.tsx — Next auto-attaches it.
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidelis Strategy — Grow the top line, with AI.",
    description:
      "Growth strategy + AI execution for owner-operated businesses. One partner, strategy through launch.",
    // Twitter image is generated at build time by app/twitter-image.tsx — Next auto-attaches it.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasRealGaId = siteConfig.gaId && !siteConfig.gaId.includes("X");

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og-image.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.linkedinUrl],
    description:
      "Growth strategy + AI execution for owner-operated businesses. We design growth plans and build the AI-powered systems that drive revenue.",
    founder: {
      "@type": "Person",
      name: "Matthew Afanasiev",
      jobTitle: "Founder",
      url: `${siteConfig.url}/about`,
      sameAs: [siteConfig.linkedinUrl],
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthew Afanasiev",
    jobTitle: "Founder, Fidelis Strategy",
    url: `${siteConfig.url}/about`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.linkedinUrl],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description:
      "Growth strategy + AI consultant. SaaS sales and operations background; designs and builds AI-powered growth systems for owner-operated businesses.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${cinzel.variable}`}>
      <body className="bg-bone text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        {hasRealGaId ? <GoogleAnalytics gaId={siteConfig.gaId} /> : null}
      </body>
    </html>
  );
}
