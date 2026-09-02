import type { Metadata } from "next";
import { RedirectToBrief } from "@/components/redirect-to-brief";

export const metadata: Metadata = {
  title: "First System Brief",
  robots: { index: false, follow: false },
  alternates: { canonical: "/brief" },
};

export default function Page() {
  return <RedirectToBrief />;
}
