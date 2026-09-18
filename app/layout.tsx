import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cinzel } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/lib/siteConfig";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import "./globals.css";
import { SitePolish } from "@/components/site-polish";

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
    default: `${pageTitles.home} — Fidelis Strategy`,
    template: "%s — Fidelis Strategy",
  },
  description: pageDescriptions.home,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico?v=3",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Fidelis Strategy",
    title: `${pageTitles.home} — Fidelis Strategy`,
    description: pageDescriptions.home,
    url: siteConfig.url,
    locale: "en_US",
    // OG image is generated at build time by app/opengraph-image.tsx — Next auto-attaches it.
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitles.home} — Fidelis Strategy`,
    description: pageDescriptions.home,
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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthew Afanasiev",
    jobTitle: "Founder, Fidelis Strategy",
    url: `${siteConfig.url}/about/`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.linkedinUrl],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description:
      "Founder of Fidelis Strategy. Growth strategy, operational discovery, and hands-on AI and systems implementation for businesses.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${cinzel.variable}`}>
      <body className="bg-bone text-ink font-sans antialiased" data-polish>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SitePolish />
        {children}
        {hasRealGaId ? <GoogleAnalytics gaId={siteConfig.gaId} /> : null}
      </body>
    </html>
  );
}
