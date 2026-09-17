import type { Metadata } from "next";
import { Suspense } from "react";
import { BriefWizard } from "@/components/brief-wizard";
import { pageDescriptions, pageTitles } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitles.brief,
  description: pageDescriptions.brief,
  alternates: { canonical: "/brief/" },
};

export default function BriefPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-forest-floor" />}>
      <BriefWizard />
    </Suspense>
  );
}
