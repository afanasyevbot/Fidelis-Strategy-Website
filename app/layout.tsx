import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fidelis Strategy — We build what they can't.",
  description:
    "Strategy, AI systems, custom apps — grown for your business. Custom lead-enrichment pipelines, AI outreach agents, internal tools, operator dashboards.",
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasRealGaId = siteConfig.gaId && !siteConfig.gaId.includes("X");
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bone text-ink font-sans antialiased">
        {children}
        {hasRealGaId ? <GoogleAnalytics gaId={siteConfig.gaId} /> : null}
      </body>
    </html>
  );
}
